import React, { Fragment } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import InputGroup from "react-bootstrap/InputGroup";
import Swal from "sweetalert2";
import "./Qabul.css";
import Footer from "../footer/Footer.jsx";

function Qabul() {
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
      <div className="container ">
        <p className="h1 haqida ">Algoritm xususiy maktabida qabul shartlari</p>

        <div className="qabulBox w-100">
          <div className="row">
            <div className="col-12 col-lg-8">
              <p className="h2 fw-bold">
                2024-2025 o‘quv yili uchun qabul shartlari
              </p>
              <p className="h5 fw-bold">Ariza berish uchun talablar</p>
              <ul className="ms-5">
                <li>7 yoshga to’lgan sog’lom bolalar;</li>
                <li>Psixologik suhbatidan o’tganlar;</li>
                <li>Saralash imtihonidan o’tganlar.</li>
              </ul>

              <p className="h5 fw-bold">Qabul jarayoni va bosqichlari</p>
              <p className="h5">
                Qabul jarayoni 4 asosiy bosqichdan iborat bo’ladi. Bular:
              </p>
              <ul className="ms-5">
                <li>
                  Qo’ng’iroqlar orqali ma’lumot berish (aloqa operatorlari)
                </li>
                <li>Yuzma-yuz suhbat (qabul menejerlari)</li>
                <li>(Demo)</li>
                <li>Shartnoma tuzish bosqichi</li>
                <li>To’lov amalga oshirish bosqichi.</li>
              </ul>
            </div>
            <div className="col-12 col-lg-5"></div>
          </div>
        </div>

        <div className = "container">
          <div className = "containerMiddleBox">
            <div className = "row align-items-center container">
              <div className = "col-lg-9 rowText">
                Ariza qoldiring. Biz siz bilan bog‘lanib batafsil ma`lumot
                beramiz.
              </div>
              <div className = "col-lg-3 rowBtn text-center" onClick = {handleShow}>
                <button
                    className = "btn btn-success rounded-5  px-3 px-md-4 px-lg-4 py-2 py-lg-2 mt-3 mt-lg-0"
                >
                  Ariza yuborish
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        <Modal
            className = "asosiyModal"
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
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Manzil"
                className="mb-3 modalBody bg-transparent"
              >
                <Form.Control
                  type="text"
                  placeholder="Qashqadaryo"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                />
              </FloatingLabel>
              <InputGroup className="mb-3 mt-3 bg-transparent modalInput">
                <InputGroup.Text
                  id="basic-addon1"
                  className="bg-transparent inputTextColor"
                >
                  +998
                </InputGroup.Text>
                <Form.Control
                  placeholder="90 699 70 71"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </InputGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Qaytarish
              </Button>
              <Button variant="primary" onClick={handleYuborish}>
                Yuborish
              </Button>
            </Modal.Footer>
          </div>
        </Modal>

        {/* Joylashuv */}
        <div className="joylashuv position-relative">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3095.511705081073!2d66.89108047576025!3d39.11758577167796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4cbb686357ed39%3A0xfd13d5677a926088!2sIqtidor%20IT%20Academy!5e0!3m2!1suz!2s!4v1715770156608!5m2!1suz!2s"
              width="100%" height="370px" allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <Footer/>
    </Fragment>
  );
}

export default Qabul;
