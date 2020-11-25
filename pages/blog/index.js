import Link from 'next/link';
import Seo from '../../components/seo';
import { format } from 'date-fns';
import { frontMatter } from './**/*.mdx';

const formatPath = p => p.replace(/\/index.mdx$/, '');

const BlogPage = () => (
  <>
    <Seo
      title={'Blog'}
      description={'Awesome free content that helps you improve your design and web development skills.'}
      canonical={'https://bojangabric.com/blog'}
    />
    <h1 className="font-sans font-bold text-3xl lg:text-5xl leading-tight mb-6 md:mb-16">Blog</h1>

    <ul className="space-y-10">
      {frontMatter.reverse().map(page => (
        <li key={page.__resourcePath}>
          <div className="md:flex justify-between mb-2">
            <h2 className="md:mr-10">
              <Link href={`/${formatPath(page.__resourcePath)}`}>
                <a className="font-semibold text-xl leading-snug hover:underline font-sans">{page.title}</a>
              </Link>
            </h2>
            <span className="text-gray-600 whitespace-nowrap text-sm mt-px">
              {format(new Date(page.published), 'LLLL do, yyyy')}
            </span>
          </div>
          <p className="text-gray-800">{page.description}</p>
        </li>
      ))}
    </ul>
  </>
);

export default BlogPage;
