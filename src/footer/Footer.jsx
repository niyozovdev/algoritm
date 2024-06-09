import "./Footer.css";
import { useState } from "react";
import BrendSection from "./img/algoritmFooter.svg";
import Modal from 'react-bootstrap/Modal';
import {NavLink} from "react-router-dom";


function Footer() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow2(false);
  const handleClose3 = () => setShow3(false);
  const handleShow = () => setShow(true);
  const handleShow2 = () => setShow2(true);
  const handleShow3 = () => setShow3(true);
  return (
    <div>
      <footer class="footer-section">
        <div class="container">
          <div class="footer-cta pt-3 pt-lg-5 pb-3 pb-lg-5">
            <div class="row">
              <div class="col-xl-4 col-md-4 mb-3">
                <div class="single-cta" onClick={handleShow}>
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="cta-text">
                    <h4>Joylashuv</h4>
                    <span>Kitob tumani, IT academiya ro'parasi</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-3">
                <div class="single-cta" onClick={handleShow2}>
                  <i class="fas fa-phone"></i>
                  <div class="cta-text">
                    <h4>Bog'lanish uchun</h4>
                    <span className="me-2">+998 90 699 70 71</span>
                    <span>+99890 670  70 71</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4">
                <div class="single-cta" onClick={handleShow3}>
                  <i class="far fa-envelope-open"></i>
                  <div class="cta-text">
                    <h4>Elektron pochta manzili</h4>
                    <span>xabar@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-content pt-5">
            <div class="row">
              <div class="col-xl-4 col-lg-4 ">
                <div class="footer-widget">
                  <div class="footer-logo">
                    <NavLink to="/">
                      <img src={BrendSection} class="img-fluid" alt="logo" />
                    </NavLink>
                  </div>
                  <div class="footer-text">
                    <p className="paragraphFooter">
                      Algoritm o'quv markazida siz Matematika fanidan chuqur bilimga 
                      ega bo'lgan ustozlardan bilim olishingiz mumkin. Nafaqat matematika,
                      baliki hozirda rivojlanib borayotgan IT sohalariniham 5 -6 yillik 
                      tajribaga ega ustozlardan o'rganishingiz mumkin. 
                    </p>
                  </div>
                  <div class="footer-social-icon">
                    <span>Bizni kuzating</span>
                    <a href="https://www.facebook.com/">
                      <i class="fab fa-facebook-f facebook-bg"></i>
                    </a>
                    <a href="https://x.com/">
                      <i class="fab fa-twitter twitter-bg"></i>
                    </a>
                    <a href="https://support.google.com/answer/2451065?hl=en">
                      <i class="fab fa-google-plus-g google-bg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-3">
                <div class="footer-widget">
                  <div class="footer-widget-heading mt-3 mt-lg-5">
                    <h3>Foydali havolalar</h3>
                  </div>
                  <ul>
                    <li>
                      <NavLink to="/">Bosh sahifa</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Asosiy</NavLink>
                    </li>
                    <li>
                      <NavLink to="/maktab">Maktab haqida</NavLink>
                    </li>
                    <li>
                      <NavLink to="/dastur">O'quv dasturi</NavLink>
                    </li>
                    <li>
                      <NavLink to="/qabul">Qabul-2024</NavLink>
                    </li>
                    <li>
                      <NavLink to="/jamoa">O‘qituvchilar jamoasi</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>Obuna bo'ling</h3>
                  </div>
                  <div class="footer-text mb-25">
                    <p>
                    Bizning yangi tasmalarga obuna bo'lishni o'tkazib yubormang, iltimos, quyidagi shaklni to'ldiring.
                    </p>
                  </div>
                  <div class="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Elektron pochta manzili" />
                      <button>
                        <i class="fab fa-telegram-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <Modal
        className="asosiyModal"
        size="xl"
        aria-labelledby="example-modal-sizes-title-lg"
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <div className="divv">
        <Modal.Header closeButton>
          <Modal.Title className="modalTitle" >Maktabimiz joylashuvi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3095.511705081073!2d66.89108047576025!3d39.11758577167796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4cbb686357ed39%3A0xfd13d5677a926088!2sIqtidor%20IT%20Academy!5e0!3m2!1suz!2s!4v1715770156608!5m2!1suz!2s" width="100%" height="333px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Modal.Body>
        </div>
      </Modal>
      <Modal
          className="asosiyModal"
          size="lg"
          aria-labelledby="example-modal-sizes-title-lg"
          centered
          show={show2}
          onHide={handleClose2}
          backdrop="static"
          keyboard={false}
      >
        <div className="divv">
          <Modal.Header closeButton>
            <Modal.Title className="modalTitle" >Telefon raqamlar</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-6 col-sm-12 link-info fs-3 p-lg-5 p-sm-3 fw-semibold">+998906997071</div>
              <div className="col-lg-6 col-sm-12 link-info fs-3 p-lg-5 p-sm-3 fw-semibold">+998916997071</div>
            </div>
          </Modal.Body>
        </div>
      </Modal>
      <Modal
          className="asosiyModal"
          size="lg"
          aria-labelledby="example-modal-sizes-title-lg"
          centered
          show={show3}
          onHide={handleClose3}
          backdrop="static"
          keyboard={false}
      >
        <div className="divv">
          <Modal.Header closeButton>
            <Modal.Title className="modalTitle" >Email pochta</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className = "row">
              <div className = "col-lg-6 col-sm-12 link-info fs-3 p-lg-5 p-sm-3 fw-semibold">azamatniyozov@gmail.com</div>
              <div className = "col-lg-6 col-sm-12 link-info fs-3 p-lg-5 p-sm-3 fw-semibold">niyozov@gmail.com</div>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
}

export default Footer;
