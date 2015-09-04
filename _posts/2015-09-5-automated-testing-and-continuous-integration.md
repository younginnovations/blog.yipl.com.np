---
layout: post
title: "Automated Testing with PHPUnit is a puzzle, Continuous Integration is the missing Piece."
author: sachit
modified: 2015-09-5
tags: [ phpunit, unit tests, automated testing, continuous integration, shippable]
---

Well I'm going to [present](http://sachit-singh.github.io/kswsbs/) today at the [14th PHP developers meetup](https://developers-nepal.github.io/php/meetups/05-Sep-2015/). I will be talking about [Automated](https://en.wikipedia.org/wiki/Test_automation) [Unit Testing](https://en.wikipedia.org/wiki/Unit_testing) and [Continuous Integration](https://en.wikipedia.org/wiki/Continuous_integration). I am going to be explaining about why testing, in general is important, the features of unit tests and why CI is cool.

#### Automated tests with phpunit is a puzzle, CI is the missing piece.

Automated unit test simply put is code testing another piece of code. Unit testing focuses on testing a small independent working part of the code which is generally a method/function. Unit tests need to be fast, offline, not dependent on database and test only one thing. [Mocking](https://en.wikipedia.org/wiki/Mock_object) other dependencies is a great way to unit test the class to be tested. To a beginner understanding this is as difficult as solving a puzzle.

With Continuous Integration, at every push, all the tests are run that covers the code changes and approves what works, what doesn't and all the bugs you have in your system from a unit perspective with a fast feedback loop. If your change broke something existing you know it in minutes then you can fix your code and add more tests for the parts you did.

Moreover continuous integration is a mentality to keep software quality high with having the build green for main branch in a [VCS](https://en.wikipedia.org/wiki/Revision_control) at all times. CI goes like a hand in a glove with the issue flow and [simplified gitflow](http://geshan.com.np/blog/2014/12/do-you-git-your-code-follow-this-simplified-gitflow-model/) that we follow. I will talk about how we integrated our automated tests with [Shippable](https://app.shippable.com/) and the benefits of CI.

You can check out the slides for my talk at my [github page](http://sachit-singh.github.io/kswsbs/) or down below.

<center><iframe src="//www.slideshare.net/slideshow/embed_code/key/hbssZXH906Wdgx" width="425" height="355" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/bsscht/automated-unit-testing-and-continuous-integration" title="Automated Unit Testing and Continuous Integration" target="_blank">Automated Unit Testing and Continuous Integration</a> </strong> from <strong><a href="//www.slideshare.net/bsscht" target="_blank">bsscht</a></strong> </div></center>
<br/>

<!--more-->

Interested in what you see? Then you can check out the [offical documentation](https://phpunit.de/manual/current/en/phpunit-book.pdf) for [PHPUnit](https://phpunit.de/) and to learn more about Shippable, they have got a pretty decent [documentation](http://docs.shippable.com/).

> Write testable code and readable tests.
