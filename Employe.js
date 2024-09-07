export default class Employe {
  constructor() {}
  createEmploye(employe) {
    this.nom = employe.nom;
    this.prenom = employe.prenom;
    this.email = employe.email;
    this.post = employe.post;
    this.dateEmbauche = employe.dateEmbauche;
    this.statut = employe.statut;
    console.log(`Employe: nom ${employe.nom}, prenom: ${employe.prenom}
            , email: ${employe.email}
            , post: ${employe.post} 
            , date Embauche: ${employe.dateEmbauche}
            , statut: ${employe.statut} 
            `);
  }

  editEmploye(newEmploye) {
    this.nom = newEmploye.nom;
    this.prenom = newEmploye.prenom;
    this.email = newEmploye.email;
    this.post = newEmploye.post;
    this.dateEmbauche = newEmploye.dateEmbauche;
    this.statut = newEmploye.statut;
    console.log(
      `Employe: ${this.nom},  ${this.prenom},  ${this.email},  ${this.post},  ${this.dateEmbauche},  ${this.statut}`
    );
  }

  getEmpoye() {
    console.log(
      `Employe: ${this.nom},  ${this.prenom},  ${this.email},  ${this.post},  ${this.dateEmbauche},  ${this.statut}`
    );
    return { nom: this.nom };
  }

  destroyEmploye() {
    this.nom = null;
    this.prenom = null;
    this.email = null;
    this.post = null;
    this.dateEmbauche = null;
    this.statut = null;
  }
}
