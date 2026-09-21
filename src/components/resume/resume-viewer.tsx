"use client";

import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

type ResumeViewerProps = {
  downloadFile: string;
  file: string;
};

function LoadingState() {
  return (
    <div className="resume-loading" role="status" aria-live="polite">
      <span className="resume-loading-label">Loading resume…</span>
      <div className="resume-page-skeleton" aria-hidden="true" />
    </div>
  );
}

export function ResumeViewer({ downloadFile, file }: ResumeViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [numPages, setNumPages] = useState(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(([entry]) => {
      setContainerWidth(Math.floor(entry.contentRect.width));
    });
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const pageWidth = Math.min(containerWidth, 920);

  return (
    <section className="resume-viewer" aria-label="Resume document">
      <div className="resume-viewer-bar">
        <span>Mohamed Chokor · Resume</span>
        {numPages > 0 && (
          <span aria-live="polite">
            {numPages} {numPages === 1 ? "page" : "pages"}
          </span>
        )}
      </div>
      <div ref={containerRef} className="resume-document-shell">
        {failed ? (
          <div className="resume-error" role="alert">
            <h2>Resume preview unavailable</h2>
            <p>The PDF could not be displayed here.</p>
            <div>
              <a
                className="button-primary"
                href={downloadFile}
                download="Mohamed-Chokor-Resume.pdf"
              >
                Download Resume
              </a>
            </div>
          </div>
        ) : (
          <Document
            file={file}
            loading={<LoadingState />}
            error={<LoadingState />}
            onLoadSuccess={({ numPages: pages }) => {
              setNumPages(pages);
              setFailed(false);
            }}
            onLoadError={() => setFailed(true)}
          >
            {pageWidth > 0 &&
              Array.from({ length: numPages }, (_, index) => (
                <Page
                  key={`resume-page-${index + 1}`}
                  pageNumber={index + 1}
                  width={pageWidth}
                  loading={
                    <div
                      className="resume-page-skeleton"
                      role="status"
                      aria-label={`Loading resume page ${index + 1}`}
                    />
                  }
                />
              ))}
          </Document>
        )}
      </div>
    </section>
  );
}
