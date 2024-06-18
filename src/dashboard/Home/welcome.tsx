interface IWelcome {
    name: string
}

export const Welcome: React.FC<IWelcome> = ({name}) => {
    return (
        <div>
            <h1 className="text-4xl">Welcome,<span className="text-blue-600 font-semibold"> {name}</span></h1>
        </div>
    )
}