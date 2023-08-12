// import { useContext } from "react"
// import {AppContext} from '../App'
import { useQuery } from "@tanstack/react-query"
import Axios from 'axios';

export const Home = (props) => {
    const { data: catData,
            isLoading, 
            isError, 
            refetch 
        } = useQuery(["cat"], async () => {
        const res = await Axios.get("https://catfact.ninja/fact");
            return res.data;
    })
    if(isError) {
        return <h1>Sorry, there was an error</h1>
    }

    if(isLoading) {
        return <h1>Loading....</h1>
    }
    return (
        <h1>
            This is the Home page and user is: <p>{catData?.fact}</p>
            <button onClick={refetch}>Update Data</button>
        </h1>
        
    )
}