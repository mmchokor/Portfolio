"use client";

import dynamic from "next/dynamic";

const ResumeViewer = dynamic(
  () => import("./resume-viewer").then((module) => module.ResumeViewer),
  {
    ssr: false,
    loading: () => (
      <div
        className="resume-loading resume-loading-route"
        role="status"
        aria-live="polite"
      >
        <span className="resume-loading-label">Loading resume…</span>
        <div className="resume-page-skeleton" aria-hidden="true" />
      </div>
    ),
  },
);

export function ResumeViewerClient({
  downloadFile,
  file,
}: {
  downloadFile: string;
  file: string;
}) {
  return <ResumeViewer downloadFile={downloadFile} file={file} />;
}
