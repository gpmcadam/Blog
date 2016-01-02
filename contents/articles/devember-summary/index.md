---
title:  "My #Devember journey, thoughts on React and more"
author: Gary McAdam
date: 2016-01-01T22:58:41+00:00
template: article.jade
---

Yesterday I finished #Devember <span class="more"></span>, [a programming challenge](/articles/devember) to code for at least an hour, every night, for 31 days. And to write a blog about it each night.

<div class="img-cap" style="margin: 1em;">
    <iframe style="display: block; margin: 1em auto;" width="560" height="315" src="https://www.youtube.com/embed/9DCdCoQ49u8" frameborder="0" allowfullscreen></iframe>
    *This is my #Devember*
</div>

I succeeded (to some degree; there were some nights I couldn't commit to fully) and came out on the this side of the month with a working prototype for an app called Bloon, a child-friendly YouTube player.

I chose to write the app using React, something which I had no previous experience with. Here's my summary of #Devember, React, other technologies I encountered along the way &ndash; and what's next for Bloon, devblogging and my projects in general.

## Devember

I touched on it in the [previous post](/articles/devember-31), but I'll reiterate it: #Devember was massively rewarding. The idea isn't new or exclusive to the month of December. Also my day job *is* programming, so the idea of writing code pretty much daily isn't the revolutionary aspect &ndash; although it's worth noting that it's difficult to find time and energy to write code *every single day* including weekends, especially with other commitments. And on at least two occasions, I wasn't able to write a line of code.

The biggest thing<sup>[1]</sup> that kept me going was the idea devblogging in general, something I hadn't done before. Even though I knew it was without an audience, there's still a level of commitment, you don't want to stop posting after you've publicly vowed to do an hour a day at least.

And for that reason, I found a new way to avoid procrastination. This is also helped by only coding in short bursts and of course being able to work on something you thought up, and so your motivation is still pretty high. But still, on those days when you're extra tired, maybe a little drunk or otherwise distracted, you still have to write that blog post. And you still have to make a commit. So, yeah, some days are not as productive and the quality of the code isn't as good, but still, you make a commit.

Blogging every night also keeps you focused and helps you plan your next step &ndash; similar to the benefits of standup meetings. Or in my case, decide what you're going to drop because you realise there isn't enough time. And some features *did* get jettisoned part-way though, but I was able to deliver the prototype I wanted to from day one, more-or-less.

Here's some stats from my journey:

### GitHub Commit Chart

<div class="img-responsive">
![](github-contrib.png)
</div>

### Time Logged in December (minutes)

<script src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.6/moment.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/Chart.js/1.0.2/Chart.min.js"></script>
<canvas id="chart-time-logged" width="960" style="max-width: 100%; height: 200px; min-height: 100px;"></canvas>
<script>
    var rawData = [{"id":1,"note":"document coding","start":"2015-12-01 20:23:52 +0000","end":"2015-12-01 20:24:05 +0000","sheet":"bloon"},{"id":2,"note":"setup","start":"2015-12-01 20:24:11 +0000","end":"2015-12-01 20:31:33 +0000","sheet":"bloon"},{"id":3,"note":"setup","start":"2015-12-01 22:00:33 +0000","end":"2015-12-01 22:58:10 +0000","sheet":"bloon"},{"id":4,"note":"setup","start":"2015-12-02 21:49:36 +0000","end":"2015-12-03 01:49:37 +0000","sheet":"bloon"},{"id":5,"note":"","start":"2015-12-03 22:35:49 +0000","end":"2015-12-03 23:43:17 +0000","sheet":"bloon"},{"id":6,"note":"","start":"2015-12-05 00:23:33 +0000","end":"2015-12-05 00:31:57 +0000","sheet":"bloon"},{"id":7,"note":"","start":"2015-12-05 00:45:07 +0000","end":"2015-12-05 03:34:01 +0000","sheet":"bloon"},{"id":8,"note":"","start":"2015-12-06 02:23:02 +0000","end":"2015-12-06 03:11:30 +0000","sheet":"bloon"},{"id":9,"note":"","start":"2015-12-07 00:16:30 +0000","end":"2015-12-07 01:37:01 +0000","sheet":"bloon"},{"id":10,"note":"","start":"2015-12-07 23:17:14 +0000","end":"2015-12-08 00:54:46 +0000","sheet":"bloon"},{"id":11,"note":"","start":"2015-12-08 23:34:24 +0000","end":"2015-12-09 01:30:57 +0000","sheet":"bloon"},{"id":12,"note":"","start":"2015-12-09 23:14:16 +0000","end":"2015-12-10 00:44:18 +0000","sheet":"bloon"},{"id":13,"note":"","start":"2015-12-11 01:42:25 +0000","end":"2015-12-11 03:12:24 +0000","sheet":"bloon"},{"id":14,"note":"","start":"2015-12-12 23:51:05 +0000","end":"2015-12-13 02:37:03 +0000","sheet":"bloon"},{"id":15,"note":"","start":"2015-12-13 22:39:51 +0000","end":"2015-12-14 00:56:27 +0000","sheet":"bloon"},{"id":16,"note":"","start":"2015-12-14 23:09:05 +0000","end":"2015-12-15 01:17:34 +0000","sheet":"bloon"},{"id":17,"note":"","start":"2015-12-15 23:26:38 +0000","end":"2015-12-15 23:53:58 +0000","sheet":"bloon"},{"id":18,"note":"","start":"2015-12-16 21:22:53 +0000","end":"2015-12-16 22:43:18 +0000","sheet":"bloon"},{"id":19,"note":"","start":"2015-12-16 23:23:38 +0000","end":"2015-12-17 00:42:16 +0000","sheet":"bloon"},{"id":20,"note":"","start":"2015-12-17 21:41:42 +0000","end":"2015-12-18 00:06:14 +0000","sheet":"bloon"},{"id":21,"note":"","start":"2015-12-19 01:13:12 +0000","end":"2015-12-19 02:17:22 +0000","sheet":"bloon"},{"id":22,"note":"","start":"2015-12-20 10:50:17 +0000","end":"2015-12-20 12:25:05 +0000","sheet":"bloon"},{"id":23,"note":"","start":"2015-12-20 16:13:28 +0000","end":"2015-12-20 18:55:34 +0000","sheet":"bloon"},{"id":24,"note":"","start":"2015-12-20 22:56:11 +0000","end":"2015-12-20 23:41:56 +0000","sheet":"bloon"},{"id":25,"note":"","start":"2015-12-22 00:06:27 +0000","end":"2015-12-22 01:00:04 +0000","sheet":"bloon"},{"id":27,"note":"","start":"2015-12-23 00:06:00 +0000","end":"2015-12-23 01:45:49 +0000","sheet":"bloon"},{"id":28,"note":"","start":"2015-12-23 15:24:15 +0000","end":"2015-12-23 16:08:46 +0000","sheet":"bloon"},{"id":29,"note":"","start":"2015-12-23 22:44:30 +0000","end":"2015-12-23 23:29:22 +0000","sheet":"bloon"},{"id":33,"note":"","start":"2015-12-25 23:11:29 +0000","end":"2015-12-26 00:40:46 +0000","sheet":"bloon"},{"id":34,"note":"","start":"2015-12-26 23:20:48 +0000","end":"2015-12-27 01:10:23 +0000","sheet":"bloon"},{"id":35,"note":"","start":"2015-12-28 01:13:10 +0000","end":"2015-12-28 02:37:44 +0000","sheet":"bloon"},{"id":36,"note":"","start":"2015-12-29 00:16:23 +0000","end":"2015-12-29 05:40:44 +0000","sheet":"bloon"},{"id":37,"note":"","start":"2015-12-30 01:12:06 +0000","end":"2015-12-30 04:04:31 +0000","sheet":"bloon"},{"id":38,"note":"","start":"2015-12-31 00:31:07 +0000","end":"2015-12-31 05:15:55 +0000","sheet":"bloon"},{"id":39,"note":"","start":"2015-12-31 22:54:40 +0000","end":"2016-01-01 00:11:46 +0000","sheet":"bloon"}],
        data = {
            labels: ["2015-12-01","2015-12-02","2015-12-03","2015-12-04","2015-12-05","2015-12-06","2015-12-07","2015-12-08","2015-12-09","2015-12-10","2015-12-11","2015-12-12","2015-12-13","2015-12-14","2015-12-15","2015-12-16","2015-12-17","2015-12-18","2015-12-19","2015-12-20","2015-12-21","2015-12-22","2015-12-23","2015-12-24","2015-12-25","2015-12-26","2015-12-27","2015-12-28","2015-12-29","2015-12-30","2015-12-31"],
            datasets: [{
                label: "Time Logged (mins)",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: []
            }]
        };
    var totalTime = 0;
    _.each(data.labels, function(label) {
        var labelDate = moment(label),
            labelTime = 0;
        _.each(rawData, function(item) {
            var start = moment(item.start),
                end = moment(item.end),
                diff = end.diff(start, 'minutes');
            if (start.isSame(labelDate, 'd')) {
                labelTime += diff;
                totalTime += diff;
            }
        });
        data.datasets[0].data.push(labelTime);
    });
    Chart.types.Line.extend({
        name: "LineAlt",
        initialize: function(data){
            Chart.types.Line.prototype.initialize.apply(this, arguments);
            var xLabels = this.scale.xLabels;
            for (var i = 0; i < xLabels.length; i++)
                xLabels[i] = moment(xLabels[i]).format('ddd Do');
        }
    });
    new Chart(document.getElementById('chart-time-logged').getContext("2d")).LineAlt(data, {
        scaleShowLabels: false,
        scaleShowGridLines : true,
        scaleGridLineColor : "rgba(0,0,0,.05)",
        scaleGridLineWidth : 1,
        scaleShowHorizontalLines: false,
        scaleShowVerticalLines: false,
        bezierCurve : true,
        bezierCurveTension : 0.5,
        pointDot : false,
        datasetStroke : true,
        datasetStrokeWidth : 1,
        datasetFill : true
    });
</script>

 - Total time spent: <script>document.write((totalTime/60).toFixed(2))</script><noscript>59.48</noscript> hrs
 - Avg. time spent per day: <script>document.write(((totalTime/60)/31).toFixed(2))</script><noscript>1.92</noscript> hrs
____

<sup>1. The other big motivating factor was watching my commit streak on GitHub grow, however I was only really able to achieve a 13-day maximum streak in the entire period, simply because I would go 24 hours without coding in some cases (committing my work at 2am the next morning, on most&ndash;but not all&ndash; nights)</sup>

## Individual Technology Thoughts

### Gulp vs Grunt

 - I use Grunt in my day job, but Gulp was chosen for this project
 - Gulp seems faster, but Grunt fits my workflow more &ndash; will probably go with Gulp and seek tools that meet my workflow

### Lumen/Laravel

 - Lumen is pointless for me, Laravel is superior &ndash; even as a microframework &ndash; however I should have used a much lighter framework for knocking up APIs than what I went with (maybe something Node based)

### React

 - No previous experience with React, and my first week was spent banging my head against the desk trying to understand React, the tutorials and documentation, the community suggestions, Flux (and associated frameworks) and other topics.
 - However, I'm *so* glad to have found it, will explore it in more detail on other projects I hope &ndash; next up: React Native

### React-Bootstrap

 - Huge time saver, can't wait for it to update to Bootstrap 4

### Sass vs Less

 - Again, I use Less in my day job but chose Sass for this project
 - Not that much difference for me, similar features available in both. Would be happy to use either, although do prefer syntax of LESS

### Browserify and ES6

 - Browserify is great and I'm glad to get some experience in ES6
 - Love the ES6 features and hope I can keep on using them in other projects

### Safari Mobile Web Apps

 - Not worth bothering with! Too slow, too restrictive and not customisable enough - native apps are the clear winners and Apple clearly wants to keep it this way
 - With that said I was able to launch a working prototype in ~<script>document.write((totalTime/60).toFixed())</script><noscript>59</noscript> hours, which can be useful, especially for the purpose of designing the API

## What's Next?

 - For Bloon, a native (or hybrid) app. Will look at making the API quicker and making some smaller changes to the front-end for the short term
 - The ultimate goal is to release the app to market by June/July
 - Will I continue to code an extra 1 hour (or more) per day? Maybe on average, but I won't be forcing myself to a daily commitment like I have been. However, I will try and do 1 devblog per week to keep my motivation up.
 - One thing's for sure, I'll be keeping up with ES6+Browserify+React as that is the most existing thing to come out of this entire thing for me.