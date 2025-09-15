'use client'


import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon, 
  ClockIcon 
} from '@heroicons/react/24/outline'

export default function TopBar() {
  return (
    <div style={{ 
      backgroundColor: 'var(--topbar-bg)',
      color: 'var(--topbar-text)'
    }}>
      <div className="container-custom py-2">
        <div className="flex items-center justify-center w-full">
          {/* Контактна інформація */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <a href="tel:+380507575411" className="flex items-center hover:opacity-80">
              <PhoneIcon className="h-4 w-4 mr-2" />
              <span>+380 (50) 757-54-11</span>
            </a>
            <a href="mailto:Pecheryag@gmail.com" className="flex items-center hover:opacity-80">
              <EnvelopeIcon className="h-4 w-4 mr-2" />
              <span>Pecheryag@gmail.com</span>
            </a>
            <div className="flex items-center">
              <MapPinIcon className="h-4 w-4 mr-2" />
              <span>м. Чернівці, вул. Героїв Майдану, 226</span>
            </div>
            <div className="flex items-center">
              <ClockIcon className="h-4 w-4 mr-2" />
              <span>Пн-Пт: 9:00-16:00</span>
            </div>
          </div>
        </div>
        {/* Мобільна версія - тільки телефон */}
        <div className="lg:hidden flex justify-center mt-2">
          <a href="tel:+380507575411" className="flex items-center hover:opacity-80">
            <PhoneIcon className="h-4 w-4 mr-2" />
            <span>+380 (50) 757-54-11</span>
          </a>
        </div>
      </div>
    </div>
  )
}
