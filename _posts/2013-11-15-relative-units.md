---
layout: post
title:  "Relative Units"
link: "relative-units"
urlName: 2013-11-15-relative-units.md
date:   2013-11-15 19:39:00
categories: css
---
Fixed units simply don't convaluate to the flexibility RWD usually demands from content. Not just your viewport has flexible dimensions (by browser resizing, zooming, rotating, or whatever else), but the proportions between content and container, container and viewport and, consequently, content and viewport vary significantly. Since a pixel is a pixel in whatever context it's put, developers and designers can make use of relative units.

Relative to browser's `font-size` default or viewport dimensions. This means that as the environment changes, the unit adapts.

###Font Related Units
- `em`: correspond to the element's `font-size`
    - `rem`: root em corresponds to the `body`'s `font-size`
- `%`: 1/100 of the elements max value
- `ex`: corresponds to the x-height of the element's `font-family`
- `ch`: the width of the character 0 (zero) of the element's `font-family`

###Viewport Related Units
- `vw`: 1% of the viewport's width
- `vh`: 1% of the viewport's height
- `vmax`: 1% of viewport's biggest dimension
- `vmin`: 1% of the viewport's smallets dimension

> Be careful with [Viewport Related Units' support](http://caniuse.com/#feat=viewport-units)

Make extensive use of this units, some devs have adopted pixel-free development processes. Although for `media queries` it's good to [consider the use of pixels](http://gist.io/7437534).