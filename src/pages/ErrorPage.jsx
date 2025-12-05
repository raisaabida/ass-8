export default function ErrorPage(){
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center bg-gray-50">
  <img src="/assets/error-404.png" alt="Page Not Found" className="w-80 max-w-full" />
  <h2 className="mt-4 text-xl font-semibold text-gray-700">Page Not Found</h2>
  <p className="mt-2 text-gray-500">The page you are looking for does not exist.</p>
  <a href="/" className="mt-4 inline-block px-4 py-2 border rounded">Go home</a>
</main>

  )
}


