"use client"
import React,{ useState, useEffect } from 'react';
import { menu } from '../database/menuItens';
import '../style/menu.css';
import activeLink from '../js/menu';
import { SectionOne } from './section/sectionPt';

export const BodyMain = () => {
    useEffect(() => {
        const cleanup = activeLink();
        return cleanup;
    }, []);

    return (
        <>
            <div className="flex items-end h-[4vh] justify-center bg-[#00242C]"></div>
            <main className="flex overflow-auto h-[85vh] flex-col items-center justify-between bg-[#00242C]">
                <section id="home" className="relative">
                    <SectionOne/>
                </section>
                <br/>
                <section id="aboutme" className="">
                    <h1>Section 2</h1>
                    <div className='h-[120vh] bg-[#000]'></div>
                </section>
                <br />
                
                <section id="experience" className="">
                    <h1>Section 3</h1>
                    <div className='h-[120vh] bg-[#0C0]'></div>
                </section>
                <br />

                <section id="project" className="">
                    <h1>Section 4</h1>
                    <div className='h-[120vh] bg-[#0CC]'></div>
                </section>
                <br />

                <section id="contact" className="">
                    <h1>Section 5</h1>
                    <div className='h-[120vh] bg-[#ff9800]'></div>
                </section>
            </main>
        </>
    );
}

export const NavBar = () => {
  return (
    <nav className="flex items-end h-[11vh] justify-center bg-[#00242C]">
        <div className="navigation">
          <ul>
            {menu.map((item, index) => (
                <li 
                    key={index} 
                    id={`section${index+1}`}
                    className={`list ${index ? 1 :'active' } m-[3%] `} 
                    
                    >
                    <a href={item.link} className="relative">
                    <span className="iconMenu">
                        {item.icon}
                    </span>
                    <span className="text">
                        {item.name}
                    </span>
                    </a>
                </li>
            ))}
            <div className="indicator"></div>
          </ul>
        </div>
    </nav>
  );
};