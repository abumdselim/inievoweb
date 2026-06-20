"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "@/app/studio/studio.module.css";

export default function StudioLogoutButton() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  async function handleLogout() {
    if (submitting) {
      return;
    }

    setSubmitting(true);
    try {
      await fetch("/api/studio/logout", { method: "POST" });
      router.push("/studio/login");
      router.refresh();
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <button
      type="button"
      className={styles.logoutBtn}
      onClick={handleLogout}
      disabled={submitting}
    >
      {submitting ? "Signing out…" : "Sign out"}
    </button>
  );
}
