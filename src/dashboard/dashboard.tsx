import { useDarkMode } from "../darkmode"

export const Dashboard = () => {
    const {isDarkMode} = useDarkMode()
    return (
        <div className={`${isDarkMode ? 'bg-white' : 'bg-black'}`}>
            {/* <SidebarTest /> */}
        </div>
    )
}