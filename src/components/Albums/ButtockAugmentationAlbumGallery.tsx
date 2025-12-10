'use client';
import { GynecomastiaGallery, BeforeAfterImage } from '../Gynecomastia/GynecomastiaGallery';

const buttockAugmentationImages: BeforeAfterImage[] = [
  {
    before: {
      src: '/images/albums/buttock-augmentation/patient1-before.jpg',
      alt: 'Пацієнт 1 - До збільшення сідниць',
    },
    after: {
      src: '/images/albums/buttock-augmentation/patient1-after.jpg',
      alt: 'Пацієнт 1 - Після збільшення сідниць',
    },
  },
  {
    before: {
      src: '/images/albums/buttock-augmentation/patient2-before.jpg',
      alt: 'Пацієнт 2 - До збільшення сідниць',
    },
    after: {
      src: '/images/albums/buttock-augmentation/patient2-after.jpg',
      alt: 'Пацієнт 2 - Після збільшення сідниць',
    },
  },
  {
    before: {
      src: '/images/albums/buttock-augmentation/patient3-before.jpg',
      alt: 'Пацієнт 3 - До збільшення сідниць',
    },
    after: {
      src: '/images/albums/buttock-augmentation/patient3-after.jpg',
      alt: 'Пацієнт 3 - Після збільшення сідниць',
    },
  },
];

export default function ButtockAugmentationAlbumGallery() {
  return (
    <div className="w-full">
      <GynecomastiaGallery images={buttockAugmentationImages} />
    </div>
  );
}
