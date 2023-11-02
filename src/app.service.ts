import { Injectable } from '@nestjs/common';
import { resolve } from 'path';
const PDFDocument = require('pdfkit-table');
import * as fs from 'fs';


@Injectable()
export class AppService {
  
  async generatePDF(): Promise<Buffer>
  {
      const pdfBuffer: Buffer = await new Promise( resolve => {
        const doc =  new PDFDocument(
          {
            size: "LETTER",
            bufferPages: true
          })

          //todo
          doc.text("PDF Generado en nuestro servidor");
          doc.moveDown();
          doc.text("Esto es un ejemplo de como generar un pdf en nuestro servidor nestjs");


          const buffer = []
          doc.on('data', buffer.push.bind(buffer))
          doc.on('end', () => {
              const data = Buffer.concat(buffer)
              resolve(data)
          })
          doc.end()


      })

      fs.writeFile("public/pdf.pdf", pdfBuffer, function (err) {
        if (err) throw err;
        console.log('File is created successfully.')} )

      return pdfBuffer;
    
  }

}