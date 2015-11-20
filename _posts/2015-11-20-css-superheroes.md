---
layout: post
title: "CSS Superheroes: The Bourbon Family"
author: nirajan_basnet
modified: 20 Nov, 2015
tags: [ css, sass, bourbon, neat, bitters ]
image:
  feature: blog-bourbon/Bourbon.png
---

When I say The Bourbon Family, I am referring to [Bourbon](http://bourbon.io/), [Neat](http://neat.bourbon.io/), [Bitters](http://bitters.bourbon.io/), and [Refills](http://refills.bourbon.io/). What are they? Well, Bourbon is a mixin library for Sass. The others are built on top of Bourbon. Neat is a Sass grid system. Bitters is a kind of scaffold project with some sensible default styles. Refills is a collection of common components (think Bootstrap with less fail :P). Together they form the Bourbon Family.

Over the past few months i have been exploring the knowledge of SASS, a preprocessor for CSS that lets you write clean, maintainable, structured code that generates efficient and useful CSS. And since Sass supports the ability to write new and original extensions, its much easier for developers to come up with their own enhancements. Then I encountered with the varieties of mixins and semantic grid framework called [Bourbon](http://bourbon.io/) and [Neat](http://neat.bourbon.io/).

<!--more-->

Sass provides a versatile tool set to precompile CSS, where Bourbon builds on top of that with enhanced Sass functionality that makes it even faster and easier to write clean and compact code that is easy to maintain and share.

![Seminar photo](/images/blog-bourbon/blog-bourbon.jpg)  

### To get started:

First we need to install Sass. Ruby is one of the most convenient ways to run Sass. So, Ruby should be installed. There are excellent [guides to installing and running Ruby](https://www.ruby-lang.org/en/installation/) in different environments.

Now after the setup is done, Once you are in a terminal type:

{% highlight html %}
gem install sass
{% endhighlight %}

Then you can make sure Sass is working by issuing a version check for Sass

{% highlight html %}
sass -v
{% endhighlight %}

This should show you that Sass is installed and running, and tell you what version you have.

### Installation of Bourbon Family:

To begin, install Bourbon, Neat, and Bitters using Ruby Gems.

{% highlight html %}
gem install bourbon neat bitters
{% endhighlight %}

Next we need to install them in our project. I prefer to install them to a lib directory inside my Sass directory and after that type:

{% highlight html %}
bourbon install

neat install

bitters install
{% endhighlight %}

This will install a bunch of scss files and structure your project file as sass/bourbon, sass/neat, sass/bitters in your Sass directories.

Now you can import them into your base Sass file as

{% highlight html %}
@import bourbon/bourbon

@import neat/neat

@import base/base (For bitters)
{% endhighlight %}

### Using Bourbon mixins

[Bourbon](https://www.bourbon.io), is a mixin library for Sass and can be compared with [Compass](https://www.compass-style.org), but is more simple and lightweight. Another advantage of Bourbon, is that it automatically compiles to updated vendor prefixes. You can read in the [Bourbon docs](https://www.bourbon.io/docs/) about the dozens of others!

For instance:

{% highlight css %}
section {
    @include linear-gradient(to top, red, orange);
  }
{% endhighlight %}

compiles to:

{% highlight css %}
section {
    background-color: red;
    background-image: -webkit-linear-gradient(bottom, red, orange);
    background-image:         linear-gradient(to top, red, orange);
  }
{% endhighlight %}

### Why Bourbon Neat?

The reason I choose this framework over popular frameworks like Bootstrap or Foundation are that Neat is a semantic grid framework. Neat is a grid system built on top of Bourbon. This means that my html markup does not get cluttered with non semantic divs for defining the grid. You can play around some awesome properties in Neat Docs.

So instead of implementing the grid layout into my html markup:

{% highlight html %}
<div class="row">
    <section>
      <aside class="col-md-3">
        ...
      </aside>
      <article class="col-md-9">
        ...
      </article>
    </section>
</div>
{% endhighlight %}  

Bourbon Neat lets me implement the grid layout through Css:

{% highlight css %}
section {
    @include outer-container;
    aside { @include span-columns(3); }
    article { @include span-columns(9); }
  }
{% endhighlight %}

This makes my html markup stay clean and semantic:

{% highlight html %}
<section>
    <aside>What is it about?</aside>
    <article>Neat is an open source semantic grid framework built on top of Sass and Bourbon</article>
</section>
{% endhighlight %}

### Bitters

[Bitters](http://bitters.bourbon.io/) is a collection of base styles, typography, form styles, variables, and even includes an error message module. Bitters is not a library. It is structured in a way that is designed to be your starting point. It is definitely worth using and easy enough to edit to your liking.

### Refills

[Refills](http://refills.bourbon.io/) is a collection of pretty UI components built using The Bourbon Family. It is a components and patterns built with [Bourbon](http://bourbon.io/) and [Neat](http://neat.bourbon.io/). It is a nice thing to have in your tool belt because even if it is not exactly what you want, it gets you pretty close.

### Conclusion

If you made it this far hope you are probably in love with The Bourbon Family. I hope you enjoyed the ride. Do you have any questions? Lets discuss about it and I will try to help. Till then

Keep on Hacking Cheers !!


