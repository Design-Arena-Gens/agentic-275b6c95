"use client";
import Link from "next/link";
import { book } from "@/content/book";

export function Toc() {
  return (
    <div className="toc">
      <h2 className="section-title">Table of Contents</h2>
      <ol className="toc-list">
        {book.chapters.map((ch, idx) => (
          <li key={ch.slug} className="toc-item">
            <Link className="toc-link" href={`/chapters/${ch.slug}`}>
              <span className="toc-index">{String(idx + 1).padStart(2, "0")}</span>
              <span className="toc-title">{ch.title}</span>
              <span className="toc-summary">{ch.summary}</span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
