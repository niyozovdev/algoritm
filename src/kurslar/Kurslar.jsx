import {CCarousel, CCarouselItem, CCarouselCaption, CImage} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import img1 from './image/matematika.jpg'
import img2 from './image/fizika.jpg'
import img3 from './image/English.png'
import img4 from './image/developer.png'


function Kurslar() {
    return(
       <>
           <div className="container">
               <div className = "row">
                   <h1 className = "h1">Mavjud kurslar</h1>
                   <div className = "col-12 col-lg-6">
                       <CCarousel controls indicators dark transition = "crossfade">
                           <CCarouselItem>
                               <CImage className = "d-block w-100" src = {img1} alt = "slide 1" />
                               <CCarouselCaption className = "d-none d-md-block">
                                   <h5>First slide label</h5>
                                   <p>Some representative placeholder content for the first slide.</p>
                               </CCarouselCaption>
                           </CCarouselItem>
                           <CCarouselItem>
                               <CImage className = "d-block w-100" src = {img2} alt = "slide 2" />
                               <CCarouselCaption className = "d-none d-md-block">
                                   <h5>Second slide label</h5>
                                   <p>Some representative placeholder content for the first slide.</p>
                               </CCarouselCaption>
                           </CCarouselItem>
                           <CCarouselItem>
                               <CImage className = "d-block w-100" src = {img3} alt = "slide 3" />
                               <CCarouselCaption className = "d-none d-md-block">
                                   <h5>Third slide label</h5>
                                   <p>Some representative placeholder content for the first slide.</p>
                               </CCarouselCaption>
                           </CCarouselItem>
                           <CCarouselItem>
                               <CImage className = "d-block w-100" src = {img4} alt = "slide 3" />
                               <CCarouselCaption className = "d-none d-md-block">
                                   <h5>Third slide label</h5>
                                   <p>Some representative placeholder content for the first slide.</p>
                               </CCarouselCaption>
                           </CCarouselItem>
                       </CCarousel>
                   </div>
                   <div className = "col-12 col-lg-6">
                       <CCarousel controls indicators dark transition = "crossfade">
                           <CCarouselItem>
                               <CCarouselCaption className = "d-none d-md-block">
                                   <h5>First slide label</h5>
                                   <p>Some representative placeholder content for the first slide.</p>
                               </CCarouselCaption>
                           </CCarouselItem>
                           <CCarouselItem>
                               <CImage className = "d-block w-100" src = {img2} alt = "slide 2" />
                               <CCarouselCaption className = "d-none d-md-block">
                                   <h5>Second slide label</h5>
                                   <p>Some representative placeholder content for the first slide.</p>
                               </CCarouselCaption>
                           </CCarouselItem>
                           <CCarouselItem>
                               <CImage className = "d-block w-100" src = {img3} alt = "slide 3" />
                               <CCarouselCaption className = "d-none d-md-block">
                                   <h5>Third slide label</h5>
                                   <p>Some representative placeholder content for the first slide.</p>
                               </CCarouselCaption>
                           </CCarouselItem>
                           <CCarouselItem>
                               <CImage className = "d-block w-100" src = {img4} alt = "slide 3" />
                               <CCarouselCaption className = "d-none d-md-block">
                                   <h5>Third slide label</h5>
                                   <p>Some representative placeholder content for the first slide.</p>
                               </CCarouselCaption>
                           </CCarouselItem>
                       </CCarousel>
                   </div>
               </div>
           </div>
       </>
    )
}

export default Kurslar;