import React from 'react';
import Logo from '../img/ghibli6.jpg';
function header() {
    return (
        <>
            <section className="thumbnail content-fluid">
                <img className="img-fluid" src={Logo} alt="" />
                <div className="row justify-content-center col-sm-9 col-md-6 col-lg-8 col-xl-10">
                    <div className="ejemplo" data-aos="fade-up" data-aos-delay="150">
                        <h1 className="text-center">Encabezado</h1>
                        {/* <button className="position-text text-center">boton</button>  */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default header
