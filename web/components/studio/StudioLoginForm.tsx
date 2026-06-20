"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import styles from "@/app/studio/studio.module.css";

type StudioLoginFormProps = {
  configured: boolean;
  redirectTo: string;
};

export default function StudioLoginForm({
  configured,
  redirectTo,
}: StudioLoginFormProps) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!configured || submitting) {
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/studio/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        setError(data?.error ?? "Login failed. Try again.");
        setPassword("");
        return;
      }

      router.push(redirectTo);
      router.refresh();
    } catch {
      setError("Network error. Try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className={styles.loginScreen}>
      <div className={styles.loginBox}>
        <div className={styles.loginLogo}>ABU MD. SELIM · STUDIO</div>
        <h1>Studio</h1>
        <p className={styles.loginSubtitle}>
          Enter your passphrase to access the writing studio.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            className={styles.loginInput}
            placeholder="Passphrase"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            disabled={!configured || submitting}
            required
          />
          <button
            type="submit"
            className={styles.loginBtn}
            disabled={!configured || submitting}
          >
            {submitting ? "Signing in…" : "Enter Studio"}
          </button>
        </form>
        {error ? <p className={styles.loginError}>{error}</p> : null}
        {!configured ? (
          <p className={styles.configNotice}>
            Studio login is not configured. Set STUDIO_SECRET and
            STUDIO_SESSION_SECRET in .env.local.
          </p>
        ) : null}
      </div>
    </div>
  );
}
