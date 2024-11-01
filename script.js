let calculation = [];
      const plusOne = () => {
        calculation += 1;
        finalResult();
      };
      const plusTwo = () => {
        calculation += 2;
        finalResult();
      };
      const plusThree = () => {
        calculation += 3;
        finalResult();
      };
      const plusFour = () => {
        calculation += 4;
        finalResult();
      };
      const plusFive = () => {
        calculation += 5;
        finalResult();
      };
      const plusSix = () => {
        calculation += 6;
        finalResult();
      };
      const plusSeven = () => {
        calculation += 7;
        finalResult();
      };
      const plusEight = () => {
        calculation += 8;
        finalResult();
      };
      const plusNine = () => {
        calculation += 9;
        finalResult();
      };
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