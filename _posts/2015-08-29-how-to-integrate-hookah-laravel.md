---
layout: post
title: "How to integrate hookah smoke tests with Laravel 5"
author: geshan_manandhar
modified: 2015-08-29
tags: [ testing, quality, smoke tests, hookah]
---

We made our smoke testing library [hookah](https://github.com/younginnovations/hookah) open source last week.
We are currently using it to test some web applications we have built using [Laravel](http://laravel.com). Though Laravel testing is more expressive, hookah is just a smoke testing library which can be used in any framework or even
language as long as there is a login form with 2 fields and a submit button. In this post I will reveal
how to integrate Hookah with Laravel 5.x.

![Hookah + Laravel = Super smoke tests](/images/hookah-laravel/hookah-laravel-5.png)

<!--more-->

Rather than just writing how it can be done, I have put up a demo on github with all the steps in relevant detail.

You can find the steps to integrate the hookah smote testing library with Laravel in the github repository [read me](https://github.com/younginnovations/hookah-laravel/blob/master/readme.md). If you want to look at the code you can check the [pull request](https://github.com/younginnovations/hookah-laravel/pull/1) that is added on top of a basic Laravel 5 installation that just has the authentication working.

> Hope you enjoy some testing Laravel with hookah.
