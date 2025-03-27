import Link from 'next/link';

export default function BlogPost({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <Link 
            href="/blogs" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
          >
            ← Back to Articles
          </Link>
          
          <article>
            <header className="mb-8">
              <span className="inline-block px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-600 mb-4">
                Investment Strategy
              </span>
              <h1 className="text-4xl font-bold mb-4">Understanding Alternative Investment Strategies</h1>
              <div className="flex items-center text-gray-500 text-sm">
                <span>March 15, 2024</span>
                <span className="mx-2">•</span>
                <span>5 min read</span>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Alternative investments have gained significant traction in recent years as investors seek to diversify their portfolios beyond traditional stocks and bonds. This comprehensive guide explores various alternative investment strategies and their potential benefits.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">What are Alternative Investments?</h2>
              <p className="text-gray-600 mb-6">
                Alternative investments are financial assets that don't fall into conventional investment categories like stocks, bonds, and cash. These can include private equity, hedge funds, real estate, commodities, and more.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Key Benefits</h2>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                <li className="mb-2">Portfolio diversification</li>
                <li className="mb-2">Potential for higher returns</li>
                <li className="mb-2">Reduced overall portfolio volatility</li>
                <li className="mb-2">Access to unique investment opportunities</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Common Alternative Investment Strategies</h2>
              <p className="text-gray-600 mb-6">
                There are various approaches to alternative investments, each with its own risk and return profile. Here are some popular strategies:
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">1. Real Estate Investment</h3>
              <p className="text-gray-600 mb-6">
                Real estate investments can provide both regular income through rentals and potential capital appreciation over time.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">2. Private Equity</h3>
              <p className="text-gray-600 mb-6">
                Private equity involves investing directly in private companies or buying out public companies to take them private.
              </p>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
} 