import { useParams, Link } from 'react-router-dom';
import '../styles/BlogPost.css';

const BlogPost = () => {
  const { id } = useParams();

  const blogPosts = {
    1: { 
      title: 'Getting Started with React', 
      author: 'John Doe',
      date: '2024-01-15',
      content: 'React is a powerful JavaScript library for building user interfaces with reusable components.'
    },
    2: { 
      title: 'Understanding Hooks', 
      author: 'Jane Smith',
      date: '2024-02-10',
      content: 'React Hooks allow you to use state and other React features without writing a class component.'
    },
    3: { 
      title: 'Routing in React', 
      author: 'Bob Johnson',
      date: '2024-02-20',
      content: 'React Router provides powerful routing capabilities to create single-page applications.'
    },
  };

  const post = blogPosts[id];

  if (!post) {
    return (
      <div className="blog-post-container">
        <h1>Blog Post Not Found</h1>
        <p>The blog post with ID {id} does not exist.</p>
        <Link to="/">Go back to Home</Link>
      </div>
    );
  }

  return (
    <div className="blog-post-container">
      <article className="blog-article">
        <h1>{post.title}</h1>
        <div className="blog-meta">
          <span className="author">By {post.author}</span>
          <span className="date">{post.date}</span>
        </div>
        <div className="blog-content">
          <p>{post.content}</p>
        </div>
      </article>
      <Link to="/" className="back-link">← Back to Home</Link>
    </div>
  );
};

export default BlogPost;
