import "./Navbar.css";
import 'animate.css';
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import BrendSecond from "./algoritm_icon/Logo.svg";
import DarkMode from "../darkmode/DarkMode";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import InputGroup from "react-bootstrap/InputGroup";
import Swal from "sweetalert2";
import { NavLink, Outlet } from "react-router-dom";
import Scroltop from "../scroltop/Scroltop.jsx";


function Navbars() {
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

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        <div className="navbarPage">
          <Navbar expand="lg">
            <Container
              className={
                isScrolled
                  ? "navbar fixed-top pe-3 light-background"
                  : "navbar fixed-top pe-3 transparent-background"
              }
            >
              <Navbar.Brand>
                <NavLink to="/" className="animate__animated animate__fadeInLeft">
                  <img src={BrendSecond} alt="brend :)" className="navBrend " />
                </NavLink>
              </Navbar.Brand>
              <div className="resonsbox">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <div className="responsbox_DarkMode">
                  <DarkMode />
                </div>
              </div>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={NavLink} to="maktab" className="nav-li nav-li_href animate__animated animate__fadeInLeft">
                    Maktab haqida
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="dastur" className="nav-li animate__animated animate__fadeInLeft">
                    O‘quv dasturi
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="qabul" className="nav-li animate__animated animate__fadeInLeft">
                    Qabul-2024
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="jamoa" className="nav-li nav-li-second animate__animated animate__fadeInLeft">
                    O‘qituvchilar jamoasi
                  </Nav.Link>
                  <p
                    className="asosiyBtn fw-bolder btn btn-outline-info text-light rounded  border rounded-5 px-3 py-1 fs-5 mt-lg-2 ms-lg-2 animate__animated animate__fadeInLeft"
                    onClick={handleShow}
                  >
                    Ariza yuborish
                  </p>
                </Nav>
                <div className="darkBox d-none d-lg-block ">
                  <DarkMode />
                </div>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          {/* Modal */}
          <Modal
            className="asosiyModal position-absolute"
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <div className="divv rounded-3 ">
              <Modal.Header closeButton>
                <Modal.Title className="modalTitle">Ariza yuborish</Modal.Title>
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

                {/*rCAPTCHA*/}

                {/*<div className = "form-group captcha-container">*/}
                {/*  <div className = "captcha-box">*/}
                {/*    <span className = "captcha">{captcha}</span>*/}
                {/*    <Button*/}
                {/*        variant = "contained"*/}
                {/*        color = "primary"*/}
                {/*        onClick = {refreshCaptcha}*/}
                {/*        className = "refresh-captcha-button"*/}
                {/*    >*/}
                {/*      Refresh*/}
                {/*    </Button>*/}
                {/*  </div>*/}
                {/*  <input*/}
                {/*      required*/}
                {/*      id = "captchaInput"*/}
                {/*      onChange = {(e) => setCaptchaInput(e.target.value)}*/}
                {/*      type = "text"*/}
                {/*      className = "style_input captcha-input"*/}
                {/*      placeholder = "Enter CAPTCHA*"*/}
                {/*  />*/}
                {/*</div>*/}

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
        </div>
      </header>

      <main>
        <Scroltop />
        <Outlet />
      </main>
    </>
  );
}

export default Navbars;
