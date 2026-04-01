import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Be Fit Gym - Sangareddy',
    short_name: 'Be Fit Gym',
    description: 'Premium fitness facility in Sangareddy with state-of-the-art equipment and expert trainers.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
