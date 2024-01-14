import React from 'react';
import SVGBootstrap from '@/icon/SVGBootstrap';
import SVGCss from '@/icon/SVGCss';
import SVGHtml from '@/icon/SVGHtml-5';
import SVGJs from '@/icon/SVGJs';
import SVGLaravel from '@/icon/SVGLaravel';
import SVGReact from '@/icon/SVGReact';
import SVGTailwindcss from '@/icon/SVGTailwindcss';
import SVGNodejs from '@/icon/SVGNodejs';

export const SectionOne = () =>{
    return(
        <>
            <div className="rounded-full h-[40vh] w-[40vh] bg-[#677d8f40]">            
                <img className="object-cover relative bottom-[7vh] left-[1vh] h-[45vh] drop-shadow-[4px_0px_5px_#1d84a3]" src="/img/Ma.png" alt="" />            
                <div className="absolute top-[-4vh] h-[50vh] w-[50vh] bg-gradient-to-t from-[#00242C] from-10% via-#00242C via-30% to-#00242C to-50%"></div>
            </div>

            <div className="flex flex-col items-start relative bottom-[10vh] left-[8vh]">
                <p className="titleMess">Hello, I'm</p>
                <p className="titleMess text-5xl font-black">Marcos H.</p>
                <p className="titleMess">and this is my portfolio</p>
            </div>

            <div className=" flex flex-col items-center">
                <p className="titleMess">web developer and  software engineer</p>
                <a className="bg-[#00d1ff] p-[10px] mt-[20px] rounded-[10px] w-fit" href="/cv/marcos.pdf" download="MarcosH_cv" target="_blank"> download cv</a>
            </div>
            
            <div className="flex justify-center items-center absolute top-[10%] left-[98%] rounded-full h-[5vh] w-[5vh] bg-[#fff]">
                <SVGBootstrap width={30}/>
            </div>

            <div className="flex justify-center items-center absolute top-[0%] right-[110%] rounded-full h-[12vh] w-[12vh] bg-[#fff]">
                <SVGJs width={70}/>
            </div>

            <div className="flex justify-center items-center absolute top-[40%] right-[112%] rounded-full h-[6vh] w-[6vh] bg-[#fff]">
                <SVGHtml width={30}/>
            </div>

            <div className="flex justify-center items-center absolute top-[40%] left-[112%] rounded-full h-[6vh] w-[6vh] bg-[#fff]">
                <SVGCss width={30}/>
            </div>

            <div className="flex justify-center items-center absolute top-[1vh] left-[37vh] rounded-full h-[9vh] w-[9vh] bg-[#fff]">
                <SVGLaravel width={50}/>
            </div>

            <div className="flex justify-center items-center absolute top-[5vh] right-[49vh] rounded-full h-[5vh] w-[5vh] bg-[#fff]">
                <SVGReact width={30}/>
            </div>

            <div className="flex justify-center items-center absolute top-[13vh] right-[44vh] rounded-full h-[7vh] w-[7vh] bg-[#fff]">
                <SVGTailwindcss width={35}/>
            </div>

            <div className="flex justify-center items-center absolute top-[13vh] left-[42vh] rounded-full h-[7vh] w-[7vh] bg-[#fff]">
                <SVGNodejs width={35}/>
            </div>
        </>
    );
};