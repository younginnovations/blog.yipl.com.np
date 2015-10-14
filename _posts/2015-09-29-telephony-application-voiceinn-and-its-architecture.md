---
layout: post
title: "A Telephony Application - VoiceInn and Its Architecture"
author: achyut_devkota
modified: 29 Sep, 2015
tags: [telephone application, asterisk, adhearsion, sip, voip, call, IVR, PSTN, E1,]
image:
  feature: voiceinn/voice-inn.png
---

VoiceInn is an internal project of YoungInnovations to provide an interactive telephony service with user friendly web interface. It includes three main telephony services - Vsurvey, Vboard and Vsupport. The modular feature of VoiceInn allows client to take service they need and also provide a customizable feature as required.

<!--more-->

![voiceinn logo](/images/voiceinn/voiceinn.jpg)

Normally telephone service with IVR supports incoming call only but VoiceInn provides inbound as well as outbound call IVR. Outbound call can be set immediately as well as can be scheduled to a single or multiple numbers at once. 

Any changes made by client after login  will take instant effect in telephone application after it is saved.

###Services
**Vsurvey** *- is a voice survey unlike normal survey in form.*

![Vsurvey service](/images/voiceinn/vsurvey.jpg)

Clients create voice survey from web interface by uploading audio file or recording from web page.  When they have done uploading audio questions they have to make a dialplan by arranging the questions. There are two methods of getting response from survey participants - either by audio answer or by dialing digit from keypad of phone set.

Response can be collected from participants either by receiving call from participants or by calling the participants. The system can call participants individually as well as in a group. 

**Vboard** *- is a Noticeboard service.*
![Vboard service](/images/voiceinn/vboard.jpg)

Clients can broadcast noticeboard by recording from phone or uploading audio file from VoiceInn website. When clients set broadcast then it becomes effective. Broadcast can be scheduled at any time in the future. Unlike other noticeboard services it supports outbound calls as well.

**Vsupport** *- is a voice support service.*
![Vsupport service](/images/voiceinn/vsupport.jpg)

Users call to a support number and record complaints/ queries. For those who want to get instant support there is a live operator forward option. If first operator needs help to solve users’ complains, s/he can add other individuals and can make it as conference call or s/he can simply forward the call to other relevant numbers. All queries and complains appear in support dashboard for further followups.

###VoiceInn Components
Asterisk, adhearsion and flask are the major components used to build VoiceInn. Asterisk, is a communication server, handles all kinds of telephone functionalities whereas  adhearsion, is a telephone application framework,  that control calls dialplan. Flask, a web microframework build in python, is used to make user interface.

###VoiceInn Architecture
Call channels (SIP trunk, PSTN, E1) are connected to asterisk from telecom providers. The calls are asynchronously transferred to adhearsion application through a Asterisk Manager Interface(AMI) connection. Then all the call flows are controlled by adhearsion callcontroller. 

![VoiceInn Architecture](/images/voiceinn/architecture.jpg)

Each call logs and activity logs are stored in MySQL database from asterisk, adhearsion and flask. Open DataBase Connectivity(ODBC) is used to store Call Details Report (CDR) in database from asterisk. Except CDR, all call logs are handled by adhearsion and stored in database. Both telephone system and web interface (Flask) share same database. So any changes from client dashboard directly affects telephone call flow. Beside same database, Some APIs are used to connect application with client web UI. Handler handles all kind of APIs and parse data. This handler is primarily used for originating outbound call from client UI. 

![Call Handler](/images/voiceinn/handler.jpg)

Different APIs are handled by API handler. If there is an API request for a single call then it immediately sends a request to originate call. If call request is more than one then it checks for time of call. If time is immediate then call takes place, or else handler starts scheduler. Queue handler makes queue for multiple call before sending requests to originate call to asterisk through adhearsion.

![Adhearsion Architecture](/images/voiceinn/adhearsion_call_controller.jpg)

Adhearsion has very flexible call controller to handle calls. Incoming as well as outgoing calls are routed by router to a specific callcontroller. Each controller has ability to include other controllers. In this case call can be passed to included call controller and returns to original controller after execution is completed. And also call can pass to other call controller with parameter. 

<script async class="speakerdeck-embed" data-id="3a9e1922f56d44bba98f0bbfdb326aff" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>

***

VoiceInn has modular call controllers for each service and feature. So that services and features can be enabled and disabled according to clients’ need. Individual client maintains his/her own set of  available features. For instance, a client can use only Vboard service with inbound and outbound call feature.
