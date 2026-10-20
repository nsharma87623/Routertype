import React from "react";
import {
  HashRouter,
  MemoryRouter,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

function Home() {
  return (
    <section>
      <h2 className="text-xl font-bold text-slate-800">Home Page</h2>
      <p className="mt-2 text-slate-600">Welcome! This is the home route.</p>
    </section>
  );
}

function About() {
  return (
    <section>
      <h2 className="text-xl font-bold text-slate-800">About Page</h2>
      <p className="mt-2 text-slate-600">This page demonstrates route navigation.</p>
    </section>
  );
}

function Contact() {
  return (
    <section>
      <h2 className="text-xl font-bold text-slate-800">Contact Page</h2>
      <p className="mt-2 text-slate-600">This is the contact route.</p>
    </section>
  );
}

function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <nav className="flex flex-wrap gap-2">
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/about">About</Link>
        {" | "}
        <Link to="/contact">Contact</Link>
      </nav>

      <p>
        Current pathname: <code>{location.pathname}</code>
      </p>

      <button onClick={() => navigate(-1)}>
        Go Back
      </button>
    </>
  );
}

function RouterDemo({ title }) {
  return (
    <div className="demo">
      <h2>{title}</h2>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="*"
          element={<h3 className="font-bold text-red-600">404 - Page Not Found</h3>}
        />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <main>
      <h1 className="text-xl font-bold text-slate-800">React Router Demonstration</h1>

      <HashRouter>
        <RouterDemo title="HashRouter Demo" />
      </HashRouter>

      <hr />

      <MemoryRouter initialEntries={["/"]}>
        <RouterDemo title="MemoryRouter Demo" />
      </MemoryRouter>
    </main>
  );
}
