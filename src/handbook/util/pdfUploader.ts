const { google } = require('googleapis');
const { Readable } = require('stream');

type PartialDriveFile = {
    id: string;
    name: string;
};

type SearchResultResponse = {
    kind: 'drive#fileList';
    nextPageToken: string;
    incompleteSearch: boolean;
    files: PartialDriveFile[];
};

export async function uploadPdf(pdf: Buffer, id: string): Promise<string> {

    const driveClientId = process.env.GOOGLE_DRIVE_CLIENT_ID || '';
    const driveClientSecret = process.env.GOOGLE_DRIVE_CLIENT_SECRET || '';
    const driveRedirectUri = process.env.GOOGLE_DRIVE_REDIRECT_URI || '';
    const driveRefreshToken = process.env.GOOGLE_DRIVE_REFRESH_TOKEN || '';

    const driveClient = createDriveClient(driveClientId, driveClientSecret, driveRedirectUri, driveRefreshToken)

    const folderName = 'PDFs';

    let folder = await searchFolder(driveClient, folderName).catch((error) => {
        console.error(error);
        return null;
    });

    if (!folder) {
        folder = await createFolder(driveClient, folderName);
    }

    await saveFile(driveClient, id, pdf, 'application/pdf', folder.id).catch((error) => {
        console.error(error);
    });

    return 'File uploaded successfully!';
}



function createDriveClient(clientId: string, clientSecret: string, redirectUri: string, refreshToken: string) {
    const client = new google.auth.OAuth2(clientId, clientSecret, redirectUri);

    client.setCredentials({ refresh_token: refreshToken });

    return google.drive({
        version: 'v3',
        auth: client,
    });
}

function createFolder(driveClient: any, folderName: string): Promise<PartialDriveFile> {
    return driveClient.files.create({
        resource: {
            name: folderName,
            mimeType: 'application/vnd.google-apps.folder',
        },
        fields: 'id, name',
    });
}

function searchFolder(driveClient: any, folderName: string): Promise<PartialDriveFile | null> {
    return new Promise((resolve, reject) => {
        driveClient.files.list(
            {
                q: `mimeType='application/vnd.google-apps.folder' and name='${folderName}'`,
                fields: 'files(id, name)',
            },
            (err, res: { data: SearchResultResponse }) => {
                if (err) {
                    return reject(err);
                }

                return resolve(res.data.files ? res.data.files[0] : null);
            },
        );
    });
}

function saveFile(driveClient: any, fileName: string, pdf: Buffer, fileMimeType: string, folderId?: string) {
    const stream = Readable.from(pdf);
    return driveClient.files.create({
        requestBody: {
            name: fileName,
            mimeType: fileMimeType,
            parents: folderId ? [folderId] : [],
        },
        media: {
            mimeType: fileMimeType,
            body: stream,
        },
    });
}