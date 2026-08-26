import { MetadataRoute } from 'next';
import { locationDetailsList } from '@/lib/locations-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.tailoredin.online';

  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
      images: [`${baseUrl}/Img/tailored-In-image.png`],
    },
  ];

  const locationPages: MetadataRoute.Sitemap = locationDetailsList.map((loc) => ({
    url: `${baseUrl}/locations/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
    images: [`${baseUrl}/Img/tailored-In-image.png`],
  }));

  return [...mainPages, ...locationPages];
}
