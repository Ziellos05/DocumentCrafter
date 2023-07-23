import { Handbook } from "../handbook.model";

const PDFDocument = require('pdfkit-table');


export async function generatePDF(data: Handbook): Promise<Buffer> {
    const pdfBuffer: Buffer = await new Promise(resolve => {
        const doc = new PDFDocument(
            {
                size: "LETTER",
                bufferPages: true
            })

        //todo
        doc.text(data.title);
        doc.moveDown();
        doc.text(data.body);
        doc.moveDown();
        doc.text(data.author);

        const buffer = []
        doc.on('data', buffer.push.bind(buffer))
        doc.on('end', () => {
            const data = Buffer.concat(buffer)
            resolve(data)
        })
        doc.end()


    })

    return pdfBuffer;

}