---
title:  "Devember Day 8"
author: Gary McAdam
date:   2015-12-09T01:31:52+00:00
template: article.jade
---

Experimenting with React and [Page.js](https://visionmedia.github.io/page.js/)<span class="more"></span>, an interesting micro client-side aimed at making the process of routing easier without the weight of an MVC framework.

What I fear I'm in danger of doing, however, is solving the 'V' part of MVC with React, and the 'C' part with Page.js. I'm handling the 'M' with AJAX and my API, so maybe I'm just cobbling together a franken-framework, of sorts?

<div class="img-responsive img-lg">
    ![](monster.gif)
</div>

Anyway, the experiment has been worthwhile. Page.js is a nifty little tool and it's introducing routing to React has give me more control over my component rendering and organisation.

I'm having some issues with passing session information around now, and I wonder if I'm coming at this with my PHP-trained-brain, rather than trying to think in React. Right now I'm working with [react-cookie](https://www.npmjs.com/package/react-cookie) to help solve this, but I'm chasing myself around a bit in terms of how to handle state on various "pages" (basically a React component being rendered to a parent component.)

I do wonder whether, at this point, the maturity of something like Angular, Knockout or Backbone might be more useful. Something which I'll experiment with tomorrow and then make a final decision.

## Today's Observations

 - Stats for today: 1 new branch, 1 commit, time spent 1h 56m 33s