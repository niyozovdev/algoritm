import './Notfound.css'
import Rasmfound from './img/notFoundImg.png'
import { NavLink } from "react-router-dom";


function Notfound() {
    return (
        <div className="notFound">
            <div className="container">
                <div className = "row align-items-center">
                    <div className = "col-lg-6 col-sm-12 text-start">
                        <h1 className = "text-found">404 Xatolik</h1>
                        <p className = "text-found2">Siz qidirgan sahifani topa olmadik.</p>
                        <p className="h2 text-light" >Bosh sahifaga qaytish uchun pastdagi    tugmani bosing</p>
                        <NavLink to="/">
                            <button className="btn border-light text-light btn-outline-success fs-2 mt-4">Bosh sahifa</button>
                        </NavLink>
                    </div>
                    <div className = "col-lg-6 col-sm-12">
                        <img src = {Rasmfound} alt = "404" className = "img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Notfound;