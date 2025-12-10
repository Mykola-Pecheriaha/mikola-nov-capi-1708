'use client';
import { GynecomastiaGallery, BeforeAfterImage } from '../Gynecomastia/GynecomastiaGallery';

const abdominoplastyImages: BeforeAfterImage[] = [
  {
    before: {
      src: '/images/albums/abdominoplasty/patient1-before.jpg',
      alt: 'Пацієнт 1 - До абдомінопластики',
    },
    after: {
      src: '/images/albums/abdominoplasty/patient1-after.jpg',
      alt: 'Пацієнт 1 - Після абдомінопластики',
    },
  },
  {
    before: {
      src: '/images/albums/abdominoplasty/patient2-before.jpg',
      alt: 'Пацієнт 2 - До абдомінопластики',
    },
    after: {
      src: '/images/albums/abdominoplasty/patient2-after.jpg',
      alt: 'Пацієнт 2 - Після абдомінопластики',
    },
  },
  {
    before: {
      src: '/images/albums/abdominoplasty/patient3-before.jpg',
      alt: 'Пацієнт 3 - До абдомінопластики',
    },
    after: {
      src: '/images/albums/abdominoplasty/patient3-after.jpg',
      alt: 'Пацієнт 3 - Після абдомінопластики',
    },
  },
];

export default function AbdominoplastyAlbumGallery() {
  return (
    <div className="w-full">
      <GynecomastiaGallery images={abdominoplastyImages} />
    </div>
  );
}
