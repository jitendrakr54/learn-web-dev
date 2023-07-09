import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Image from "next/image";
import { Prism } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";

export default function PostContent({ post }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  console.log(`/images/posts/${post.slug}/`);

  const customRenderes = {
    img: (image) => {
      return (
        <Image
          src={`/images/posts/${post.slug}/${image.src}`}
          alt={image.alt}
          width={600}
          height={300}
        />
      );
    },

    code: (code) => {
      const { language, value } = code;
      return (
        <Prism style={atomDark} language={language}>
          {value}
        </Prism>
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderes}>{post.content}</ReactMarkdown>
    </article>
  );
}
