export const data = {
  en: {
    header: {
      bgImageLandscape: [
        require('./assets/images/bg-1.jpg'),
        require('./assets/images/bg-2.jpg'),
        require('./assets/images/bg-3.jpg'),
      ],
      bgImagePortrait: [
        require('./assets/images/bg-4.jpg'),
        require('./assets/images/bg-5.jpg'),
        require('./assets/images/bg-6.jpg'),
      ],
      bridegroom: 'Dicky & Ira',
      desc: 'ARE GETTING MARRIED',
      date: 'DECEMBER 12TH, 2020',
      timestamp: 1607775132000,
      ongoing: 'ONGOING',
      days: 'DAYS',
      hours: 'HOURS',
      minutes: 'MINUTES',
      seconds: 'SECONDS',
    },
    navbar: {
      brand: 'D & I',
      nav: [
        { to: 'header', text: 'Home' },
        { to: 'couple', text: 'Couple' },
        { to: 'events', text: 'Events' },
        { to: 'moment', text: 'Moment' },
        { to: 'location', text: 'Location' },
      ],
    },
    couple: {
      title: 'Meet Happy Couple',
      groom: {
        name: 'DICKY MUHAMAD RIZKY',
        photo: require('./assets/images/couple/1.jpg'),
        status: 'GROOM',
        socmed: {
          facebook: '',
          twitter: '',
          instagram: 'https://www.instagram.com/dickymr_/',
        },
        description: 'The first son of Aan Kandarjaya and Maria Antoniqeu',
      },
      bride: {
        name: 'IRA SRI QODARWATI',
        photo: require('./assets/images/couple/2.jpg'),
        status: 'BRIDE',
        socmed: {
          facebook: '',
          twitter: '',
          instagram: 'https://www.instagram.com/irasq_/',
        },
        description:
          'The third daughter of Dedi Rahmat Suardi and Entin Wartini',
      },
    },
    events: {
      ceremony: {
        type: 'ceremony',
        foto: require('./assets/images/events/ceremony.png'),
        title: 'THE CEREMONY',
        date: 'Saturday, July 18th 2020',
        time: '02.00 PM - 05.00 PM',
        address: {
          line1: 'Kp. Nagla Ds. Sukapura',
          line2: 'Kec. Kertasari Kab. Bandung',
          line3: '',
        },
      },
      reception: {
        type: 'reception',
        foto: require('./assets/images/events/reception.png'),
        title: 'THE RECEPTION',
        date: 'Saturday, September 5th 2020',
        time: '10.00 AM - 04.00 PM',
        address: {
          line1: 'Kampung Budaya',
          line2: 'Jl. Pasir Garut RT. 01 RW. 08 Ds. Wangisagara',
          line3: 'Kec. Majalaya Kab. Bandung',
        },
      },
    },
    moment: {
      images: [
        {
          src: require('./assets/images/moment/1.jpg'),
          thumbnail: require('./assets/images/moment/thumbnails/1.jpg'),
          thumbnailWidth: 320,
          thumbnailHeight: 200,
        },
        {
          src: require('./assets/images/moment/2.jpg'),
          thumbnail: require('./assets/images/moment/thumbnails/2.jpg'),
          thumbnailWidth: 240,
          thumbnailHeight: 320,
        },
        {
          src: require('./assets/images/moment/3.jpg'),
          thumbnail: require('./assets/images/moment/thumbnails/3.jpg'),
          thumbnailWidth: 320,
          thumbnailHeight: 200,
        },
        {
          src: require('./assets/images/moment/4.jpg'),
          thumbnail: require('./assets/images/moment/thumbnails/4.jpg'),
          thumbnailWidth: 240,
          thumbnailHeight: 320,
        },
        {
          src: require('./assets/images/moment/5.jpg'),
          thumbnail: require('./assets/images/moment/thumbnails/5.jpg'),
          thumbnailWidth: 320,
          thumbnailHeight: 200,
        },
        {
          src: require('./assets/images/moment/6.jpg'),
          thumbnail: require('./assets/images/moment/thumbnails/6.jpg'),
          thumbnailWidth: 240,
          thumbnailHeight: 320,
        },
        {
          src: require('./assets/images/moment/7.jpg'),
          thumbnail: require('./assets/images/moment/thumbnails/7.jpg'),
          thumbnailWidth: 320,
          thumbnailHeight: 200,
        },
        {
          src: require('./assets/images/moment/8.jpg'),
          thumbnail: require('./assets/images/moment/thumbnails/8.jpg'),
          thumbnailWidth: 320,
          thumbnailHeight: 200,
        },
        {
          src: require('./assets/images/moment/9.jpg'),
          thumbnail: require('./assets/images/moment/thumbnails/9.jpg'),
          thumbnailWidth: 240,
          thumbnailHeight: 320,
        },
        {
          src: require('./assets/images/moment/10.jpg'),
          thumbnail: require('./assets/images/moment/thumbnails/10.jpg'),
          thumbnailWidth: 320,
          thumbnailHeight: 200,
        },
        {
          src: require('./assets/images/moment/11.jpg'),
          thumbnail: require('./assets/images/moment/thumbnails/11.jpg'),
          thumbnailWidth: 240,
          thumbnailHeight: 320,
        },
        {
          src: require('./assets/images/moment/12.jpg'),
          thumbnail: require('./assets/images/moment/thumbnails/12.jpg'),
          thumbnailWidth: 320,
          thumbnailHeight: 200,
        },
        {
          src: require('./assets/images/moment/13.jpg'),
          thumbnail: require('./assets/images/moment/thumbnails/13.jpg'),
          thumbnailWidth: 240,
          thumbnailHeight: 320,
        },
        {
          src: require('./assets/images/moment/14.jpg'),
          thumbnail: require('./assets/images/moment/thumbnails/14.jpg'),
          thumbnailWidth: 320,
          thumbnailHeight: 240,
        },
        {
          src: require('./assets/images/moment/15.jpg'),
          thumbnail: require('./assets/images/moment/thumbnails/15.jpg'),
          thumbnailWidth: 240,
          thumbnailHeight: 320,
        },
        {
          src: require('./assets/images/moment/16.jpg'),
          thumbnail: require('./assets/images/moment/thumbnails/16.jpg'),
          thumbnailWidth: 320,
          thumbnailHeight: 240,
        },
      ],
    },
    location: {
      maps:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d349.96908978547026!2d107.73943603648561!3d-7.073913208208633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c15fe08bdc0f%3A0x8d86ab2ef152e2da!2sGor%20Sabilulungan!5e0!3m2!1sid!2sid!4v1595907723515!5m2!1sid!2sid',
    },
    footer: {
      text: 'Dicky Muhamad R © Copyright 2020, All Rights Reserved.',
    },
  },
};
