"use client";



import StudioEditor from "@/components/studio/StudioEditor";

import StudioLogoutButton from "@/components/studio/StudioLogoutButton";

import styles from "@/app/studio/studio.module.css";

import {

  createStudioPostApi,

  deleteStudioPostApi,

  fetchStudioPost,

  fetchStudioPosts,

  postDetailToDraft,

  updateStudioPostApi,

  type StudioPostWritePayload,

} from "@/lib/studio/client";

import { slugify } from "@/lib/studio/slugify";

import {

  EMPTY_DRAFT,

  type SaveStatus,

  type StudioPostDraft,

  type StudioPostListItem,

} from "@/lib/studio/types";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";



function buildSavePayload(

  draft: StudioPostDraft,

  status?: StudioPostDraft["status"],

): StudioPostWritePayload {

  const title = draft.title.trim() || "Untitled";

  const content = draft.content;

  const slug = draft.slug.trim() || slugify(title);



  return {

    title,

    slug,

    content,

    excerpt: draft.excerpt.trim(),

    category: draft.category.trim(),

    tags: draft.tags

      .split(",")

      .map((tag) => tag.trim())

      .filter(Boolean),

    cover_image: draft.coverImage.trim(),

    meta_title: draft.seoTitle.trim(),

    meta_description: draft.seoDescription.trim(),

    status: status ?? draft.status,

  };

}



export default function StudioShell({
  initialPosts,
}: {
  initialPosts: StudioPostListItem[];
}) {

  const [posts, setPosts] = useState<StudioPostListItem[]>(initialPosts);

  const [activePostId, setActivePostId] = useState<string | null>(null);

  const [draft, setDraft] = useState<StudioPostDraft>(EMPTY_DRAFT);

  const [saveStatus, setSaveStatus] = useState<SaveStatus>("ready");

  const [toast, setToast] = useState<string | null>(null);

  const [isLoadingPost, setIsLoadingPost] = useState(false);

  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const skipAutoSaveRef = useRef(true);

  const saveInFlightRef = useRef(false);



  const isPublished = draft.status === "published";

  const editorKey = activePostId ?? "new";



  const showToast = useCallback((message: string) => {

    setToast(message);

    if (toastTimerRef.current) {

      clearTimeout(toastTimerRef.current);

    }

    toastTimerRef.current = setTimeout(() => {

      setToast(null);

    }, 2800);

  }, []);



  const refreshPosts = useCallback(async () => {

    try {

      const nextPosts = await fetchStudioPosts();

      setPosts(nextPosts);

    } catch (error) {

      showToast(error instanceof Error ? error.message : "Could not load posts.");

    }

  }, [showToast]);



  const persistDraft = useCallback(

    async (

      sourceDraft: StudioPostDraft,

      status?: StudioPostDraft["status"],

      manual = false,

    ) => {

      if (saveInFlightRef.current) {

        return;

      }



      const payload = buildSavePayload(sourceDraft, status);

      saveInFlightRef.current = true;

      setSaveStatus("saving");



      try {

        const savedPost = sourceDraft.id

          ? await updateStudioPostApi(sourceDraft.id, payload)

          : await createStudioPostApi(payload);



        const nextDraft = postDetailToDraft(savedPost);

        skipAutoSaveRef.current = true;

        setDraft(nextDraft);

        setActivePostId(savedPost.id);

        await refreshPosts();

        setSaveStatus("saved");



        if (status) {

          showToast(status === "published" ? "Published ✓" : "Saved ✓");

        } else if (manual) {

          showToast("Saved ✓");

        }

      } catch (error) {

        setSaveStatus("ready");

        showToast(error instanceof Error ? error.message : "Save failed.");

      } finally {

        saveInFlightRef.current = false;

        window.setTimeout(() => {

          skipAutoSaveRef.current = false;

        }, 0);

      }

    },

    [refreshPosts, showToast],

  );



  useEffect(() => {

    if (skipAutoSaveRef.current || isLoadingPost) {

      return;

    }



    const hasContent =

      Boolean(draft.id) ||

      draft.title.trim().length > 0 ||

      draft.content.trim().length > 0;

    if (!hasContent) {

      return;

    }



    if (saveTimerRef.current) {

      clearTimeout(saveTimerRef.current);

    }



    saveTimerRef.current = setTimeout(() => {

      void persistDraft(draft, undefined, false);

    }, 3000);



    return () => {

      if (saveTimerRef.current) {

        clearTimeout(saveTimerRef.current);

      }

    };

  }, [draft, isLoadingPost, persistDraft]);



  useEffect(() => {

    return () => {

      if (toastTimerRef.current) {

        clearTimeout(toastTimerRef.current);

      }

    };

  }, []);



  function updateDraft<K extends keyof StudioPostDraft>(key: K, value: StudioPostDraft[K]) {

    skipAutoSaveRef.current = false;

    setSaveStatus("ready");

    setDraft((current) => {

      const next = { ...current, [key]: value };

      if (key === "title" && !current.id) {

        next.slug = slugify(String(value));

      }

      return next;

    });

  }



  function handleNewPost() {

    skipAutoSaveRef.current = true;

    setActivePostId(null);

    setDraft(EMPTY_DRAFT);

    setSaveStatus("ready");

    window.setTimeout(() => {

      skipAutoSaveRef.current = false;

    }, 0);

  }



  async function handleSelectPost(postId: string) {

    setIsLoadingPost(true);

    skipAutoSaveRef.current = true;



    try {

      const post = await fetchStudioPost(postId);

      setActivePostId(post.id);

      setDraft(postDetailToDraft(post));

      setSaveStatus("ready");

    } catch (error) {

      showToast(error instanceof Error ? error.message : "Could not load post.");

    } finally {

      setIsLoadingPost(false);

      window.setTimeout(() => {

        skipAutoSaveRef.current = false;

      }, 0);

    }

  }



  function handlePreview() {

    const slug = draft.slug.trim();

    if (slug) {

      window.open(`/blog/${slug}`, "_blank", "noopener,noreferrer");

      return;

    }

    showToast("Set a slug to preview.");

  }



  async function handleDelete() {

    if (!draft.id) {

      return;

    }

    if (!window.confirm("Delete this post permanently?")) {

      return;

    }



    try {

      await deleteStudioPostApi(draft.id);

      handleNewPost();

      await refreshPosts();

      showToast("Post deleted.");

    } catch (error) {

      showToast(error instanceof Error ? error.message : "Delete failed.");

    }

  }



  const statusLabel = useMemo(() => {

    if (saveStatus === "saved") {

      return "Saved";

    }

    if (saveStatus === "saving") {

      return "Saving…";

    }

    return "Ready";

  }, [saveStatus]);



  return (

    <div className={styles.studioApp}>

      <header className={styles.studioTopbar}>

        <div className={styles.topbarLeft}>

          <span className={styles.studioBrand}>Studio</span>

          <div className={styles.topbarStatus}>

            <span

              className={`${styles.statusDot}${

                saveStatus === "saved"

                  ? ` ${styles.statusDotSaved}`

                  : saveStatus === "saving"

                    ? ` ${styles.statusDotSaving}`

                    : ""

              }`}

              aria-hidden="true"

            />

            <span>{statusLabel}</span>

          </div>

        </div>

        <div className={styles.topbarActions}>

          <button type="button" className={styles.btnOutline} onClick={handlePreview}>

            Preview

          </button>

          <button

            type="button"

            className={styles.btnOutline}

            onClick={() => void persistDraft(draft, "draft", true)}

          >

            Save Draft

          </button>

          {isPublished ? (

            <button

              type="button"

              className={styles.btnUnpublish}

              onClick={() => void persistDraft(draft, "draft", true)}

            >

              Unpublish

            </button>

          ) : (

            <button

              type="button"

              className={styles.btnPublish}

              onClick={() => void persistDraft(draft, "published", true)}

            >

              Publish

            </button>

          )}

          <StudioLogoutButton />

        </div>

      </header>



      <div className={styles.studioMain}>

        <aside className={styles.studioSidebar}>

          <div className={styles.sidebarHeader}>

            <span className={styles.sidebarTitle}>Posts</span>

            <button type="button" className={styles.btnNew} onClick={handleNewPost}>

              + New

            </button>

          </div>

          <div className={styles.postList}>

            {posts.length === 0 ? (

              <p className={styles.postListEmpty}>No posts yet — create one with + New.</p>

            ) : (

              posts.map((post) => (

                <button

                  key={post.id}

                  type="button"

                  className={`${styles.postListItem}${

                    activePostId === post.id ? ` ${styles.postListItemActive}` : ""

                  }`}

                  onClick={() => void handleSelectPost(post.id)}

                >

                  <div className={styles.pliTitle}>{post.title || "Untitled"}</div>

                  <div className={styles.pliMeta}>

                    <span

                      className={`${styles.pliStatus} ${

                        post.status === "published"

                          ? styles.pliStatusPublished

                          : styles.pliStatusDraft

                      }`}

                    >

                      {post.status}

                    </span>

                    <span>{post.category ?? ""}</span>

                  </div>

                </button>

              ))

            )}

          </div>

        </aside>



        <div className={styles.studioEditorWrap}>

          <div className={styles.editorMetaFields}>

            <div className={styles.metaRow}>

              <div className={styles.metaField}>

                <label htmlFor="meta-category">Category</label>

                <input

                  id="meta-category"

                  type="text"

                  className={styles.metaInput}

                  placeholder="e.g. Architecture"

                  value={draft.category}

                  onChange={(event) => updateDraft("category", event.target.value)}

                />

              </div>

              <div className={styles.metaField}>

                <label htmlFor="meta-tags">Tags (comma separated)</label>

                <input

                  id="meta-tags"

                  type="text"

                  className={styles.metaInput}

                  placeholder="e.g. Laravel, API, Backend"

                  value={draft.tags}

                  onChange={(event) => updateDraft("tags", event.target.value)}

                />

              </div>

            </div>

            <div className={styles.metaRow}>

              <div className={`${styles.metaField} ${styles.metaFieldFull}`}>

                <label htmlFor="meta-excerpt">Excerpt / Subtitle</label>

                <input

                  id="meta-excerpt"

                  type="text"

                  className={styles.metaInput}

                  placeholder="A short compelling summary..."

                  value={draft.excerpt}

                  onChange={(event) => updateDraft("excerpt", event.target.value)}

                />

              </div>

            </div>

          </div>



          <input

            type="text"

            className={styles.titleInput}

            placeholder="Title..."

            value={draft.title}

            onChange={(event) => updateDraft("title", event.target.value)}

          />



          <StudioEditor

            key={editorKey}

            content={draft.content}

            onChange={(html) => updateDraft("content", html)}

          />

        </div>



        <aside className={styles.studioSettings}>

          <div className={styles.settingsSection}>

            <div className={styles.settingsLabel}>Slug</div>

            <input

              type="text"

              className={styles.settingsInput}

              placeholder="url-friendly-slug"

              value={draft.slug}

              onChange={(event) => updateDraft("slug", event.target.value)}

            />

          </div>

          <div className={styles.settingsSection}>

            <div className={styles.settingsLabel}>Cover Image URL</div>

            <input

              type="text"

              className={styles.settingsInput}

              placeholder="https://..."

              value={draft.coverImage}

              onChange={(event) => updateDraft("coverImage", event.target.value)}

            />

          </div>

          <div className={styles.settingsSection}>

            <div className={styles.settingsLabel}>SEO Title</div>

            <input

              type="text"

              className={styles.settingsInput}

              placeholder="Meta title..."

              value={draft.seoTitle}

              onChange={(event) => updateDraft("seoTitle", event.target.value)}

            />

          </div>

          <div className={styles.settingsSection}>

            <div className={styles.settingsLabel}>SEO Description</div>

            <textarea

              className={styles.settingsTextarea}

              placeholder="Meta description..."

              value={draft.seoDescription}

              onChange={(event) => updateDraft("seoDescription", event.target.value)}

            />

          </div>

          <div className={styles.settingsSection}>

            <div className={styles.settingsLabel}>Danger Zone</div>

            <button

              type="button"

              className={styles.deleteBtn}

              onClick={() => void handleDelete()}

              disabled={!draft.id}

            >

              Delete Post

            </button>

          </div>

        </aside>

      </div>



      <div className={`${styles.toast}${toast ? ` ${styles.toastShow}` : ""}`} aria-live="polite">

        {toast}

      </div>

    </div>

  );

}

