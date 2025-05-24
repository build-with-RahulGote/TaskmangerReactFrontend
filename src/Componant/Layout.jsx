
import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">Mini Task Manager</a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mt-5">
        <Outlet /> {/* This renders the child route components */}
      </main>

      {/* Footer */}
      <footer className="bg-light text-center text-muted py-3 mt-5">
        <small>&copy; 2025 Mini Task Manager. Built with Rahul using React & Spring Boot.</small>
      </footer>
    </>
  );
}

export default Layout;
