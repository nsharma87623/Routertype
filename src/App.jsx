
import { useState } from 'react'
import {
  HashRouter,
  MemoryRouter,
  StaticRouter,
  Routes,
  Route,
  Link,
  useLocation
} from 'react-router-dom'

function Pages() {
  const location = useLocation()

  return (
    <div className="mt-5 rounded-lg bg-blue-50 p-4">
      <p className="font-bold text-blue-700">
        Current Path: {location.pathname}
      </p>
      <nav className="mt-4 flex gap-4 text-blue-600">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h2 className="mt-4 text-xl">Home Page</h2>} />
        <Route path="/about" element={<h2 className="mt-4 text-xl">About Page</h2>} />
      </Routes>
    </div>
  )
}

 function App() {
  const [type, setType] = useState('hash')

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-xl rounded-xl bg-white p-6 shadow-lg">
        <h1 className="mb-5 text-center text-2xl font-bold text-blue-700">
          React Router Types
        </h1>

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full rounded-lg border p-3"
        >
          <option value="hash">HashRouter</option>
          <option value="memory">MemoryRouter</option>
          <option value="static">StaticRouter</option>
        </select>

        {type === 'hash' && (
          <HashRouter>
            <Pages />
          </HashRouter>
        )}

        {type === 'memory' && (
          <MemoryRouter>
            <Pages />
          </MemoryRouter>
        )}

        {type === 'static' && (
          <StaticRouter location="/about">
            <Pages />
          </StaticRouter>
        )}
      </div>
    </div>
  )
}

export default App