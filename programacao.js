var menu = window.document.getElementById('burguer')
var itens = window.document.getElementById('items')

function entrou() {
  menu.style.backgroundColor = '#174f30'
  menu.style.cursor = 'pointer'
  menu.style.transitionDuration = '.2s'
}

function clicou() {
  menu.style.backgroundColor = 'white'
  menu.style.color = '#1A5C38'
  menu.style.transitionDuration = '0s'
}

function saiu() {
  menu.style.backgroundColor = '#1A5C38'
  menu.style.color = 'white'
}

function moveu() {
  menu.style.backgroundColor = '#174f30'
  menu.style.color = 'white'
}

function burguer() {
  if (itens.style.display == 'block') {
    itens.style.display = 'none'
  } else {
    itens.style.display = 'block'
  }
}