jQuery(function(n){function e(n){var e=null,t=n+"=",o=document.cookie,r=o.indexOf(t);if(-1!=r){var i=r+t.length,u=o.indexOf(";",i);-1==u&&(u=o.length),e=decodeURIComponent(o.substring(i,u))}return e}function t(){o.fadeIn(u).promise().then(function(){return document.cookie=s+"=1",n.Deferred(function(n){setTimeout(function(){n.resolve()},i)})}).then(function(){return o.fadeOut(u)}).then(function(){return r.fadeIn(u)})}{var o=n("#splash"),r=n("#main"),i=(n(window),1e3),u=3e3,s="sdot_splash";({storage:window.sessionStorage||{},setItem:function(n,e){try{this.storage[n]=e}catch(t){}},getItem:function(n){var e=null;try{e=this.storage[n]}catch(t){}return e}})}e(s)?r.show():t()});