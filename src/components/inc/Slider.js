import React from "react";
import ugali from "../images/ugali.png";
import pilau from "../images/pilau.png";
import rice from "../images/rice.png";
function Slider(){
    return(
         <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
                   <div class="carousel-inner">
                       <div class="carousel-item active">
                           <img src={pilau} class="d-block w-100" alt="..."/>
                           <div class="carousel1">
                           <h5>pilau</h5>
                              <p>nyama</p>
                            </div>
                          </div>
                       <div class="carousel-item">
               <img src={rice} class="d-block w-100" alt="..."/>
          <div class="carousel2">
         <h5>rice </h5>
          <p>nyama</p>
         </div>
                 </div>
                    <div class="carousel-item">
                    <img src={ugali} class="d-block w-100" alt="..."/>
                  <div class="carousel3">
                    <h5>Ugali</h5>
                   <p>Sukuma</p>
                  </div>
                     </div>
                     </div>
         <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
           </button>
         <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
           <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
       </div>


    );
}
export default Slider;