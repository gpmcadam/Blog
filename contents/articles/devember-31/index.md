---
title:  "Devember Day 31"
author: Gary McAdam
date:   2016-01-01T03:12:51+00:00
template: devember2015.jade
seriesNumber: 31
category: devember2015
---

Happy New Year!<span class="more"></span>

<div class="img-responsive img-lg">
    ![](newyear.gif)
</div>

So, that's it! All done. I made it to the other side! A full month of Development complete. It's over. Phew!

<div class="img-responsive img-lg">
    ![](phew.gif)
</div>

Well, today's post will be like no other, I'll be summing up *just today's findings* &ndash; but, I'm planning to write a big follow-up post in the next few days to summarise my thoughts on the project, the next steps, Devember, some of the tools I've used and a few other bits!

So, what have I been up to this New Year's Eve? ...

## <s>Moving</s> Upgrading from Lumen to Laravel

I decided, in order to resolve a few things that I had on my list today, that the best thing would be to say goodbye to Lumen and move to its more mature older brother, Laravel.

My reasoning for this is simple: I don't know what Lumen exists for. Laravel is, maybe just for my needs, just as quick and has just the same kind of footprint on disk (from an organisational standpoint).

So, given that Lumen lacks a lot of the features, but doesn't really bring anything else to the table, I decide to move to Laravel.

This process wasn't straightforward, and was mostly manual, involving creating a new Laravel project and manually moving my `resources/`, `public/`, `app/Http/`, etc. folders on top of the Laravel ones.

## Testing the API

I set up some very simple unit tests to ensure that my API was working. I still need to come up with a way to get coverage on the destructive API methods, such as `create`, `update`, `store`, and `destroy`. Until then, I've got *some* coverage as a simple sanity check to make sure that everything looks OK.

This is made very easy by using the [Laravel test](https://laravel.com/docs/5.2/testing) frameworks `seeJsonStructure` method. So, if my API returns some JSON like this:

    GET /api/playlists/6
    
    {
      "playlist": {
        "id": 6,
        "profile_id": "1",
        "name": "Hey Duggee ",
        "img": "/img/playlists/72cdbc27931177b9dd1be93b232b9e240bd4a50c.jpg",
        "bg": "#63CD61",
        "fg": "#FFCC01",
        "created_at": "2015-12-30 03:57:51",
        "updated_at": "2015-12-31 04:49:06",
        "items": [
          ...
        ]
      }
    }

I can assert that the API is working with a simple test case as follows:

    public function testPlaylist()
    {
        $this->get('/api/playlists/6')
            ->seeJsonStructure(['playlist' => [ 'id' ]]);
    }

This test ensures that the JSON returned has the `playlist` object, and that it has an `id` column.

---

As I said, I will be giving a bigger summary later this week, but it should be said that [Devember](http://devember.org/) for me has been amazing! I'm thankful for taking part and it's been one of the most enjoyable and rewarding months of programming in a long time. So thanks to everyone [at Devember](https://twitter.com/joindevember) for organising it.

## Today's Observations

 - Maybe thankfully, my plans for New Year fell through this evening, and it gave me all night (between spending time with my family and observing the goings on elsewhere on TV) to commit some time to finishing up a few things for my final Devember day.
 - Stats for today: 1 commit, 1 branch, 6h 1m 54s