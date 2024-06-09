import "./Asosiy.css";
import React,{useLayoutEffect} from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { Fragment, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import InputGroup from "react-bootstrap/InputGroup";
import Swal from "sweetalert2";
import Avatar from "./img/image.png";
import img1 from "./img/rowItem_img1.jpg";
import img2 from "./img/rowItem_img2.jpg";
import img3 from "./img/rowItem_img3.jpeg";
import Uquvjarayoni from "../uquvjarayoni/Uquvjarayoni";
import Footer from "../footer/Footer";

const Asosiy = () => {
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

  // Gsap
  gsap.registerPlugin(ScrollTrigger);

    // Video Youtube
    useLayoutEffect(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".iframeBox",
          start: "top center",
          end: "bottom 80%",
          scrub: true,
          markers: {
            startColor: "transparent",
            endColor: "transparent",
          },
        },
      });
      tl.from(".iframeBox",{
        scale:1.5,
        opacity:0,
        x:-300,
        duration:2,
      }).to(".iframeBox",{scale:0.9});
    }, []);
    useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".natijaTextBox",
        start: "top center",
        end: "bottom 80%",
        scrub: true,
        markers: {
          startColor: "transparent",
          endColor: "transparent",
        },
      },
    });
    tl.from(".natijaTextBox",{
      scale:1.5,
      opacity:0,
      x:300,
      duration:2,
    }).to(".natijaTextBox",{scale:0.9});
  }, []);

  // Uquv dasturi
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".itemBir",
        start: "top center",
        end: "bottom 50%",
        scrub: true,
        markers: {
          startColor: "transparent",
          endColor: "transparent",
        },
      },
    });
    tl.from(".itemBir",{
      opacity:0,
      x:-300,
      y:-200,
      duration:3,
      delay:3,
    }).to(".itemBir",{scale:1});
  }, []);
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".itemIkki",
        start: "top center",
        end: "bottom 50%",
        scrub: true,
        markers: {
          startColor: "transparent",
          endColor: "transparent",
        },
      },
    });
    tl.from(".itemIkki",{
      opacity:0,
      x:-300,
      y:-200,
      duration:3,
      delay:2,
    }).to(".itemIkki",{scale:1});
  }, []);
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".itemUch",
        start: "top center",
        end: "bottom 50%",
        scrub: true,
        markers: {
          startColor: "transparent",
          endColor: "transparent",
        },
      },
    });
    tl.from(".itemUch",{
      opacity:0,
      x:-300,
      y:-200,
      duration:3,
      delay:1,
    }).to(".itemUch",{scale:1});
  }, []);

  // middle2
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".middle2",
        start: "top center",
        end: "bottom 70%",
        scrub: true,
        markers: {
          startColor: "transparent",
          endColor: "transparent",
        },
      },
    });
    tl.from(".middle2",{
      opacity:0,
      x:-300,
      y:-200,
      duration:4,
    }).to(".middle2",{scale:1});
  }, []);

  // uquvJarayoni
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".uqishJarayoni",
        start: "top center",
        end: "bottom 35%",
        scrub: true,
        markers: {
          startColor: "transparent",
          endColor: "transparent",
        },
      },
    });
    tl.from(".uqishJarayoni",{
      opacity:0,
      x:-300,
      y:-200,
      duration:4,
    }).to(".uqishJarayoni",{scale:1});
  }, []);
  return (
    <Fragment>
      <div className="container asosiyParen">
        <div className="asosiyHeader position-relative ">
          <p className="asosiy__p animate__animated animate__fadeInLeft" >E‘LON!</p>

          <p className="asosiy__qabul animate__animated animate__fadeInLeft">
            2024-25 o‘quv yili uchun qabul boshlandi !
          </p>
          <p
            className="elonBtn btn btn-outline-info text-light rounded border-2 border rounded-5 ps-4 pt-2 pe-3 pb-2 fs-5 asosiyBtn animate__animated animate__bounceInUp"
            onClick={handleShow}
          >
            Ariza yuborish
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
            </svg>
          </p>

          {/* MiddleBox */}

          <div className="containerMiddleBox animate__animated animate__bounceInUp">
            <div className="row align-items-center">
              <div className="col-lg-9 rowText">
                Ariza qoldiring. Biz siz bilan bog‘lanib batafsil ma`lumot
                beramiz.
              </div>
              <div className="col-lg-3 rowBtn text-center" onClick={handleShow}>
                <button
                  className="btn btn-success rounded-5  px-3 px-md-4 px-lg-4 py-2 py-lg-2 mt-3 mt-lg-0"
                >
                  Ariza yuborish
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Natijalar */}

        <div className="containerNatijalar ">
          <div className="containernatijaBox">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="iframeBox">
                  <iframe
                    className="iframe"
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/8Qh4dHpyi4E?si=9EP5fqLWoQlUEWWx"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="col-lg-6 natijaTextBox">
                <div className="natijaParagraph">
                  Eng yaxshi xususiy maktab albatta yuqori sifatli ta’limni
                  taklif etadi. Sifatli ta’lim deganda esa natijaga asoslangan
                  ta’lim nazarda tutiladi. Biz bilan farzandingiz nafaqat kuchli
                  ta’lim oladi, balki zamonaviy dunyodagi qiyinchiliklarga
                  tayyor, o’z fikri va qarashiga ega mustaqil shaxs bo’lib
                  yetishadi.
                  <div className="derector position-relative">
                    <div className="row align-items-center">
                      <div className="col-12 col-lg-2 text-center">
                        <img src={Avatar} alt="Derektor rasmi :)" />
                      </div>
                      <div className="col-12 col-lg-10 text-center text-lg-start mt-2 mt-lg-0">
                        <p className="derectorHeading h3">Azamat Niyozov</p>
                        <p className="derectorParagraph">
                          <a
                            href="https://t.me/niyozov_0206"
                            target="_blank"
                            className="stretched-link"
                          >
                            “Algoritm School ta’lim loyihasi” asoschisi
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>

      {/* Asosiy */}
      <div className="asosiySection">
        {/* O'quv Dasturi */}
        <div className = "containerDastur position-relative">
          <div className = "containerDasturBox container">
            <p className = "h1 mb-3">O‘quv dasturi</p>
            <p className = "h3 mb-4 mb-lg-5">
              Bizning o‘quv dasturimiz - Milliy hamda Xalqaro o’quv standartlari
              talablarini birlashtirgan dastur. Biz orqali siz farzandingizga
              yuqori sifatli xalqaro ta’lim olish imkoniyatini taqdim etasiz.
            </p>

            <div className = "row">
              <div className = "col-12  col-lg-4 position-relative">
                <div className = "rowItem itemBir">
                  <img
                      src = {img1}
                      alt = "1-4 sinf"
                      className = "img-fluid w-100 h-100 rounded-4"
                  />
                </div>
                <div className = "h2 sinflar">1-4 sinf</div>
              </div>
              <div className = "col-12  col-lg-4 position-relative">
                <div className = "rowItem itemIkki">
                  <img
                      src = {img2}
                      alt = "5-9 sinf"
                      className = "img-fluid w-100 h-100 rounded-4"
                  />
                </div>
                <div className = "h2 sinflar">5-8 sinf</div>
              </div>
              <div className = "col-12  col-lg-4 position-relative">
                <div className = "rowItem itemUch">
                  <img
                      src = {img3}
                      alt = "10-11 sinf"
                      className = "img-fluid w-100 h-100 rounded-4"
                  />
                </div>
                <div className = "h2 sinflar">9-11 sinf</div>
              </div>
            </div>
          </div>

          {/* MiddleBox */}
          <div className = "container">
            <div className = "containerMiddleBox middle2">
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
        </div>
      </div>


      {/* UqishJarayoni */}
      <div className = "uqishJarayoni position-relative">
        <div className = "container">
          <div className = "h1 mb-4 textJarayon">O‘qish jarayonlari</div>
          <Uquvjarayoni />
        </div>
      </div>

      {/* Footer */}
      <div className = "p-0">
        <Footer />
      </div>

      {/* Modal */}
      <Modal
          className = "asosiyModal position-absolute"
          show = {show}
          onHide = {handleClose}
          backdrop = "static"
          keyboard = {false}
      >
        <div className = "divv rounded-3">
          <Modal.Header closeButton>
            <Modal.Title className="modalTitle">Ariza yuborish</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FloatingLabel
                controlId="floatingInput"
                label="Ism familiya"
                className="mb-3 modalBody bg-transparent"
            >
              <Form.Control
                  type="text"
                  placeholder="Azamat Niyozov"
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
    </Fragment>
  );
};

export default Asosiy;
