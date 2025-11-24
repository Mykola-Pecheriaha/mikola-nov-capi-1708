'use client';
import { GynecomastiaGallery, BeforeAfterImage } from '../Gynecomastia/GynecomastiaGallery';

const breastAugmentationImages: BeforeAfterImage[] = [
  {
    before: {
      src: '/images/albums/breast-augmentation/patient1-before.jpg',
      alt: 'Пацієнт 1 - До операції збільшення груді',
    },
    after: {
      src: '/images/albums/breast-augmentation/patient1-after.jpg',
      alt: 'Пацієнт 1 - Після операції збільшення груді',
    },
  },
  {
    before: {
      src: '/images/albums/breast-augmentation/patient2-before.jpg',
      alt: 'Пацієнт 2 - До операції збільшення груді',
    },
    after: {
      src: '/images/albums/breast-augmentation/patient2-after.jpg',
      alt: 'Пацієнт 2 - Після операції збільшення груді',
    },
  },
  {
    before: {
      src: '/images/albums/breast-augmentation/patient3-before.jpg',
      alt: 'Пацієнт 3 - До операції збільшення груді',
    },
    after: {
      src: '/images/albums/breast-augmentation/patient3-after.jpg',
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
