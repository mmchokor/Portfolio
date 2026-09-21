import type { Metadata } from "next";
import Link from "next/link";
import { ResumeViewerClient } from "@/components/resume/resume-viewer-client";
import { profile } from "@/data/profile";

export const metadata: Metadata = { title: "Resume", description: "View or download Mohamed Chokor's software engineering resume.", alternates: { canonical: "/resume" } };

export default function ResumePage() {
  return (
    <main id="main-content" className="resume-page">
      <div className="resume-heading">
        <p className="eyebrow">Resume / PDF</p>
        <h1>
          Mohamed
          <br />
          Chokor.
        </h1>
        <div>
          <a
            className="button-primary"
            href={profile.resume}
            download="Mohamed-Chokor-Resume.pdf"
          >
            Download Resume
          </a>
        </div>
      </div>
      <ResumeViewerClient file="/resume/document" downloadFile={profile.resume} />
      <Link href="/" className="back-link">
        ← Back to portfolio
      </Link>
    </main>
  );
}
