'use client';
import { GynecomastiaGallery, BeforeAfterImage } from '../Gynecomastia/GynecomastiaGallery';

const breastAugmentationImages: BeforeAfterImage[] = [
  {
    before: {
      src: '/images/albums/breast1.jpg',
      alt: 'Пацієнт 1 - До операції збільшення груді',
    },
    after: {
      src: '/images/albums/breast2.jpg',
      alt: 'Пацієнт 1 - Після операції збільшення груді',
    },
  },
  {
    before: {
      src: '/images/albums/breast3.jpg',
      alt: 'Пацієнт 2 - До операції збільшення груді',
    },
    after: {
      src: '/images/albums/breast4.jpg',
      alt: 'Пацієнт 2 - Після операції збільшення груді',
    },
  },
  {
    before: {
      src: '/images/albums/breast5.jpg',
      alt: 'Пацієнт 3 - До операції збільшення груді',
    },
    after: {
      src: '/images/albums/breast6.jpg',
      alt: 'Пацієнт 3 - Після операції збільшення груді',
    },
  },
];

export default function BreastAugmentationAlbumGallery() {
  return (
    <div className="w-full">
      <GynecomastiaGallery images={breastAugmentationImages} />
    </div>
  );
}
