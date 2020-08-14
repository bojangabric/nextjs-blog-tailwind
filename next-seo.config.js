const title = 'Freelance Web Developer – Bojan Gabric';
const description =
  'Bojan Gabric is a Freelance Web Developer who produces high-quality websites that provide an exceptional user experience.';

const SEO = {
  title,
  description,
  canonical: 'https://bojangabric.com',
  openGraph: {
    type: 'website',
    url: 'https://bojangabric.com',
    title,
    description,
    images: [
      {
        url: 'https://bojangabric.com/images/photo.png',
        alt: title
      }
    ]
  },
  twitter: {
    handle: '@bojangabric',
    site: '@bojangabric',
    cardType: 'summary'
  }
};

export default SEO;
