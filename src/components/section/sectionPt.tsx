import React from 'react';
import SVGBootstrap from '@/icon/SVGBootstrap';
import SVGCss from '@/icon/SVGCss';
import SVGHtml from '@/icon/SVGHtml-5';
import SVGJs from '@/icon/SVGJs';
import SVGLaravel from '@/icon/SVGLaravel';
import SVGReact from '@/icon/SVGReact';
import SVGTailwindcss from '@/icon/SVGTailwindcss';
import SVGNodejs from '@/icon/SVGNodejs';
import SVGPython from '@/icon/SVGPython';
import SVGDocker from '@/icon/SVGDocker';
import SVGGithub from '@/icon/SVGGithub';
import SVGPhp from '@/icon/SVGPhp';

export const SectionOne = () =>{
    return(
        <>
            <div className="rounded-full h-[40vh] w-[40vh] bg-[#677d8f40]">            
                <img className="object-cover relative bottom-[7vh] left-[1vh] h-[45vh] drop-shadow-[4px_0px_5px_#1d84a3] max-sm:w-auto" src="/img/Ma.png" alt="" />            
                <div className="absolute top-[-4vh] h-[50vh] w-[50vh] bg-gradient-to-t from-[#00242C] from-10% via-#00242C via-30% to-#00242C to-50% max-sm:w-[inherit]"></div>
            </div>

            <div className="flex flex-col items-start relative bottom-[10vh] left-[8vh] max-sm:bottom-[4vh] max-w-fit">
                <p className="titleMess">Hello, I'm</p>
                <p className="titleMess text-5xl font-black">Marcos H.</p>
                <p className="titleMess">and this is my portfolio</p>
            </div>

            <div className="flex flex-col items-center max-sm: mb-[5vh]">
                <p className="titleMess">web developer and  software engineer</p>
                <a className="bg-[#00d1ff] p-[10px] mt-[20px] rounded-[10px] w-fit" href="/cv/marcos.pdf" download="MarcosH_cv" target="_blank"> download cv</a>
            </div>
            <div className="grid grid-cols-3 gap-4 justify-items-center">
                <div className="flex justify-center items-center lg:absolute  top-[10vh] left-[34vh] rounded-full h-[9vh] w-[9vh] bg-[#fff] max-sm: h-[9vh] w-[9vh]">
                    <SVGBootstrap width={50}/>
                </div>

                <div className="flex justify-center items-center lg:absolute  top-[0%] right-[110%] rounded-full h-[12vh] w-[12vh] bg-[#fff] max-sm: h-[9vh] w-[9vh]">
                    <SVGJs width={50}/>
                </div>

                <div className="flex justify-center items-center lg:absolute  top-[40%] right-[112%] rounded-full h-[9vh] w-[9vh] bg-[#fff] max-sm: h-[9vh] w-[9vh]">
                    <SVGHtml width={100}/>
                </div>

                <div className="flex justify-center items-center lg:absolute  top-[30vh] left-[60vh] rounded-full h-[6vh] w-[6vh] bg-[#fff] max-sm: h-[9vh] w-[9vh]">
                    <SVGCss width={30}/>
                </div>

                <div className="flex justify-center items-center lg:absolute  top-[1vh] left-[49vh] rounded-full h-[9vh] w-[9vh] bg-[#fff] max-sm: h-[9vh] w-[9vh]">
                    <SVGLaravel width={50}/>
                </div>

                <div className="flex justify-center items-center lg:absolute  top-[42vh] right-[57vh] rounded-full h-[5vh] w-[5vh] bg-[#fff] max-sm: h-[9vh] w-[9vh]">
                    <SVGReact width={30}/>
                </div>

                <div className="flex justify-center items-center lg:absolute  top-[18vh] right-[58vh] rounded-full h-[9vh] w-[9vh] bg-[#fff] max-sm: h-[9vh] w-[9vh]">
                    <SVGTailwindcss width={50}/>
                </div>

                <div className="flex justify-center items-center lg:absolute  top-[24vh] left-[45vh] rounded-full h-[7vh] w-[7vh] bg-[#fff] max-sm: h-[9vh] w-[9vh]">
                    <SVGNodejs width={35}/>
                </div>

                <div className="flex justify-center items-center lg:absolute  top-[55vh] right-[60vh] rounded-full h-[9vh] w-[9vh] bg-[#fff] max-sm: h-[9vh] w-[9vh]">
                    <SVGPython width={60}/>
                </div>

                <div className="flex justify-center items-center lg:absolute  top-[60vh] right-[42vh] rounded-full h-[7vh] w-[7vh] bg-[#fff] max-sm: h-[9vh] w-[9vh]">
                    <SVGDocker width={35}/>
                </div>

                <div className="flex justify-center items-center lg:absolute  top-[54vh] left-[49vh] rounded-full h-[7vh] w-[7vh] bg-[#fff] max-sm: h-[9vh] w-[9vh]">
                    <SVGGithub width={35}/>
                </div>

                <div className="flex justify-center items-center lg:absolute  top-[42vh] left-[42vh] rounded-full h-[9vh] w-[9vh] bg-[#fff] max-sm: h-[9vh] w-[9vh]">
                    <SVGPhp width={80}/>
                </div>
            </div>
        </>
    );
};