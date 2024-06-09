import './Uquvjarayoni.css'
import React,{ useState} from "react";
import { useFetch } from '../hooks/useFetch'
import {Link} from "react-router-dom";


const Uquvjarayoni = () => {
    const [url, setUrl] = useState("http://localhost:3000/jarayon")
    const { data: trips } = useFetch(url)
    return (
        <div className="container">
            <div className="row">
                {trips && trips.map((trip) => {
                    return (
                        <div className="col-12 col-sm-6 col-md-4" key={trip.id}>
                            <div className="jarayondaItem mb-4" key={trip.id} >
                                <img src={trip.icon} alt="Icon" className="img-fluid"/>
                                <p className="paragraph1">{trip.heading}</p>
                                <p className='paragraph2 '>{trip.paragraph}</p>
                                <Link to={`/uquvjarayoni/${trip.id}`}><div className="btn border-dark-subtle">To'liq ma'lumot</div></Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Uquvjarayoni;