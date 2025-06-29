import { notFound } from "next/navigation";
import { articles } from "../data";

export function generateStaticParams() {
  return articles.map(article => ({ slug: article.slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find(a => a.slug === slug);
  if (!article) return notFound();

  return (
    <article className="prose mx-auto p-4 pt-20">
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </article>
  );
}