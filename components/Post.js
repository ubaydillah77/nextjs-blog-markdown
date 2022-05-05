import Link from "next/link";
import Image from "next/image";

const Post = ({ post }) => {
  return (
    <div className="card">
      {/* <img src={post.frontmatter.cover_image} alt={post.frontmatter.title} />
       */}

      <div className="card-image">
        <Image
          src={post.frontmatter.cover_image}
          alt={post.frontmatter.title}
          width="100%"
          height="60%"
          layout="responsive"
          objectFit="cover"
        />
      </div>

      <div className="post-date">Posted on {post.frontmatter.date}</div>

      <h3>{post.frontmatter.title}</h3>
      <p>{post.frontmatter.excerpt}</p>
      <Link href={`/blog/${post.slug}`}>
        <a className="btn">Readmore</a>
      </Link>
    </div>
  );
};

export default Post;
