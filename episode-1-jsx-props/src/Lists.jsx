import './App.css'

const Lists = () => {
    const name = ["Pedro", "Jake", "Jessica", "Mike", "Dustin", "Lucas"]
    const users = [
        { name: "Pedro", age: 21 },
        { name: "Jake", age: 25 },
        { name: "Lucas", age: 23 }
    ]
    return (
        <div>
            {name.map((value, key) => {
                return <h1 key={key}>{value}</h1>
            })}

            {users.map((value, key) => {
                return (
                    <>
                        <h1 key={key}>{value.name}</h1>
                        <h1 key={key}>{value.age}</h1>
                    </>
                )
            })}
        </div>
    )
}

export default Lists;