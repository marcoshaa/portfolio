
import SVGHouse from '../icon/SVGHouse';
import SVGPerson from '../icon/SVGPerson';
import SVGHeart from '../icon/SVGHeart';
import SVGAward from '../icon/SVGAward';
import SVGEnvelope from '../icon/SVGEnvelope';

// import SVGWhatsapp from '../icon/SVGWhatsapp';
// import SVGInstagram from '../icon/SVGInstagram';

const wIcon = 20;
const hIcon = 20;

export const menu =[
    {name:'Home', icon: <SVGHouse width={wIcon} height={hIcon}/>, link:'#home'},
    {name:'Me', icon: <SVGPerson width={wIcon} height={hIcon}/>, link:'#aboutme'},
    {name:'Experience', icon: <SVGAward width={wIcon} height={hIcon}/>, link:'#experience'},
    {name:'Project', icon: <SVGHeart width={wIcon} height={hIcon}/>, link:'#project'},
    {name:'Contact', icon: <SVGEnvelope width={wIcon} height={hIcon}/>, link:'#contact'},
];