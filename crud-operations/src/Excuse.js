import React, { useEffect } from 'react';
import Axios from 'axios';

export const Excuse = () => {

    const [excuse, setExcuse] = React.useState("")
    

    const fetchExcuse = () => {
        Axios.get(`https://excuser.herukoapp.com/v1/excuse/${excuse}`)
            .then((res) => {
                setExcuse(res.data[0].excuse)
            })
    }



    useEffect(() => {
        fetchExcuse()
    }, [])

    return (
        <div className="main">
            {excuse}
        </div>
    )

}
