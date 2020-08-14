import { NextSeo } from 'next-seo';

const Seo = ({ title, description, ogImageUrl }) => {
  return (
    <NextSeo
      title={`${title} - Bojan Gabric`}
      description={description}
      openGraph={{
        title,
        description,
        images: [
          {
            url: `https://bojangabric.com/${ogImageUrl}`,
            alt: title
          }
        ]
      }}
    />
  );
};

export default Seo;
