import Link from "next/link";
import { articles } from "../../articles/data";

export function generateStaticParams() {
  // Get unique game topics from articles
  
  const games = Array.from(new Set(
    articles.filter(a => a.category === "gaming").map(a => a.topic)
  ));
  console.log("Static games generated:", games);
  return games.map(game => ({ game }));
  
}

export default async function GameArticlesPage({ params }: { params: Promise<{ game: string }> }) {
  const{ game } = await params;  
  const gameArticles = articles.filter(
    (a) => a.category === "gaming" && a.topic === game
  );

  if (gameArticles.length === 0) return <div className="text-white p-8">No articles found for this game.</div>;

  return (
    <div className="prose mx-auto p-4 pt-20">
      <h1 className="text-3xl font-bold mb-6">Articles about {game.replace("-", " ")}</h1>
      <ul>
        {gameArticles.map((article) => (
          <li 
            key={article.slug}
            className="mb-4 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors shadow p-4"
          >
            <Link 
              href={`/articles/${article.slug}`}
              className="text-lg font-semibold text-white hover:underline"
            >
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}