'use client';
import { GynecomastiaGallery, BeforeAfterImage } from '../Gynecomastia/GynecomastiaGallery';

const implantRemovalImages: BeforeAfterImage[] = [
  {
    before: {
      src: '/images/albums/implant-removal/patient1-before.jpg',
      alt: 'Пацієнт 1 - До видалення/заміни імплантів',
    },
    after: {
      src: '/images/albums/implant-removal/patient1-after.jpg',
      alt: 'Пацієнт 1 - Після видалення/заміни імплантів',
    },
  },
  {
    before: {
      src: '/images/albums/implant-removal/patient2-before.jpg',
      alt: 'Пацієнт 2 - До видалення/заміни імплантів',
    },
    after: {
      src: '/images/albums/implant-removal/patient2-after.jpg',
      alt: 'Пацієнт 2 - Після видалення/заміни імплантів',
    },
  },
  {
    before: {
      src: '/images/albums/implant-removal/patient3-before.jpg',
      alt: 'Пацієнт 3 - До видалення/заміни імплантів',
    },
    after: {
      src: '/images/albums/implant-removal/patient3-after.jpg',
      alt: 'Пацієнт 3 - Після видалення/заміни імплантів',
    },
  },
];

export default function ImplantRemovalAlbumGallery() {
  return (
    <div className="w-full">
      <GynecomastiaGallery images={implantRemovalImages} />
    </div>
  );
}
