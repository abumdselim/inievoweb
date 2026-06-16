import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import {
  ensureCommentsFile,
  getApprovedComments,
  readComments,
  validateCommentInput,
  type BlogComment,
} from "@/lib/blog-comments";

const COMMENTS_FILE = path.join(process.cwd(), "data", "blog-comments.json");

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return NextResponse.json({ error: "Missing slug." }, { status: 400 });
  }

  const comments = await getApprovedComments(slug);
  return NextResponse.json({
    comments: comments.map(({ id, author_name, body, created_at, approved_at }) => ({
      id,
      author_name,
      body,
      created_at,
      approved_at,
    })),
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  const validated = validateCommentInput(body);

  if (!validated.ok) {
    return NextResponse.json({ error: validated.error }, { status: 400 });
  }

  await ensureCommentsFile();
  const comments = await readComments();

  const entry: BlogComment = {
    id: crypto.randomUUID(),
    ...validated.data,
    status: "pending",
    created_at: new Date().toISOString(),
  };

  comments.push(entry);
  await fs.writeFile(COMMENTS_FILE, JSON.stringify(comments, null, 2), "utf8");

  return NextResponse.json({
    ok: true,
    message: "Your comment has been submitted for approval.",
    id: entry.id,
  });
}
