import { promises as fs } from "fs";
import path from "path";
import { isBlogSlug } from "@/lib/blog-posts";

export type BlogCommentStatus = "pending" | "approved" | "rejected";

export type BlogComment = {
  id: string;
  slug: string;
  author_name: string;
  author_email: string;
  body: string;
  status: BlogCommentStatus;
  created_at: string;
  approved_at?: string;
};

const DATA_DIR = path.join(process.cwd(), "data");
const COMMENTS_FILE = path.join(DATA_DIR, "blog-comments.json");

export async function ensureCommentsFile() {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    await fs.access(COMMENTS_FILE);
  } catch {
    await fs.writeFile(COMMENTS_FILE, "[]", "utf8");
  }
}

export async function readComments(): Promise<BlogComment[]> {
  await ensureCommentsFile();
  const raw = await fs.readFile(COMMENTS_FILE, "utf8");
  return JSON.parse(raw) as BlogComment[];
}

export async function getApprovedComments(slug: string): Promise<BlogComment[]> {
  if (!isBlogSlug(slug)) return [];
  const comments = await readComments();
  return comments
    .filter((comment) => comment.slug === slug && comment.status === "approved")
    .sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
}

export function validateCommentInput(input: {
  slug: unknown;
  author_name: unknown;
  author_email: unknown;
  body: unknown;
}): { ok: true; data: Pick<BlogComment, "slug" | "author_name" | "author_email" | "body"> } | { ok: false; error: string } {
  const slug = typeof input.slug === "string" ? input.slug.trim() : "";
  const author_name = typeof input.author_name === "string" ? input.author_name.trim() : "";
  const author_email = typeof input.author_email === "string" ? input.author_email.trim() : "";
  const body = typeof input.body === "string" ? input.body.trim() : "";

  if (!isBlogSlug(slug)) return { ok: false, error: "Invalid article." };
  if (author_name.length < 2 || author_name.length > 80) {
    return { ok: false, error: "Please enter your name (2–80 characters)." };
  }
  if (!author_email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(author_email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (body.length < 10 || body.length > 2000) {
    return { ok: false, error: "Comment must be between 10 and 2000 characters." };
  }

  return { ok: true, data: { slug, author_name, author_email, body } };
}
