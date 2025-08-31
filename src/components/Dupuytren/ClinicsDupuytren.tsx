import React from "react";
import { GalleryDupuytrenClinic } from "./GalleryDupuytrenClinic";

const ClinicsDupuytren: React.FC = () => {
  return (
  <div className="container mx-auto px-4 mt-12">
      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch">
        {/* Ліва частина: текст */}
        <div className="md:w-2/3 w-full flex flex-col">
          <h2 className="text-2xl font-bold mb-4">
            <span className="font-semibold">Клінічні прояви</span> контрактура Дюпюїтрена
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-base">
            <li><span className="font-bold text-blue-900">Наявність ущільнення на долоні</span>, що виглядає як вузлик або тяжа (ущільнення може бути одиничним або множинним).</li>
            <li><span className="font-bold text-blue-900">Положення пальців</span> у стані згинання.</li>
            <li><span className="font-bold text-blue-900">Обмежена розгинальна функція</span> у п’ястно-фаланговому та/або міжфаланговому зчленуванні.</li>
            <li><span className="font-bold text-blue-900">Виникнення опуклостей</span> та втягувань на долоні.</li>
            <li><span className="font-bold text-blue-900">Біль у більшості випадків відсутній.</span> Лише кожного десятого пацієнта турбує біль з локалізацією на долонній поверхні, що може поширюватися у верхні сегменти руки.</li>
          </ul>
        </div>
        {/* Права частина: галерея */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <GalleryDupuytrenClinic />
        </div>
      </div>

      {/* Info card: summary text, full width, styled as в попередніх компонентах */}
      <div className="container mx-auto px-4">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-xl shadow p-6 mt-8 text-base text-gray-900 flex items-start gap-3">
          <span className="text-2xl mt-1 select-none">ℹ️</span>
          <span className="block">
            Таким  чином контрактура Дюпюїтрена (синонім - долонний фіброматоз) - безболісне рубцеве переродження і укорочення долонних сухожиль, що призводить до згинальної деформації і втрати функції кисті.<br />
            Обовязково треба проводити дифірінцювальну діагностику з такими захворюваннями як <span className="font-semibold text-blue-900">теносіновіти - запалення сухожиль, пухлини кисті, склеродермія, ішемічна контрактура і ревматоїдний артрит</span>.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ClinicsDupuytren;
