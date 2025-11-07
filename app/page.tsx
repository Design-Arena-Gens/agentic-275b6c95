import Link from "next/link";
import { book } from "@/content/book";
import { Toc } from "@/components/Toc";

export default function Page() {
  return (
    <div className="stack-xl">
      <section className="hero">
        <h1 className="title">Discipline & Focus</h1>
        <p className="subtitle">Rules and pillars for sustainable success.</p>
        <div className="meta-row">
          <span>By {book.author}</span>
          <span>Version {book.version}</span>
          <span>Updated {book.lastUpdated}</span>
        </div>
        <div className="cta-row">
          {book.chapters.length > 0 && (
            <Link className="button primary" href={`/chapters/${book.chapters[0].slug}`}>
              Start reading
            </Link>
          )}
          <a className="button secondary" href="#toc">Browse contents</a>
        </div>
      </section>

      <section className="intro">
        <p className="lead">
          This concise, practical book distills the timeless fundamentals of discipline and focus into
          clear rules, systems, and exercises you can apply today. It is not about motivation; it is
          about reliable execution.
        </p>
      </section>

      <section id="toc">
        <Toc />
      </section>
    </div>
  );
}
