---
layout: post
title:  "Media Queries"
link: "mediaqueries"
urlName: 2013-11-14-mediaqueries.md
date:   2013-11-14 19:39:00
categories: css
---
In all CSS toolbox, these are the most powerful ones for RWD. They let you listen for device variations and adapt your styles. Media Queries are declared as `@media` and followed -optionally- by a media declaration (which the default is `all`), and by a media feature (e.g. `'(min-width: 30em)'`).

There're tons of combinations of media queries, refer to the [documentation](http://dev.w3.org/csswg/mediaqueries4/) if you want to see all possibilities. The main ones are:

- `min-width` or `max-width`
- `min-height` or `max-height`
- `resolution` and `device-pixel-ratio` (must be used together for compatibility in all browser vendors)

As a **W3C Working Draft**, not yet supported, we have some new promising features:

- `luminosity` : dim || normal || washed
- `pointer` : none || coarse || fine
- `hover` : none || on-demand || hover
- `script` : none || enabled
