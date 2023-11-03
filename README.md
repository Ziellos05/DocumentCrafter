# DocumentCrafter

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Technologies

        - NextJS (FrontEnd)
        - NestJS (Backend/API)
        - MongoDB
        - Google Cloud APIs

This app is an experiment, the idea is create a whole handbook selecting some options having a template, useful for projects where you need to create the same document again and again with minimal differences.

### The project is divided in four differents braches:

        1. auth-front: The logic that connects with google through OAuth 2.0 to login a client.
        
           https://github.com/Ziellos05/DocumentCrafter/tree/auth-front
        
        2. crud-backend: Classic CRUD that call created docs, create new docs, erase and edit.
        
           https://github.com/Ziellos05/DocumentCrafter/tree/crud-backend
        
        3. pdfCreator-backend: This is the magic that uses the template and the data send by the client in the frontend to create a personalized doc.
        
           https://github.com/Ziellos05/DocumentCrafter/tree/pdfCreator-backend
        
        4. pdfUploader-backend: This shit have been a headache but is great, this allows sending the created file to your own folder in Google Drive.
        
           https://github.com/Ziellos05/DocumentCrafter/tree/pdfUploader-frontend
