import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { profile } from "@/data/profile";

export const metadata: Metadata = { title: "Resume", description: "View or download Mohamed Chokor's software engineering resume.", alternates: { canonical: "/resume" } };
export default function ResumePage() { return <main id="main-content" className="resume-page"><div className="resume-heading"><p className="eyebrow">Resume / PDF</p><h1>Experience,<br />on one page.</h1><p>View the PDF below, open it directly, or download a copy.</p><div><a className="button-primary" href={profile.resume} target="_blank" rel="noreferrer">Open resume <ArrowUpRight /></a><a className="button-secondary" href={profile.resume} download="Mohamed-Chokor-Resume.pdf">Download resume</a></div></div><div className="resume-frame"><iframe src={`${profile.resume}#view=FitH`} title="Mohamed Chokor resume" loading="eager" /></div><p className="resume-mobile-note">If the preview is unavailable on your device, use Open resume or Download resume above.</p><Link href="/" className="back-link">← Back to portfolio</Link></main> }
