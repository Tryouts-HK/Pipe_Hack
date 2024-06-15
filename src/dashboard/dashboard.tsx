import { useDarkMode } from "../darkmode"
import { Sidebar } from "./sidebar"

export const Dashboard = () => {
    const {isDarkMode} = useDarkMode()
    return (
        <div className={`${isDarkMode ? 'bg-white' : 'bg-black'}`}>
            <Sidebar />
        </div>
    )
}