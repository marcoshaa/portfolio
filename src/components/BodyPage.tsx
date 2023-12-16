import React from 'react';
import { menu } from '../database/menuItens';
import SVGAward from '../icon/house-fill.svg';

export const BodyMain = () =>{
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#00242C]">
                <h1>hello word</h1>
            </main>
        </>
    );
}

export const NavBar = () =>{
    const menuItens = menu;
    return (
        <nav className="flex justify-center bg-[#00242C]">
            <div className="flex flex-col justify-center items-center flex-initial  m-5 w-80 h-10 bg-[#00D1FF] rounded-full">
                <ul className="flex justify-evenly w-full">
                    {menuItens.map((item, index)=>(
                        <li key={index}>
                            <a href={item.link} className="relative">
                                <span>
                                    {item.icon}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}