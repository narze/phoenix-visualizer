import * as Phoenix from './phoenix.js'

function initButton() {
  const element = document.createElement('button');
  element.innerText = "Init()"
  element.addEventListener("click", () => {
    PhoenixWeb.init()
  })

  return element;
}

function logButton() {
  const element = document.createElement('button');
  element.innerText = "log()"
  element.addEventListener("click", () => {
    PhoenixWeb.log()
  })

  return element;
}

document.body.appendChild(initButton());
document.body.appendChild(logButton());
