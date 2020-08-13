import Link from 'next/link';

const Header = () => (
  <div className="mb-20 flex justify-between">
    <div>Logo</div>
    <div className="space-x-10">
      <Link href="/">
        <a className="hover:underline">Home</a>
      </Link>
      <Link href="/blog">
        <a className="hover:underline">Blog</a>
      </Link>
    </div>
  </div>
);

export default Header;
