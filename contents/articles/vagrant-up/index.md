---
title:  "Vagrant-Up"
author: Gary McAdam
date:   2015-12-05T03:53:40+00:00
template: article.jade
---

Do you run 1 vagrant machine at a time?<span class="more"></span> Do you switch vagrant machines a lot? Is this frustrating for you?

Well you should use [vagrant-up](https://packagist.org/packages/gpmcadam/vagrant-up) &ndash; a lightweight utility to help manage one vagrant box at a time.

## Installation

Install via Composer:

    $ composer global require gpmcadam/vagrant-up

## Usage

After installation, simply run `vagrant-up` in the directory of the vagrant box you want to bring up, and all other running vagrant machines will be suspended before bringing your desired machine up.

Nifty, ey?!

![](hat-wobble.gif)
