/*
  1. Se om du kan hitta två stycken code smells i följande funktion och rätta till dem.
  Funktionen tar emot en lista med längshoppslängder och syftet med funktionen är att summera
  dessa hopplängder.
  */

  function sumOfJumpDistances(jumpings: number[]): number {
    return jumpings.reduce((sum, currentJump) => sum + currentJump, 0);
  }
  
  /*
    2. I detta exempel har vi fokuserat på if-statements. Se om du kan göra exemplet bättre!
    */
  
    class Student {
      constructor(
        public name: string,
        public handedInOnTime: boolean
      ) {}
    
      hasPassed(): boolean {
        return this.name === "Sebastian" && this.handedInOnTime;
      }
    }
    
    function getStudentStatus(student: Student): string {
      return student.hasPassed() ? "VG" : "IG";
    }    
  
  /*
    3. Variabelnamn är viktiga. Kika igenom följande kod och gör om och rätt.
    Det finns flera code smells att identifiera här. Vissa är lurigare än andra.
    */
  
  class TemperatureReading {
    constructor(public location: string, public date: Date, public temperature: number) {}
  }
  
  function averageWeeklyTemperature(highestTemperatures: TemperatureReading[]) {
    let result = 0;
    const oneWeekAgo = Date.now() - 604800000
  
    for (let i = 0; i < highestTemperatures.length; i++) {
      if (highestTemperatures[i].location === "Stockholm") {
        if (highestTemperatures[i].date.getTime() - oneWeekAgo) {
          result += highestTemperatures[i].temperature;
        }
      }
    }
  
    return result / 7;
  }

  /*
    4. Följande funktion kommer att presentera ett objekt i dom:en. 
    Se om du kan göra det bättre. Inte bara presentationen räknas, även strukturer.
    */
  
    class Product {
      constructor(
        public name: string,
        public price: string,
        public image: string
      ) {}
    }
    
    function showProduct(product: Product, parent: HTMLElement) {
      const container = document.createElement("div");
    
     container.innerHTML= `<h4> ${product.name} </4>
     <img src= "${product.image}" alt="${product.name}">
     <p>${product.price}<p/>`;

      parent.appendChild(container);
    }
  
  /*
    5. Följande funktion kommer presentera studenter. Men det finns ett antal saker som 
    går att göra betydligt bättre. Gör om så många som du kan hitta!
    */

    function presentStudents(students: Student[]) {
      const passedList = document.querySelector("ul#passedstudents");
      const failedList = document.querySelector("ul#failedstudents");
    
      if (!passedList || !failedList) return;
    
      students.forEach(({ name, handedInOnTime }) => {
        const studentElement = document.createElement("li");
        studentElement.innerHTML = `<input type="checkbox" ${handedInOnTime ? "checked" : ""}> ${name}`;
    
        if (handedInOnTime) {
          passedList.appendChild(studentElement);
        } else {
          failedList.appendChild(studentElement);
        }
      });
    }
  
  /*
    6. Skriv en funktion som skall slå ihop följande texter på ett bra sätt:
    Lorem, ipsum, dolor, sit, amet
    Exemplet under löser problemet, men inte speciellt bra. Hur kan man göra istället?
    */
    function concatenateStrings() {
      const words = ["Lorem", "ipsum", "dolor", "sit", "amet"];
      return words.join(" ");
    }
    
  /* 
  7. Denna funktion skall kontrollera att en användare är över 20 år och göra någonting.
      Det finns dock problem med denna typ av funktion. Vad händer när kraven ändras och
      fler och fler parametrar behöver läggas till? T.ex. avatar eller adress. Hitta en bättre
      lösning som är hållbar och skalar bättre. 
  */
 interface User {
  name: string;
  birthday: Date;
  email: string;
  password: string;
}

function isAdult(birthday: Date): boolean {
  const ageDiff = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDiff);
  const userAge = Math.abs(ageDate.getUTCFullYear() - 1970);
  return userAge >= 20;
}

function createUser(user: User) {
  if (!isAdult(user.birthday)) {
    return "Du är under 20 år";
  }

  console.log("Användaren har skapats: ", user);
  return "Användare skapad!";
}
