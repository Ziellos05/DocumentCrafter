import { Controller, Get } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';
import { AppService } from './app.service';

dotenv.config();

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async getHello(): Promise<void> {
    const driveClientId = process.env.GOOGLE_DRIVE_CLIENT_ID || '';
    const driveClientSecret = process.env.GOOGLE_DRIVE_CLIENT_SECRET || '';
    const driveRedirectUri = process.env.GOOGLE_DRIVE_REDIRECT_URI || '';
    const driveRefreshToken = process.env.GOOGLE_DRIVE_REFRESH_TOKEN || '';

    /////////////////////////////////////////////////////////////////////////

    const googleDriveService = new AppService(driveClientId, driveClientSecret, driveRedirectUri, driveRefreshToken);

    const finalPath = path.resolve(__dirname, '../public/example.pdf');
    console.log("////////////////////////////////////////////////////")
    console.log(finalPath)
    const folderName = 'PDFs';

    if (!fs.existsSync(finalPath)) {
      throw new Error('File not found!');
    }

    let folder = await googleDriveService.searchFolder(folderName).catch((error) => {
      console.error(error);
      return null;
    });

    if (!folder) {
      folder = await googleDriveService.createFolder(folderName);
    }

    await googleDriveService.saveFile('Ejemplo', finalPath, 'application/pdf', folder.id).catch((error) => {
      console.error(error);
    });

    console.info('File uploaded successfully!');

    /////////////////////////////////////////////////////////////////////////
  }
}
