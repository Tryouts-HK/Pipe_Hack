export const MonitorBoard = () => {
    const data = [{name: 'Home', amount: 100}, {name: 'Away', amount: 200}, {name: 'Work', amount: 300}, {name: 'Play', amount: 400}, {name: 'Sleep', amount: 500}, {name: 'Eat', amount: 600}, {name: 'Drink', amount: 700}, {name: 'Code', amount: 800}, {name: 'Repeat', amount: 900}]
    return (
        <div>
            <div>
                <h1>Monitor Board</h1>
                <div>
                    {data.map((item, index) => (
                        <div key={index}>
                            <h2>{item.name}</h2>
                            <p>{item.amount}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}