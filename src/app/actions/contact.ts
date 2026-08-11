"use server";

import { Resend } from "resend";
import { profile } from "@/content/portfolio";

export type ContactState = {
  ok: boolean;
  message: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asTrimmedString(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

export async function sendContactMessage(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot — bots fill hidden fields; real users leave this empty.
  if (asTrimmedString(formData.get("company"))) {
    return { ok: true, message: "Thanks — your message is on its way." };
  }

  const name = asTrimmedString(formData.get("name"));
  const email = asTrimmedString(formData.get("email"));
  const subject = asTrimmedString(formData.get("subject"));
  const message = asTrimmedString(formData.get("message"));

  if (name.length < 2) {
    return { ok: false, message: "Please enter your name." };
  }
  if (!emailPattern.test(email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }
  if (message.length < 10) {
    return {
      ok: false,
      message: "Please include a bit more detail in your message.",
    };
  }
  if (name.length > 120 || email.length > 200 || subject.length > 160 || message.length > 5000) {
    return { ok: false, message: "One of the fields is too long." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      ok: false,
      message:
        "Email is not configured yet. Please email me directly or try again later.",
    };
  }

  const to = (process.env.CONTACT_TO_EMAIL || profile.email).toLowerCase();
  const from =
    process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";
  const topic = subject || "Portfolio contact";

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `[Portfolio] ${topic} — ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${topic}`,
        "",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      const testingOnly =
        typeof error.message === "string" &&
        error.message.includes("only send testing emails");
      return {
        ok: false,
        message: testingOnly
          ? "Email delivery needs a verified domain in Resend, or the recipient must match your Resend account email."
          : "Couldn’t send that just now. Please try again or email me directly.",
      };
    }

    return { ok: true, message: "Thanks — your message is on its way." };
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      ok: false,
      message: "Couldn’t send that just now. Please try again or email me directly.",
    };
  }
}
