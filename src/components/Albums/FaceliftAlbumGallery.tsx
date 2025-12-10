'use client';
import { GynecomastiaGallery, BeforeAfterImage } from '../Gynecomastia/GynecomastiaGallery';

const faceliftImages: BeforeAfterImage[] = [
  {
    before: {
      src: '/images/albums/facelift/patient1-before.jpg',
      alt: 'Пацієнт 1 - До підтяжки обличчя',
    },
    after: {
      src: '/images/albums/facelift/patient1-after.jpg',
      alt: 'Пацієнт 1 - Після підтяжки обличчя',
    },
  },
  {
    before: {
      src: '/images/albums/facelift/patient2-before.jpg',
      alt: 'Пацієнт 2 - До підтяжки обличчя',
    },
    after: {
      src: '/images/albums/facelift/patient2-after.jpg',
      alt: 'Пацієнт 2 - Після підтяжки обличчя',
    },
  },
  {
    before: {
      src: '/images/albums/facelift/patient3-before.jpg',
      alt: 'Пацієнт 3 - До підтяжки обличчя',
    },
    after: {
      src: '/images/albums/facelift/patient3-after.jpg',
      alt: 'Пацієнт 3 - Після підтяжки обличчя',
    },
  },
];

export default function FaceliftAlbumGallery() {
  return (
    <div className="w-full">
      <GynecomastiaGallery images={faceliftImages} />
    </div>
  );
}
