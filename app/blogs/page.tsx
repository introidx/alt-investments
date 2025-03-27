import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Alternative Investment Strategies',
    excerpt: 'Dive deep into various alternative investment options and their potential returns...',
    category: 'Investment Strategy',
    date: 'Mar 15, 2024',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'The Rise of Digital Asset Management',
    excerpt: 'Explore how technology is transforming traditional asset management...',
    category: 'Digital Assets',
    date: 'Mar 14, 2024',
    readTime: '4 min read'
  },
  {
    id: 3,
    title: 'Real Estate Investment Trusts: A Comprehensive Guide',
    excerpt: 'Learn about REITs and how they can diversify your investment portfolio...',
    category: 'Real Estate',
    date: 'Mar 13, 2024',
    readTime: '6 min read'
  }
];

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Latest Insights</h1>
          <p className="text-gray-600 mb-12">Expert analysis and trends in alternative investments</p>
          
          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <Link href={`/blogs/${post.id}`} key={post.id}>
                <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 cursor-pointer">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-600 mb-3">
                        {post.category}
                      </span>
                      <h2 className="text-2xl font-semibold mb-3">{post.title}</h2>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="ml-6">
                      <div className="w-24 h-24 bg-gray-100 rounded-lg"></div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 