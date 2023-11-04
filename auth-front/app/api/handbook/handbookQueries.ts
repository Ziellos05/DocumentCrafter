"use client"

export function createHandbookMutation(input: any): Promise<Response> {

    const url = "http://localhost:8080/graphql";

    const MUTATION = `mutation CreateBook($input: HandbookInput!) {
      createBook(input: $input) {
        _id
      }
    }`;

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: MUTATION,
            variables: {
                input: input
            }
        })
    }

    return fetch(url, options)
}

export function createPdfQuery(id: string): Promise<Response> {

    const url = "http://localhost:8080/graphql";

    const QUERY = `query Query($pdfId: ID!) {
        pdf(id: $pdfId)
      }`;

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: QUERY,
            variables: {
                pdfId: id
            }
        })
    }

    return fetch(url, options)
}

export function getHandbooksQuery(): Promise<Response> {

    const url = "http://localhost:8080/graphql";

    const QUERY = `query Handbooks {
        handbooks {
          _id
          date
        }
      }`;

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: QUERY
        })
    }

    return fetch(url, options)
}