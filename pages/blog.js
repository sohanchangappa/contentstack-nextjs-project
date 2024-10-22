import Stack from "../lib/contentstack";

export async function getStaticProps() {
  const response = await Stack.ContentType('blog')
    .Query()
    .toJSON()
    .find();

  const blogData = response;

  return {
    props: { blogData },
  };
}

export default function Blog({ blogData }) {
  return (
    <div>
      <h1>Blog</h1>
      
      <div>
        {blogData.map((post, index) => (
          <div key={index}>
            <h2>{post.title}</h2>
            <p><strong>Author:</strong> {post.author}</p>
            <p><strong>Published on:</strong> {new Date(post.published_date).toDateString()}</p>
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
          </div>
        ))}
      </div>
    </div>
  );
}
