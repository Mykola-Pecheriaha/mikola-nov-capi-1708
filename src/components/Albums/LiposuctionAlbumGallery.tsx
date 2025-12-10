'use client';
import { GynecomastiaGallery, BeforeAfterImage } from '../Gynecomastia/GynecomastiaGallery';

const liposuctionImages: BeforeAfterImage[] = [
  {
    before: {
      src: '/images/albums/liposuction/patient1-before.jpg',
      alt: 'Пацієнт 1 - До ліпосакції',
    },
    after: {
      src: '/images/albums/liposuction/patient1-after.jpg',
      alt: 'Пацієнт 1 - Після ліпосакції',
    },
  },
  {
    before: {
      src: '/images/albums/liposuction/patient2-before.jpg',
      alt: 'Пацієнт 2 - До ліпосакції',
    },
    after: {
      src: '/images/albums/liposuction/patient2-after.jpg',
      alt: 'Пацієнт 2 - Після ліпосакції',
    },
  },
  {
    before: {
      src: '/images/albums/liposuction/patient3-before.jpg',
      alt: 'Пацієнт 3 - До ліпосакції',
    },
    after: {
      src: '/images/albums/liposuction/patient3-after.jpg',
      alt: 'Пацієнт 3 - Після ліпосакції',
    },
  },
];

export default function LiposuctionAlbumGallery() {
  return (
    <div className="w-full">
      <GynecomastiaGallery images={liposuctionImages} />
    </div>
  );
}
