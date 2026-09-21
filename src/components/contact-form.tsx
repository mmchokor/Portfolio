"use client";
import { FormEvent, useState } from "react";
const endpoint = "https://public.herotofu.com/v1/b0657050-f6ee-11ec-bc36-e1ea9ccadd33";
export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle"); const [message, setMessage] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); const form = event.currentTarget; const data = Object.fromEntries(new FormData(form)); if (data.company) return; setState("sending"); setMessage("Sending your message…"); try { const response = await fetch(endpoint, { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: JSON.stringify(data) }); if (!response.ok) throw new Error(); form.reset(); setState("success"); setMessage("Thanks — your message has been sent."); } catch { setState("error"); setMessage("Something went wrong. Please email me directly instead."); } }
  return <form className="contact-form" action={endpoint} method="post" onSubmit={submit} data-reveal data-reveal-delay="80">
    <div className="field-row"><label><span>Name</span><input name="name" type="text" autoComplete="name" required /></label><label><span>Email</span><input name="email" type="email" autoComplete="email" inputMode="email" required /></label></div>
    <label><span>Message</span><textarea name="message" rows={5} required /></label><label className="honeypot" aria-hidden="true">Company<input name="company" type="text" tabIndex={-1} autoComplete="off" /></label>
    <div className="form-footer"><button type="submit" disabled={state === "sending"}>{state === "sending" ? "Sending…" : "Send message"}</button><p className={`form-status ${state}`} aria-live="polite">{message}</p></div>
  </form>;
}
