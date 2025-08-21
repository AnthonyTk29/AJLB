import React, { useRef, useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#Inicio");
  const navRef = useRef(null);

  const toggle = () => setOpen(o => !o);
  const [showBrand, setShowBrand] = useState(true);
  
  const handleNavClick = (e) => {
    const href = e.currentTarget.getAttribute("href");
    if (!href || !href.startsWith("#")) return;

    e.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;

    const navHeight = navRef.current ? navRef.current.offsetHeight : 0;
    const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

    // Scroll suave
    window.scrollTo({ top, behavior: "smooth" });

    // Marca como activo de inmediato
    setActiveSection(href);
    window.history.pushState(null, "", href);

    setOpen(false);
  };


  useEffect(() => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  const options = { threshold: 0.2 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // console.log(entry.target.id, entry.isIntersecting, entry.intersectionRatio);
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        // Remueve la clase "active" de todos los links
        navLinks.forEach((link) => link.classList.remove("active"));

        // Busca el link que apunta a la sección actual y le agrega "active"
        const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
       
        if (activeLink) {
          activeLink.classList.add("active");
          console.log(id);
          setShowBrand(`#${id}` === "#Inicio");
        }
      }
    });
  }, options);

  sections.forEach((sec) => observer.observe(sec));
  return () => sections.forEach((sec) => observer.unobserve(sec));
}, []);

  return (
    <nav
      ref={navRef}
      className="navbar sticky-top navbar-expand-lg navbar-light bg-white relative"
    >
      <div className="container">
        <button
          className="navbar-toggler ml-auto"
          type="button"
          aria-controls="navbarCollapse"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={toggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          id="navbarCollapse"
          className={`collapse mt-sm-20 navbar-collapse ${open ? "show" : ""}`}
        >
          <ul className="navbar-nav mr-auto position-relative">
           
            <li className="nav-item">
              <a
                href="#Inicio"
                className={`nav-link ${activeSection === "#Inicio" ? "active" : ""}`}
                onClick={handleNavClick}
              >
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                className={`nav-link ${activeSection === "#about" ? "active" : ""}`}
                onClick={handleNavClick}
              >
                Acerca de mi
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#resume"
                className={`nav-link ${activeSection === "#resume" ? "active" : ""}`}
                onClick={handleNavClick}
              >
                Mi currículum
              </a>
            </li>
          </ul>

          <ul className="navbar-nav brand">
            <img
              src="src/assets/imgs/frente.jpg"
              alt=""
              className="brand-img"
              style={{
                opacity: showBrand ? 1 : 0,
                transition: "opacity 0.5s ease"
              }}
            />
            <li className="brand-txt"  style={{
                opacity: showBrand ? 0 : 1,
                transition: "opacity 0.5s ease"
              }}>
              <h5 className="brand-title">Anthony Loor</h5>
              <div className="brand-subtitle">Desarrollador de sistemas</div>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto position-relative">
             <li className="nav-item">
              <a
                href="#service"
                className={`nav-link ${activeSection === "#service" ? "active" : ""}`}
                onClick={handleNavClick}
              >
                Mis Servicios
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#portfolio"
                className={`nav-link ${activeSection === "#portfolio" ? "active" : ""}`}
                onClick={handleNavClick}
              >
                Mis Proyectos
              </a>
            </li>
           
            <li className="nav-item ">
              <a
                href="#contact"
                className={`nav-link ${activeSection === "#contact" ? "active" : ""}`}
                onClick={handleNavClick}
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
