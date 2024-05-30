import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import './Contacto.css';
import logo_instagram from "../../Assets/logo-instagram-black.svg";
import logo_telefono from "../../Assets/logo-telefono-black.svg";
import logo_email from "../../Assets/logo-email-black.svg";
import logoEmpresa from "../../../img/favicon.png";

const Consulta = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [dni, setDni] = useState("");
    const [telefono, setTelefono] = useState("");
    const [asunto, setAsunto] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [nombreError, setNombreError] = useState("");
    const [apellidoError, setApellidoError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [dniError, setDniError] = useState("");
    const [consultaId, setConsultaId] = useState("");
   

    const generarConsulta = () => {
        if (nombre == "") {
            setNombreError("Ups! Nos falta tu nombre para enviar tu Consulta");
            return false;
        } else {
            setNombreError("");
        }
        if (apellido == "") {
            setApellidoError("Ups! Nos falta tu apellido para enviar tu Consulta");
            return false;
        } else {
            setApellidoError("");
        }
        if (dni == "") {
            setDniError("Ups! Nos falta tu DNI para enviar tu Consulta");
            return false;
        } else {
            setDniError("");
        }
        if (email == "") {
            setEmailError("Ups! Nos falta tu email para enviar tu Consulta");
            return false;
        } else {
            setEmailError("");
        }

        const cliente = { name: nombre, lastName:apellido, dni: dni, email: email, telephone: telefono};
        const fecha = new Date();
        const date = `${fecha.getDate()}-${fecha.getMonth() + 1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
        const consulta = {cliente: cliente, date: date, asunto: asunto, message: mensaje};
        const dbs = getFirestore();
        const ordersCollection = collection(dbs, "consultas");

        addDoc(ordersCollection, consulta).then(data => {
            setConsultaId(data.id);
            setNombre("");
            setEmail("");
            setTelefono("");
            clear();
        });
    }

    if (consultaId) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <div className="alert alert-light" role="alert"><h4>Tu Consulta fue enviada</h4></div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                <h2>¿Cómo podemos ayudarte?</h2>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre *</label>
                            <input type="text" className={`form-control ${nombreError && "is-invalid"}`} onInput={(event) => { setNombre(event.target.value) }} />
                            <div className="text-danger">{nombreError}</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Apellido *</label>
                            <input type="text" className={`form-control ${apellidoError && "is-invalid"}`} onInput={(event) => { setApellido(event.target.value) }} />
                            <div className="text-danger">{nombreError}</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email *</label>
                            <input type="text" className={`form-control ${emailError && "is-invalid"}`} onInput={(event) => { setEmail(event.target.value) }} />
                            <div className="text-danger">{emailError}</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">DNI *</label>
                            <input type="text" className={`form-control ${dniError && "is-invalid"}`} onInput={(event) => { setDni(event.target.value) }} />
                            <div className="text-danger">{dniError}</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Teléfono</label>
                            <input type="text" className="form-control" onInput={(event) => { setTelefono(event.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Asunto</label>
                            <input type="text" className="form-control" onInput={(event) => { setAsunto(event.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Mensaje</label>
                            <textarea type="text" style={{ width: "40rem" }} className="form-control mt-4 rounded border-0 shadow" onInput={(event) => { setMensaje(event.target.value) }} id="mensaje" name="message" rows="3" placeholder="Escriba su mensaje" required></textarea>
                        </div>
                        <p className="mb-3">* Campo obligatorios</p>
                        <button type="button" className="btn bg-light" onClick={generarConsulta}>Enviar Consulta</button>
                    </form>
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
    )
}

export default Consulta