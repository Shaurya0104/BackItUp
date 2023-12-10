// pages/faq.js

import React, { useState } from 'react';

const faqData = [
  {
    
    question: 'What happens if I lose access to my wallet?',
    answer:
      'Your crypto is restored to the beneficiary account as soon as the smart contract figures out there is inactivity to the wallet ',
  },
  {
    
    question: 'Who are the beneficiaries?',
    answer:
      'The account that recieve the recovered crypto after the backup are called the beneficiaries. There can be only one beneficiary per contract.',
  },
  {
    
    question: 'Who can become beneficiaries?',
    answer:
      'Anyone with a valid wallet address can become a beneficiary. However, the beneficiary is selected by the creator of the backup.',
  },

  {
    
    question: 'Can I become my own beneficiary?',
    answer:
      'Yes, you can make your secondary accounts the beneficiary of the contract.',
  },
  
  {
    
    question: 'Who are the guardians?',
    answer:
      'We have people who are responsible for the manual execution of the contracts. Guardians can approve a pre-mature execution of a backup. Guardians are selected by the creator himself.',
  },
  {
    
    question: 'How do the smart contract track my wallet activity?'
    ,
    answer:
      'We track the wallet activity on-chain through Chainlink functions which in turn returns Airstack API. This is completely permission-less and decentralised.',
  },
  {
    
    question: 'Can I make partial backup of my wallet?',
    answer:
      'Yes, you can make partial backup of your wallet. Breaking up into different fund sizes and different beneficiaries.',
  },


  // Add more FAQ items as needed
];

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" flex flex-col justify-center items-center bg-[#000] w-[60vw]">
      <div className=" w-full p-6">
        <h1 className="text-4xl font-bold mb-8 text-[#6543D0]">FAQs</h1>
        <div className="space-y-3">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-transparent text-[#fff] rounded-lg border-[1px] border-[#2c2c2c] shadow-md">
              <button
                onClick={() => handleAccordionClick(index)}
                className="w-full flex justify-between items-center p-4 focus:outline-none"
              >
                <h2 className="text-xl font-semibold">{faq.question}</h2>
                <span className="ml-2">{activeIndex === index ? <img src="/images/CaretDown (1).svg" /> : <img src='\images\CaretDown.svg' ></img>}</span>
              </button>
              {activeIndex === index && (
                <div className="p-4">
                  <p className="text-[#BCBCBC] font-medium">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
