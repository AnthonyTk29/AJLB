import React from "react";

export default function Footer() {
  return (
    <footer className="footer py-3">
      <div className="container text-center">
        <p className="small mb-0 text-light">
          &copy; {new Date().getFullYear()} <span className="text-primary">Anthony Loor</span>. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
