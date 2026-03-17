function insertSymbol(symbol) {
  const input = document.getElementById("booleanInput");
  input.value += symbol;
}

function buildScheme() {
  const input = document.getElementById("booleanInput").value;
  try {
    const expr = math.parse(input);
    const workspace = document.getElementById("workspace");
    workspace.innerHTML = "";
    drawNode(expr, 50, 50);
  } catch (error) {
    alert("Помилка у виразі: " + error.message);
  }
}

function drawNode(node, x, y) {
  const workspace = document.getElementById("workspace");
  const div = document.createElement("div");

  if (node.isSymbolNode) {
    div.className = "variable";
    div.innerText = node.name;
  } else if (node.isOperatorNode) {
    div.className = "operation";
    div.innerText = node.op;
  }

  div.style.top = y + "px";
  div.style.left = x + "px";
  workspace.appendChild(div);

  node.ui = { x: x, y: y };

  if (node.args) {
    node.args.forEach((arg, i) => {
      drawNode(arg, x + 150, y + i * 80);
    });
  }
}

function runSimulation() {
  const input = document.getElementById("booleanInput").value;
  try {
    const expr = math.parse(input);
    animatePulse(expr);
  } catch (error) {
    alert("Спочатку побудуйте правильну схему!");
  }
}

function
