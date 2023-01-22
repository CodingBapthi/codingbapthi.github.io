import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>it&apos;s me</title>
        <meta name="description" content="Generated my portfolio with next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full h-full flex-1 lg:px-20 text-center">
        <div className="container mx-auto px-6 py-16 pt-28 text-center">
          <div className="mx-auto max-w-lg">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">Welcome, to my current landing page</h1>

            <p className="mt-6 text-gray-500 dark:text-gray-300">Did you imagine it more colorful because I do something with frontend, or that everything moves, that you get dizzy, because I have fun with JavaScript</p>

            <div
              className="mx-auto mt-6 w-full max-w-sm rounded-md border bg-transparent focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 focus-within:ring-opacity-40 dark:border-gray-700 dark:focus-within:border-blue-300">
              <p className={`text-gray-500 dark:text-gray-300`}>That may still come, but if you feel like contacting me by then, just get in touch on
                <a
                  href="https://www.github.com/CodingBapthi"
                  className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 dark:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                > GitHub
              </a>....</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
