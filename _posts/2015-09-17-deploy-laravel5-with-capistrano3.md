---
layout: post
title: "Deploy a Laravel 5 application with Capistrano 3"
author: sumit_chhetri
modified: 2015-09-17
tags: [deployment, devops, laravel, capistrano]
---

A week ago, I wrote a blog on [Autmated Deployment With Capistrano](http://blog.yipl.com.np/automated-deployment/). This is a part-2 to that bolg. Here, you will learn to deploy a [Laravel 5](http://laravel.com/) application using [Capistrano 3](http://capistranorb.com/). If you come across some terminologies, of which you have no idea, please checkout these [slides](http://shhetri.github.io/capistrano-presentation/#/11). Now lets learn how to deploy.

![Deploy Screenshot](/images/testing-deployment/laravel-capistrano.png)

<!--more-->

## Assumptions

I will assume that the following things are setup before you try the rest of the steps.

* [Ruby](https://www.ruby-lang.org/en/) version 1.9.3 or newer in your local machine.
* A server to deploy your application and ssh access to the server with public key.
* [Laravel 5](http://laravel.com/docs/5.1#installation) application and the server requirements for running it.
* [Git](https://git-scm.com/downloads) in your local machine and in server. Make sure you do host your application in GitHub or any other git repository hosting service.
* I will name the laravel application as **blog**. You can use any name of your choice.
* A working domain name (eg: blog.app) which points to the application public path in the installation directory of the server, that you will define in the `staging.rb` file below.

## Installation

1. Install Capistrano in your local machine
```
$ gem install capistrano
```
2. Initialize Capistrano in your project
```
blog $ cap install
```
3. Done!! It was as simple as that.

Now you just need to configure the server, write some deploy scripts and you are good to go.

Let's first see, what exactly the `cap install` command did in your project.

### Project Strucutre
<pre><code>
blog
    ├── Capfile
    |── config
    │   ├── deploy
    │   │   ├── production.rb
    │   │   └── staging.rb
    │   └── deploy.rb
    └── lib
        └─ capistrano
            └── tasks
</code></pre>

As you can see, it created some files and folders in you project. I will just briefly explain what each file consists.

* Capfile : This is the first file capistrano reads when you run the deploy command. It takes care of loading the bundled deploy tasks as well as any custom tasks from `lib/capistrano/tasks`.

* deploy.rb : Configuration that applies to all stages can be set in this file. You will write your deploy tasks in this file which runs for all the stages.

* production.rb/staging.rb : These are the stage specific files where you configure you correspondong server. These may also contain the deploy tasks which will run only for the corresponding server.

## Configuration

Now you will configure your server and write some deploy scripts to deploy the blog into the server.

<pre><code>
staging.rb

# server ip address, username with which you ssh to your server and the roles assigned to this server
server '192.168.10.10', user: 'vagrant', roles: %w{app db web}

# path to deploy the project
set :deploy_to, '/home/vagrant/www/app/staging'

# set some variables that is used in deploy tasks written in deploy.rb
# don't keep the sensetive credentials here; like database name, username and password
# you can use overlay for setting sensetive information.
set :app_path, '/home/vagrant/www/app/staging/current'
set :app_debug, false
set :app_key, 'NrLNIrApophsxQzbm98DGNlnWK1wxxdc'
</code></pre>

I am assuming your server to be an `staging server` and hence, only configuring `staging.rb` file. I have configured it for my server, which is a vagrant box, homestead. The idea is same for different servers.

<pre><code>
deploy.rb

# config valid only for current version of Capistrano
lock '3.4.0'

# application name
set :application, 'blog'

# repo url to the project
set :repo_url, 'https://github.com/shhetri/blog.git'

namespace :environment do
    desc "Set environment variables"
    task :set_variables do
        on roles(:app) do
              puts ("--> Create enviroment configuration file")
              execute "cat /dev/null > #{fetch(:app_path)}/.env"
              execute "echo APP_DEBUG=#{fetch(:app_debug)} >> #{fetch(:app_path)}/.env"
              execute "echo APP_KEY=#{fetch(:app_key)} >> #{fetch(:app_path)}/.env"
        end
    end
end

namespace :composer do
    desc "Running Composer Install"
    task :install do
        on roles(:app) do
            within release_path do
                execute :composer, "install --no-dev"
                execute :composer, "dumpautoload"
            end
        end
    end
end

namespace :deploy do
  after :updated, "composer:install"
  after :finished, "environment:set_variables"
end
</code></pre>

Here, I have written two tasks named, `set_variables` inside `environment` namespace and `install` inside `composer` namespace. Its clear with the command name itself, what these tasks do. After the repo is cloned form the github, the packages are installed through composer and after the deploy is finished, the environment variables are setup. These are the minimal tasks I have demostrated here as each project has its own requirements, and so its own deploy tasks. You can follow the same pattern to write your own tasks. Just be sure on when to call your tasks. Capistrano comes with predefined [workflow](http://capistranorb.com/documentation/getting-started/flow/) and you must check it.

## Deploy

You have configured the server and the deploy tasks. Now its time to deploy your application.

```
blog $ cap staging deploy
```

The command takes the form of : cap *stage* deploy

*Stage* could be staging, production or any other.

Now if you hit your registered domain name for this application, in the browser, you will see your application up and running.