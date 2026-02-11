import Link from "next/link";

export const metadata = {
  title: "Tool Finder Lab — Honest AI Tool Reviews for Beginners",
  description: "Honest, beginner-friendly reviews of the best AI tools in 2026. Find the right tool for writing, video, and content creation.",
};

const articles = [
  {
    href: "/articles/best-ai-writing-tools-2026",
    tag: "Comparison",
    title: "Best AI Writing Tools 2026",
    description: "Top 7 AI writing tools compared honestly. Find the right tool for your budget and workflow—including free options.",
  },
  {
    href: "/articles/best-ai-video-tools-2026",
    tag: "Comparison",
    title: "Best AI Video Tools 2026",
    description: "Avatar-based vs text-to-video explained. Which type fits your content—and which tool to start with.",
  },
  {
    href: "/articles/writesonic-review-2026",
    tag: "Review",
    title: "Writesonic Review 2026",
    description: "Is Writesonic worth $39/month for beginners? An honest look at features, pricing, and when to skip it.",
  },
  {
    href: "/articles/best-ai-tools-content-creators-2026",
    tag: "Guide",
    title: "Best AI Tools for Content Creators 2026",
    description: "Build your first AI stack by workflow stage. Start free, add paid tools only when your volume justifies it.",
  },
  {
    href: "/articles/heygen-review-2026",
    tag: "Review",
    title: "HeyGen Review 2026",
    description: "The best AI avatar video tool for beginners? Honest look at pricing, credit system, and who should buy it.",
  },
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero-inner">
          <span className="home-hero-badge">AI Tools · 2026</span>
          <h1>Find the Right AI Tool.<br />Without the Overwhelm.</h1>
          <p>Honest, beginner-friendly reviews of the best AI tools for writing, video, and content creation. We tell you who should buy—and who should skip.</p>
        </div>
      </section>

      <div className="home-content">
        <p className="section-title">All Articles</p>
        <div className="articles-grid">
          {articles.map((article) => (
            <Link key={article.href} href={article.href} className="article-card">
              <span className="article-card-tag">{article.tag}</span>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <span className="article-card-cta">Read article →</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}