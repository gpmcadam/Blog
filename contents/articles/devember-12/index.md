---
title:  "Devember Day 12"
author: Gary McAdam
date:   2015-12-13T02:36:30+00:00
template: devember2015.jade
seriesNumber: 12
category: devember2015
---

Programming drunk is impossible, worse only than programming hungover...<span class="more"></span>

<div class="img-responsive img-lg">
    ![](dying.gif)
</div>

However, finally, [Flux](https://facebook.github.io/flux/docs/overview.html) makes sense!
After spending another few hours tonight
watching [a great course on egghead.io](https://egghead.io/series/react-flux-architecture-es6),
I've come out understanding the Flux architecture in a lot more detail!

This is exactly what I was talking about when I was pining for more structure and an imposed
set of rules in React. The downside here though is that there are a lot of ways to interpret
the Flux architecture, and there's a lot of frameworks written around it.

I'm sure in the future the community will settle around a few big ideas. For now, I'm settling
with a fairly bog-standard Flux architecture using Facebook's [flux](https://github.com/facebook/flux/)
package.

## Routing

After investigating Backbone and Page.js, it seemed obvious to me that
[react-router](https://github.com/rackt/react-router) is the
better choice. Anything else includes a lot of rewriting of stuff that's already been well
thought out, particularly around component re-rendering.

## Onwards ... again!?

I feel like I've got a far better organised and more stable architecture to move on with now.
I don't anticipate any big changes to the structure until the first prototype is complete.

So next, it'll be fleshing out the rest of the pages and including functionality.

## Today's Observations

 - Cool ES6 tidbits worked with: [template strings](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings), [arrow functions](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions), [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator), [object initialisation shorthand](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) &ndash; awesome!
 - Tried to catch up for missing a night [yesterday due to excessive drinking](/articles/devember-11)
 - Stats for today: 3 commits, time spent: 2h 45m 58s