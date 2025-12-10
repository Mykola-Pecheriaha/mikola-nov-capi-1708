'use client';
import { GynecomastiaGallery, BeforeAfterImage } from '../Gynecomastia/GynecomastiaGallery';

const armLiftImages: BeforeAfterImage[] = [
  {
    before: {
      src: '/images/albums/arm-lift/patient1-before.jpg',
      alt: 'Пацієнт 1 - До підтяжки рук',
    },
    after: {
      src: '/images/albums/arm-lift/patient1-after.jpg',
      alt: 'Пацієнт 1 - Після підтяжки рук',
    },
  },
  {
    before: {
      src: '/images/albums/arm-lift/patient2-before.jpg',
      alt: 'Пацієнт 2 - До підтяжки рук',
    },
    after: {
      src: '/images/albums/arm-lift/patient2-after.jpg',
      alt: 'Пацієнт 2 - Після підтяжки рук',
    },
  },
  {
    before: {
      src: '/images/albums/arm-lift/patient3-before.jpg',
      alt: 'Пацієнт 3 - До підтяжки рук',
    },
    after: {
      src: '/images/albums/arm-lift/patient3-after.jpg',
      alt: 'Пацієнт 3 - Після підтяжки рук',
    },
  },
];

export default function ArmLiftAlbumGallery() {
  return (
    <div className="w-full">
      <GynecomastiaGallery images={armLiftImages} />
    </div>
  );
}
