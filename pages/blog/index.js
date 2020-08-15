import Link from 'next/link';
import Seo from '../../components/seo';
import { frontMatter } from './**/*.mdx';
import moment from 'moment';

const formatPath = p => p.replace(/\/index.mdx$/, '');

const BlogPage = () => (
  <>
    <Seo
      title={'Blog'}
      description={'Get awesome free content that helps you improve your design and web development skills.'}
      ogImageUrl={'/images/photo.png'}
    />
    <ul className="space-y-6">
      {frontMatter.map(page => (
        <li key={page.__resourcePath}>
          <div className="md:flex justify-between items-start mb-2">
            <Link href={formatPath(page.__resourcePath)}>
              <a className="hover:underline font-semibold text-xl md:pr-10 font-sans">{page.title}</a>
            </Link>
            <div className="text-gray-700 whitespace-no-wrap">{moment(page.published).format('MMMM Do YYYY')}</div>
          </div>
          <div className="text-gray-800">{page.description}</div>
        </li>
      ))}
    </ul>
  </>
);

export default BlogPage;
