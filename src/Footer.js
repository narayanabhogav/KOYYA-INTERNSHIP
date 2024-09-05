import React from 'react';
import Background from './bg.png'; 
import GirlImage from './girl.png'; 

const Footer = () => {
  return (
    <footer
      className="relative bg-cover bg-center text-white "
      style={{ backgroundImage: `url(${Background})` }} 
    >
      <div className="justify-start absolute inset-0 flex items-end">
        <div className="w-3/4 bg-opacity-50 p-4 flex items-center ">
         <img src={GirlImage} alt="Girl" className=" w-6  md:h-48 lg:h-72 md:w-48 lg:w-56" />
          <div className="text-left mx-4 pt-24">
            <p className="font-bold text-lg">Koyya Enterprises Private Limited</p>
            <p>
              Registered Office: Wework Salarpuria Magnificia, Tin Factory, 78,
              Old Madras Road, Bangalore - 560016
            </p>
            <p>CIN: U62013KA2023PTC179278</p>
            <p>
              <a href="mailto:contactus@koyya.in" className="underline">
                contactus@koyya.in
              </a>{' '}
              |{' '}
              <a href="https://www.koyya.in" className="underline">
                https://www.koyya.in
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="h-52"></div> 
    </footer>
  );
};

export default Footer;
