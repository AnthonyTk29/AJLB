import React from "react";

export default function Contact() {
  const numeroWhatsApp = "593989093731"; // tu número sin signos ni espacios

  const enviarWhatsApp = (e) => {
    e.preventDefault();

    // Obtener los valores del formulario
    const nombre = e.target.nombre.value;
    const correo = e.target.correo.value;
    const mensaje = e.target.mensaje.value;

    // Concatenar el mensaje
    const texto = `Hola, mi nombre es ${nombre}. Mi correo es ${correo}. Mensaje: ${mensaje}`;

    // Abrir WhatsApp Web o app
    window.open(`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`, "_blank");
  };

  return (
    <section className="section"  id="contact">
      <hr />
      <div className="container text-center">
       <div className="row">
        <form className="contact-form col-md-6 col-lg-8 m-auto" onSubmit={enviarWhatsApp}>
          <h2 className="section-title mb-5">Contáctame</h2>
          <div className="form-row">
            <div className="form-group col-sm-6">
              <input type="text" className="form-control" placeholder="Tu nombre" name="nombre" required />
            </div>
            <div className="form-group col-sm-6">
              <input type="email" className="form-control" placeholder="Tu correo"  name="correo" required />
            </div>
            <div className="form-group col-sm-12">
              <textarea rows="6" className="form-control" placeholder="Escribe tu mensaje" name="mensaje" required></textarea>
            </div>
            <div className="form-group col-sm-12 mt-3">
              <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
            </div>
          </div>
        </form>
        <div className="col-md-4 col-lg-4">
          <div className="contact-info-card" id="contactotext">
            <img
              src="src/assets/imgs/marca.jpeg"
              alt=""
              className="img-marca"
              style={{
                width:"100px",
                transition: "opacity 0.5s ease"
              }}
            />
              <h4 className="contact-title">Ponte en contacto</h4>
              <div className="row mb-2">
                  <div className="col-1 pt-1 mr-1">
                      <i className="ti-mobile icon-md"></i>
                  </div>
                  <div className="col-10 ">
                      <h6 className="d-inline">Teléfono : <br /> <span className="text-muted">+ (593) 989093731</span></h6>
                  </div>
              </div>
              <div className="row mb-2">
                  <div className="col-1 pt-1 mr-1">
                      <i className="ti-map-alt icon-md"></i>
                  </div>
                  <div className="col-10">
                      <h6 className="d-inline">Dirección :<br /> <span className="text-muted">Ecuador, Guayaquil, Isla trinitaria Coop 22 de abril Mz F Solar 20</span></h6>
                  </div>
              </div>
              <div className="row mb-2">
                  <div className="col-1 pt-1 mr-1">
                      <i className="ti-envelope icon-md"></i>
                  </div>
                  <div className="col-10">
                      <h6 className="d-inline">Correo :<br /> <span className="text-muted">anthony-loor@hotmail.es</span></h6>
                  </div>
              </div>
              <ul className="social-icons pt-4">
                <li className="social-item"><a className="social-link text-light" href="https://www.facebook.com/anthonyjoel.loorbiana?locale=es_LA"><i className="ti-facebook" /></a></li>
                <li className="social-item"><a className="social-link text-light" href="mailto:anthony-loor@hotmail.es"><i className="ti-email" /></a></li>
                <li className="social-item"><a className="social-link text-light" href="mailto:aloor0781@gmail.com"><i className="ti-google" /></a></li>
                <li className="social-item"><a className="social-link text-light" href="https://www.instagram.com/anthonyjoelloor"><i className="ti-instagram" /></a></li>
                <li className="social-item"><a className="social-link text-light" href="https://github.com/AnthonyTk29"><i className="ti-github" /></a></li>
              </ul> 
          </div>
      </div>
      </div>
      </div>
      <div class="burbujas">
          <div class="burbuja"></div>
          <div class="burbuja"></div>
          <div class="burbuja"></div>
          <div class="burbuja"></div>
          <div class="burbuja"></div>
          <div class="burbuja"></div>
          <div class="burbuja"></div>
          <div class="burbuja"></div>
          <div class="burbuja"></div>
          <div class="burbuja"></div>
      </div>
    </section>
  );
}
