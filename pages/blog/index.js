import Link from 'next/link';
import { frontMatter } from './**/*.mdx';

const formatPath = p => p.replace(/\/index.mdx$/, '');

const BlogPage = () => (
  <>
    <h1 className="text-xl font-bold mb-4">All Blog Posts</h1>
    <ul className="list-inside list-disc">
      {frontMatter.map(page => (
        <li key={page.__resourcePath}>
          <Link href={formatPath(page.__resourcePath)}>
            <a className="hover:underline">{page.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </>
);

export default BlogPage;
