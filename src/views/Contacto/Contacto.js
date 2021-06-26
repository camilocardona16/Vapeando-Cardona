import React from 'react'
import './Contacto.css'

function Contacto() {
    return (
        <main class="container mt-3">
            <h1 class="display-4">Contactanos</h1>
            <p class="lead">Completa el formularirio y mandanos un mensaje :D</p>
            <hr class="my-2"/>
            <div class="contact1">
                <div class="container-contact1">
                    <div class="contact1-pic js-tilt" data-tilt>
                        <img src="images/mensaje.png" alt="IMG"/>
                    </div>

                    <form class="contact1-form validate-form">
                        <span class="contact1-form-title">
                                    Dejanos un mensaje, recomendacion o sugerencia, te lo agradeceremos
                                </span>

                        <div class="wrap-input1 validate-input" data-validate="Nombre es requerido">
                            <input class="input1" type="text" name="nombre" placeholder="Nombre"/>
                            <span class="shadow-input1"></span>
                        </div>

                        <div class="wrap-input1 validate-input" data-validate="Correo requerido: ex@abc.xyz">
                            <input class="input1" type="email" name="correo" placeholder="Correo"/>
                            <span class="shadow-input1"></span>
                        </div>

                        <div class="wrap-input1 validate-input" data-validate="Tema es requerido">
                            <input class="input1" type="text" name="tema" placeholder="tema"/>
                            <span class="shadow-input1"></span>
                        </div>

                        <div class="wrap-input1 validate-input" data-validate="mesaje es requerido">
                            <textarea class="input1" name="mensaje" placeholder="mensaje"></textarea>
                            <span class="shadow-input1"></span>
                        </div>

                        <div class="container-contact1-form-btn">
                            <button class="contact1-form-btn">
                                <span>
                                    <strong> Enviar Correo !</strong>
                                    <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
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
