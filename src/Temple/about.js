import React from 'react'

function About() {
    return (
        <div>
            <section id="about" className="about">
                        <div className="container">

                            <div className="section-title">
                                <h2>About Us</h2>
                            </div>

                            <div className="row">
                                <div className="col-lg-6 order-1 order-lg-2">
                                    <img src="assets/img/about-img.jpg" height="400" width="400" className="img-fluid" alt="" />
                                </div>
                                <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1">
                                    <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                                    <p className="fst-italic">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    </p>
                                    <ul>
                                        <li><i className="bi bi-check2-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                        <li><i className="bi bi-check2-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                        <li><i className="bi bi-check2-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                                    </ul>
                                    <p>
                                        culpa qui officia deserunt mollit anim id est laborum
                                    </p>
                                </div>
                            </div>

                        </div>
                    </section>

        </div>
    )
}

export default About;
