---
layout: post
title: "Quantity Queries"
author: sweta_shrestha
modified: 2015-09-01
tags: [ css, quantity queries]
image:
  feature: quantity-queries/QQ.png
---

Often in a project,the presentation change of our content/layout is a result of requirements change. Here at YIPL, we have been using media queries to change our styles as per the user device. But whenever we want to present our layout differently depending on the number of blocks, we are always thinking of what can be the best option. This is where quantity queries appear as a solution to this problem.

![Quantity Queries](/images/quantity-queries/qq.jpg)

<!--more-->

### What is Quantity Queries?

Quantity Queries are complex CSS selectors that allow styles to be applied to elements based on the number of siblings.

### Where is it used?

We do have dynamic number of siblings and we need to style them differently based on the total count of siblings. This can undergo through dynamic addition or subtraction of elements. Yes, we can use media queries and javascript workarounds. But, if css can alone deal with this then why do we need javascript? We can just be creative with css selectors and apply the styles.

### Example of Quantity Query

Using css selectors like nth-last-child(), last-child and ~, we can craft selectors that match our requirements.

Here, we are using the nth-* formula to manage the calculation.

- **at-least**

{% highlight css %}
ul li:nth-last-child(n+5),ul li:nth-last-child(n+5) ~ li {
 //styles goes here
}
{% endhighlight %}

The above code selects:

1. A list item (li) which is the fifth,sixth, seventh etc. sibling in a collection of list item siblings when counted backwards from the end of that collection (:nth-last-child(n+5)); and
2. Any list item (li) siblings that follow the one(s) selected above (~).

The magic is in the formula: n+5.

We can think of it as simply adding the multiplier to 5: 0+5 (5), 1+5 (6), 2+5 (7), etc.

Now count from the end and then select that and everything that follows and you get a “more than or equal to” count based on the number (5 in this case, but again you can swap it out). Brilliant!

This code doesn’t work if the number of siblings is less than 5. It must be “at-least” 5(n).

<p data-height="268" data-theme-id="15232" data-slug-hash="XbwKQV" data-default-tab="result" data-user="Yipl-Frontenders" class='codepen'>See the Pen <a href='http://codepen.io/Yipl-Frontenders/pen/XbwKQV/'>XbwKQV</a> by Yipl-Frontenders-Snippets (<a href='http://codepen.io/Yipl-Frontenders'>@Yipl-Frontenders</a>) on <a href='http://codepen.io'>CodePen</a>. </p>

<script async="async" src="//assets.codepen.io/assets/embed/ei.js"> </script>


- **at-most**
{% highlight css %}
ul li:nth-last-child(-n+5):first-child,ul li:nth-last-child(-n+5):first-child ~ li {
 //styles goes here
}
{% endhighlight %}

This one is largely the same as the “more than” example, but the multiplier is reversed (with the minus sign) which means the count runs backward: 0+5 (5), -1+5 (4), -2+5 (3), and so on.

<p data-height="268" data-theme-id="0" data-slug-hash="aOrmbj" data-default-tab="result" data-user="Yipl-Frontenders" class='codepen'>See the Pen <a href='http://codepen.io/Yipl-Frontenders/pen/aOrmbj/'>aOrmbj</a> by Yipl-Frontenders-Snippets (<a href='http://codepen.io/Yipl-Frontenders'>@Yipl-Frontenders</a>) on <a href='http://codepen.io'>CodePen</a>. </p>
<script async src="//assets.codepen.io/assets/embed/ei.js"> </script>

- **in-between**
{% highlight css %}
ul li:nth-last-child(n+5):nth-last-child(-n+10):first-child,
ul li:nth-last-child(n+5):nth-last-child(-n+10):first-child ~ li {
 //styles goes here…
}
{% endhighlight%}

This one is for the “in-between” case. The above code is for the siblings between 5 and 10.

<p data-height="268" data-theme-id="0" data-slug-hash="ZGNpYa" data-default-tab="result" data-user="Yipl-Frontenders" class='codepen'>See the Pen <a href='http://codepen.io/Yipl-Frontenders/pen/ZGNpYa/'>ZGNpYa</a> by Yipl-Frontenders-Snippets (<a href='http://codepen.io/Yipl-Frontenders'>@Yipl-Frontenders</a>) on <a href='http://codepen.io'>CodePen</a>. </p>
<script async src="//assets.codepen.io/assets/embed/ei.js"> </script>

### Solution to writing Quantity Queries

These queries can be a bit difficult to write. SO, there is a tool called [QuantityQueries.com](http://quantityqueries.com/) to help construct and demonstrate quantity queries.

![Quantity Queries](/images/quantity-queries/qq-screenshot.jpg)

### Now with SASS

Daniel Guillan has [ported this functionality (and more) to SASS](https://github.com/danielguillan/quantity-queries) using a handful of really straightforward mixins. Here’s a demo:

<p data-height="268" data-theme-id="0" data-slug-hash="GgBOxm" data-default-tab="result" data-user="danielguillan" class='codepen'>See the Pen <a href='http://codepen.io/danielguillan/pen/GgBOxm/'>Quanity Queries Sass mixins demo</a> by Daniel Guillan (<a href='http://codepen.io/danielguillan'>@danielguillan</a>) on <a href='http://codepen.io'>CodePen</a>. </p>
<script async src="//assets.codepen.io/assets/embed/ei.js"> </script>

### Does Quantity Queries support all browsers?

Quantity Queries are constructed using modern CSS properties to perform the selection. They will work in all modern browsers. Selectors such as nth-last-child(), ~ and last-child were introduced in CSS3, and first-child was introduced by CSS2.1. If you absolutely have to support legacy browsers, you can use [Selectivizr](http://selectivizr.com) and [Modernizr](http://modernizr.com).

Happy Counting with Quantity Queries :)
