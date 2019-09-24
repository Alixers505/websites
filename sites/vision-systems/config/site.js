const ads = require('./ads');
const nativeX = require('./native-x');

module.exports = {
  ads,
  nativeX,
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/vsd/vsd-navbar-logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/vsd/vsd-navbar-logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/vsd/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/vsd/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/vision-systems-design' },
    { provider: 'twitter', href: 'https://twitter.com/Vision_Systems' },
    { provider: 'facebook', href: 'https://www.facebook.com/VisionSystemsDesign?ref=hl' },
  ],
  navigation: {
    primary: {
      items: [
        { href: '/factory', label: 'Factory' },
        { href: '/non-factory', label: 'Non-Factory' },
        { href: '/cameras-accessories', label: 'Cameras & Accessories' },
        { href: '/lighting-optics', label: 'Lighting & Optics' },
        { href: '/3d-imaging', label: '3D Imaging' },
        { href: '/boards-software', label: 'Boards & Software' },
        { href: '/embedded', label: 'Embedded' },
        { href: '/unmanned', label: 'Unmanned' },
      ],
    },
    secondary: {
      items: [
        { href: '/subscribe', label: 'Subscribe' },
        { href: '/magazine', label: 'Magazine' },
        { href: '/videos', label: 'Videos' },
        { href: '/white-papers', label: 'White Papers' },
        { href: '/webcasts', label: 'Webcasts' },
        { href: 'https://buyersguide.vision-systems.com/index.html', label: 'Buyer\'s Guide', target: '_blank' },
        { href: 'https://visionsystemsdesigninnovators.secure-platform.com/a', label: 'Awards', target: '_blank' },
      ],
    },
    footer: {
      items: [
        { href: '/page/about-us', label: 'About Us' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/page/advertise', label: 'Advertise' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
      ],
    },
    menu: {
      topics: {
        label: 'Topics',
        items: [
          { href: '/factory', label: 'Factory' },
          { href: '/non-factory', label: 'Non-Factory' },
          { href: '/cameras-accessories', label: 'Cameras & Accessories' },
          { href: '/lighting-optics', label: 'Lighting & Optics' },
          { href: '/3d-imaging', label: '3D Imaging' },
          { href: '/boards-software', label: 'Boards & Software' },
          { href: '/embedded', label: 'Embedded' },
          { href: '/unmanned', label: 'Unmanned' },
        ],
      },
      resources: {
        label: 'Resources',
        items: [
          { href: '/events', label: 'Events' },
          { href: '/magazine', label: 'Magazine' },
          { href: '/videos', label: 'Videos' },
          { href: '/white-papers', label: 'White Papers' },
          { href: '/webcasts', label: 'Webcasts' },
          { href: 'https://buyersguide.vision-systems.com/index.html', label: 'Buyer\'s Guide', target: '_blank' },
          { href: 'https://visionsystemsdesigninnovators.secure-platform.com/a', label: 'Awards', target: '_blank' },
          { href: '/knowledge-zone', label: 'Knowledge Zone' },
        ],
      },
      userTools: {
        label: 'User Tools',
        items: [
          { href: '/subscribe', label: 'Subscribe' },
          { href: '/page/advertise', label: 'Advertise' },
          { href: '/page/about-us', label: 'About Us' },
          { href: '/contact-us', label: 'Contact Us' },
          { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
          { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
        ],
      },
    },
  },
  gtmContainer: 'GTM-PZFPXQK',
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:etkxb9ohz_w',
  },
  subscriptions: {
    newsletters: 'https://endeavor.dragonforms.com/loading.do?omedasite=VSDPrefPage',
    publications: {
      '/subscribe/print/vsd': 'https://formdesigner.ecn5.com/GetForm?tokenuid=b388925c-aedf-4e46-82ea-590a0c59355a&promoCode=NW9401&cmpid=website_sub_vsd_nw9401_apr-3-2018',
    },
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#ed1b24',
      logo: 'https://base.imgix.net/files/base/pennwell/vsd/logo.png?h=60',
    },
    to: 'juliac@pennwell.com',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
};
