import React from "react";

export default function About() {
  return (
    <section className="section" id="about">
<div className="container-fluid">
        <div id="about" className="row about-section">
            <div className="col-lg-4 about-card">
                <h3 className="font-weight-light">¿Quién soy?</h3>
                <span className="line mb-5"></span>
                <h5 className="mb-3">Soy desarrollador desarrollador de aplicaciones a nivel general</h5>
                <p className="mt-20">Con una sólida experiencia en el desarrollo de soluciones web, tanto para plataformas móviles como de escritorio, me especializo en crear aplicaciones y sitios web interactivos, responsivos y de alto rendimiento. 
    Mi enfoque está en ofrecer experiencias de usuario excepcionales, utilizando tecnologías modernas como HTML, CSS, JavaScript, y frameworks populares. Siempre buscando llevar proyectos a su máximo potencial.</p>
                <button className="btn btn-outline-danger" onClick={() => {
                // Ruta del PDF (colócalo en public/)
                const pdfUrl = "src/assets/archivos/Anthony Loor-Curriculum vitae.pdf";
                // Crear enlace temporal
                const link = document.createElement("a");
                link.href = pdfUrl;
                link.download = "Anthony_Loor_CV.pdf"; // nombre del archivo
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}><i className="icon-down-circled2 "></i>Descargar mi CV</button>
            </div>
            <div className="col-lg-4 about-card">
                <h3 className="font-weight-light">Información personal</h3>
                <span className="line mb-5"></span>
                <ul className="mt40 info list-unstyled">
                    <li><span>Fecha de nacimiento</span> : 29/12/1998</li>
                    <li><span>Correo</span> : anthony-loor@hotmail.es</li>
                    <li><span>Teléfono</span> : +(593) 989093731</li>
                    <li><span>linkedin</span> : www.linkedin.com/in/anthony-loor-82390b271 </li>
                    <li><span>Dirección</span> :  Isla trinitaria Coop 22 de abril Mz F Solar 20.</li>
                </ul>
                <ul className="social-icons pt-3">
                    <li className="social-item"><a className="social-link" href="https://www.facebook.com/anthonyjoel.loorbiana?locale=es_LA"><i className="ti-facebook" aria-hidden="true"></i></a></li>
                    <li className="social-item"><a className="social-link" href="mailto:anthony-loor@hotmail.es"><i className="ti-email" aria-hidden="true"></i></a></li>
                    <li className="social-item"><a className="social-link" href="mailto:aloor0781@gmail.com"><i className="ti-google" aria-hidden="true"></i></a></li>
                    <li className="social-item"><a className="social-link" href="https://www.instagram.com/anthonyjoelloor"><i className="ti-instagram" aria-hidden="true"></i></a></li>
                    <li className="social-item"><a className="social-link" href="https://github.com/AnthonyTk29"><i className="ti-github" aria-hidden="true"></i></a></li>
                </ul>  
            </div>
            <div className="col-lg-4 about-card">
                <h3 className="font-weight-light">Mi experiencia</h3>
                <span className="line mb-5"></span>
                <div className="row">
                    <div className="col-1 text-danger pt-1"><i className="ti-widget icon-lg"></i></div>
                    <div className="col-10 ml-auto mr-3">
                        <h6>UX/UI Designer</h6>
                        <p className="subtitle"> Diseño experiencias e interfaces de usuario atractivas e intuitivas, enfocándose en usabilidad, funcionalidad y satisfacción del usuario.</p>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-1 text-danger pt-1"><i className="ti-paint-bucket icon-lg"></i></div>
                    <div className="col-10 ml-auto mr-3">
                        <h6>Desarrollo Web</h6>
                        <p className="subtitle">Creación de aplicaciones y sitios web modernos, responsivos y optimizados, garantizando funcionalidad, rendimiento y una experiencia de usuario de calidad.</p>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-1 text-danger pt-1"><i className="ti-stats-up icon-lg"></i></div>
                    <div className="col-10 ml-auto mr-3">
                        <h6>Desarrollador Full Stack</h6>
                        <p className="subtitle">Full Stack Developer con experiencia en la elaboración de web services SOAP, integración de funcionalidades en frontend web y aplicaciones de escritorio, y mantenimiento preventivo de sistemas.</p>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
     
  );
}
