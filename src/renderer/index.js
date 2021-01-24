import * as PIXI from 'pixi.js'

import './scss/style.sass'

const el = document.getElementById('app')

const app = new PIXI.Application({ width: 256, height: 256, antialias: true })
app.renderer.view.style.position = 'absolute'
app.renderer.view.style.display = 'block'
app.renderer.autoResize = true
app.renderer.resize(window.innerWidth, window.innerHeight)

el.appendChild(app.view)
