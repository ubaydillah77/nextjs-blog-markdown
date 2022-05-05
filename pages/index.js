import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Post from "../components/Post";
import { sortByDate } from "../utils";

export default function Home({ posts }) {
  // console.log(posts);
  return (
    <div>
      <Head>
        <title>Ubay blog | Build with Nextjs & Markdown</title>
      </Head>

      <h1 className="home-title">My Daily Post</h1>
      <div className="posts">
        {posts.map((post, i) => (
          <Post post={post} key={i} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // get posts files
  const files = fs.readdirSync(path.join("posts"));

  // get Slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  // console.log(posts);

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
