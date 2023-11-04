import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import path = require('path');

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("pdf/create")
  async downloadPDF(@Res() res): Promise<void> {
    const buffer = await this.appService.generatePDF();

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=example.pdf',
      'Content-Length': buffer.length,
    })

    res.end(buffer);
  }


}