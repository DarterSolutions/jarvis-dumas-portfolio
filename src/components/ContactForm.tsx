"use client";

import { useActionState } from "react";
import {
  sendContactMessage,
  type ContactState,
} from "@/app/actions/contact";

const initialState: ContactState = {
  ok: false,
  message: "",
};

const fieldClass =
  "mt-2 w-full border border-line bg-paper px-4 py-3 text-ink outline-none transition-[border-color,box-shadow] placeholder:text-ink-soft/55 focus:border-navy focus:shadow-[0_0_0_3px_var(--glow)]";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    initialState,
  );

  return (
    <form action={formAction} className="relative space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="text-sm font-semibold text-ink">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={120}
            className={fieldClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="text-sm font-semibold text-ink">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={200}
            className={fieldClass}
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className="text-sm font-semibold text-ink">
          Subject
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          maxLength={160}
          className={fieldClass}
          placeholder="What should we talk about?"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="text-sm font-semibold text-ink">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          maxLength={5000}
          className={`${fieldClass} min-h-[140px] resize-y`}
          placeholder="Ask a question or share a bit about the project."
        />
      </div>

      {/* Honeypot — leave empty */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-[9999px] opacity-0">
        <label htmlFor="contact-company">Company</label>
        <input id="contact-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="cta-primary" disabled={pending}>
          {pending ? "Sending…" : "Send message"}
        </button>
        {state.message ? (
          <p
            role="status"
            aria-live="polite"
            className={`text-sm ${state.ok ? "text-teal" : "text-ink-soft"}`}
          >
            {state.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
