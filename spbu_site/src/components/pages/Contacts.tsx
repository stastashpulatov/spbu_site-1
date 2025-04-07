import React from 'react';
import './Contacts.scss';

const socialLinks = [
  { title: 'Telegram', image: '/images/Telegram.png', link: 'https://t.me/spbutashkent' },
  { title: 'Instagram', image: '/images/Instagram.png', link: 'https://www.instagram.com/spbdu.tashkent/' },
  { title: 'Facebook', image: '/images/Facebook.png', link: 'https://www.facebook.com/SPbDU/' },
  { title: '@', image: '/images/@.png', link: 'https://www.threads.net/@spbdu.tashkent' },
  { title: 'VK', image: '/images/VK.png', link: 'https://vk.com/spb1724' }
];

const Contacts: React.FC = () => {
  const handleMapClick = () => {
    window.open('https://yandex.uz/maps/10335/tashkent/?ll=69.274967%2C41.298310&mode=routes&rtext=41.298578%2C69.274385~41.298411%2C69.274599&rtt=auto&ruri=~&z=17.68', '_blank');
  };

  return (
    <div className="contacts">
      <div className="top-section">
        <div className="institute-image">
          <img src="/images/Institut.jpg" alt="SPbU Building" />
        </div>
        <div className="contact-info">
          <p><strong>Адрес:</strong> 100060, Республика Узбекистан, г. Ташкент, Мирабадский район, ул. Шахрисабз, д. 16 (метро Айбек)</p>
          <p>Бывшее здание Ташкентского государственного университета востоковедения</p>
          <p><strong>E-mail:</strong> ft@spbu.ru</p>
          <p><strong>Телефоны:</strong> +998 97 735 48 05, +998 99 573 49 83</p>
        </div>
      </div>
      
      <div className="map-container" onClick={handleMapClick} style={{ cursor: 'pointer' }}>
        <iframe 
          title="SPbU Tashkent Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187.25056088908963!2d69.27446!3d41.29841!2m3!1f45!2f45!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b5341c0de2b%3A0x76bf71ed96e8a76e!2z0KjQsNGF0YDQuNGB0LDQsdC3IDE2!5e1!3m2!1sru!2s!4v1710588676477!5m2!1sru!2s&maptype=hybrid"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="map-overlay">Нажмите для просмотра маршрута в Яндекс Картах</div>
      </div>

      <div className="geolocation-info">
        <p>
          Геолокация: Mirabad district, Shakhrisabz street, 16, Tashkent, Uzbekistan 100047.{' '}
          <a 
            href="https://yandex.uz/maps/10335/tashkent/?ll=69.274967%2C41.298310&mode=routes&rtext=41.298578%2C69.274385~41.298411%2C69.274599&rtt=auto&ruri=~&z=17.68"
            target="_blank"
            rel="noopener noreferrer"
          >
            Яндекс карты
          </a>
        </p>
      </div>

      <div className="social-links">
        {socialLinks.map((social, index) => (
          <a 
            key={index} 
            href={social.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-button"
          >
            <img src={social.image} alt={social.title} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
