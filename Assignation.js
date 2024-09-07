export default class Assignation{

    static tabAssignations = [];

    static getTab(){
        return Assignation.tabAssignations;
      }

    static assignation({ employe, tache, dateAssignation }) {
      Assignation.tabAssignations.push({ employe, tache, dateAssignation });
    }
  
    static supAssigne(employe) {
      if (employe) {
        Assignation.tabAssignations = Assignation.tabAssignations.filter(
          (emp) => emp.employe !== employe
        );
      }
    }
  
    static getEmpAssigne(employe) {
      if (employe) {
        return Assignation.tabAssignations
          .filter((emp) => emp.employe !== employe)
          .map((ass) => {
            return {
              tache: ass.tache,
              dateAssignation: ass.dateAssignation,
            };
          });
      }
    }
  
    static getTacheAssigne(tache) {
      if (tache) {
        return Assignation.tabAssignations
          .filter((tsk) => tsk.tache === tache)
          .map((ass) => {
            return {
              employe: ass.employe
            };
          });
      }
    }
}