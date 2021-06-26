import React from 'react'

function Nosotros() {
    return (
        <main>
            <section className="container">
                <div className="row mt-3">
                    <div className="col-12 col-md-5">
                        <h2 className="display-4 w-100">Nosotros</h2>
                        <p className="lead">Nuestra Historia</p>
                        <hr className="my-2"/>
                        <p>
                            En las fechas cercanas a enero del 2020, <strong>Camilo</strong> el fundador de vapeando, se le ocurrio
                            una idea para revolucionar el mundo del vapeo. Entonces en marzo de 2021 fundo <a href="vapeando.tk">vapeando.tk</a> ; Una
                            pagina inovadora y revolucionaria que le daria al mundo del vapeo una nueva vista y alternativa para todos sus consumidores. 
                        </p>
                        <hr/>
                        <p>Nuestra sede queda ubicada en la ciudad de <strong>Manizales, colombia</strong> en el barrio Villa cafe.</p>
                        <hr/>
                        <h2>Vision</h2>
                        <p>
                            Para finales del año 2022 Vapeando sera la pagina con mas interacciones en el mundo del vapeo, participando en miles de campañas 
                            con fines lucrativos, ubicandola como la mejor pagina de venta de articulos para vapear, fomentando el uso del vapeo evitando el
                            uso del cigarrillo 
                        </p>
                    </div>
                    <div className="col-12 col-md-7 text-center">
                        <img className="img-fluid" src="images/yo.jpeg" alt="camilo cardona" width="50%"/>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Nosotros
