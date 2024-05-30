import React from 'react';
import './Contacto.css';
import logo_instagram from "../../Assets/logo-instagram-black.svg";
import logo_telefono from "../../Assets/logo-telefono-black.svg";
import logo_email from "../../Assets/logo-email-black.svg";
import logoEmpresa from "../../../img/favicon.png";

const Contacto = () => {
    return (
        <div className="container text-center">
            <div className="row align-items-center">
                <div className="col">
                    <div className="contacto-formulario">
                        <h2>Contáctanos</h2>
                        <form className="form-contacto" method="POST">
                            <div> 
                                <input style={{ width: "20rem" }} className="text-center rounded mt-4 p-2 border-0 shadow" type="text" id="nombre" name="nombre" required placeholder="Nombre" />
                            </div>
                            <div>
                                <input style={{ width: "20rem" }} className="text-center rounded mt-4 p-2 border-0 shadow" type="text" id="apellido" name="apellido" required placeholder="Apellido" />
                            </div>
                            <div>
                                <input style={{ width: "20rem" }} className="text-center rounded mt-4 p-2 border-0 shadow" type="text" id="email" name="email" required placeholder="E-Mail" />
                            </div>
                            <div> 
                                <input style={{ width: "20rem" }} className="text-center rounded mt-4 p-2 border-0 shadow" type="text" id="dni" name="dni" required placeholder="DNI" />
                            </div>
                            <div>
                                <input style={{ width: "20rem" }} className="text-center rounded mt-4 p-2 border-0 shadow" type="text" id="asunto" name="asunto" required placeholder="Asunto" />
                            </div>
                            <div className="rounded">
                                <textarea style={{ width: "20rem" }} className="text-center mt-4 rounded border-0 shadow" id="mensaje" name="message" rows="3" placeholder="Escriba su mensaje" required></textarea>
                            </div>
                            <div className="m-4">
                                <button type="button" className="btn btn-light btn-lg">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col">
                    <div className="contacto-info d-flex justify-content-center flex-column align-items-center mt-4">
                    <img className='logoEmpresa' src={logoEmpresa} alt="Icono de la empresa" />
                        <h2 className="mt-10 mb-4">Mas información</h2>
                        <img src={logo_instagram} alt="ícono de instagram" />
                        <p>@digitalEmporium</p>
                        <img src={logo_telefono} alt="ícono de teléfono" />
                        <p>0810-222-6644</p>
                        <img src={logo_email} alt="Ícono de e-mail" />
                        <p>info@digitalemporium.com.ar</p>
                        <p className="m-2">Envianos tu consulta o sugerencia, estamos para ayudarte</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacto;

