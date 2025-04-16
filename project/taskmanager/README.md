Task manager app

its a simple note taking appliation

features:
    login and signup through firebase authentication
    can logout
    user specific notes
    can create and delete notes
    notes are saved in mongodb
    css applied by chatgpt because i cant design

tech:
    frontend: react, js and react router
    authentication: firebase authentication 
    backend: nodejs and expressjs
    database: mongodb / mongoose

run guide:
    cd server
    npm install
   
    .env should already exist in server folder since lazy but if not make it and

    paste this in:

    MONGO_URI=mongodb://localhost:27017/taskdb
    PORT=5000


    run 'node server.js' command in the respective folder

    open another terminal in project directory

    npm install 
    npm start