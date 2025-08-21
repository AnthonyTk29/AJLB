import React from "react";

export default function Portfolio() {
  return (
    <section className="section" id="portfolio">
        <hr />
        <div className="container">
            <h1 className="mb-5"><span className="text-danger">Mis</span> proyectos</h1>
            <div className="portfolio">
                <div className="filters">
                    <a href="#" data-filter=".new" className="active">
                        All
                    </a>
                    <a href="#" data-filter=".advertising">
                        Mobile
                    </a>
                    <a href="#" data-filter=".branding">
                        Desktop
                    </a>
                    <a href="#" data-filter=".web">
                        Web
                    </a>
                </div>
                <div className="portfolio-container"> 
                    <div className="col-md-6 col-lg-4 web new">
                        <div className="portfolio-item">
                            <img src="src/assets/imgs/web1.jpg" className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" />
                            <div className="content-holder">
                                <a className="img-popup" href="src/assets/imgs/web1.jpg"></a>
                                <div className="text-holder">
                                    <h6 className="title">Web</h6>
                                    <p className="subtitle">PHP Sistema de ventas online.</p>
                                </div>
                            </div>   
                        </div>             
                    </div>
                    <div className="col-md-6 col-lg-4 web new">
                        <div className="portfolio-item">
                            <img src="src/assets/imgs/Controlcitasveterinarioweb.jpg" className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" />
                            <div className="content-holder">
                                <a className="img-popup" href="src/assets/imgs/Controlcitasveterinarioweb.jpg"></a>
                                <div className="text-holder">
                                    <h6 className="title">Web</h6>
                                    <p className="subtitle">PHP Sistema de control de citas veterinarias.</p>
                                </div>
                            </div> 
                        </div>                         
                    </div>
                    <div className="col-md-6 col-lg-4 web new">
                        <div className="portfolio-item">
                            <img src="src/assets/imgs/cafeteriaweb.jpg" className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" />
                            <div className="content-holder">
                                <a className="img-popup" href="src/assets/imgs/cafeteriaweb.jpg"></a>
                                <div className="text-holder">
                                    <h6 className="title">Web</h6>
                                    <p className="subtitle">C# (ASP.Net) Sistema de cafetería.</p>
                                </div>
                            </div> 
                        </div>                         
                    </div>
                    <div className="col-md-6 col-lg-4 advertising new">
                        <div className="portfolio-item">
                            <img src="src/assets/imgs/TkMusic.jpg" className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" />                         
                            <div className="content-holder">
                                <a className="img-popup" href="src/assets/imgs/TkMusic.jpg"></a>
                                <div className="text-holder">
                                    <h6 className="title">Mobile</h6>
                                    <p className="subtitle">Flutter Reproductor de música.</p>
                                </div>
                            </div>    
                        </div>              
                    </div> 
                    <div className="col-md-6 col-lg-4 web">
                        <div className="portfolio-item">
                            <img src="src/assets/imgs/entradasqrweb.jpg" className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" />
                            <div className="content-holder">
                                <a className="img-popup" href="src/assets/imgs/entradasqrweb.jpg"></a>
                                <div className="text-holder">
                                    <h6 className="title">Web</h6>
                                    <p className="subtitle">PHP Sistema de entradas QR.</p>
                                </div>
                            </div>
                        </div>                                                     
                    </div>

                    <div className="col-md-6 col-lg-4 advertising"> 
                        <div className="portfolio-item">
                            <img src="src/assets/imgs/mobile1.jpeg" className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" />                               
                            <div className="content-holder">
                                <a className="img-popup" href="src/assets/imgs/mobile1.jpeg"></a>
                                <div className="text-holder">
                                    <h6 className="title">Mobile</h6>
                                    <p className="subtitle">C# Sistema control de producción de queso.</p>
                                </div>
                            </div>
                        </div>                                                       
                    </div> 
                    <div className="col-md-6 col-lg-4 web new">
                        <div className="portfolio-item">
                            <img src="src/assets/imgs/detecciongatoweb.jpg" className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" />  
                           <div className="content-holder">
                                <a className="img-popup" href="src/assets/imgs/detecciongatoweb.jpg"></a>
                                <div className="text-holder">
                                    <h6 className="title">Web</h6>
                                    <p className="subtitle">PHP Sistema de detección de enfermedades oculares en los gatos.</p>
                                </div>
                            </div>
                        </div>                                                     
                    </div>
                    <div className="col-md-6 col-lg-4 advertising new">
                        <div className="portfolio-item">
                            <img src="src/assets/imgs/entradasqr.jpg" className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" />       
                           <div className="content-holder">
                                <a className="img-popup" href="src/assets/imgs/entradasqr.jpg"></a>
                                <div className="text-holder">
                                    <h6 className="title">Mobile</h6>
                                    <p className="subtitle">Flutter Sistema de entradas QR.</p>
                                </div>
                            </div>
                        </div>                                                       
                    </div> 
                    <div className="col-md-6 col-lg-4 advertising new"> 
                        <div className="portfolio-item">
                            <img src="src/assets/imgs/detecciongato.jpg" className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" />            
                            <div className="content-holder">
                                <a className="img-popup" href="src/assets/imgs/detecciongato.jpg"></a>
                                <div className="text-holder">
                                    <h6 className="title">Mobile</h6>
                                    <p className="subtitle">Flutter Sistema de detección de enfermedades oculares en los gatos.</p>
                                </div>
                            </div>
                        </div>
                                
                    </div> 
                    <div className="col-md-6 col-lg-4 branding new">
                        <div className="portfolio-item">
                            <img src="src/assets/imgs/desktop1.jpg" className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" />                        
                            <div className="content-holder">
                                <a className="img-popup" href="src/assets/imgs/desktop1.jpg"></a>
                                <div className="text-holder">
                                    <h6 className="title">Desktop</h6>
                                    <p className="subtitle">C# Sistema de ventas pos.</p>
                                </div>
                            </div> 
                        </div>
                    </div> 
                    <div className="col-md-6 col-lg-4 branding">
                        <div className="portfolio-item">
                            <img src="src/assets/imgs/desktop2.jpg" className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" />  
                            <div className="content-holder">
                                <a className="img-popup" href="src/assets/imgs/desktop2.jpg"></a>
                                <div className="text-holder">
                                    <h6 className="title">Desktop</h6>
                                    <p className="subtitle">Python Sistema calculador de vectores en 3d.</p>
                                </div>
                            </div>
                        </div>                                                     
                    </div> 
                    <div className="col-md-6 col-lg-4 branding new">
                        <div className="portfolio-item">
                            <img src="src/assets/imgs/electron.jpg" className="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates" />   
                            <div className="content-holder">
                                <a className="img-popup" href="src/assets/imgs/electron.jpg"></a>
                                <div className="text-holder">
                                    <h6 className="title">Desktop</h6>
                                    <p className="subtitle">Node Js (Electron) Sistema de registro de ventas de un Car Wash.</p>
                                </div>
                            </div>
                        </div>                                                    
                    </div> 
                   
                </div> 
            </div>  
        </div>            
    </section>
  );
}
