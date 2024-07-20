import { useEffect, useState } from 'react';
import { BiSolidMoon, BiSolidSun } from 'react-icons/bi';
import { FiMenu } from 'react-icons/fi';

const navMenus = [
    {
        name: "Introduction",
        link: "/#introduction",
    },
    {
        name: "Prevalence",
        link: "/#prevalence",
    },
    {
        name: "Pros",
        link: "/#pros",
    },
    {
        name: "Cons",
        link: "/#cons",
    },
    {
        name: "Recommendation",
        link: "/#recommendation",
    },
    {
        name: "Conclusion",
        link: "/#conclusion",
    },
    {
        name: "References",
        link: "#",
    },
];

const Navbar = () => {

    const [sMenu, setSMenu] = useState(false);
    const [theme, setThm] = useState(localStorage.getItem("theme") 
    ? localStorage.getItem("theme") : "light"
    );

    const tMenu = () => {
        setSMenu(!sMenu);
    }

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light"); 
        }
    }, [theme]);


  return (
    <>
        <nav className="bg-amber-500 dark:bg-stone-800 dark:text-white">
            <div className="container flex justify-between items-center py-3 sm:py-0">
                <h1 className="text-xl
                 font-bold text-secondary dark:text-primary">ENGL108D-HongTa</h1>
                {/* Desktop Menu */}
                <div className="hidden sm:block">
                    <ul className="flex items-center gap-4">
                        {navMenus.map((menu) => (
                            <li key={menu.name}>
                                <a href={menu.link} className="text-sm font-semibold px-2 py-4 md:py-6 inline-block cursor-pointer">{menu.name}</a>
                            </li>
                        ))}
                        {/* For Light/Black theme */}
                        <div className="flex items-center gap-4">
                            {
                                theme === "light" ? (
                                    <BiSolidMoon className="text-2xl cursor-pointer dark:text-white" onClick={() => setThm("dark")}/>
                                ) : (
                                    <BiSolidSun className="text-2xl dark:text-white cursor-pointer" onClick={() => setThm("light")}/>
                                )
                            }
                        </div>
                    </ul>
                </div>
                {/* Phone Menu */}
                <div className="block sm:hidden">
                    {/* For Light/Black theme */}
                    <div className="flex items-center gap-4">
                        {
                            theme === "light" ? (
                                <BiSolidMoon className="text-2xl cursor-pointer dark:text-white" onClick={() => setThm("dark")}/>
                            ) : (
                                <BiSolidSun className="text-2xl dark:text-white cursor-pointer" onClick={() => setThm("light")}/>
                            )
                        }
                        <FiMenu className="text-2xl
                        cursor-pointer dark:text-white" onClick={tMenu}/>
                        </div>
                        {
                            sMenu && (
                                <div className="fixed top-16 left-0 right-0
                                bg-blue-300
                                dark:bg-gray-800
                                dark:text-amber-400 shadow-md rounded-b-xl z-10 py-10">
                                    <ul className="flex flex-col items-center gap-3">
                                        {
                                            navMenus.map((menu) => (
                                                <li key={menu.name}
                                                className="font-semibold text-sm px-2 py-4 md:py-6 inline-block cursor-pointer">
                                                    <a href={menu.link}>{menu.name}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )
                        }
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar