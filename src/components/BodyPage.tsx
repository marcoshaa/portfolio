"use client"
import React from 'react';
import { menu } from '../database/menuItens';

export const BodyMain = () =>{
    return (
        <>
            <main className="flex overflow-auto h-[90vh] flex-col items-center justify-between bg-[#00242C]">
                <h1>hello word</h1>
            </main>
        </>
    );
}
export const NavBar = () => {

    const handleClick = () => {
        alert('Menu clicado!');
    };
    

  return (
    <nav className="flex h-[10vh] justify-center bg-[#00242C]">
      <div className="m-5 w-[40vh] h-12 rounded-full p-0.5 bg-gradient-to-tr from-gray-700 via-gray-900 to-black">
        <div className="flex flex-col justify-center items-center flex-initial h-full w-full bg-[#00D1FF] rounded-lg">
          <ul className="flex justify-evenly w-full">
            {menu.map((item, index) => (
              <li key={index} className={`list active m-[3%]`} onClick={handleClick}>
                <a href={item.link} className="relative">
                  <span>
                    {item.icon}
                  </span>
                  <span className="text absolute text-gray-800 font-normal text-0.75em letter-spacing-0.05em transition-all duration-500 opacity-0 transform translate-y-20">
                    {item.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};