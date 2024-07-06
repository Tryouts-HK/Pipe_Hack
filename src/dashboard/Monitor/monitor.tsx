// import MonitorChart from "./charts/charts"
// import Leaderboard from "./leaderboard/board"
import { Mon } from "./mon"

export const Monitor = () => {
    return (
        <div>
            <section className="bg-primary px-4 py-8 md:px-6 md:py-12 flex flex-col items-center justify-center text-center">
                <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-5xl">Monitor Your Votes, In Real Time.</h1>
                {/* <p className="mt-4 max-w-[600px] text-primary-foreground md:text-xl">
                    Don't hesitate to call emergency services if you or someone you know is in immediate danger. We're here to
                    help.
                </p> */}
            </section>
            {/* <MonitorChart /> */}
            {/* <Leaderboard /> */}
            <Mon />
        </div>
    )
}