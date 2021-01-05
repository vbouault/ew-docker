//  récupérer id container : docker ps
//entrez dans un container en CLI :  docker exec -it [id container] ash

const express = require('express');
const mongoose = require('mongoose');


////permet de quitter une app docker
process.on("SIGINT", () => {
    console.log("Caught interrupt signal");
    process.exit();
});

process.on("SIGTERM", () => {
    console.log("Caught interrupt signal");
    process.exit();
});
/////

(async () => {
    const app = express();

    console.log("Connecting to MongoDB, nice");
    await mongoose.connect("mongodb://mongodb:27017/ew-docker", { useUnifiedTopology: true, useNewUrlParser: true });
    console.log("Connected");


    app.get('/', (req, res) => {
        console.log("Got a request");
        res.json({ message: "Hey, I'm Jack, the API" });
    });

    app.listen(3000, () => {
        console.log("Server is running");
    });
})();

// docker build -t ew-docker . && docker run -p 4000:3000 ew-docker
// pour connecter 2 container (app et bdd) : docker build -t ew-docker . && docker run --link mongodb -p 4000:3000 ew-docker
