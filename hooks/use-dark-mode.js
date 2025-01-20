import { useState } from "react"
import { useCookies } from "react-cookie"

const useDarkMood = (defaultTheme = 'dark') => {
    const [theme, setTheme] = useState(defaultTheme)
    const [_, setCookie] = useCookies(['theme'])

    const setAndSAveTheme = (theme) => {
        setTheme(theme)
        document.documentElement.classList.remove('light', "dark")
        document.documentElement.classList.toggle(theme)
        setCookie('theme', theme)
    }
    const toggleTheme = () => {
        setAndSAveTheme(theme === 'dark' ? 'light' : 'dark' )
    }

    return {theme, toggleTheme}
}

export default useDarkMood