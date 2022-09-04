import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";


export default function AppHeader() {
    const { darkMode, setDarkMode } = useContext(DarkModeContext);
    return (
        <header className='header container' style={{ marginBottom: "1.5rem" }}>
            <div>

                <h1 className="text-xl">Social Media Dashboard</h1>
                <p className="text-bold">
                    Total Followers: 23,004
                </p>
            </div>
            <div className="darkmode-bar">
                <div className="text-bold">
                    Dark Mode
                </div>
                <div className="darkmode-switch"
                    onClick={e => {
                        setDarkMode(!darkMode);
                        console.log(darkMode);
                    }}
                >
                    <div data-value={darkMode} className="darkmode-slider">
                    </div>
                </div>
            </div>
        </header>
    )
}