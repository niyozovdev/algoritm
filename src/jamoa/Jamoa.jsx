import './Jamoa.css'
import React, {Fragment} from "react";
import { useState } from "react";
import { useFetch } from '../hooks/useFetch'
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import Footer from "../footer/Footer.jsx";



function Jamoa() {
    const [url, setUrl] = useState("http://localhost:3000/jamoa")
    const { data: trips } = useFetch(url)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        phone: "",
    });


    const handleYuborish = () => {
        const { name, address, phone } = formData;

        if (name.trim() === "" || address.trim() === "" || phone.trim() === "") {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Ma'lumotlarni to'liq kiriting",
                showConfirmButton: false,
                timer: 1500,
                background: "var(--modal__back)",
            });
        } else {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Ma'lumotlaringiz jo'natildi!",
                showConfirmButton: false,
                timer: 1500,
                background: "var(--modal__back)",
            });
            handleClose(false);
        }
    };

    return (
        <Fragment>
            <div className = "container">
                <p className = "h2 kelajak text-light">KELAJAGIMIZNING HAQIQIY BUNYODKORI BUGUNGI USTOZLARDIR</p>

                <p className = "izoh">
                    Algoritm ta’lim loyihasida 700 dan ortiq O’zbekiston bo‘yicha eng tajribali ustozlar jamoasi
                    faoliyat olib boradi. Maktabimizda mana shu jamoaning lider ustozlari dars berishadi. Ularning
                    xarizmasi, liderlik qobiliyatlari o’quvchilarga ijobiy ta’sir ko’rsatishiga ishonamiz.
                    Ustozlarimiz tarbiya jihatdan namuna bo’ladigan, qadriyatlarimizni sevadigan samimiy insonlar
                    sifatida maktabimizda ajoyib muhit yaratadilar
                </p>

                <p className = "h2 jamoaText text-light">Bizning jamoamiz</p>

                <div className = "rowBoxSecond">
                    <div className = "row fanlarRow">
                        {trips && trips.map((trip) => {
                            return (
                                <div className = "col-12 col-sm-6 col-md-4 col-lg-3 fanlarItems mb-3">
                                    <div className = "card border-0" key = {trip.id}>
                                        <div className = "card-img-top">
                                            <img src = {trip.icon} alt = "O'qituvchi rasmi" className = "img-fluid" />
                                        </div>
                                        <div className = "ps-2 cardText mt-2">
                                            <p className = "h4">{trip.name}</p>
                                            <p className = "h6">OTM: {trip.otm}</p>
                                            <p className = "h6">Tajriba: {trip.tajriba}</p>
                                            <p className = "h6">Fani: {trip.fani}</p>
                                            <p className = "h6">O'quvchilar soni: {trip.uquvchilari}</p>
                                            <p className = "h6">Natija: {trip.natija}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className = "containerMiddleBox position-relative">
                    <div className = "row align-items-center">
                        <div className = "col-lg-9 rowText">
                            Ariza qoldiring. Biz siz bilan bog‘lanib batafsil ma`lumot
                            beramiz.
                        </div>
                        <div className = "col-lg-3 d-flex justify-content-center rowBtn">
                            <button
                                className = "btn btn-success rounded-5  px-3 px-md-4 px-lg-4 py-2 py-lg-3 mt-3 mt-lg-0"
                                onClick = {handleShow}
                            >
                                Ariza yuborish
                            </button>
                        </div>
                    </div>
                </div>

                {/* Modal */}
                <Modal
                    className = "asosiyModal "
                    show = {show}
                    onHide = {handleClose}
                    backdrop = "static"
                    keyboard = {false}
                >
                    <div className = "divv rounded-3 border border-light">
                        <Modal.Header closeButton>
                            <Modal.Title className = "modalTitle">Ariza yuborish</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <FloatingLabel
                                controlId = "floatingInput"
                                label = "Ism familiya"
                                className = "mb-3 modalBody bg-transparent"
                            >
                                <Form.Control
                                    type = "text"
                                    placeholder = "Azamat Niyozov"
                                    value = {formData.name}
                                    onChange = {(e) =>
                                        setFormData({...formData, name: e.target.value})
                                    }
                                />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId = "floatingInput"
                                label = "Manzil"
                                className = "mb-3 modalBody bg-transparent"
                            >
                                <Form.Control
                                    type = "text"
                                    placeholder = "Qashqadaryo"
                                    value = {formData.address}
                                    onChange = {(e) =>
                                        setFormData({...formData, address: e.target.value})
                                    }
                                />
                            </FloatingLabel>
                            <InputGroup className = "mb-3 mt-3 bg-transparent modalInput">
                                <InputGroup.Text
                                    id = "basic-addon1"
                                    className = "bg-transparent inputTextColor"
                                >
                                    +998
                                </InputGroup.Text>
                                <Form.Control
                                    placeholder = "90 699 70 71"
                                    value = {formData.phone}
                                    onChange = {(e) =>
                                        setFormData({...formData, phone: e.target.value})
                                    }
                                />
                            </InputGroup>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant = "secondary" onClick = {handleClose}>
                                Qaytarish
                            </Button>
                            <Button variant = "primary" onClick = {handleYuborish}>
                                Yuborish
                            </Button>
                        </Modal.Footer>
                    </div>
                </Modal>

                {/* Joylashuv */}
                <div className = "joylashuv jamoaJoylashuv">

                    <iframe
                        src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3095.511705081073!2d66.89108047576025!3d39.11758577167796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4cbb686357ed39%3A0xfd13d5677a926088!2sIqtidor%20IT%20Academy!5e0!3m2!1suz!2s!4v1715770156608!5m2!1suz!2s"
                        width = "100%" height = "370px" allowFullScreen = "" loading = "lazy"
                        referrerPolicy = "no-referrer-when-downgrade"></iframe>
                </div>

            {/* Footer*/}
            </div>
                <Footer/>
        </Fragment>
    );
}

export default Jamoa;