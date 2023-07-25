"use client"

// Componente que presenta el form a través del cual se puede registrar una nueva URL
export default function HandbookForm() {

  // Acá se configura la data y se hace el request a la API
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const data = {
      author: event.target.author.value,
      title: event.target.title.value,
      body: event.target.body.value
    }

    console.log(data)

  }
  return (

    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="author" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author</label>
            <input type="text" id="author" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="ABC12..." required={true} pattern={"[a-zA-Z0-9]+"} />
          </div>
          <div>
            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
            <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="ABC12..." required={true} pattern={"[a-zA-Z0-9]+"} />
          </div>
          <div>
            <label htmlFor="body" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Body</label>
            <input type="text" id="body" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="ABC12..." required={true} pattern={"[a-zA-Z0-9]+"} />
          </div>
        </div>
        <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Generar</button>
      </form>
    </div>
  )
}