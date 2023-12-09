// pages/about.js

import React from 'react';

const teamMembers = [
  {
    name: 'Devdatt N',
    devfolioLink: 'https://devfolio.co/@devblixt',
    imageSrc: '/images/DSC04365.jpg', // Replace with actual image path or URL
  },
  {
    name: 'Gyanendra Banjare',
    devfolioLink: 'https://devfolio.co/@gbhere',
    imageSrc: '/images/WhatsApp Image 2023-12-10 at 02.56.20_e2c8b3fd.jpg', // Replace with actual image path or URL
  },
  {
    name: 'Prakhar Singh',
    devfolioLink: 'https://devfolio.co/',
    imageSrc: '/jane_smith.jpg', // Replace with actual image path or URL
  },
  {
    name: 'Shaurya Priyadarshi',
    devfolioLink: 'https://devfolio.co/@shaurya01',
    imageSrc: '/images/Shaurya_Photu.jpg', // Replace with actual image path or URL
  },
  {
    name: 'Sumit Kumar',
    devfolioLink: 'https://devfolio.co/@VictoryGod',
    imageSrc: '/images/sumit photu.jpg', // Replace with actual image path or URL
  },
  // Add more team members as needed
];

const AboutPage = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-transparent w-[60vw]">
      <div className=" w-full p-6 text-[#fff]">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <div className="space-y-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-transparent border-[1px] border-[#6543D0] rounded-lg shadow-md p-6 flex items-center">
              <img
                src={member.imageSrc}
                alt={member.name}
                className="w-16 h-16 rounded-full mr-4 "
              />
              <div>
                <h2 className="text-xl font-semibold mb-2">{member.name}</h2>
                <a
                  href={member.devfolioLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Devfolio Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
