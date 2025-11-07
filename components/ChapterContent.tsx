import Link from "next/link";
import { type Chapter } from "@/content/book";

export function ChapterContent({ chapter }: { chapter: Chapter }) {
  return (
    <article className="chapter stack-lg">
      <header className="chapter-header">
        <p className="eyebrow">Chapter</p>
        <h1 className="chapter-title">{chapter.title}</h1>
        <p className="chapter-summary">{chapter.summary}</p>
      </header>

      <div className="sections stack-md">
        {chapter.sections.map((s) => (
          <section key={s.slug} id={s.slug} className="section">
            <h2 className="section-heading">{s.title}</h2>
            <p className="section-body">{s.body}</p>
            {s.takeaways?.length ? (
              <div className="callout">
                <h3 className="callout-title">Key takeaways</h3>
                <ul className="callout-list">
                  {s.takeaways.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            {s.exercise ? (
              <div className="exercise">
                <h3 className="exercise-title">Exercise</h3>
                <p>{s.exercise}</p>
              </div>
            ) : null}
          </section>
        ))}
      </div>

      <nav className="chapter-nav">
        <Link className="button" href="/">Back to contents</Link>
      </nav>
    </article>
  );
}
