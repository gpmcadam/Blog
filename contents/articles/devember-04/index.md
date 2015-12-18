---
title:  "Devember Day 4"
author: Gary McAdam
date:   2015-12-05T03:54:13+00:00
template: devember2015.jade
seriesNumber: 4
category: devember2015
---

Up late again, toying with ES6+React.<span class="more"></span> Still
spending some time getting to grips with the details of React, but I've
managed to add some complexity.

I've also expanded on my gulpfile, learned more about gulp in general
and spent a lot of time watching my stuff build &ndash; Browserify can take
a while to build!

<div class="img-responsive img-md img-border">
    ![](waiting.gif)
</div>

## Moving Forward with React

I've now managed to get a bit further with React, and I'm starting to
generate a slightly more complicated structure to my app. I now have 6-7
components and I'm doing some re-rendering based on events.

I'm not sure if this is the best way to handle the process, or I should simply
let the browser redraw the page. This is something I'll experiment with going
forward.

## gulp-newer vs gulp-changed

As someone who always preferred using `grunt-newer` for my build processes,
moving to gulp was tricky. The community seems to prefer watch tasks.

After comparing two packages, **gulp-newer** and **gulp-changed**, I've
settled on **gulp-newer** as it allows you to check both 1:1 and many:1
differences.

## Gulp Build Time with Browserify

I'm still struggling with a very very slow build time, around ~25s per build.

This is due to the bundling of all files with Browserify, so I'm going to
investigate how to lower this down. Thankfully using **gulp-newer** means this
will only run on any changes to my React, but still, it's clumsy.

Also, as an aside, I need to figure out how to properly pipe Browserify through
gulp, as my build output claims that gulp has finished compiling my JS before
Browserify actually starts. Bit odd.


## Today's Observations

 - **DEVEMBER BONUS!** I've spent some extra time this evening writing a small utility 
   to help [manage vagrant machines a little better](/articles/vagrant-up)
 - Busy weekend planned, I'm going to try and get Day 5 done before going out, otherwise
   I guess I'm taking my laptop with me for some alcohol induced coding!
 - Stats for today: 1 commit, time spent 2h 57m 18s