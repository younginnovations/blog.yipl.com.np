---
layout: post
title: "7 Golden Rules of Simple and Clean code and some more considerations [Slides]"
author: geshan_manandhar
modified: 2015-09-24
tags: [ code, simple code, clean code, maintainable code]
---

Giving continuity to our Knowledge Sharing Wednesday (KSW), yesterday Sumit presented on
`7 Golden Rules of Simple and Clean code`. From trying to solve issues with deployment, git flow,
server monitoring we realized that we should start from the basics, so we thought we will do a
talk on how to write Simple, Clean, Readable, Understandable, maintainable and testable (SCRUMT)
code.

![7 Rules of simple and clean code](/images/7-rules-of-simple-code/7-rules-of-simple-clean-code.png)

<!--more-->

## Slides:

<iframe src="//www.slideshare.net/slideshow/embed_code/key/ombsJktivW4Ll" width="510" height="420" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/geshan/7-rules-of-simple-and-maintainable-code" title="7 rules of simple and maintainable code" target="_blank">7 rules of simple and maintainable code</a> </strong> from <strong><a href="//www.slideshare.net/geshan" target="_blank">Geshan Manandhar</a></strong> </div>

## TLDR

Here is the summary:

* Rule 1: Follow a consistent coding standard
* Rule 2: Name things properly, long variable and function names are allowed
* Rule 3: Be expressive, write code as you speak and be optimally verbose
* Rule 4: Max indent per method should be 2, in case of exceptions 3
* Rule 5: Avoid creating god object and long methods
* Rule 6: Keep the method in one place, inject the class and call it, DRY
* Rule 7: Avoid in-line comments (comment with code), put comments in the method doc

**Code examples are in this [gist](https://gist.github.com/shhetri/bb6dd1981267eb3a4cf4) for reference.**

> Hope you also realize that writing simple and clean code is good an helps minimize technical debt. Happy Coding!
