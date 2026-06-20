"use client";

import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor, type Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useState, type ReactNode } from "react";
import styles from "@/app/studio/studio.module.css";

type ToolbarCommand =
  | "bold"
  | "italic"
  | "h2"
  | "h3"
  | "blockquote"
  | "bulletList"
  | "orderedList"
  | "code"
  | "codeBlock"
  | "hr"
  | "image"
  | "link";

const TOOLBAR_GROUPS: { cmd: ToolbarCommand; label: ReactNode }[][] = [
  [
    { cmd: "bold", label: <b>B</b> },
    { cmd: "italic", label: <i>I</i> },
  ],
  [
    { cmd: "h2", label: "H2" },
    { cmd: "h3", label: "H3" },
  ],
  [
    { cmd: "blockquote", label: "❝" },
    { cmd: "bulletList", label: "• List" },
    { cmd: "orderedList", label: "1. List" },
  ],
  [
    { cmd: "code", label: "Code" },
    { cmd: "codeBlock", label: "{ }" },
  ],
  [
    { cmd: "hr", label: "— HR" },
    { cmd: "image", label: "🖼 Image" },
    { cmd: "link", label: "🔗 Link" },
  ],
];

type StudioEditorProps = {
  content: string;
  onChange: (html: string) => void;
};

function isCommandActive(editor: Editor, cmd: ToolbarCommand): boolean {
  switch (cmd) {
    case "bold":
      return editor.isActive("bold");
    case "italic":
      return editor.isActive("italic");
    case "h2":
      return editor.isActive("heading", { level: 2 });
    case "h3":
      return editor.isActive("heading", { level: 3 });
    case "blockquote":
      return editor.isActive("blockquote");
    case "bulletList":
      return editor.isActive("bulletList");
    case "orderedList":
      return editor.isActive("orderedList");
    case "code":
      return editor.isActive("code");
    case "codeBlock":
      return editor.isActive("codeBlock");
    default:
      return false;
  }
}

function runCommand(editor: Editor, cmd: ToolbarCommand): void {
  const chain = editor.chain().focus();

  switch (cmd) {
    case "bold":
      chain.toggleBold().run();
      break;
    case "italic":
      chain.toggleItalic().run();
      break;
    case "h2":
      chain.toggleHeading({ level: 2 }).run();
      break;
    case "h3":
      chain.toggleHeading({ level: 3 }).run();
      break;
    case "blockquote":
      chain.toggleBlockquote().run();
      break;
    case "bulletList":
      chain.toggleBulletList().run();
      break;
    case "orderedList":
      chain.toggleOrderedList().run();
      break;
    case "code":
      chain.toggleCode().run();
      break;
    case "codeBlock":
      chain.toggleCodeBlock().run();
      break;
    case "hr":
      chain.setHorizontalRule().run();
      break;
    case "image": {
      const url = window.prompt("Image URL:");
      if (url) {
        chain.setImage({ src: url }).run();
      }
      break;
    }
    case "link": {
      const url = window.prompt("URL:");
      if (url) {
        chain.setLink({ href: url }).run();
      }
      break;
    }
  }
}

export default function StudioEditor({ content, onChange }: StudioEditorProps) {
  const [, setToolbarTick] = useState(0);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Start writing your thoughts...",
      }),
      Image,
      Link.configure({ openOnClick: false }),
    ],
    content,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: styles.proseMirror,
      },
    },
    onUpdate: ({ editor: currentEditor }) => {
      onChange(currentEditor.getHTML());
    },
  });

  useEffect(() => {
    if (!editor) {
      return;
    }

    const refreshToolbar = () => {
      setToolbarTick((tick) => tick + 1);
    };

    editor.on("selectionUpdate", refreshToolbar);
    editor.on("transaction", refreshToolbar);

    return () => {
      editor.off("selectionUpdate", refreshToolbar);
      editor.off("transaction", refreshToolbar);
    };
  }, [editor]);

  useEffect(() => {
    if (!editor) {
      return;
    }

    const currentHtml = editor.getHTML();
    if (content !== currentHtml) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className={styles.tiptapWrapper}>
      <div className={styles.tiptapToolbar} role="toolbar" aria-label="Formatting">
        {TOOLBAR_GROUPS.map((group, groupIndex) => (
          <span key={groupIndex} className={styles.toolbarGroup}>
            {groupIndex > 0 ? (
              <span className={styles.toolbarSep} aria-hidden="true" />
            ) : null}
            {group.map((item) => (
              <button
                key={item.cmd}
                type="button"
                className={`${styles.toolbarBtn}${
                  isCommandActive(editor, item.cmd) ? ` ${styles.toolbarBtnActive}` : ""
                }`}
                onClick={() => runCommand(editor, item.cmd)}
              >
                {item.label}
              </button>
            ))}
          </span>
        ))}
      </div>
      <EditorContent editor={editor} className={styles.editorContent} />
    </div>
  );
}
