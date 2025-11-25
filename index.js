function calc(buttonText) {
  let input = document.getElementById("userInput");
  let calculate = document.getElementById("result");

  const symbols = ["+", "-", "*", "/", "%"];

  if (!isNaN(parseInt(buttonText))) {
    input.value += buttonText;

    calculate.innerHTML = eval(input.value);
  }
  if (symbols.includes(buttonText)) {
    const lastLetter = input.value[input.value.length - 1];

    if (symbols.includes(lastLetter)) {
      input.value = input.value.slice(0, -1);
      input.value += buttonText;
    } else {
      input.value += buttonText;
    }
  } else {
    switch (buttonText) {
      case "bspace":
        input.value = input.value.slice(0, -1);
        if (input.value.length) {
          calculate.innerHTML = eval(input.value);
        } else {
          calculate.innerHTML = "";
        }

        break;
      case ".":
        input.value += ".";
        break;

      case "=":
        input.value = eval(input.value);
        calculate.innerHTML = "";

        break;
      case "clear":
        input.value = "";
        calculate.innerHTML = "";

        break;
      case "negate":
        input.value = text().value;
        function text() {
          if (input.value > 0) {
            input.value = -Math.abs(input.value);
          } else {
            input.value = Math.abs(input.value);
          }
        }

        break;

      default:
        console.log("invalid");
    }
  }
}
