"use client";

import { useCallback, useEffect, useState } from "react";
import { InievoIcon } from "@/components/ui/InievoIcon";

type ApprovedComment = {
  id: string;
  author_name: string;
  body: string;
  created_at: string;
  approved_at?: string;
};

const fieldClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:border-[#137ece]/50 focus:ring-2 focus:ring-[#137ece]/15";

function formatCommentDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

export function BlogComments({ slug }: { slug: string }) {
  const [comments, setComments] = useState<ApprovedComment[]>([]);
  const [loadingComments, setLoadingComments] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const loadComments = useCallback(async () => {
    setLoadingComments(true);
    try {
      const res = await fetch(`/api/blog/comments?slug=${encodeURIComponent(slug)}`);
      if (!res.ok) throw new Error("Failed to load comments");
      const data = (await res.json()) as { comments: ApprovedComment[] };
      setComments(data.comments);
    } catch {
      setComments([]);
    } finally {
      setLoadingComments(false);
    }
  }, [slug]);

  useEffect(() => {
    loadComments();
  }, [loadComments]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/blog/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug,
          author_name: form.get("author_name"),
          author_email: form.get("author_email"),
          body: form.get("body"),
        }),
      });

      const data = (await res.json()) as { error?: string; message?: string };

      if (!res.ok) {
        throw new Error(data.error ?? "Unable to submit comment.");
      }

      setSubmitted(true);
      e.currentTarget.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="inievo-blog-comments" aria-labelledby="blog-comments-heading">
      <div className="mb-8">
        <p className="inievo-blog-share-label mb-2">Discussion</p>
        <h2 id="blog-comments-heading" className="font-display text-2xl font-extrabold tracking-tight text-slate-900">
          Comments
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Share your perspective. Approved comments appear below after moderation.
        </p>
      </div>

      {loadingComments ? (
        <p className="text-sm text-slate-500 mb-8">Loading comments…</p>
      ) : comments.length > 0 ? (
        <ul className="space-y-4 mb-10">
          {comments.map((comment) => (
            <li key={comment.id} className="inievo-blog-comment-item">
              <div className="flex items-start gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#137ece]/10 text-xs font-extrabold text-[#137ece]"
                  aria-hidden
                >
                  {comment.author_name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <p className="font-semibold text-slate-900">{comment.author_name}</p>
                    <time className="text-xs text-slate-400" dateTime={comment.approved_at ?? comment.created_at}>
                      {formatCommentDate(comment.approved_at ?? comment.created_at)}
                    </time>
                  </div>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-700 whitespace-pre-wrap">{comment.body}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-slate-500 mb-10">No approved comments yet. Be the first to share your thoughts.</p>
      )}

      {submitted ? (
        <div className="inievo-blog-comment-success" aria-live="polite">
          <InievoIcon name="circle_check" size={22} className="text-[#137ece] shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-slate-900">Submitted for approval</p>
            <p className="mt-1 text-sm leading-relaxed text-slate-600">
              Your comment has been submitted for approval. It will appear here once our team reviews it.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-4 text-sm font-bold text-[#137ece] hover:opacity-80 transition-opacity"
            >
              Write another comment
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="inievo-blog-comment-form">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="comment-name" className="inievo-blog-comment-label">
                Name
              </label>
              <input
                id="comment-name"
                name="author_name"
                type="text"
                required
                minLength={2}
                maxLength={80}
                autoComplete="name"
                placeholder="Your name"
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="comment-email" className="inievo-blog-comment-label">
                Email
              </label>
              <input
                id="comment-email"
                name="author_email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className={fieldClass}
              />
            </div>
          </div>
          <div>
            <label htmlFor="comment-body" className="inievo-blog-comment-label">
              Comment
            </label>
            <textarea
              id="comment-body"
              name="body"
              required
              minLength={10}
              maxLength={2000}
              rows={5}
              placeholder="Share your thoughts on this article…"
              className={`${fieldClass} min-h-[140px] resize-y`}
            />
          </div>
          {error ? <p className="text-sm text-red-600">{error}</p> : null}
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-xl bg-[#137ece] text-sm font-bold text-white shadow-lg shadow-[#137ece]/20 hover:bg-[#0f6db8] disabled:opacity-60 disabled:cursor-not-allowed transition-all"
          >
            {submitting ? (
              <>
                <InievoIcon name="loader" size={16} className="mr-2 animate-spin" />
                Submitting…
              </>
            ) : (
              "Post comment"
            )}
          </button>
        </form>
      )}
    </section>
  );
}
