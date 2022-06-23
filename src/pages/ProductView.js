import React from "react";
import { useState, useEffect, useRef } from "react";
import productImg from '../static/storeExample.png' 
const ProductView = () => {
   return (
    <div className="container productView">
        <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
                <h2 className="heading-section">Product Name</h2>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-md-12">
                <div className="wrapper">
                    <div className="row mb-5">
                        <div className="col-md-3">
                            <div className="dbox w-100 text-center">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-map-marker"></span>
                                </div>
                                <div className="text">
                                    <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="dbox w-100 text-center">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-phone"></span>
                                </div>
                                <div className="text">
                                    <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="dbox w-100 text-center">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-paper-plane"></span>
                                </div>
                                <div className="text">
                                    <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="dbox w-100 text-center">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-globe"></span>
                                </div>
                                <div className="text">
                                    <p><span>Website</span> <a href="#">yoursite.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-md-7">
                            <div className="contact-wrap w-100 p-md-5 p-4">
                                <h3 className="mb-4">Contact Us</h3>
                                <div id="form-message-warning" className="mb-4"></div> 
                                <div id="form-message-success" className="mb-4">
                                Your message was sent, thank you!
                                </div>
                                <form method="POST" id="contactForm" name="contactForm" className="contactForm">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="label" for="name">Full Name</label>
                                                <input type="text" className="form-control" name="name" id="name" placeholder="Name"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6"> 
                                            <div className="form-group">
                                                <label className="label" for="email">Email Address</label>
                                                <input type="email" className="form-control" name="email" id="email" placeholder="Email"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label className="label" for="subject">Subject</label>
                                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label className="label" for="#">Message</label>
                                                <textarea name="message" className="form-control" id="message" cols="30" rows="4" placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <button>Cumpara</button>
                                                <button>Previzualizare</button>
                                                <div className="submitting"></div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-5 d-flex align-items-stretch">
                            <img className="info-wrap w-100 p-5 img" src={productImg}>
                            </img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   )
}
 
export default ProductView