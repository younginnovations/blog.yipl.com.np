---
layout: post
title: "Still stuck with FTP or Git pull to deploy? It's high time to embrace Automated Deployment with Capistrano [Slides]"
author: sumit_chhetri
modified: 2015-09-05
tags: [ deployment, devops, capistrano]
---

Are you still using FTP to deploy your code? Are you still manually performing the same steps of deploying a feature, again and again? How many hours have you spent on ssh-ing into the server, pulling the repo, migrating the database, reloading the web server and so on, for each deployment?? Ever wondered if there is a process as simple as a single click to perform all these steps for you?

Automated Deployment does exactly these things for you. It takes the burden of remembering all the steps required in each deployment process and execute it smoothly.

![Deploy Screenshot](/images/testing-deployment/deploy-screenshot.png)

<!--more-->

You don't need to know the rocket sicence to conclude that machine is reliable, efficient and faster than humans. In context to the software development, be it writing your code, testing your code and deploying your code, it is not a different story. You need to leverage the tools and technologies available, if you want to be a better software engineer. If the tools are free that is even better.

In regard to software deployment, just try to count the number of times you deploy your software to staging, testing or production server, during its life cycle. I am pretty sure you don't have an exact number, or if you have, it is no less than hundreds. In each deployment you execute, it involves numerous steps; be it running some package installer scripts/commands, migrating your databases, notifying the clients about the deployment, and so on, which you will repeat again and again. You have no guarantee either, that the deployment will be successful each and everytime because YOU, a human, are deploying. Since you are deploying, it is more likely to be error prone than it would have been, had it been automated.

I am going to deliver a presentation in the [PHP Dev Meetup #14](https://developers-nepal.github.io/php/meetups/05-Sep-2015/) on the very topic and below are the slides for that presentation. You can have a look at it and decide for yourself, whether you wanna keep getting stuck to the old fashioned and unreliable deployment process or or you want to follow modern deployment paradigm.

### Slides

<center><iframe src="//www.slideshare.net/slideshow/embed_code/key/2pJCggyg9f24hj" width="425" height="355" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/SumitChhetri1/automated-deployment-with-capistrano" title="Automated Deployment with Capistrano" target="_blank">Automated Deployment with Capistrano</a> </strong> from <strong><a href="//www.slideshare.net/SumitChhetri1" target="_blank">Sumit Chhetri</a></strong> </div></center>
<br/>

> You can also view the slides in browser from [here](http://shhetri.github.io/capistrano-presentation/)

There will be a part-2 to this blog in which, I will write in detail on how you can setup and deploy a [Laravel 5](http://laravel.com/) project using [Capistrano 3](http://capistranorb.com/). So do check frequently for the upcoming part.

> Happy Deploying!! :)
