
import RouterCard from "./component/RouterCard";
import HashRouterDemo from "./component/HashRouterDemo";
import MemoryRouterDemo from "./component/MemoryRouterDemo";

const routers = [
  {
    name: 'HashRouter',
    description:
      'Uses the URL fragment (#) to represent the current route.',
    example: 'example.com/#/about',
    useCase:
      'Static websites, simple deployments, and hosting without route rewrite configuration.',
    color: 'bg-indigo-100 text-indigo-700',
  },
  {
    name: 'MemoryRouter',
    description:
      'Stores navigation entries in memory without changing the browser URL.',
    example: 'Internal path: /settings',
    useCase:
      'Unit tests, embedded widgets, and isolated navigation flows.',
    color: 'bg-green-100 text-green-700',
  },
  
]

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-indigo-700 to-violet-700 px-6 py-12 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-200">
            React Router Learning Lab
          </p>
          <h1 className="mt-3 text-3xl font-extrabold sm:text-5xl">
            Understanding Router Types
          </h1>
          <p className="mt-4 max-w-2xl leading-7 text-indigo-100">
            Compare URL-based navigation, in-memory navigation,
            and static server rendering.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-10 px-6 py-10">
        <section>
          <h2 className="text-2xl font-bold text-gray-900">
            Router Overview
          </h2>
          <p className="mt-2 text-gray-600">
            Learn how each router works and when to use it.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {routers.map((router) => (
              <RouterCard key={router.name} {...router} />
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Interactive Demos
            </h2>
            <p className="mt-2 text-gray-600">
              Try the navigation controls in each section.
            </p>
          </div>

          <HashRouterDemo />
          <MemoryRouterDemo />

        
        </section>
      </main>

      <footer className="border-t border-gray-200 bg-white px-6 py-6 text-center text-sm text-gray-500">
        Built with React, React Router, and Tailwind CSS.
      </footer>
    </div>
  )
}
