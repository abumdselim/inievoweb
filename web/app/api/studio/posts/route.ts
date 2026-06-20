import { NextResponse } from "next/server";
import { requireStudioService } from "@/lib/studio/api-auth";
import {
  createStudioPost,
  listStudioPosts,
  parseStudioPostWriteInput,
} from "@/lib/studio/posts";

export async function GET() {
  const authError = await requireStudioService();
  if (authError) {
    return authError;
  }

  const { posts, error } = await listStudioPosts();
  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ posts });
}

export async function POST(request: Request) {
  const authError = await requireStudioService();
  if (authError) {
    return authError;
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const input = parseStudioPostWriteInput(body);
  if (!input) {
    return NextResponse.json({ error: "Invalid post payload." }, { status: 400 });
  }

  const { post, error } = await createStudioPost(input);
  if (error || !post) {
    return NextResponse.json({ error: error ?? "Could not create post." }, { status: 500 });
  }

  return NextResponse.json({ post }, { status: 201 });
}
