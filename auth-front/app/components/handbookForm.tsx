"use client"

import { useRouter } from 'next/navigation';
import { createHandbookMutation } from '../api/handbook/handbookQueries';
import { useEffect } from 'react';

// Componente que presenta el form a través del cual se puede registrar una nueva URL
export default function HandbookForm() {

  const router = useRouter();

  // Acá se configura la data y se hace el request a la API
  const handleSubmit = (event: any) => {

    event.preventDefault();

    const date = new Date().toLocaleDateString();

    const input = {
      font: event.target.font.value,
      author: event.target.author.value,
      date: date,
      password: event.target.password.value,
      firstPage: event.target.firstPage.checked,
      title2: event.target.title2.value,
      edit1: event.target.edit1.value,
      urlLink1: event.target.urlLink1.value,
      title3: event.target.title3.value,
      edit2: event.target.edit2.value,
      image2: event.target.image2.value,
      chosen1: event.target.chosen1.value,
      chosenAlign1: event.target.chosenAlign1.value
    }

    createHandbookMutation(input)
      .then(response => response.json())
      .then(data => {
        if (data) {
          alert("Document created successfully, check the main page")
          router.push('/main');
        }
        else {
          alert("ERROR :C")
        }
      })
  }

  return (

    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 mb-4 md:grid-cols-1">
          <div>
            <label htmlFor="font" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Font</label>
            <select id="font" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option>Helvetica</option>
              <option>Courier</option>
            </select>
          </div>
          <div>
            <label htmlFor="author" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author</label>
            <input type="text" id="author" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="ABC12..." required={true} pattern={"/^[\w\-\s]+$/"} />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="ABC12..." required={true} pattern={"/^[\w\-\s]+$/"} />
          </div>
          <div>
            <label htmlFor="title2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title 2</label>
            <input type="text" id="title2" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="ABC12..." required={true} pattern={"/^[\w\-\s]+$/"} />
          </div>
          <div>
            <label htmlFor="edit1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Edit 1</label>
            <input type="text" id="edit1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="ABC12..." required={true} pattern={"/^[\w\-\s]+$/"} />
          </div>
          <div>
            <label htmlFor="urlLink1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Link 1</label>
            <input type="text" id="urlLink1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="ABC12..." required={true} pattern={"/^[\w\-\s]+$/"} />
          </div>
          <div>
            <label htmlFor="title3" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title 3</label>
            <input type="text" id="title3" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="ABC12..." required={true} pattern={"/^[\w\-\s]+$/"} />
          </div>
          <div>
            <label htmlFor="edit2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Edit 2</label>
            <input type="text" id="edit2" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="ABC12..." required={true} pattern={"/^[\w\-\s]+$/"} />
          </div>
          <div>
            <label htmlFor="image2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image 2</label>
            <select id="image2" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option>Imagen</option>
              <option>Evil Imagen</option>
            </select>
          </div>
          <div>
            <label htmlFor="chosen1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Chosen 1</label>
            <select id="chosen1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option>Latin</option>
              <option>English</option>
            </select>
          </div>
          <fieldset>
            <legend className="sr-only">Align</legend>
            <div className="flex items-center mb-4">
              <input id="chosenAlign1" type="radio" name="chosenAlign1" value="left" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" defaultChecked />
              <label htmlFor="chosenAlign1" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Left
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input id="chosenAlign1" type="radio" name="chosenAlign1" value="right" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="chosenAlign1" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Right
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input id="chosenAlign1" type="radio" name="chosenAlign1" value="center" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="chosenAlign1" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Center
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input id="chosenAlign1" type="radio" name="chosenAlign1" value="justify" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="chosenAlign1" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Justify
              </label>
            </div>
          </fieldset>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input id="firstPage" type="checkbox" value="YES" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
            </div>
            <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"><a href="#" className="text-blue-600 hover:underline dark:text-blue-500">Add first page template</a></label>
          </div>
        </div>
        <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Generar</button>
      </form>
    </div>
  )
}