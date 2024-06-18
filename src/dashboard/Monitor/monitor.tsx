import { MonitorBoard } from "./board"
import { Screen } from "./screen"

export const Monitor = () => {
    return (
        <div>
            <h1>Monitor</h1>
            <Screen />
            <MonitorBoard />
        </div>
    )
}