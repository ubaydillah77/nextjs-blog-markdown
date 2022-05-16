import Link from "next/link";
import Image from "next/image";
import { Button, PostDate, Card, PostImageCard } from "./Styled";
import styled from "styled-components";

const Title = styled.h3`
  color: ${({ theme }) => theme.fontColor};
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.bodyColor};
`;

const Post = ({ post }) => {
  return (
    <Card>
      <PostImageCard>
        <Image
          src={post.frontmatter.cover_image}
          alt={post.frontmatter.title}
          width="100%"
          height="60%"
          layout="responsive"
          objectFit="cover"
        />
      </PostImageCard>

      <PostDate>Posted on {post.frontmatter.date}</PostDate>

      <Title>{post.frontmatter.title}</Title>
      <Subtitle>{post.frontmatter.excerpt}</Subtitle>

      <Link href={`/blog/${post.slug}`}>
        <Button>Readmore</Button>
      </Link>
    </Card>
  );
};

export default Post;
