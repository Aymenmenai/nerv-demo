import React from "react";

const footerData = [
  {
    title: 'Discover',
    items: [
      { name: 'Home', link: '/' },
      { name: 'Products', link: '/products' },
      { name: 'About Us', link: '/about' },
      { name: 'Contact', link: '/contact' },
      { name: 'Blog', link: '/blog' },
    ]
  },
  {
    title: 'Our Drinks',
    items: [
      { name: 'Energy Drinks', link: '/energy-drinks' },
      { name: 'Flavors', link: '/flavors' },
      { name: 'Ingredients', link: '/ingredients' },
      { name: 'Limited Editions', link: '/limited-editions' },
    ]
  },
  {
    title: 'Wellness & Lifestyle',
    items: [
      { name: 'Nutritional Information', link: '/nutrition' },
      { name: 'Recipes', link: '/recipes' },
      { name: 'Fitness Tips', link: '/fitness-tips' },
      { name: 'Wellness Blog', link: '/wellness-blog' },
      { name: 'Success Stories', link: '/success-stories' },
    ]
  },
  {
    title: 'Connect With Us',
    items: [
      { name: 'Events', link: '/events' },
      { name: 'Sponsorships', link: '/sponsorships' },
      { name: 'Careers', link: '/careers' },
      { name: 'Partnerships', link: '/partnerships' },
      { name: 'Testimonials', link: '/testimonials' },
    ]
  },
  {
    title: 'Legal Information',
    items: [
      { name: 'Terms of Service', link: '/terms' },
      { name: 'Privacy Policy', link: '/privacy' },
      { name: 'Disclaimer', link: '/disclaimer' },
    ]
  },
  {
    title: 'Customer Support',
    items: [
      { name: 'FAQ', link: '/faq' },
      { name: 'Shipping & Returns', link: '/shipping-returns' },
      { name: 'Contact Support', link: '/contact-support' },
    ]
  },
  {
    title: 'Stay Connected',
    items: [
      { name: 'Newsletter', link: '/newsletter' },
      { name: 'Follow Us on Social Media', link: '/social-media' },
    ]
  },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white grid grid-cols-3 py-20 content-center items-start">
      {footerData.map((section, index) => (
        <div className="flex flex-col gap-1 p-3 justify-center items-center" key={index}>
          <h2 className="font-bold underline">{section.title}</h2>
          <ul className="text-center">
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                <a href={item.link} >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="col-span-3 text-center p-5">
        <p>&copy; {new Date().getFullYear()} Your Energy Drink Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
