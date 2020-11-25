const title = 'Freelance Web Developer';
const description =
  'Bojan Gabric is a Freelance Web Developer who produces high-quality websites that provide an exceptional user experience.';

const SeoConfig = {
  title,
  description,
  titleTemplate: '%s - Bojan Gabric',
  canonical: 'https://bojangabric.com',
  openGraph: {
    type: 'website',
    url: 'https://bojangabric.com',
    title: `${title} - Bojan Gabric`,
    description,
    images: [
      {
        url: 'https://bojangabric.com/images/cover-photo.png',
        alt: title
      }
    ]
  },
  twitter: {
    handle: '@bojangabric',
    site: '@bojangabric',
    cardType: 'summary_large_image'
  }
};

export default SeoConfig;
