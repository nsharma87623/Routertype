
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";

import { StaticRouter } from "react-router-dom/server";

function Home() {
  return <h2 className="rounded-xl border border-slate-200 bg-white p-6">Static Home Page</h2>;
}

function About() {
  return <h2 className="rounded-xl border border-slate-200 bg-white p-6">Static About Page</h2>;
}

function Contact() {
  return <h2 className="rounded-xl border border-slate-200 bg-white p-6">Static Contact Page</h2>;
}

export default function StaticDemo() {
  return (
    <StaticRouter location="/about">
      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">StaticRouter Demonstration</h1>

      <nav>
        <Link to="/" className="rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white transition hover:bg-indigo-700"
>Home</Link>
        {" | "}
        <Link to="/about" className="rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white transition hover:bg-indigo-700"
>About</Link>
        {" | "}
        <Link to="/contact" className="rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white transition hover:bg-indigo-700"
>Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </StaticRouter>
  );
}
