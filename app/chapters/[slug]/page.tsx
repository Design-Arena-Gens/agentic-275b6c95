import { notFound } from "next/navigation";
import { book } from "@/content/book";
import { ChapterContent } from "@/components/ChapterContent";

export function generateStaticParams() {
  return book.chapters.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const chapter = book.chapters.find((c) => c.slug === params.slug);
  if (!chapter) return { title: "Chapter not found" };
  return {
    title: `${chapter.title} ? Discipline & Focus`,
    description: chapter.summary,
  };
}

export default function ChapterPage({ params }: { params: { slug: string } }) {
  const chapter = book.chapters.find((c) => c.slug === params.slug);
  if (!chapter) return notFound();
  return <ChapterContent chapter={chapter} />;
}
