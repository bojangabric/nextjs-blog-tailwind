import { NextSeo } from 'next-seo';

const Seo = ({ title, description, ogImageUrl, canonical }) => {
  const image = ogImageUrl && [
    {
      url: `https://bojangabric.com/${ogImageUrl}`,
      alt: title
    }
  ];

  return (
    <NextSeo
      title={title}
      description={description}
      canonical={canonical}
      openGraph={{
        title: `${title} - Bojan Gabric`,
        description,
        images: image
      }}
    />
  );
};

export default Seo;
