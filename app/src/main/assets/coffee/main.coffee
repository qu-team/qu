'use strict'

renderer = PIXI.autoDetectRenderer(800, 600, { antialias: on })
document.body.appendChild(renderer.view)

root = new PIXI.Container()
root.interactive = true

graphics = new PIXI.Graphics()

graphics.lineStyle(4, 0xffd900, 1)
graphics.beginFill(0xffff0b, 0.5)
graphics.drawCircle(470, 90, 60)
graphics.endFill()

root.addChild(graphics)
animate = ->
	renderer.render(root)
	requestAnimationFrame(animate)
animate()
