// finish it
/// <reference types="vite-plugin-svgr/client" />
import Logo from "../img/logo.svg?react"
import { Link } from "react-router-dom"
import { Switch } from "@headlessui/react"
import { useState } from "react"
import useDarkMode from "../hooks/useDarkMode"
import Sun from "../img/sun.svg?react"
import Moon from "../img/moon.svg?react"

export const Header = () => {
    const [colorTheme, setTheme] = useDarkMode()
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    )
    const toggleDarkMode = (checked: boolean) => {
        setTheme(colorTheme)
        setDarkSide(checked)
    }

    return (
        <header className="flex large:px-[180px] px-[24px] large:py-[25px] py-[10px] 
        shadow-[0_4px_8px_0_rgba(57,113,164,0.25)]
        items-center dark:shadow-[0_4px_4px_0_rgba(0,0,0,0.1)]">
            <Link className="mr-auto" to="/">
                <Logo className="small:w-[101px] small:h-[41px]
                w-[52px] h-[22px]" />
            </Link>
            <div className="extra-large:text-[18px] text-black small:flex items-center
            dark:text-mode-white hidden mr-16">
               <a className="mr-16 hover:text-blue hover:font-medium"
                href="tel:+73432908476">
                    +7 343 290 84 76
                </a>
                <a className="hover:text-blue hover:font-medium"
                href="mailto:info@66bit.ru">
                    info@66bit.ru
                </a>
            </div>
            <Switch checked={darkSide}
                    onChange={toggleDarkMode}
                    className={`bg-[#155DA4] relative inline-flex
                    h-6 w-11 items-center rounded-full shadow-[0_4px_4px_0_#00000040]`}>
                <span className={`${
                    darkSide ? "translate-x-0" : "translate-x-6"
                } inline-block transform rounded-full bg-white transition`}>
                    {darkSide ? <Sun /> : <Moon />}
                </span>
            </Switch>
        </header>
    )
}