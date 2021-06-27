import React from 'react'
import './Contacto.css'

function Contacto() {
    return (
        <main className="container mt-3">
            <h1 className="display-4">Contactanos</h1>
            <p className="lead">Completa el formularirio y mandanos un mensaje :D</p>
            <hr className="my-2"/>
            <div className="contact1">
                <div className="container-contact1">
                    <div className="contact1-pic js-tilt" data-tilt>
                        <img src="images/mensaje.png" alt="IMG"/>
                    </div>

                    <form className="contact1-form validate-form">
                        <span className="contact1-form-title">
                            Dejanos un mensaje, recomendacion o sugerencia, te lo agradeceremos
                        </span>

                        <div className="wrap-input1 validate-input" data-validate="Nombre es requerido">
                            <input className="input1" type="text" name="nombre" placeholder="Nombre"/>
                            <span className="shadow-input1"></span>
                        </div>

                        <div className="wrap-input1 validate-input" data-validate="Correo requerido: ex@abc.xyz">
                            <input className="input1" type="email" name="correo" placeholder="Correo"/>
                            <span className="shadow-input1"></span>
                        </div>

                        <div className="wrap-input1 validate-input" data-validate="Tema es requerido">
                            <input className="input1" type="text" name="tema" placeholder="tema"/>
                            <span className="shadow-input1"></span>
                        </div>

                        <div className="wrap-input1 validate-input" data-validate="mesaje es requerido">
                            <textarea className="input1" name="mensaje" placeholder="mensaje"></textarea>
                            <span className="shadow-input1"></span>
                        </div>

                        <div className="container-contact1-form-btn">
                            <button className="contact1-form-btn">
                                <span>
                                    <strong> Enviar Correo !</strong>
                                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Contacto
