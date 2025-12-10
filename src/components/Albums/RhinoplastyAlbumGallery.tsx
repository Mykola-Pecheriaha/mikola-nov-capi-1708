'use client';
import { GynecomastiaGallery, BeforeAfterImage } from '../Gynecomastia/GynecomastiaGallery';

const rhinoplastyImages: BeforeAfterImage[] = [
  {
    before: {
      src: '/images/albums/rhinoplasty/patient1-before.jpg',
      alt: 'Пацієнт 1 - До ринопластики',
    },
    after: {
      src: '/images/albums/rhinoplasty/patient1-after.jpg',
      alt: 'Пацієнт 1 - Після ринопластики',
    },
  },
  {
    before: {
      src: '/images/albums/rhinoplasty/patient2-before.jpg',
      alt: 'Пацієнт 2 - До ринопластики',
    },
    after: {
      src: '/images/albums/rhinoplasty/patient2-after.jpg',
      alt: 'Пацієнт 2 - Після ринопластики',
    },
  },
  {
    before: {
      src: '/images/albums/rhinoplasty/patient3-before.jpg',
      alt: 'Пацієнт 3 - До ринопластики',
    },
    after: {
      src: '/images/albums/rhinoplasty/patient3-after.jpg',
      alt: 'Пацієнт 3 - Після ринопластики',
    },
  },
];

export default function RhinoplastyAlbumGallery() {
  return (
    <div className="w-full">
      <GynecomastiaGallery images={rhinoplastyImages} />
    </div>
  );
}
