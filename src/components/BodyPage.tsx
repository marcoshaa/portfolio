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
            <main className="flex overflow-auto h-[80vh] flex-col items-center justify-between bg-[#00242C]">
                <section id="home" className="relative">
                    <div className='h-[80vh]'>
                        <h1 className="titleSection">Home</h1>
                        <SectionOne/>
                    </div>
                </section>
                
                <section id="aboutme" className="">                    
                    <div className='h-[80vh] bg-[#000]'>
                        <h1 className="titleSection">About Me</h1>
                    </div>
                </section>
                
                <section id="experience" className="">                    
                    <div className='h-[80vh] bg-[#0C0]'>
                        <h1 className="titleSection">Experience</h1>
                    </div>
                </section>

                <section id="project" className="">
                    <div className='h-[80vh] bg-[#0C0]'>
                        <h1 className="titleSection">Projects</h1>
                    </div>
                </section>

                <section id="contact" className="">
                    <div className='h-[80vh] bg-[#0C0]'>
                        <h1 className="titleSection">Contact</h1>
                    </div>
                </section>
            </main>
        </>
    );
}

export const NavBar = () => {
  return (
    <nav className="flex items-end h-[14vh] justify-center bg-[#00242C]">
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