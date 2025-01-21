'use client'
import useDarkMood from "@/hooks/use-dark-mode"
import { Moon, Sun } from 'lucide-react';



const nextModeIcons ={
    'light': <Moon/> ,
    "dark" : <Sun />
}

export default function DarkMode(defaultTheme = 'dark') {
    const {theme, toggleTheme} = useDarkMood(defaultTheme = 'dark')

return (

    <button name="toggle button" onClick={toggleTheme}>{nextModeIcons[theme]}</button>
)

}