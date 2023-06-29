// our-domain.com/news
import Link from "next/link";

function NewsPage() {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/Next.js-is-a-great-framework">
            Next.js is great framework
          </Link>
        </li>
        <li>Something else</li>
      </ul>
    </>
  );
}

export default NewsPage;
