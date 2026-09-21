import { readFile } from "node:fs/promises";
import path from "node:path";

export const dynamic = "force-static";

export async function GET() {
  const resumePath = path.join(
    process.cwd(),
    "public",
    "Mohamed-Chokor-Resume.pdf",
  );
  const resume = await readFile(resumePath);

  return new Response(resume, {
    headers: {
      "Cache-Control": "public, max-age=0, must-revalidate",
      "Content-Type": "application/octet-stream",
    },
  });
}
