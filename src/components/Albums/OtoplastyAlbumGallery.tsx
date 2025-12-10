'use client';
import { GynecomastiaGallery, BeforeAfterImage } from '../Gynecomastia/GynecomastiaGallery';

const otoplastyImages: BeforeAfterImage[] = [
  {
    before: {
      src: '/images/albums/otoplasty/patient1-before.jpg',
      alt: 'Пацієнт 1 - До отопластики',
    },
    after: {
      src: '/images/albums/otoplasty/patient1-after.jpg',
      alt: 'Пацієнт 1 - Після отопластики',
    },
  },
  {
    before: {
      src: '/images/albums/otoplasty/patient2-before.jpg',
      alt: 'Пацієнт 2 - До отопластики',
    },
    after: {
      src: '/images/albums/otoplasty/patient2-after.jpg',
      alt: 'Пацієнт 2 - Після отопластики',
    },
  },
  {
    before: {
      src: '/images/albums/otoplasty/patient3-before.jpg',
      alt: 'Пацієнт 3 - До отопластики',
    },
    after: {
      src: '/images/albums/otoplasty/patient3-after.jpg',
      alt: 'Пацієнт 3 - Після отопластики',
    },
  },
];

export default function OtoplastyAlbumGallery() {
  return (
    <div className="w-full">
      <GynecomastiaGallery images={otoplastyImages} />
    </div>
  );
}
