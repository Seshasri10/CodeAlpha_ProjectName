let display = document.getElementById('display');

function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    const expression = display.value;
    const result = simpleCalculate(expression);
    display.value = result;
  } catch {
    display.value = 'Error';
  }
}

// Very basic expression parser (only +, -, *, /)
function simpleCalculate(expr) {
  let tokens = expr.match(/(\d+\.?\d*|\+|\-|\*|\/)/g);
  if (!tokens) return "Error";

  let total = parseFloat(tokens[0]);
  for (let i = 1; i < tokens.length; i += 2) {
    let operator = tokens[i];
    let nextNum = parseFloat(tokens[i + 1]);

    if (isNaN(nextNum)) return "Error";

    switch (operator) {
      case '+': total += nextNum; break;
      case '-': total -= nextNum; break;
      case '*': total *= nextNum; break;
      case '/': total /= nextNum; break;
      default: return "Error";
    }
  }
  return total;
}
