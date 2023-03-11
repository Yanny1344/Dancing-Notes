"use strict";

const body = document.querySelector('body')

const container = document.createElement('div')
container.className = 'container'

const title_container = document.createElement('div')
title_container.className = "title_container"
const title = document.createElement('h')
title.className = "title"
title.textContent = 'dancingNotes.js'
title.style.fontSize = "6em"
title.style.fontFamily = "Snell Roundhand, cursive"
title_container.appendChild(title)
container.appendChild(title_container)

const content_container = document.createElement('div')
content_container.className = "content_container"
const content = document.createElement('h')
content.textContent = 'designed to generate components that could be used to develop music-related web applications'
content.style.fontSize = "1em"
content.style.fontFamily = "Snell Roundhand, cursive"
content_container.appendChild(content)
container.appendChild(content_container)


const button_con = document.createElement('div')
button_con.className = "button_con"

const ex_button = document.createElement('button')
ex_button.textContent = "Examples"
ex_button.className = "examples_button"

const doc_button = document.createElement('button')
doc_button.textContent = "Documentation"
doc_button.className = "doc_button"

const link_ex = document.createElement('a')
link_ex.href = "examples.html"
link_ex.appendChild(ex_button)
button_con.appendChild(link_ex)


const link_doc = document.createElement('a')
link_doc.href = "doc/html/index.html"
link_doc.appendChild(doc_button)
button_con.appendChild(link_doc)
container.appendChild(button_con)

body.append(container)