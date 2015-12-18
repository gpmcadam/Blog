---
title:  "Devember Day 16"
author: Gary McAdam
date:   2015-12-17T00:58:45+00:00
template: devember2015.jade
seriesNumber: 16
category: devember2015
---

I've been exploring the concept of 'Reactive'.<span class="more"></span> The beauty of React is becoming more and more apparent to me. I've implemented a version of the Flux pattern with my React app, which adds so much simplicity to the flow of data and makes so much sense. Today though, something very simple blew my mind.

## How-de-do-da?

My player interface now renders a small toolbar across the top of the screen. When the video plays, I want the toolbar to disappear off the screen.

With jQuery, I might do the following:

  1. Detect the `play` and `pause` event on the video element
  2. Select the DOM element which contains both the toolbar and the player
  3. Add a class to the parent DOM element (either `.play` or `.pause`)
  4. Add a rule in CSS to animate the element off screen
  5. Remove the previous class (either `.play` or `.pause`) depending on the current state

The code for this might look something like this:

    this.player.on('play', function() {
        $('.player').removeClass('paused').addClass('playing');
    });
    this.player.on('pause', function() {
        $('.player').removeClass('playing').addClass('paused');
    });

This isn't a bad approach, but it requires a pointer to the DOM element and means I have to get my hands dirty writing to the class attribute, I also have to track the state of the player to know which of the two classes to remove or to add. It's just not a very clean approach.

So, here's how this works with React:

    ...
    this.player.on('play', () => { this.setState({ playerState: 'paused' }); });
    this.player.on('pause', () => { this.setState({ playerState: 'playing' }); });
    ...
    render() {
        return (
            <div className={`player ${this.state.playerState}`}>
                ...
            </div>
        )
    }

So what's going on here? Well, if you're new to React, the `setState` method causes a re-render of the plugin. So when the player events fire, the state is modified to include the `playerState` (either 'paused' or 'playing'). And then our render method uses the `playerState` in our state to determine what class to add to our player container.

Firstly, this approach is much cleaner. Rather than our events ending up with direct DOM modifications, events lead to *state* modifications, which in turn get rendered back to the DOM.

But! The reason this is so incredible is because inside our `.player` element we have a lot of DOM, including a video player embedding a YouTube `iframe`. So what happens to all that important insidey stuff when the component re-renders?

Well, that's the beauty of React. Nothing! It just ... *knows* ... to only modify the HTML `class` attribute and not modify any of the innards. How fucking awesome is that?

<div class="img-responsive img-md">
    ![](mindblown.gif)
</div>

## Today's Observations

 - Since my previous commit was prior to midnight on the 15th and my most recent commit was after midnight on the 16th (i.e. the 17th) I've lost another github streak :(
 - Stats for today: 1 commit, time spent: 2h 39m 3s