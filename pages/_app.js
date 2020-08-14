import Header from '../components/header';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import '../css/tailwind.css';

const App = ({ Component, pageProps }) => (
  <div className="px-4 sm:px-6 md:px-0 my-20 mx-auto max-w-2xl font-serif text-gray-900">
    <DefaultSeo {...SEO} />
    <Header />
    <Component {...pageProps} />
  </div>
);

export default App;
