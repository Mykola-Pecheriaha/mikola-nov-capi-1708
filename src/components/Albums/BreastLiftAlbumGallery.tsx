'use client';
import { GynecomastiaGallery, BeforeAfterImage } from '../Gynecomastia/GynecomastiaGallery';

const breastLiftImages: BeforeAfterImage[] = [
  {
    before: {
      src: '/images/albums/breast-lift/patient1-before.jpg',
      alt: 'Пацієнт 1 - До операції підтяжки грудей',
    },
    after: {
      src: '/images/albums/breast-lift/patient1-after.jpg',
      alt: 'Пацієнт 1 - Після операції підтяжки грудей',
    },
  },
  {
    before: {
      src: '/images/albums/breast-lift/patient2-before.jpg',
      alt: 'Пацієнт 2 - До операції підтяжки грудей',
    },
    after: {
      src: '/images/albums/breast-lift/patient2-after.jpg',
      alt: 'Пацієнт 2 - Після операції підтяжки грудей',
    },
  },
  {
    before: {
      src: '/images/albums/breast-lift/patient3-before.jpg',
      alt: 'Пацієнт 3 - До операції підтяжки грудей',
    },
    after: {
      src: '/images/albums/breast-lift/patient3-after.jpg',
      alt: 'Пацієнт 3 - Після операції підтяжки грудей',
    },
  },
];

export default function BreastLiftAlbumGallery() {
  return (
    <div className="w-full">
      <GynecomastiaGallery images={breastLiftImages} />
    </div>
  );
}
