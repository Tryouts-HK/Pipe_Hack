// import { useDarkMode } from "../darkmode"

import { Sidebar } from "./sidebar"

export const Dashboard = () => {
    // const {isDarkMode} = useDarkMode()
    // const isDarkMode = true
    return (
        // <div className={`${isDarkMode ? 'bg-white' : 'bg-black'}`}>
        <div>
            <Sidebar />
            <h1>Dashboard</h1>
        </div>
    )
}