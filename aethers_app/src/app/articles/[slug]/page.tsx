import { notFound } from "next/navigation";
import { articles } from "../data";
import Image from "next/image";

export function generateStaticParams() {
  return articles.map(article => ({ slug: article.slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find(a => a.slug === slug);
  if (!article) return notFound();

  return (
    <article className="prose mx-auto p-4 pt-20">
      <h1 className="text-3xl font-bold mb-6">{article.title}</h1>
      {article.image && (
        <div className="mb-6">
          <Image
            src={article.image}
            alt={article.title}
            width={800}
            height={400}
            className="rounded-lg w-full object-cover"
            priority
          />
        </div>
      )}
      <h2 className="text=xl font-medium text-gray-400 mb-4">{article.content}</h2>
      <div className="mt-6 text-base">{article.body}</div>
    </article>
  );
}