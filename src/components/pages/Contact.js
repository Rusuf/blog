import React from "react";


function Contact(){
    return(
        <div>
            <section className="py-4 bg-info">
                <div className="container">                   
                    <div className="row">
                        <div className="col md-4 border right">

                            <h4>
                                Contact Us
                            </h4>
                        </div>
                        <div className="col-md-8 my auto">
                            <h6 className="float-end">
                                Home / Contact Us
                            </h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6"> 
                                <h4>
                                    Contact form
                                </h4>
                                <hr/>
                                <div className="form-group">
                                    <label className="mb-1">
                                        First Name
                                    </label>
                                    <input type="text" className="form-control" placeholder="Enter your first name"/>
                                </div>
                                <div className="form-group">
                                    <label className="mb-1">
                                        Last Name
                                    </label>
                                    <input type="text" className="form-control" placeholder="Enter your last name"/>
                                </div>
                                <div className="form-group">
                                    <label className="mb-1">
                                        Email
                                    </label>
                                    <input type="text" className="form-control" placeholder="Enter your email"/>
                                </div>
                                <div className="form-group">
                                    <label className="mb-1">
                                        Phone Number
                                    </label>
                                    <input type="text" className="form-control" placeholder="Enter your phone number"/>
                                </div>
                                <div className="form-group">
                                    <label className="mb-1">
                                       Message
                                    </label>
                                    <textarea rows="3"className="form-control"placeholder="Enter your message..." ></textarea>

                                </div>
                                <div className="form-group py-3">
                                    <label className="mb-1">
                                       <button type="button" className="btn btn-warning shadow w-100">
                                        Send Message
                                       </button>
                                    </label>
                                

                                </div>
                                

                            </div>   
                                </div>
                                <div className="col-md-6">
                                <div className="address-container">
                                        <h2>Meal Planner HQ </h2>
                                        <p>123 Westlands.</p>
                                        <p>Nairobi 12345</p>
                                        <p>Kenya</p>
                                        <p>Phone: 07-456-789-10</p>
                                        <p>Email: info@mealplanner.com</p>
                                        </div>
                                </div>                    
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Contact;