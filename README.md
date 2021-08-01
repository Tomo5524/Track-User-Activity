# Track-User-Activity

#### Introduction

This is a full-stack chat application that can be up and running with just a few steps. 
Its frontend is built with Vue 3.
The backend is built with Express.js and Node.js.
I also used BeaconAPI to send user data to the backend. and the visibilitychange  event listener to use to signal (data) the end of a user's session
<br/><br/>

### Example of Result
```javascript
{
   "userInfo":{
      "appCodeName":"Mozilla",
      "appName":"Netscape",
      "vendor":"Google Inc.",
      "platform":"MacIntel",
      "userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.164 Safari/537.36"
   },
   "time":{
      "startTime":0,
      "currentTime":1627807448379
   },
   "clicks":{
      "clickCount":4,
      "clickDetails":[
         [
            448,
            56,
            "html>body>div#app>div#nav>a.router-link-active.router-link-exact-active",
            1627807446687
         ],
         [
            509,
            54,
            "html>body>div#app>div#nav>a.router-link-active.router-link-exact-active",
            1627807447037
         ],
         [
            611,
            46,
            "html>body>div#app>div#nav>a.router-link-active.router-link-exact-active",
            1627807447421
         ],
         [
            676,
            46,
            "html>body>div#app>div#nav>a.router-link-active.router-link-exact-active",
            1627807447796
         ]
      ]
   },
   "mouseMovements":[
      [
         448,
         56,
         1627807446530
         //x,y,timestamp
      ],
      [
         611,
         46,
         1627807447290
      ]
   ],
   "mouseScroll":[
      
   ],
   "contextChange":[
      
   ]
}

```



<!--
### Disclaimer

This repository contains beginner level code and might contain some things I wish to change or remove. I have not maintained this for quite some time, but now I am trying to slowly fix these issues. You are welcome to open issues if you find any and I will accept PR's as well.
<br/><br/>

-->

Now, you are ready to chat! 💻 🍺 🔥 🙌
