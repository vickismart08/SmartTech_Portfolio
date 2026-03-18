import './Blog.css';

const posts = [
  {
    title: 'Building Scalable APIs with Node.js',
    date: 'Feb 20, 2025',
    category: 'Backend',
    excerpt: 'Best practices for designing and scaling RESTful APIs.',
  },
  {
    title: 'React Performance Optimization Tips',
    date: 'Feb 15, 2025',
    category: 'Frontend',
    excerpt: 'How to make your React apps faster with memoization and lazy loading.',
  },
  {
    title: 'Docker for Development Workflows',
    date: 'Feb 10, 2025',
    category: 'DevOps',
    excerpt: 'Setting up reproducible development environments with containers.',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="blog">
      <div className="section">
        <h2 className="section-title">My <span className="accent">Blog</span></h2>
        <p className="section-subtitle">
          Technical articles and insights from my journey
        </p>
        <div className="blog-grid">
          {posts.map((post) => (
            <article key={post.title} className="blog-card">
              <div className="blog-image">
                <span>{post.category[0]}</span>
              </div>
              <div className="blog-content">
                <span className="blog-meta">{post.date} · {post.category}</span>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <a href="#" className="blog-link">Read More →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
