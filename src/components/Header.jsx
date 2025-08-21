import React from "react";

export default function Header() {
  return (
    
    <header className="header" id="Inicio">
       <section  id="Inicio">
      </section>
        <div className="container">
          <ul className="social-icons pt-3">
            <li className="social-item"><a className="social-link text-light" href="https://www.facebook.com/anthonyjoel.loorbiana?locale=es_LA"><i className="ti-facebook" /></a></li>
            <li className="social-item"><a className="social-link text-light" href="mailto:anthony-loor@hotmail.es"><i className="ti-email" /></a></li>
            <li className="social-item"><a className="social-link text-light" href="mailto:aloor0781@gmail.com"><i className="ti-google" /></a></li>
            <li className="social-item"><a className="social-link text-light" href="https://www.instagram.com/anthonyjoelloor"><i className="ti-instagram" /></a></li>
            <li className="social-item"><a className="social-link text-light" href="https://github.com/AnthonyTk29"><i className="ti-github" /></a></li>
          </ul>
          <div className="header-content">
            <h4 className="header-subtitle">Hola, yo soy</h4>
            <h1 className="header-title">Anthony Loor</h1>
            <h6 className="header-mono">Desarrollador de sistemas</h6>
            <button className="btn btn-info btn-rounded"   onClick={() => {
                // Ruta del PDF (colócalo en public/)
                const pdfUrl = "src/assets/archivos/Anthony Loor-Curriculum vitae.pdf";
                // Crear enlace temporal
                const link = document.createElement("a");
                link.href = pdfUrl;
                link.download = "Anthony_Loor_CV.pdf"; // nombre del archivo
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}>
             
              <i className="ti-printer pr-2" />Imprimir CV
            </button>
          </div>
        </div>
    </header>
  );
}
