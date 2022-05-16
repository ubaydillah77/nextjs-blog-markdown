import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import styled from "styled-components";
import Post from "../components/Post";
import { sortByDate } from "../utils";

const Title = styled.h1`
  color: #054861;
`;

const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 30px;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Ubay blog | Build with Nextjs & Markdown</title>
      </Head>

      <Title className="home-title">My Daily Post</Title>

      <Posts>
        {posts.map((post, i) => (
          <Post post={post} key={i} />
        ))}
      </Posts>
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
