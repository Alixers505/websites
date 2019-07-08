const ads = require('./ads');

module.exports = {
  ads,
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/bizbash/bzb/image/static/logo/site_logo.png',
      srcset: [
        'https://base.imgix.net/files/base/bizbash/bzb/image/static/logo/site_logo.png 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/bizbash/bzb/image/static/logo/site_logo.png',
      srcset: [
        'https://base.imgix.net/files/base/bizbash/bzb/image/static/logo/site_logo.png 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'instagram', href: 'https://www.instagram.com/bizbash' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/bizbash' },
    { provider: 'twitter', href: 'https://twitter.com/BizBash' },
    { provider: 'facebook', href: 'https://www.facebook.com/BizBash/' },
  ],
  primaryNavItems: [
    { href: '/production-strategy', label: 'Production & Strategy' },
    { href: '/style-decor', label: 'Style & Decor' },
    { href: '/catering', label: 'Catering' },
    { href: '/bizbash-list', label: 'Bizbash List' },
  ],
  secondaryNavItems: [
    { href: '/gathergeeks', label: 'GatherGeeks' },
    { href: '/bizbash-events', label: 'Our Events & Awards' },
    { href: 'http://go2.bizbash.com/Get-Listed-Directory', label: 'List Your Biz' },
    { href: '/venue-directory', label: 'Find A Venue' },
    { href: '/supplier-directory', label: 'Find Suppliers' },
    { href: '/magazine/5b2a4e6c0305572b008b45ae', label: 'Our Publications' },
  ],
  footerNavItems: [
    { href: '/page/about-us', label: 'About Us' },
    { href: '/contact-us', label: 'Contact Us' },
    { href: '/page/advertise', label: 'Advertise' },
    { href: '/page/privacy-policy', label: 'Privacy Policy', target: '_blank' },
    { href: '/page/terms-conditions', label: 'Terms & Conditions', target: '_blank' },
  ],
  menuItems: {
    resources: [
      { href: '/gathergeeks', label: 'GatherGeeks' },
      { href: '/bizbash-events', label: 'Our Events &amp; Awards' },
      { href: 'http://go2.bizbash.com/Get-Listed-Directory', label: 'List Your Biz' },
      { href: '/venue-directory', label: 'Find A Venue' },
      { href: '/supplier-directory', label: 'Find Suppliers' },
      { href: '/magazine/5b2a4e6c0305572b008b45ae', label: 'Our Publications' },
    ],
    userTools: [
      { href: '/subscribe', label: 'Subscribe' },
      { href: '/advertise', label: 'Advertise' },
      { href: '/page/about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: '/page/privacy-policy', label: 'Privacy Policy', target: '_blank' },
      { href: '/page/terms-conditions', label: 'Terms & Conditions', target: '_blank' },
    ],
  },
  gtmContainer: 'GTM-5TWCFJ',
  search: {
    engine: 'google',
    apiKey: '017383739850048358259:p0nyaiybgnq',
  },
  subscriptions: {
    newsletters: 'https://www.bizbash.com/subscribe/email',
    publications: {
      '/subscribe/print/let': 'https://cygnus.omeda.com/cgi-win/let.cgi?login',
      '/subscribe/print/lepn': 'https://cygnus.omeda.com/cgi-win/lepn.cgi?login',
    },
  },
  magazines: {
    description: 'We cover the event industry like no other including: planning, production, new openings, events and trends in marketing, design and style. BizBash also offers resources for event professionals like our venues and suppliers directory, trade shows, and magazines.',
  },
  contactUs: {
    branding: {
      bgColor: '#005ea0',
      logo: 'https://base.imgix.net/files/base/bizbash/bzb/image/static/logo/site_logo.png',
    },
  },
};
