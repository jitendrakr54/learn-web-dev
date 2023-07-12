import { Fragment } from "react";
import Head from "next/head";
import Hero from "@/components/home/hero";
import FeaturedPosts from "@/components/home/featured-posts";
import { getFeaturedPosts } from "@/lib/posts-util";

export default function Home({ posts }) {
  return (
    <Fragment>
      <Head>
        <title>Jit's Blog</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 60,
  };
}
