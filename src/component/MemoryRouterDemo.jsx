
import {
  MemoryRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom'

function MemoryPage({ title, children }) {
  const location = useLocation()

  return (
    <div className="mt-5 rounded-xl bg-gray-50 p-5">
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{children}</p>
      <p className="mt-4 rounded-lg bg-green-50 p-3 text-sm text-green-800">
        Internal route: {location.pathname}
      </p>
    </div>
  )
}

export default function MemoryRouterDemo() {
  return (
    <MemoryRouter initialEntries={['/home']}>
      <section className="rounded-2xl border border-green-100 bg-white p-6">
        <h2 className="text-2xl font-bold text-green-700">
          MemoryRouter Demo
        </h2>

        <p className="mt-2 text-gray-600">
          The internal route changes, but the browser URL stays the same.
        </p>

        <nav className="mt-5 flex flex-wrap gap-3">
          <Link
            to="/home"
            className="rounded-lg bg-green-600 px-4 py-2 font-medium text-white hover:bg-green-700"
          >
            Home
          </Link>
          <Link
            to="/settings"
            className="rounded-lg border border-green-200 px-4 py-2 font-medium text-green-700 hover:bg-green-50"
          >
            Settings
          </Link>
        </nav>

        <Routes>
          <Route
            path="/home"
            element={
              <MemoryPage title="Memory Home">
                This page is selected from in-memory navigation history.
              </MemoryPage>
            }
          />
          <Route
            path="/settings"
            element={
              <MemoryPage title="Memory Settings">
                You reached Settings without changing the browser URL.
              </MemoryPage>
            }
          />
        </Routes>
      </section>
    </MemoryRouter>
  )
}
