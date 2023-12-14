import { menu } from '../database/menuItens';
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
        <nav>
            <ul>
                {menuItens.map(item=>(
                    <li>
                        <a href={item.link} >
                            <span>
                                <img src={item.icon} alt={`${item.name}`} />
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}