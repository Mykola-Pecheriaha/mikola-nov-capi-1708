'use client';
import { GynecomastiaGallery, BeforeAfterImage } from '../Gynecomastia/GynecomastiaGallery';

const gynecomastiaImages: BeforeAfterImage[] = [
  {
    before: {
      src: '/images/albums/gynecomastia/patient1-before.jpg',
      alt: 'Пацієнт 1 - До операції гінекомастії',
    },
    after: {
      src: '/images/albums/gynecomastia/patient1-after.jpg',
      alt: 'Пацієнт 1 - Після операції гінекомастії',
    },
  },
  {
    before: {
      src: '/images/albums/gynecomastia/patient2-before.jpg',
      alt: 'Пацієнт 2 - До операції гінекомастії',
    },
    after: {
      src: '/images/albums/gynecomastia/patient2-after.jpg',
      alt: 'Пацієнт 2 - Після операції гінекомастії',
    },
  },
  {
    before: {
      src: '/images/albums/gynecomastia/patient3-before.jpg',
      alt: 'Пацієнт 3 - До операції гінекомастії',
    },
    after: {
      src: '/images/albums/gynecomastia/patient3-after.jpg',
      alt: 'Пацієнт 3 - Після операції гінекомастії',
    },
  },
];

export default function GynecomastiaAlbumGallery() {
  return (
    <div className="w-full">
      <GynecomastiaGallery images={gynecomastiaImages} />
    </div>
  );
}
