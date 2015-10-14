---
layout: post
title: "Logging with Monolog on LogEntries from your application"
author: sachit
modified: 19 Sep, 2015
tags: [ laravel, logging, logEntries, loggly ]
---

I am currently working on a [Laravel](http://laravel.com/) project which has taught me a lot of new things and among those that I have learnt, I'll be shedding a little light on [Logging](https://en.wikipedia.org/wiki/Logfile), [the importance of it](http://geshan.com.np/blog/2015/08/importance-of-logging-in-your-applications/) and how and where to log.

<!--more-->

![LogEntries](/images/LogEntriesVsLoggly/logEntries-logo.jpeg) ![Loggly](/images/LogEntriesVsLoggly/Loggly-logo.png)

We have been using [LogEntries](https://logentries.com/) for our project and its really cool. My colleagues, on the other hand use [Loggly](https://www.loggly.com/) which is cool too. I have put up a small comparison between the two services below, which would help you choose between them.

![LogEntriesVsLoggly](/images/LogEntriesVsLoggly/logEntriesVsLoggly.png)

##Logentries

###Pros

 - Great search with regex support.

 - Real time alerts.

 - Timestamps are displayed in local timezone.

 - Works with multiple Paas and IaaS.

###Cons

 - Character limit for each log entry.

 - Blocked by ad blockers by default.

 - Can’t track the source of errors of 3rd party libraries.

 - No CDN for web client logger.


##Loggly

###Pros

 - Supports raw text, syslogs and JSON.

 - Automatically captures JavaScript errors.

 - CDN hosted.

###Cons

 - Timestamps are in UTC.

 - No stack traces for JavaScript.

 - JavaScript tracker has removed tag support.

 - JS tracker on CDN is block by ad blockers by default.



With a really simple API and lots of other [cool features](https://logentries.com/product/), we can store our logs and can view it online. Laravel is a really cool framework and there is a lot just out of the box, one of which is the [Monolog](https://github.com/Seldaek/monolog) handler that Laravel uses by default to log errors, which means we need not create our own handler. You can change the logging related values in the 'app.php' file in the 'config' directory.

To start logging into LogEntries, you first have to get an account which gets you a "Manual TCP" token. Then open the app/Providers/AppServiceProvider.php file, where you will find a register() method. Add the following lines to the end of the method.

{% highlight php %}

$logEntriesHandler = new LogEntriesHandler(env('LOGENTRIES_TOKEN)'));
$log = $this->app['log']->getMonolog();
$log->pushHandler($logEntriesHandler);

{% endhighlight %}

What this does is it pushes our new monolog LogEntriesHandler that we will be using to log data into LogEntries.

And don't forget to add the reference to the LogEntriesHandler at the top of the file.

Notice that we have stored our LogEntries Token in our env file so it will be easy to change it if need be.

That's pretty much there is to it. You can now view your logs in your [LogEntries](https://logentries.com/) account. If you want to know more on this, you can check out their [documentation](https://logentries.com/doc/) which is a pretty decent one.

> Happy Logging !
