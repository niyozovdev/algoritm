import "./Dastur.css";
import Footer from "../footer/Footer";
import Fanlar from "../fanlar/Fanlar";
import Dastur01 from "./img/dastur01.jpg";
import Dastur02 from "./img/dastur02.jpg";
import Dastur03 from "./img/dastur03.jpg";
import { Fragment } from "react";

function Dastur() {
  return (
    <Fragment>
      <div className="container">
        <div className="dasturBox">
          <div className="h1 ms-3 pt-3 talim">TA’LIM DASTURI</div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="h2">1-4 sinflar uchun ta’lim dasturi</div>
              <p className="h4">
                Registon xususiy maktabida tabiiy ravishda dars soatlari ko‘p
                bo‘ladi. Davlat ta’lim standartlariga qo‘shimcha ravishda
                kuchaytirilgan dars soatlari qo‘shiladi. Bunda 1-sinfdan
                4-sinfgacha bo‘lgan boshlang‘ich sinflarda rus tili, arab tili,
                matematika va ingliz tili soatlari ko‘proq, chuqurlashtirib
                o‘rgatiladi. Ingliz tili va matematikadan chet el
                qo‘llanmalaridan foydalaniladi. Boshlang‘ich sinf uchun
                qo‘shimcha to‘garaklardan shaxmat, robototexnika, gimnastika,
                taekvondo va uyga vazifa soatlari o‘tiladi.
              </p>
            </div>
            <div className="col-lg-6 col-md-12">
              <img src={Dastur01} alt="1-4 sinf" className="img-fluid" />
            </div>
            <hr className="border-2 my-5" />

            <div className="col-lg-6 col-md-12">
              <div className="h2">5-8 sinflar uchun ta’lim dasturi</div>
              <p className="h4">
                5-8-sinflarda asosiy fanlar o‘quv dasturiga qo‘shgan bo‘lib,
                soatlari chuqurlashtirib o‘tiladi. Bular: arab tili, ingliz
                tili, rus tili matematika va IT. Ingliz tili fanidan chet ellik
                xorijiy pedagoglar dars berishadi. Qo‘shimcha shaxmat,
                taekvondo, gimnastika hamda debat klub darslari olib boriladi.
                Bu sinflarda o‘quvchilarning iqtidorini kashf qilish boshlanadi.
                Shu maqsadda bolaning qiziqishlaridan kelib chiqqan holda
                ustozlar, psixolog va ota-ona bilan maslahatlashib o‘quvchining
                yo‘nalishi aniqlanadi
              </p>
            </div>
            <div className="col-lg-6 col-md-12">
              <img src={Dastur02} alt="1-4 sinf" className="img-fluid" />
            </div>
            <hr className="border-2 my-5" />

            <div className="col-lg-6 col-md-12">
              <div className="h2">9-11 sinflar uchun ta’lim dasturi</div>
              <p className="h4">
                9-11-sinflar sohaga yo‘naltirilgan bo‘lib universitetga
                tayyorlov darslari olib boriladi. Tabiiy fanlar va biznes
                menejment yo‘nalishlariga bo‘linib, tabiiy fanlarda kimyo
                biologiya, biznes menejment yo‘nalishida esa ingliz tili
                matematika chuqurlashtirib o‘rgatiladi. Ta‘lim dasturi faqatgina
                mahalliy oliygohlar emas, balki chet el oliygohlariga ham
                tayyorlashni o’z ichiga olgani bois IELTS va SAT darslari ham
                olib boriladi. O‘qish haftasiga 6 kun bo’lib, 6-kun qo‘shimcha
                tayyorlov va imtihonlar kuni qilib belgilanadi. Har oy yo‘nalish
                bo‘yicha umumiy imtihonlar o‘tkazilib, o‘quvchilarning
                o‘zlashtirishi doimiy baholanib boriladi.
              </p>
            </div>
            <div className="col-lg-6 col-md-12">
              <img src={Dastur03} alt="1-4 sinf" className="img-fluid" />
            </div>
          </div>
        </div>

        <p className="h1 py-5">Chuqurlashtirilgan fanlar</p>
        <div className="fanlar">
          <Fanlar />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </Fragment>
  );
}

export default Dastur;
