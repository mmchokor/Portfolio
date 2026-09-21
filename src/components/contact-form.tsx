"use client";
import { FormEvent, useState } from "react";
const endpoint = "https://public.herotofu.com/v1/b0657050-f6ee-11ec-bc36-e1ea9ccadd33";
const captchaData = { DYNAMIC_DATA_EXAMPLE: "" };

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "verification" | "success" | "error">("idle"); const [message, setMessage] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.assign(Object.fromEntries(new FormData(form)), captchaData);
    if (data.company) return;
    setState("sending");
    setMessage("Sending your message…");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.status === 422) {
        Object.entries(captchaData).forEach(([name, value]) => {
          let input = form.querySelector<HTMLInputElement>(`input[data-herotofu-injected="${name}"]`);
          if (!input) {
            input = document.createElement("input");
            input.type = "hidden";
            input.name = name;
            input.dataset.herotofuInjected = name;
            form.appendChild(input);
          }
          input.value = value;
        });
        form.target = "_blank";
        form.rel = "noopener noreferrer";
        setState("verification");
        setMessage("One more step: complete the verification in the new tab.");
        form.submit();
        return;
      }

      if (!response.ok) throw new Error();
      form.reset();
      setState("success");
      setMessage("Thanks — your message has been sent.");
    } catch {
      setState("error");
      setMessage("Something went wrong. Please email me directly instead.");
    }
  }
  return <form className="contact-form" action={endpoint} method="post" onSubmit={submit} data-reveal data-reveal-delay="80">
    <div className="field-row"><label><span>Name</span><input name="name" type="text" autoComplete="name" required /></label><label><span>Email</span><input name="email" type="email" autoComplete="email" inputMode="email" required /></label></div>
    <label><span>Message</span><textarea name="message" rows={5} required /></label><label className="honeypot" aria-hidden="true">Company<input name="company" type="text" tabIndex={-1} autoComplete="off" /></label>
    <div className="form-footer"><button type="submit" disabled={state === "sending"}>{state === "sending" ? "Sending…" : "Send message"}</button><p className={`form-status ${state}`} aria-live="polite">{message}</p></div>
  </form>;
}
