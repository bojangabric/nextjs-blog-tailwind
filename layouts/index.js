import Seo from '../components/seo';
import moment from 'moment';

const Layout = frontMatter => ({ children: content }) => (
  <>
    <Seo title={frontMatter.title} description={frontMatter.description} ogImageUrl={frontMatter.ogImage} />
    <div>
      <div className="text-lg text-gray-700">{moment(frontMatter.published).format('MMMM Do YYYY')}</div>
      <h1 className="font-sans font-bold text-3xl lg:text-5xl leading-tight">{frontMatter.title}</h1>
      <div className="markdown">{content}</div>
    </div>
  </>
);

export default Layout;
