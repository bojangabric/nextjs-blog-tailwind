import Seo from '../components/seo';
import { useRouter } from 'next/router';

const Layout = ({ children, frontMatter }) => {
  const router = useRouter();

  return (
    <>
      <Seo
        title={frontMatter.title}
        description={frontMatter.description}
        canonical={`https://bojangabric.com${router.pathname}`}
      />
      <div>
        <h1 className="font-sans font-bold text-3xl lg:text-5xl leading-tight text-center">{frontMatter.title}</h1>
        <div className="markdown">{children}</div>
      </div>
    </>
  );
};

export default Layout;
