import React from 'react'

function ContactUs() {
    return (
        <div>
            <section id="contact" className="contact section-bg">
                        <div className="container">

                            <div className="section-title">
                                <h2>Contact Us</h2>
                                <p>Every year mahashivratri function will happens in rohkal village.A big citizens is come into village and pray god with them happiness</p>
                            </div>

                            <div className="row">

                                <div className="col-lg-4 col-md-6">
                                    <div className="contact-about">
                                        <h3>Rohkleshwar Trust</h3>
                                        <p>The temple history are many years ago because the stachu are only one present in rohkal.</p>
                                        <div className="social-links">
                                            <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                                            <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                                            <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                                            <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <div className="info">
                                        <div>
                                            <i className="bi bi-geo-alt"></i>
                                            <p>Rohkleshwar Temple<br />Rohkal,Paranda 413505.</p>
                                        </div>

                                        <div>
                                            <i className="bi bi-envelope"></i>
                                            <p>rohkleshwar123@gmail.com</p>
                                        </div>

                                        <div>
                                            <i className="bi bi-phone"></i>
                                            <p>7219144433</p>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-lg-5 col-md-12">
                                    <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                        <div className="form-group">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required="" />
                                        </div>
                                        <div className="form-group mt-3">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required="" />
                                        </div>
                                        <div className="form-group mt-3">
                                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required="" />
                                        </div>
                                        <div className="form-group mt-3">
                                            <textarea className="form-control" name="message" rows="5" placeholder="Message" required=""></textarea>
                                        </div>
                                        <div className="my-3">
                                            <div className="loading">Loading</div>
                                            <div className="error-message"></div>
                                            <div className="sent-message">Your message has been sent. Thank you!</div>
                                        </div>
                                        <div className="text-center"><button type="submit">Send Message</button></div>
                                    </form>
                                </div>

                            </div>

                        </div>
                    </section>

        </div>
    )
}

export default ContactUs;
