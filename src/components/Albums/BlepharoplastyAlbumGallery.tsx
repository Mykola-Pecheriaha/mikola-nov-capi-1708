'use client';
import { GynecomastiaGallery, BeforeAfterImage } from '../Gynecomastia/GynecomastiaGallery';

const blepharoplastyImages: BeforeAfterImage[] = [
  {
    before: {
      src: '/images/albums/blepharoplasty/patient1-before.jpg',
      alt: 'Пацієнт 1 - До блефаропластики',
    },
    after: {
      src: '/images/albums/blepharoplasty/patient1-after.jpg',
      alt: 'Пацієнт 1 - Після блефаропластики',
    },
  },
  {
    before: {
      src: '/images/albums/blepharoplasty/patient2-before.jpg',
      alt: 'Пацієнт 2 - До блефаропластики',
    },
    after: {
      src: '/images/albums/blepharoplasty/patient2-after.jpg',
      alt: 'Пацієнт 2 - Після блефаропластики',
    },
  },
  {
    before: {
      src: '/images/albums/blepharoplasty/patient3-before.jpg',
      alt: 'Пацієнт 3 - До блефаропластики',
    },
    after: {
      src: '/images/albums/blepharoplasty/patient3-after.jpg',
      alt: 'Пацієнт 3 - Після блефаропластики',
    },
  },
];

export default function BlepharoplastyAlbumGallery() {
  return (
    <div className="w-full">
      <GynecomastiaGallery images={blepharoplastyImages} />
    </div>
  );
}
