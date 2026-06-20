import { NextResponse } from "next/server";
import { requireStudioService } from "@/lib/studio/api-auth";
import {
  deleteStudioPost,
  getStudioPost,
  parseStudioPostWriteInput,
  updateStudioPost,
} from "@/lib/studio/posts";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(_request: Request, context: RouteContext) {
  const authError = await requireStudioService();
  if (authError) {
    return authError;
  }

  const { id } = await context.params;
  const { post, error } = await getStudioPost(id);
  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
  if (!post) {
    return NextResponse.json({ error: "Post not found." }, { status: 404 });
  }

  return NextResponse.json({ post });
}

export async function PATCH(request: Request, context: RouteContext) {
  const authError = await requireStudioService();
  if (authError) {
    return authError;
  }

  const { id } = await context.params;

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

  const { post, error } = await updateStudioPost(id, input);
  if (error === "Post not found.") {
    return NextResponse.json({ error }, { status: 404 });
  }
  if (error || !post) {
    return NextResponse.json({ error: error ?? "Could not update post." }, { status: 500 });
  }

  return NextResponse.json({ post });
}

export async function DELETE(_request: Request, context: RouteContext) {
  const authError = await requireStudioService();
  if (authError) {
    return authError;
  }

  const { id } = await context.params;
  const { ok, error } = await deleteStudioPost(id);
  if (!ok) {
    return NextResponse.json({ error: error ?? "Could not delete post." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
