
import {
  HashRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom'

function DemoPage({ title, children }) {
  return (
    <div className="mt-5 rounded-xl bg-gray-50 p-5">
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{children}</p>
    </div>
  )
}

export default function HashRouterDemo() {
  return (
    <HashRouter>
      <section className="rounded-2xl border border-indigo-100 bg-white p-6">
        <h2 className="text-2xl font-bold text-indigo-700">
          HashRouter Demo
        </h2>

        <p className="mt-2 text-gray-600">
          Check the browser URL as you navigate.
        </p>

        <nav className="mt-5 flex flex-wrap gap-3">
          <Link
            to="/home"
            className="rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="rounded-lg border border-indigo-200 px-4 py-2 font-medium text-indigo-700 hover:bg-indigo-50"
          >
            About
          </Link>
        </nav>

        <Routes>
          <Route
            path="/home"
            element={
              <DemoPage title="Hash Home">
                Welcome to the HashRouter home page.
              </DemoPage>
            }
          />
          <Route
            path="/about"
            element={
              <DemoPage title="About HashRouter">
                The route is stored in the URL fragment after #.
              </DemoPage>
            }
          />
          <Route
            path="*"
            element={
              <DemoPage title="Choose a page">
                Select Home or About to try hash-based navigation.
              </DemoPage>
            }
          />
        </Routes>
      </section>
    </HashRouter>
  )
}
