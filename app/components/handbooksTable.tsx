"use client"

import clipboard from '@/public/clipboard-copy-custom.svg';
import Image from 'next/image';
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { useEffect, useState } from 'react';

// Componente que muestra en una tabla las URLs generadas para el usuario activo
export function HandbooksTable() {

    const [toDos, setToDos] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const [pdf, setPdf] = useState()
    const [isGenerating, setIsGenerating] = useState(false)

    const Test = (id: string) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: CREATE_PDF,
                variables: {
                    pdfId: id
                }
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.data.pdf == "File uploaded successfully!") {
                    alert("File created successfully, please check drive folder")
                }
                else {
                    alert("ERROR :C")
                }
            })
    }

    const url = "http://localhost:8080/graphql";

    const GET_HANDBOOKS = `query Handbooks {
    handbooks {
      _id
      date
    }
  }`;

    const CREATE_PDF = `query Query($pdfId: ID!) {
    pdf(id: $pdfId)
  }`;

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: GET_HANDBOOKS,
            variables: {
                first: 2
            }
        })
    };

    useEffect(() => {
        setIsLoading(true)
        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                setToDos(data) // Set the toDo variable
                setIsLoading(false)
            })
    }, [])

    // Acá se configuran los datos y se realiza la petición a la API para obtener las URLs

    // type Handbook = {
    //     author?: String,
    //     title?: String,
    //     body?: String
    //     _id?: String,
    //     date?: String

    // }

    if (isLoading) {
        return <p>Loading....</p>
    }
    if (!toDos) {
        return <p>No List to show</p>
    }

    return (

        <div className="relative overflow-x-auto mt-10 mb-10">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Handbook ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Handbook date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Generate PDF
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // @ts-ignore
                        toDos.data.handbooks.map((handbook: any, key: any) => {
                            return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={key}>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {handbook._id}
                                </th>
                                <td className="px-6 py-4">
                                    {handbook.date}
                                </td>
                                <td className="px-6 py-4">
                                    <button onClick={() => Test(handbook._id)} type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-1 py-1 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                        <Image src={clipboard} alt='Copy to clipboard' width={25} height={25} />
                                    </button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>

    )

}