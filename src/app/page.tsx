import { BodyMain,NavBar } from "../components/BodyPage";
import '../style/global.css';

export default function Home() {
    return (
        <>
            <div className="h-[5vh] bg-[#00242C]"></div>
            <NavBar/>
            <BodyMain/>
        </>
    );
}
