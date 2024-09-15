
import Link  from 'next/link';

export default function NewsPage() {
  return (
    <>
      <h1>The news page</h1>;
      <ul>
        <Link href="/news/1">
          <li>Next jss iss great </li>
        </Link>
        <li>Next jss iss great </li>
        <li>Next jss iss great </li>
      </ul>
    </>
  );
}
