import './App.css'

const age = 15;
if(age >= 10) {
    console.log("IS OVER AGE")
} else {
    console.log("IS UNDER AGE")
}
age >= 18 ? console.log("HEHE!!!!!") : console.log("HAHA!!!!")

const Ternary = () => {
    const age = 19 
    const isGreen = true;
    return (
    <div>
        {age >= 18 ? <h1>OverAge</h1> : <h1>UnderAge</h1> }
        <h1 style={{color: isGreen ? "green" : "white", backgroundColor: "black"}}>This has color</h1>

        {isGreen && <button>This is a Button</button>}
    </div>

   );
}

export default Ternary;