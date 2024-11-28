import RainRenderer from './rain-renderer'
import createCanvas from './create-canvas'
import loadImages from './image-loader'
import Raindrops from './raindrops'
import TweenLite from 'gsap'

import DropColor from '../img/drop-color.png'
import DropAlpha from '../img/drop-alpha.png'

let wallpaperFg, wallpaperBg, dropColor, dropAlpha

let textureFg, textureFgCtx, textureBg, textureBgCtx

let textureBgSize = {
  width: 1920,
  height: 1080,
}

let textureFgSize = {
  width: 480,
  height: 270,
}

let raindrops, renderer, canvas

let parallax = { x: 0, y: 0 }

export function loadTextures(foreground, background) {
  loadImages([
    { name: 'dropAlpha', src: DropAlpha },
    { name: 'dropColor', src: DropColor },
    { name: 'foreground', src: foreground },
    { name: 'background', src: background },
  ]).then(function (images) {
    wallpaperFg = images.foreground.img
    wallpaperBg = images.background.img

    dropColor = images.dropColor.img
    dropAlpha = images.dropAlpha.img

    init()
  })
}

function init() {
  canvas = document.querySelector('#container-weather')

  let dpi = window.devicePixelRatio
  canvas.width = window.innerWidth * dpi
  canvas.height = window.innerHeight * dpi

  raindrops = new Raindrops(
    canvas.width,
    canvas.height,
    dpi,
    dropAlpha,
    dropColor,
    {
      minR: 20,
      maxR: 50,
      rainChance: 0.35,
      rainLimit: 6,
      dropletsRate: 50,
      dropletsSize: [3, 5.5],
      raining: true,
      trailRate: 1,
      trailScaleRange: [0.2, 0.35],
      fg: wallpaperFg,
      bg: wallpaperBg,
      flashFg: null,
      flashBg: null,
      flashChance: 0,
      collisionRadiusIncrease: 0.0002,
      trailRate: 1,
      trailScaleRange: [0.2, 0.45],
      collisionRadius: 0.45,
      dropletsCleaningRadiusMultiplier: 0.28,
    }
  )

  textureFg = createCanvas(textureFgSize.width, textureFgSize.height)
  textureFgCtx = textureFg.getContext('2d')
  textureBg = createCanvas(textureBgSize.width, textureBgSize.height)
  textureBgCtx = textureBg.getContext('2d')

  generateTextures(wallpaperFg, wallpaperBg)

  renderer = new RainRenderer(
    canvas,
    raindrops.canvas,
    textureFg,
    textureBg,
    null,
    {
      brightness: 1.04,
      alphaMultiply: 6,
      alphaSubtract: 3,
    }
  )

  setupParallax()
}

function setupParallax() {
  document.addEventListener('mousemove', (event) => {
    let x = event.pageX
    let y = event.pageY

    TweenLite.to(parallax, {
      duration: 1,
      x: (x / canvas.width) * 2 - 1,
      y: (y / canvas.height) * 2 - 1,
      onUpdate: () => {
        renderer.parallaxX = parallax.x
        renderer.parallaxY = parallax.y
      },
    })
  })
}

function generateTextures(fg, bg, alpha = 1) {
  textureFgCtx.globalAlpha = alpha
  textureFgCtx.drawImage(fg, 0, 0, textureFgSize.width, textureFgSize.height)

  textureBgCtx.globalAlpha = alpha
  textureBgCtx.drawImage(bg, 0, 0, textureBgSize.width, textureBgSize.height)
}
