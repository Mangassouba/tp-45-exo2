import express from "express";
import bodyParser from "body-parser";
import Employe from "./Employe.js";
import Tache from "./Tache.js";
import Assignation from "./Assignation.js";
const app = express();
const port = 3070;

app.use(express.json());

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/employe", (req, res) => {
  const emp1 = new Employe();
  emp1.createEmploye({
    nom: "Bankole",
    prenom: "med",
    email: "med@gmail.com",
    post: "technicien",
    dateEmbauche: new Date(),
    statut: "valide",
  });
  const emp2 = new Employe();
  emp2.createEmploye({
    nom: "Manga",
    prenom: "Hamallah",
    email: "hamallah@gmail.com",
    post: "technicien",
    dateEmbauche: new Date(),
    statut: "valide",
  });

  // res.send(`Un nouveu employer a été crée `)
  const tache1 = new Tache();
  tache1.createTache({
    nom: "conception app",
    description: "creation une application de e-commerce",
    dateDebut: new Date(),
    dateFin: new Date(),
    statut: "en cours",
    priorite: "haut",
  });
  const tache2 = new Tache();
  tache2.createTache({
    nom: "conception app",
    description: "creation une application de e-commerce",
    dateDebut: new Date(),
    dateFin: new Date(),
    statut: "en cours",
    priorite: "haut",
  });

  Assignation.assignation({
    employe: emp1,
    tache: tache1,
    dateAssignation: new Date(),
  });
  Assignation.assignation({
    employe: emp2,
    tache: tache2,
    dateAssignation: new Date(),
  });
  // Assignation.assign({
  //   employe: emp2,
  //   tache: tache1,
  //   dateAssignation: new Date(),
  // });
  // Assignation.assign({
  //   employe: emp1,
  //   tache: tache2,
  //   dateAssignation: new Date(),
  // });
  // Assignation.assign({
  //   employe: emp2,
  //   tache: tache2,
  //   dateAssignation: new Date(),
  // });
  const assignation = Assignation.tabAssignations;
  Assignation.getEmpAssigne(emp1);
  const resulFiltre = Assignation.getEmpAssigne(emp1);

  const newAssignation = Assignation.getTab();

  res.json({ newAssignation, resulFiltre });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
