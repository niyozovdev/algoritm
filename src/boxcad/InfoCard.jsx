
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import './InfoCard.css'

function Info() {

    const { id } = useParams();
    const [datas, setDatas] = useState([]);



    useEffect(()=> {
        const fetchData = async() => {
            try{
                const request = await fetch('data.jarayon.json');
                const resData = await request.json();
                console.log(resData.jarayon);
                setDatas(resData.jarayon)
            }catch(error){
                console.error("Erroring not ...", error)
            }

        }
        fetchData()
    }, [])

    const articless = datas.find((item)=> item.id.toString() === id)

    if(!articless){
        return <p>Not Found Data ...</p>
    }

    return (
        <div className="box-wrapper">
            <div className="card">
                <h1>{articless.paragraph}</h1>
                <h2>{articless.heading}</h2>
                <img src={articless.icon} alt="" width={"700px"} height={"400px"}/>
            </div>
        </div>
    );
}

export default Info;
