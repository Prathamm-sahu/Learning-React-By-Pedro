import './App.css'

const Job = (props) => {
    return (
        <>
            <h1>{props.salary}</h1>
            <h1>{props.position}</h1>
            <h1>{props.company}</h1>
        </>
    );
}

export default Job;