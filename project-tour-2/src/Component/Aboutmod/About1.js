import React from 'react'
import './About1.css'
export default function About1() {
  return (
    <>
      <div className="container-fluid">
        <div className="container-fluid">
            {/* sec -1 */}
            <div className="row">
                <div className="col-lg-6 About1-item" id="About1-item">
                    <img src="https://www.kinghillstravels.com/assets/front/default/images/11.png" alt="" className='d-block mx-auto'/>
                </div>
                <div className="col-lg-6" id="About1-item">
                    <h4>Get To Know Us</h4>
                    <h2>Explore All Tour of the world with us.</h2>
                    <p>King Hills Travels – an Indian travel company excels in domestic & international tour packages, corporate MICE travel and inbound travel.</p>
                    <p>King Hills Travels provides you group tour packages, customized tour packages, standard tour packages, couple/honeymoon tour packages at very cheap and affordable cost.</p>
                </div>
            </div>
        </div>
      </div>  
      {/* sec-2 */}
      <div className="container-fluid About1-item text-center py-5" id="About1-sec2-it">
           <div className="container">
                <h4>Get To Know Us</h4>
                <h2>Explore All Tour of the world with us.</h2>        
                <div className="row" id="about1-work-wrap">
                    <div className="" id="about1-work-item">
                        <i class="fa-solid fa-id-card"></i>
                    </div>
                    <div className="" id="about1-work-item">
                        <i class="fa-solid fa-user-shield"></i>
                    </div>
                    <div className="" id="about1-work-item">
                        <i class="fa-solid fa-clipboard"></i>
                    </div>
                    <div className="" id="about1-work-item">
                        <i class="fa-solid fa-hand-holding-dollar"></i>
                    </div>
                </div>
                <div className="row text-center" id="about1-work-wrap">
                    <div className="" id="about1-work-text">
                        <p>Register</p>
                    </div>
                    <div className="" id="about1-work-text">
                        <p>Login Account</p>
                    </div>
                    <div className="" id="about1-work-text">
                        <p>Add Tour</p>
                    </div>
                    <div className="" id="about1-work-text">
                        <p>Get Earnings</p>
                    </div>
                </div>
           </div>
        </div>
        {/* sec3 */}
        <div className="container-fluid">
            <div className="container">
                <div className="col-lg-4">
                    
                </div>
                <div className="col-lg-8"></div>
            </div>
        </div> 
    </>
  )
}
