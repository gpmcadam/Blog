---
title:  "Devember Day 6"
author: Gary McAdam
date:   2015-12-07T01:32:58+00:00
template: devember2015.jade
seriesNumber: 6
category: devember2015
---

Today I decided to tackle the issue of having Browserify bundle my React/Babel/etc. files in less than 30 seconds.<span class="more"></span>

And the results are in!

    [01:26:13] Using gulpfile ~/Documents/Development/Bloon/gulpfile.js
    [01:26:13] Starting 'js'...
    [01:26:13] Starting 'sass'...
    [01:26:13] Finished 'sass' after 17 ms
    [01:26:21] 2537121 bytes written (7.91 seconds)
    [01:26:21] Finished 'js' after 7.99 s
    [01:26:21] Starting 'default'...
    [01:26:21] Finished 'default' after 17 μs

<div class="img-responsive img-md">
![](yay.gif)
</div>

*Woo!*

OK so 8s still isn't ideal. But it's a lot better than 30. I can deal with that right now.

## Introducing Watchify

After some digging, it turns out that the creators of Browserify, in realizing how slow Browserify can be, released [Watchify](https://github.com/substack/watchify) which helps to speed up the process... go figure.

My gulp file is now a mess, so I'm going to investigate some ways to clean it up by writing my tasks as modules &ndash; but that's enough fiddling with gulp for now, the current gulp file should do for now as I'm hoping to get back to the actual job tomorrow evening.

## Today's Observations

 - The auxiliary stuff surrounding development, such as setting up task runners and debugging them, tweaking them, is in my opinion the most tedious aspect of the job. I wish I could just remove it entirely.
 - Stats for today: 1 commit, time spent 1h 20m 31s
