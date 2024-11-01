let isCalculated = false


let calculation = ''

      const plusOne = () => {
        if (isCalculated) {
          calculation = "";
          calculation += 1;
          isCalculated = false
       } else {
          
          calculation += 1;
       }
        finalResult();
      };
      const plusTwo = () => {
        if (isCalculated) {
          calculation = ""
          calculation += 2
          isCalculated = false
        } else {
         
          calculation += 2
        }
        finalResult();
      };
      const plusThree = () => {
        if (isCalculated) {
          calculation = ""
          calculation += 3
          isCalculated = false
        } else {
          
          calculation += 3
        }
        finalResult();
      };
      const plusFour = () => {
        if (isCalculated) {
          calculation = ""
          calculation += 4
          isCalculated = false
        } else {
          
          calculation += 4
        }
        finalResult();
      };
      const plusFive = () => {
        if (isCalculated) {
          calculation = ""
          calculation += 5
          isCalculated = false
        }  else {
         
          calculation += 5
        }
        finalResult();
      };
      const plusSix = () => {
        if (isCalculated) {
          calculation = ""
          calculation += 6
          isCalculated = false
        } else {
          
          calculation += 6
        }
       
        finalResult();
      };
      const plusSeven = () => {
        if ( isCalculated) {
          calculation = ""
          calculation += 7
          isCalculated = false
        } else {
          
          calculation += 7
        }
       
        finalResult();
      };
      const plusEight = () => {
        if (isCalculated) {
          calculation = ""
          calculation += 8
          isCalculated = false
        } else {
         
          calculation += 8
        }
        
        finalResult();
      };
      const plusNine = () => {
        if (isCalculated) {
          calculation = ""
          calculation += 9
          isCalculated = false
        } else {
          
          calculation += 9
        }
        
        finalResult();
      };
      const plusZero = () => {
        calculation = 0
        finalResult()
      }
      const plusSign = () => {
        calculation += "  + ";
      };
      const multiSign = () => {
        calculation += " * ";
      };
      const divisionSign = () => {
        calculation += " / ";
      };
      const subtractSign = () => {
        calculation += " - ";
      };
      const percentSign = () => {
        calculation = calculation / 100;
      };
      const equalSign = () => {
        calculation = eval(calculation);
        isCalculated = true;
        finalResult();
      };
      const pointSign = () => {
        calculation += ".";
        
      };
      const powerSign = () => {
        calculation **= 2;
        
      };

      const resetSign = () => {
        calculation = 0;
        finalResult();
      };
      const finalResult = () => {
        const showAll = document.getElementById("showResult");
        showAll.innerHTML = ` ${calculation}`;
      };

      // let a = 5
      // let b = 10
      // console.log(a && b);
      // console.log(a || b);
      
      