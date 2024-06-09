import './Fanlar.css'
import { useState } from "react";
import { useFetch } from '../hooks/useFetch'


const Fanlar = () => {
    const [url, setUrl] = useState("http://localhost:3000/fanlar")
    const { data: trips } = useFetch(url)
    return (
            <div className="row fanlarRow">
            {trips && trips.map((trip) => {
                return (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 fanlarItems">
                        <div className="jarayondaItem fanlarItem mb-4" key={trip.id} >
                            <img src={trip.icon} alt="Icon" className="img-fluid"/>
                            <p className="heading1">{trip.heading}</p>
                        </div>
                    </div>
                );
            })}
            </div>
    );
};

export default Fanlar;
