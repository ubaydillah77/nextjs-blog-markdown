import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Button, Card, PostDate, PostImageCard } from "../../components/Styled";
import styled from "styled-components";
import { marked } from "marked";
import Link from "next/link";
import Image from "next/image";

// STYLED COMPONENTS
const PostTitle = styled.h1`
  margin: 10px 0;
  color: ${({ theme }) => theme.fontColor};
`;

const PostBody = styled.div`
  color: ${({ theme }) => theme.bodyColor};

  ul,
  ol {
    font-size: 110%;
    line-height: 2.3;
    font-weight: bold;
    margin: 10px 0;
    color: ${({ theme }) => theme.bodyColor};
  }

  pre {
    background: #f4f4f4;
    padding: 20px;
    margin: 20px 0;
    line-height: 2.3;
    white-space: pre-wrap;
    word-break: break-all;
  }
`;

export default function PostPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) {
  return (
    <>
      <Link href="/">
        <Button back>Go Back</Button>
      </Link>
      <Card cardPage>
        <PostTitle>{title}</PostTitle>
        <PostDate>Posted on {date}</PostDate>

        <PostImageCard>
          <Image
            src={cover_image}
            alt={title}
            width="100%"
            height="60%"
            layout="responsive"
            objectFit="cover"
          />
        </PostImageCard>
        <PostBody>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </PostBody>
      </Card>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
