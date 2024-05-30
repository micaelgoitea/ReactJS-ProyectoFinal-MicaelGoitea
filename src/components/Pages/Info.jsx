import './Info.css';
import React from 'react';
import logo_info from "../../Assets/logo.png";
import img1 from "../../Assets/porqueelegirnos.png";
import img2 from "../../Assets/porquelohacemos.png";
import img3 from "../../Assets/nuestrocatalogo.png";

const Nosotros = () => {

    return (
        <div>
            <main>
                <div className="row justify-content-center g-6 py-6 w-100 main-quienes-somos">
                    <div className="animate__animated animate__backInRight col-10 col-sm-8 col-lg-6">
                        <img src={logo_info} className="img-fluid logo-quienes-somos" alt="Logo Emporium" />
                    </div>
                    <div className="col-lg-5">
                        <h1 className="animate__animated animate__wobble">QUEREMOS QUE NOS CONOZCAS</h1>
                        <p className="animate__animated animate__bounceInRight">En Digital Emporium, nos apasiona la tecnología y 
                        creemos que todos deberían tener acceso a las últimas innovaciones. Desde smartphones y laptops hasta 
                        dispositivos inteligentes para el hogar, nuestra tienda está repleta de productos de primera calidad que 
                        harán tu vida más fácil, emocionante y conectada.</p>
                    </div>
                </div>
            </main>
            <section className="carrousel-quienes-somos">
                <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={img1} className="d-block w-100 img-carrousel" alt="Imagen tecnología 1" />
                            <div className="carousel-caption d-md-block">
                                <h1>¿Por qué elegirnos?</h1>
                                <p>Porque nos esforzamos por ofrecerte una experiencia de compra excepcional. Navega por nuestra amplia selección de productos, 
                                    cuidadosamente seleccionados para satisfacer tus necesidades y deseos tecnológicos. Además, 
                                    nuestro equipo está aquí para brindarte asesoramiento experto y ayudarte a encontrar el dispositivo perfecto para ti.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={img2} className="d-block w-100 img-carrousel" alt="Imagen de tecnología 2" />
                            <div className="carousel-caption d-md-block">
                                <h1>¿Por qué lo que hacemos?</h1>
                                <p>La calidad y la satisfacción del cliente son nuestra máxima prioridad. Trabajamos con las principales marcas del mercado para garantizar que cada producto que ofrecemos cumpla con los más altos estándares de rendimiento y durabilidad. Además, nuestro servicio de atención al cliente está disponible para ayudarte en cada paso del camino, desde la selección del producto hasta la entrega y el soporte postventa.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={img3} className="d-block w-100 img-carrousel" alt="Imagen de tecnología 3" />
                            <div className="carousel-caption d-md-block">
                                <h1>Nuestro Catálogo</h1>
                                <p>En nuestro catálogo, encontrarás una amplia gama de productos tecnológicos diseñados para satisfacer todas tus necesidades digitales. Desde dispositivos móviles hasta accesorios inteligentes para el hogar, tenemos todo lo que necesitas para mantenerte conectado, productivo y entretenido en el mundo digital de hoy.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Nosotros;