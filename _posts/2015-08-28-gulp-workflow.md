---
layout: post
title: "Automate Your Tasks Easily with Gulp"
author: nirajan_basnet
modified: 2015-08-28
tags: [ gulp, javascript ]
---

It was the first time I was using Gulp. The experience, I must say, was quite enjoyable.
[Gulp](https://www.gulpjs.com) is a javascript automated task runner. And it prefers code over configuration and gives you the plugins to create tasks that fit your specific needs and helps in the production process.

![Gulp](https://d262ilb51hltx0.cloudfront.net/max/1400/1*jbeaev-Xdy4S4pNNJHwA0Q.png)

<!--more-->

### Why we need Gulp ?

As front-end developers, we often need to look at the tools we use and decide if we are using the right tool for the job. It creates a good practice within the flow to the system. You’ll save hours of effort and reduce human error. It’s a build tool that helps to speed up your workflow by :
* Automating Repetitive tasks
* Optimising Images
* Concatenating
* Minifying Css and Javascript
* Browser Prefixes

It focuses on piping the result of one task into the next until you reach the point where you’ve completed all your tasks on that particular file.
To do a front-end project, this was a new world to me! Initially, I usually just dragged my project folder into Prepros and wrote some Scss or LESS but it makes platform dependent which is very difficult to share and co-operate with other members. But after using Gulp the whole thing changed. My workflow became clean, effective and the entire process helped me save a lot of time. So, here’s the further process of how we can include Gulp to our projects.

### For Gulp to run into the system we need following things first:

* Node.js — we’ll be using Node.js, but you don’t need to be a Node.js developer. JavaScript knowledge is helpful but there are plenty snippets to use and adapt.
* The command line — you will be typing commands rather than using a GUI.

### Documentation

For a Getting started guide, API docs, recipes, making a plugin, etc. see the [documentation page](https://github.com/gulpjs/gulp/blob/master/docs/README.md).

Sample gulpfile.js

![gulpfile.js](https://d262ilb51hltx0.cloudfront.net/max/700/1*HUunezYVm2zlYxsLludocQ.png)

### Getting Started

#### Install gulp globally

$ npm install --global gulp

#### Install gulp in your project devDependencies

$ npm install --save-dev gulp

#### Create a gulpfile.js at the root of the project

var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
});

#### Run Gulp

$ gulp

Let’s just have a quick tour on how to set up a Gulp workflow to work with its powerful plugins. Here is what I have included in my project:
* Sass compilation
* Image minified
* Autoprefixer
* SourceMaps

### Compiling Sass

The first thing to do is to install the dependencies and to create a Gulpfile.js.

#### Install

![sass](https://d262ilb51hltx0.cloudfront.net/max/748/1*k3Q-en45Uba996wCKuIi1A.png)

#### Usage

![sass](https://d262ilb51hltx0.cloudfront.net/max/757/1*5Ufdi77cRL0RKi6pZu2sbg.png)

### Image Compression

#### Install
![image](https://d262ilb51hltx0.cloudfront.net/max/759/1*joNwufwJJUgFphaGg3k12w.png)

#### Usage
![image](https://d262ilb51hltx0.cloudfront.net/max/755/1*B6Gr29zNVBPlfUgKC5TVKQ.png)

### Autoprefixer

#### Install
![autoprefixer](https://d262ilb51hltx0.cloudfront.net/max/748/1*istDCs8RLJuWbJ3z5TXavA.png)

#### Usage
![autoprefixer](https://d262ilb51hltx0.cloudfront.net/max/756/1*SpCKtCguQWAtnXQHi23vsw.png)

### SourceMaps

#### Install

![sourcemaps](https://d262ilb51hltx0.cloudfront.net/max/751/1*Vm1n-IMkIVZBaiu-BYvlHA.png)

#### Usage

![sourcemaps](https://d262ilb51hltx0.cloudfront.net/max/760/1*0_KiBYmo0FczR9v52mad2w.png)

### Watch

Before finishing there is still one thing to do: creating a watch task. The point of this task is to watch for changes in stylesheets to recompile them. It is very convenient when working on the project so you don’t have to run the task/command manually every time you save a file.

#### Install

npm install --save-dev gulp-watch

#### Usage

![watch](https://d262ilb51hltx0.cloudfront.net/max/700/1*yEEs45GT_CXp35aLQ1Baqw.png "")

### Adding the final touch

Running gulp in the default task:

![task](https://d262ilb51hltx0.cloudfront.net/max/741/1*YSHzxpr-2Wc2-WzLtwP9ug.png)

### Conclusion

Gulp is a popular and powerful tool for automating web development tasks. It seems to be overtaking Grunt in popularity. If you are not currently using Gulp, you should definitely give it a shot!



