import React from 'react'
import './Customisetour.css'
export default function Customisetour() {
  return (
    <>
        <div className="container-fluid" id="Custm-tour-cf">
            <div className="container p-5">
                <div className="col p-0 mx-auto" id="Customisetour-wrap">
                    <div className="col" id="Customisetour-item">
                        <h3 className='text-center'>Perfect Holiday Packages for You</h3>
                    </div>
                    <div className="col">
                        <form action="">
                            <p>We can arrange an itinerary around your interests, dates, and special requests. ... Contact us to book a Private Expedition or let us design a customized itinerary for you.</p>
                            <p>Just give us a brief about you requirments</p>
                            {/*  */}
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Full Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Full Name"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Email Address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email Address"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Phone Number</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Phone Number"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Leaving from</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Leaving from"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Enter Destination</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Destination"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">No. of travellers</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="No. of travellers"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Special requirements (Optional)</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" class="btn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
