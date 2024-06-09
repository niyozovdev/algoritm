import "./maktab.css";
import MaktabImg from "./image/maktabImg.jpg";
import DirectorImg from "./image/directonImg.jpg";
import SinfxonaImg from "./image/maktabhaqida01.jpg";
import SportImg from "./image/sportImg.jpg";
import SportzalImg from "./image/sportzalImg.jpg";
import Ekskursiya from "./image/ekskursiyImg.jpg";
import Labaratoriya from "./image/labaratoriyaImg.jpg";
import Footer from "../footer/Footer";
import { Fragment, useLayoutEffect } from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import 'animate.css';

function maktab() {
  // Gsap
  gsap.registerPlugin(ScrollTrigger);

  // Maktab haqida
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".col-md-7",
        start: "top center",
        end: "bottom 80%",
        scrub: true,
        markers: {
          startColor: "transparent",
          endColor: "transparent",
        },
      },
    });
    tl.from(".col-md-7",{
      scale:1.5,
      opacity:0,
      x:-300,
      duration:2,
    }).to(".col-md-7",{scale:0.9});
  }, []);
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".col-md-5",
        start: "top center",
        end: "bottom 90%",
        scrub: true,
        markers: {
          startColor: "transparent",
          endColor: "transparent",
        },
      },
    });
    tl.from(".col-md-5",{
      scale:1.5,
      opacity:0,
      x:300,
      duration:2,
    }).to(".col-md-5",{scale:0.9});
  }, []);

  // Sharoit va Imkoniyatlar
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".textSharoit",
        start: "top center",
        end: "bottom 50%",
        scrub: true,
        markers: {
          startColor: "transparent",
          endColor: "transparent",
        },
      },
    });
    tl.from(".textSharoit",{
      opacity:0,
      x:-300,
      y:-100,
      duration:3,
      delay:3,
    }).to(".textSharoit",{scale:1});
  }, []);
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".rasmBox",
        start: "top center",
        end: "bottom 60%",
        scrub: true,
        markers: {
          startColor: "transparent",
          endColor: "transparent",
        },
      },
    });
    tl.from(".rasmBox",{
      opacity:0,
      x:-300,
      y:-300,
      duration:3,
    }).to(".rasmBox",{scale:1});
  }, []);
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".matnBox",
        start: "top center",
        end: "bottom 60%",
        scrub: true,
        markers: {
          startColor: "transparent",
          endColor: "transparent",
        },
      },
    });
    tl.from(".matnBox",{
      opacity:0,
      x:-300,
      y:-300,
      duration:3,
    }).to(".matnBox",{scale:1});
  }, []);
  // 22222
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".rasmBox2",
        start: "top center",
        end: "bottom 60%",
        scrub: true,
        markers: {
          startColor: "transparent",
          endColor: "transparent",
        },
      },
    });
    tl.from(".rasmBox2",{
      opacity:0,
      x:-300,
      y:-300,
      duration:3,
    }).to(".rasmBox2",{scale:1});
  }, []);
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".matnBox2",
        start: "top center",
        end: "bottom 60%",
        scrub: true,
        markers: {
          startColor: "transparent",
          endColor: "transparent",
        },
      },
    });
    tl.from(".matnBox2",{
      opacity:0,
      x:-300,
      y:-300,
      duration:3,
    }).to(".matnBox2",{scale:1});
  }, []);
  // 3333
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".rasmBox3",
        start: "top center",
        end: "bottom 60%",
        scrub: true,
        markers: {
          startColor: "transparent",
          endColor: "transparent",
        },
      },
    });
    tl.from(".rasmBox3",{
      opacity:0,
      x:-300,
      y:-300,
      duration:3,
    }).to(".rasmBox3",{scale:1});
  }, []);
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".matnBox3",
        start: "top center",
        end: "bottom 60%",
        scrub: true,
        markers: {
          startColor: "transparent",
          endColor: "transparent",
        },
      },
    });
    tl.from(".matnBox3",{
      opacity:0,
      x:-300,
      y:-300,
      duration:3,
    }).to(".matnBox3",{scale:1});
  }, []);
  // 4444
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".rasmBox4",
        start: "top center",
        end: "bottom 60%",
        scrub: true,
        markers: {
          startColor: "transparent",
          endColor: "transparent",
        },
      },
    });
    tl.from(".rasmBox4",{
      opacity:0,
      x:-300,
      y:-300,
      duration:3,
    }).to(".rasmBox4",{scale:1});
  }, []);
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".matnBox4",
        start: "top center",
        end: "bottom 60%",
        scrub: true,
        markers: {
          startColor: "transparent",
          endColor: "transparent",
        },
      },
    });
    tl.from(".matnBox4",{
      opacity:0,
      x:-300,
      y:-300,
      duration:3,
    }).to(".matnBox4",{scale:1});
  }, []);
  // 5555
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".rasmBox5",
        start: "top center",
        end: "bottom 60%",
        scrub: true,
        markers: {
          startColor: "transparent",
          endColor: "transparent",
        },
      },
    });
    tl.from(".rasmBox5",{
      opacity:0,
      x:-300,
      y:-300,
      duration:3,
    }).to(".rasmBox5",{scale:1});
  }, []);
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".matnBox5",
        start: "top center",
        end: "bottom 60%",
        scrub: true,
        markers: {
          startColor: "transparent",
          endColor: "transparent",
        },
      },
    });
    tl.from(".matnBox5",{
      opacity:0,
      x:-300,
      y:-300,
      duration:3,
    }).to(".matnBox5",{scale:1});
  }, []);
  // 5555
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".rasmBox6",
        start: "top center",
        end: "bottom 60%",
        scrub: true,
        markers: {
          startColor: "transparent",
          endColor: "transparent",
        },
      },
    });
    tl.from(".rasmBox6",{
      opacity:0,
      x:-300,
      y:-300,
      duration:3,
    }).to(".rasmBox6",{scale:1});
  }, []);
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".matnBox6",
        start: "top center",
        end: "bottom 60%",
        scrub: true,
        markers: {
          startColor: "transparent",
          endColor: "transparent",
        },
      },
    });
    tl.from(".matnBox6",{
      opacity:0,
      x:-300,
      y:-300,
      duration:3,
    }).to(".matnBox6",{scale:1});
  }, []);
  return (
    <Fragment>
      <div className="container">
        <div>
          <h1 className="haqida animate__animated animate__fadeInLeft">Algoritm xususiy maktabi haqida</h1>
          <div className="maktabRasm w-100">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 animate__animated animate__zoomIn">
                <div className = "imgBox">
                  <img src = {MaktabImg} alt = "MaktabImg" className = "img-fluid" />
                </div>
              </div>
              <div className = "col-12 col-md-6 animate__animated animate__fadeInBottomRight">
                <div className="maktabHeading ">Algoritm ta’lim loyihasi:</div>
                <p className="maktabParagraph">
                  1. Algoritm o‘quv markazi – 2013-2014 o‘quv yilida tashkil
                  topgan. Hozirda 700 dan ziyod o‘qituvchi 15000 dan ortiq
                  o‘quvchiga ta’lim berib kelmoqda. <br />
                  2. Algoritm nashriyoti. 2019-yilda tashkil topgan. Hozirda 200
                  ga yaqin ta’limga oid kitoblar nashr qilingan. Oxirgi 1 yilda
                  400mingdan oshiq kitoblar butun O‘zbekiston bo‘ylab sotildi.{" "}
                  <br />
                  3. Algoritm maktabi. 2022-yilda tashkil etilib litsenziya
                  olindi. 2023-yilda o‘z faoliyatini boshladi. <br />
                  4. Algoritm Universiteti. 2023-yilda tashkil topdi.
                  Universitetlarda pedagogika va uning menejmentiga diqqat
                  qaratilgan. Asosiy maqsad – O‘zbekistonda eng yaxshi
                  o‘qituvchilarni tayyorlash.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="vazifalar ">
          <div className="maktabRasm w-100">
            <div className="row align-items-center">
              <div className="col-12 col-md-7">
                <div className="maktabHeading ">Vazifalar</div>
                <p className="maktabParagraph">
                  – Bolalarimiz zamonaviy dunyodagi qiyinchiliklarga tayyor, o‘z
                  fikri va qarashiga ega mustaqil shaxslar bo‘lishi uchun barcha
                  imkoniyatlarimizni ishga solamiz; <br />
                  – Biz o‘quvchilarimizning o‘zligini tanigan insonlar sifatida
                  har qanday vaziyatda to‘g‘ri qarorlar qabul qiladigan bo‘lib
                  rivojlanishlari uchun harakat qilamiz; <br />
                  –Bolalarimizda jamoaga nisbatan hurmat hissi shakllanishini
                  rivojlantiramiz. Xususiy maktabimizda jamoada ishlash, jamoa
                  bilan uyg‘unlashuvga alohida e’tibor beriladi;
                  <br />– O‘quvchilarimiz zamonaviy dunyo tez o‘zgarayotganini
                  his qilishadi va shunga mos doimiy bilim olishga tayyor
                  bo’lishadi. Ya’ni o‘z ustida ishlash ko‘nikmasini
                  rivojlantiramiz.
                </p>
              </div>
              <div className="col-12 col-md-5">
                <div className = "imgBox">
                  <img src = {DirectorImg} alt = "MaktabImg" className = "img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="vazifalar">
          <div className="maktabRasm w-100">
            <div className="row align-items-center position-relative">
              <div className="h1 start-0 position-absolute textSharoit ">
                Sharoit va imkoniyatlar
              </div>

              <div className="col-12 col-md-6 order1 rasmBox">
                <div className="imgBox">
                  <img src={MaktabImg} alt="MaktabImg" className="img-fluid" />
                </div>
              </div>
              <div className="col-12 col-md-6 order2 matnBox">
                <div className="maktabHeading ">
                  Havo aylanish va isitish tizimi
                </div>
                <p className="maktabParagraph">
                  Maktab binosi, sinfxonalarda o‘quvchilar darslarni yaxshi
                  o‘zlashtirishi uchun havo aylanish va isitish tizimi yo‘lga
                  qo‘yilgan. Chiller tizimi bu vazifani bajaradi.
                </p>
              </div>

              <div className="col-12 col-md-6 order3 matnBox2">
                <div className="maktabHeading ">Sinfxonalar, jihozlar</div>
                <p className="maktabParagraph">
                  Sinfda maksimal 20 nafar o‘quvchi bo‘lib, sinf xonada elektron
                  doska, sifatli standartga ko‘ra yasalgan stol-stullar mavjud.
                  Har bir o‘quvchi kitob va kiyimlarini joylash uchun shaxsiy
                  javonlar o‘rnatilgan.
                </p>
              </div>
              <div className="col-12 col-md-6 order4 rasmBox2">
                <div className="imgBox">
                  <img src={SinfxonaImg} alt="MaktabImg" className="img-fluid" />
                </div>
              </div>

              <div className="col-12 col-md-6 order5 rasmBox3">
                <div className="imgBox">
                  <img src={SportImg} alt="MaktabImg" className="img-fluid" />
                </div>
              </div>
              <div className="col-12 col-md-6 order6 matnBox3">
                <div className="maktabHeading ">Sport va fan to'garaklari</div>
                <p className="maktabParagraph">
                  Soat 15:00 dan keyin o‘quvchilar uchun alohida to‘garak
                  soatlari tashkillashtiriladi. Bolalarning jismonan sog‘lom
                  bo‘lishi uchun gimnastika va taekvondo sport to‘garaklari
                  o‘tiladi.
                </p>
              </div>

              <div className="col-12 col-md-6 order7 matnBox4">
                <div className="maktabHeading ">Sportzallar</div>
                <p className="maktabParagraph">
                  Maktabda ochiq va yopiq sport maydoni mavjud bo‘lib, maktab
                  binosi ichida sportzal va tashqarida futbol, voleybol
                  o‘yingohi bo‘ladi. Bundan tashqari, umumiy bayramlar va
                  tadbirlar uchun 150 kishilik anjumanlar zali mavjud.
                </p>
              </div>
              <div className="col-12 col-md-6 order8 rasmBox4">
                <div className="imgBox">
                  <img src={SportzalImg} alt="MaktabImg" className="img-fluid" />
                </div>
              </div>

              <div className="col-12 col-md-6 order9 rasmBox5">
                <div className="imgBox">
                  <img src={Labaratoriya} alt="MaktabImg" className="img-fluid" />
                </div>
              </div>
              <div className="col-12 col-md-6 order10 matnBox5">
                <div className="maktabHeading ">Laboratoriya xonalari</div>
                <p className="maktabParagraph">
                  O‘quvchilar fanlarni faqat nazariy emas, amaliy o‘zlashtirishi
                  uchun kimyo, fizika va biologiya fanlari uchun maxsus
                  laboratoriya xonalari mavjud. Shuningdek, maktab zamonaviy
                  kompyuterlar bilan jihozlangan informatsion texnologiya
                  xonalariga ega
                </p>
              </div>

              <div className="col-12 col-md-6 order11 matnBox6">
                <div className="maktabHeading ">Ekskursiyalar</div>
                <p className="maktabParagraph">
                  Maktabdagi doimiy darslardan tashqari o‘quvchilar uchun har
                  choraklik ekskursiyalar tashkillashtirilgan. Bunda o‘quvchilar
                  maktabda nazariy olgan bilimlarini turli muzeylar, oromgohlar
                  va tarixiy joylarga borish orqali amaliy mustahkamlaydila
                </p>
              </div>
              <div className="col-12 col-md-6 order12 rasmBox6">
                <div className="imgBox">
                  <img src={Ekskursiya} alt="MaktabImg" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </Fragment>
  );
}

export default maktab;
