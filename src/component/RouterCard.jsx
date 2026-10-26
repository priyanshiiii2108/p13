
export default function RouterCard({
  name,
  description,
  useCase,
  example,
  color,
}) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div
        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-xl font-bold ${color}`}
      >
        {name.charAt(0)}
      </div>

      <h2 className="text-xl font-bold text-gray-900">{name}</h2>

      <p className="mt-3 leading-7 text-gray-600">{description}</p>

      <div className="mt-5 rounded-xl bg-gray-50 p-4">
        <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
          Example
        </p>
        <code className="mt-2 block break-words text-sm text-indigo-700">
          {example}
        </code>
      </div>

      <div className="mt-4">
        <p className="text-sm font-semibold text-gray-800">Where to use it</p>
        <p className="mt-1 text-sm leading-6 text-gray-600">{useCase}</p>
      </div>
    </article>
  )
}
