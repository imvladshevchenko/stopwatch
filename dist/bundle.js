/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var t={426:(t,r,e)=>{e.d(r,{Z:()=>o});var n=e(645),i=e.n(n)()((function(t){return t[1]}));i.push([t.id,"body {\r\n  background: url(https://html5book.ru/wp-content/uploads/2015/07/background39.png);\r\n  height: 100vh;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.stopwatch {\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\nh1 {\r\n  font-size: 100px;\r\n}\r\n\r\n.button {\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  width: 140px;\r\n  height: 45px;\r\n  line-height: 45px;\r\n  border-radius: 45px;\r\n  margin: 10px 20px;\r\n  font-family: 'Montserrat', sans-serif;\r\n  font-size: 11px;\r\n  text-transform: uppercase;\r\n  text-align: center;\r\n  letter-spacing: 3px;\r\n  font-weight: 600;\r\n  color: #524f4e;\r\n  background: white;\r\n  box-shadow: 0 8px 15px rgba(0, 0, 0, .1);\r\n  transition: .3s;\r\n}\r\n.button:hover {\r\n  background: #2EE59D;\r\n  box-shadow: 0 15px 20px rgba(46, 229, 157, .4);\r\n  color: white;\r\n  transform: translateY(-7px);\r\n}",""]);const o=i},645:t=>{t.exports=function(t){var r=[];return r.toString=function(){return this.map((function(r){var e=t(r);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(t,e,n){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(n)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(i[s]=!0)}for(var u=0;u<t.length;u++){var c=[].concat(t[u]);n&&i[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),r.push(c))}},r}},379:(t,r,e)=>{var n,i=function(){var t={};return function(r){if(void 0===t[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[r]=e}return t[r]}}(),o=[];function s(t){for(var r=-1,e=0;e<o.length;e++)if(o[e].identifier===t){r=e;break}return r}function u(t,r){for(var e={},n=[],i=0;i<t.length;i++){var u=t[i],c=r.base?u[0]+r.base:u[0],a=e[c]||0,h="".concat(c," ").concat(a);e[c]=a+1;var f=s(h),l={css:u[1],media:u[2],sourceMap:u[3]};-1!==f?(o[f].references++,o[f].updater(l)):o.push({identifier:h,updater:b(l,r),references:1}),n.push(h)}return n}function c(t){var r=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var o=e.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(t){r.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(r);else{var s=i(t.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(r)}return r}var a,h=(a=[],function(t,r){return a[t]=r,a.filter(Boolean).join("\n")});function f(t,r,e,n){var i=e?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(t.styleSheet)t.styleSheet.cssText=h(r,i);else{var o=document.createTextNode(i),s=t.childNodes;s[r]&&t.removeChild(s[r]),s.length?t.insertBefore(o,s[r]):t.appendChild(o)}}function l(t,r,e){var n=e.css,i=e.media,o=e.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var p=null,d=0;function b(t,r){var e,n,i;if(r.singleton){var o=d++;e=p||(p=c(r)),n=f.bind(null,e,o,!1),i=f.bind(null,e,o,!0)}else e=c(r),n=l.bind(null,e,r),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return n(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;n(t=r)}else i()}}t.exports=function(t,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var e=u(t=t||[],r);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var n=0;n<e.length;n++){var i=s(e[n]);o[i].references--}for(var c=u(t,r),a=0;a<e.length;a++){var h=s(e[a]);0===o[h].references&&(o[h].updater(),o.splice(h,1))}e=c}}}}},r={};function e(n){if(r[n])return r[n].exports;var i=r[n]={id:n,exports:{}};return t[n](i,i.exports,e),i.exports}e.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},e.d=(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),(()=>{var t=function(r,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)r.hasOwnProperty(e)&&(t[e]=r[e])})(r,e)};function r(r,e){function n(){this.constructor=r}t(r,e),r.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function n(t){return"function"==typeof t}var i=!1,o={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){t&&(new Error).stack,i=t},get useDeprecatedSynchronousErrorHandling(){return i}};function s(t){setTimeout((function(){throw t}),0)}var u={closed:!0,next:function(t){},error:function(t){if(o.useDeprecatedSynchronousErrorHandling)throw t;s(t)},complete:function(){}},c=function(){return Array.isArray||function(t){return t&&"number"==typeof t.length}}();function a(t){return null!==t&&"object"==typeof t}var h=function(){function t(t){return Error.call(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map((function(t,r){return r+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t,this}return t.prototype=Object.create(Error.prototype),t}(),f=function(){function t(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._ctorUnsubscribe=!0,this._unsubscribe=t)}return t.prototype.unsubscribe=function(){var r;if(!this.closed){var e=this,i=e._parentOrParents,o=e._ctorUnsubscribe,s=e._unsubscribe,u=e._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,i instanceof t)i.remove(this);else if(null!==i)for(var f=0;f<i.length;++f)i[f].remove(this);if(n(s)){o&&(this._unsubscribe=void 0);try{s.call(this)}catch(t){r=t instanceof h?l(t.errors):[t]}}if(c(u)){f=-1;for(var p=u.length;++f<p;){var d=u[f];if(a(d))try{d.unsubscribe()}catch(t){r=r||[],t instanceof h?r=r.concat(l(t.errors)):r.push(t)}}}if(r)throw new h(r)}},t.prototype.add=function(r){var e=r;if(!r)return t.EMPTY;switch(typeof r){case"function":e=new t(r);case"object":if(e===this||e.closed||"function"!=typeof e.unsubscribe)return e;if(this.closed)return e.unsubscribe(),e;if(!(e instanceof t)){var n=e;(e=new t)._subscriptions=[n]}break;default:throw new Error("unrecognized teardown "+r+" added to Subscription.")}var i=e._parentOrParents;if(null===i)e._parentOrParents=this;else if(i instanceof t){if(i===this)return e;e._parentOrParents=[i,this]}else{if(-1!==i.indexOf(this))return e;i.push(this)}var o=this._subscriptions;return null===o?this._subscriptions=[e]:o.push(e),e},t.prototype.remove=function(t){var r=this._subscriptions;if(r){var e=r.indexOf(t);-1!==e&&r.splice(e,1)}},t.EMPTY=function(t){return t.closed=!0,t}(new t),t}();function l(t){return t.reduce((function(t,r){return t.concat(r instanceof h?r.errors:r)}),[])}var p=function(){return"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}(),d=function(t){function e(r,n,i){var o=t.call(this)||this;switch(o.syncErrorValue=null,o.syncErrorThrown=!1,o.syncErrorThrowable=!1,o.isStopped=!1,arguments.length){case 0:o.destination=u;break;case 1:if(!r){o.destination=u;break}if("object"==typeof r){r instanceof e?(o.syncErrorThrowable=r.syncErrorThrowable,o.destination=r,r.add(o)):(o.syncErrorThrowable=!0,o.destination=new b(o,r));break}default:o.syncErrorThrowable=!0,o.destination=new b(o,r,n,i)}return o}return r(e,t),e.prototype[p]=function(){return this},e.create=function(t,r,n){var i=new e(t,r,n);return i.syncErrorThrowable=!1,i},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},e.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},e.prototype._unsubscribeAndRecycle=function(){var t=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this},e}(f),b=function(t){function e(r,e,i,o){var s,c=t.call(this)||this;c._parentSubscriber=r;var a=c;return n(e)?s=e:e&&(s=e.next,i=e.error,o=e.complete,e!==u&&(n((a=Object.create(e)).unsubscribe)&&c.add(a.unsubscribe.bind(a)),a.unsubscribe=c.unsubscribe.bind(c))),c._context=a,c._next=s,c._error=i,c._complete=o,c}return r(e,t),e.prototype.next=function(t){if(!this.isStopped&&this._next){var r=this._parentSubscriber;o.useDeprecatedSynchronousErrorHandling&&r.syncErrorThrowable?this.__tryOrSetError(r,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},e.prototype.error=function(t){if(!this.isStopped){var r=this._parentSubscriber,e=o.useDeprecatedSynchronousErrorHandling;if(this._error)e&&r.syncErrorThrowable?(this.__tryOrSetError(r,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(r.syncErrorThrowable)e?(r.syncErrorValue=t,r.syncErrorThrown=!0):s(t),this.unsubscribe();else{if(this.unsubscribe(),e)throw t;s(t)}}},e.prototype.complete=function(){var t=this;if(!this.isStopped){var r=this._parentSubscriber;if(this._complete){var e=function(){return t._complete.call(t._context)};o.useDeprecatedSynchronousErrorHandling&&r.syncErrorThrowable?(this.__tryOrSetError(r,e),this.unsubscribe()):(this.__tryOrUnsub(e),this.unsubscribe())}else this.unsubscribe()}},e.prototype.__tryOrUnsub=function(t,r){try{t.call(this._context,r)}catch(t){if(this.unsubscribe(),o.useDeprecatedSynchronousErrorHandling)throw t;s(t)}},e.prototype.__tryOrSetError=function(t,r,e){if(!o.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{r.call(this._context,e)}catch(r){return o.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=r,t.syncErrorThrown=!0,!0):(s(r),!0)}return!1},e.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},e}(d),y=function(){return"function"==typeof Symbol&&Symbol.observable||"@@observable"}();function v(t){return t}function m(t){return 0===t.length?v:1===t.length?t[0]:function(r){return t.reduce((function(t,r){return r(t)}),r)}}var w=function(){function t(t){this._isScalar=!1,t&&(this._subscribe=t)}return t.prototype.lift=function(r){var e=new t;return e.source=this,e.operator=r,e},t.prototype.subscribe=function(t,r,e){var n=this.operator,i=function(t,r,e){if(t){if(t instanceof d)return t;if(t[p])return t[p]()}return t||r||e?new d(t,r,e):new d(u)}(t,r,e);if(n?i.add(n.call(i,this.source)):i.add(this.source||o.useDeprecatedSynchronousErrorHandling&&!i.syncErrorThrowable?this._subscribe(i):this._trySubscribe(i)),o.useDeprecatedSynchronousErrorHandling&&i.syncErrorThrowable&&(i.syncErrorThrowable=!1,i.syncErrorThrown))throw i.syncErrorValue;return i},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(r){o.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=r),function(t){for(;t;){var r=t,e=r.closed,n=r.destination,i=r.isStopped;if(e||i)return!1;t=n&&n instanceof d?n:null}return!0}(t)?t.error(r):console.warn(r)}},t.prototype.forEach=function(t,r){var e=this;return new(r=g(r))((function(r,n){var i;i=e.subscribe((function(r){try{t(r)}catch(t){n(t),i&&i.unsubscribe()}}),n,r)}))},t.prototype._subscribe=function(t){var r=this.source;return r&&r.subscribe(t)},t.prototype[y]=function(){return this},t.prototype.pipe=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return 0===t.length?this:m(t)(this)},t.prototype.toPromise=function(t){var r=this;return new(t=g(t))((function(t,e){var n;r.subscribe((function(t){return n=t}),(function(t){return e(t)}),(function(){return t(n)}))}))},t.create=function(r){return new t(r)},t}();function g(t){if(t||(t=o.Promise||Promise),!t)throw new Error("no Promise impl found");return t}var _=function(t){function e(r,e){var n=t.call(this,r,e)||this;return n.scheduler=r,n.work=e,n.pending=!1,n}return r(e,t),e.prototype.schedule=function(t,r){if(void 0===r&&(r=0),this.closed)return this;this.state=t;var e=this.id,n=this.scheduler;return null!=e&&(this.id=this.recycleAsyncId(n,e,r)),this.pending=!0,this.delay=r,this.id=this.id||this.requestAsyncId(n,this.id,r),this},e.prototype.requestAsyncId=function(t,r,e){return void 0===e&&(e=0),setInterval(t.flush.bind(t,this),e)},e.prototype.recycleAsyncId=function(t,r,e){if(void 0===e&&(e=0),null!==e&&this.delay===e&&!1===this.pending)return r;clearInterval(r)},e.prototype.execute=function(t,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var e=this._execute(t,r);if(e)return e;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(t,r){var e=!1,n=void 0;try{this.work(t)}catch(t){e=!0,n=!!t&&t||new Error(t)}if(e)return this.unsubscribe(),n},e.prototype._unsubscribe=function(){var t=this.id,r=this.scheduler,e=r.actions,n=e.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==n&&e.splice(n,1),null!=t&&(this.id=this.recycleAsyncId(r,t,null)),this.delay=null},e}(function(t){function e(r,e){return t.call(this)||this}return r(e,t),e.prototype.schedule=function(t,r){return void 0===r&&(r=0),this},e}(f)),x=function(){function t(r,e){void 0===e&&(e=t.now),this.SchedulerAction=r,this.now=e}return t.prototype.schedule=function(t,r,e){return void 0===r&&(r=0),new this.SchedulerAction(this,t).schedule(e,r)},t.now=function(){return Date.now()},t}(),E=new(function(t){function e(r,n){void 0===n&&(n=x.now);var i=t.call(this,r,(function(){return e.delegate&&e.delegate!==i?e.delegate.now():n()}))||this;return i.actions=[],i.active=!1,i.scheduled=void 0,i}return r(e,t),e.prototype.schedule=function(r,n,i){return void 0===n&&(n=0),e.delegate&&e.delegate!==this?e.delegate.schedule(r,n,i):t.prototype.schedule.call(this,r,n,i)},e.prototype.flush=function(t){var r=this.actions;if(this.active)r.push(t);else{var e;this.active=!0;do{if(e=t.execute(t.state,t.delay))break}while(t=r.shift());if(this.active=!1,e){for(;t=r.shift();)t.unsubscribe();throw e}}},e}(x))(_);function S(t){var r=t.subscriber,e=t.counter,n=t.period;r.next(e),this.schedule({subscriber:r,counter:e+1,period:n},n)}function T(t,r){return function(e){if("function"!=typeof t)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return e.lift(new O(t,r))}}var O=function(){function t(t,r){this.project=t,this.thisArg=r}return t.prototype.call=function(t,r){return r.subscribe(new A(t,this.project,this.thisArg))},t}(),A=function(t){function e(r,e,n){var i=t.call(this,r)||this;return i.project=e,i.count=0,i.thisArg=n||i,i}return r(e,t),e.prototype._next=function(t){var r;try{r=this.project.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}this.destination.next(r)},e}(d);function j(t,r,e,i){return n(e)&&(i=e,e=void 0),i?j(t,r,e).pipe(T((function(t){return c(t)?i.apply(void 0,t):i(t)}))):new w((function(n){k(t,r,(function(t){arguments.length>1?n.next(Array.prototype.slice.call(arguments)):n.next(t)}),n,e)}))}function k(t,r,e,n,i){var o;if(function(t){return t&&"function"==typeof t.addEventListener&&"function"==typeof t.removeEventListener}(t)){var s=t;t.addEventListener(r,e,i),o=function(){return s.removeEventListener(r,e,i)}}else if(function(t){return t&&"function"==typeof t.on&&"function"==typeof t.off}(t)){var u=t;t.on(r,e),o=function(){return u.off(r,e)}}else if(function(t){return t&&"function"==typeof t.addListener&&"function"==typeof t.removeListener}(t)){var c=t;t.addListener(r,e),o=function(){return c.removeListener(r,e)}}else{if(!t||!t.length)throw new TypeError("Invalid event target");for(var a=0,h=t.length;a<h;a++)k(t[a],r,e,n,i)}n.add(o)}var P=function(){function t(t,r){this.dueTime=t,this.scheduler=r}return t.prototype.call=function(t,r){return r.subscribe(new D(t,this.dueTime,this.scheduler))},t}(),D=function(t){function e(r,e,n){var i=t.call(this,r)||this;return i.dueTime=e,i.scheduler=n,i.debouncedSubscription=null,i.lastValue=null,i.hasValue=!1,i}return r(e,t),e.prototype._next=function(t){this.clearDebounce(),this.lastValue=t,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(M,this.dueTime,this))},e.prototype._complete=function(){this.debouncedNext(),this.destination.complete()},e.prototype.debouncedNext=function(){if(this.clearDebounce(),this.hasValue){var t=this.lastValue;this.lastValue=null,this.hasValue=!1,this.destination.next(t)}},e.prototype.clearDebounce=function(){var t=this.debouncedSubscription;null!==t&&(this.remove(t),t.unsubscribe(),this.debouncedSubscription=null)},e}(d);function M(t){t.debouncedNext()}function H(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}var I=H(),L=function(t){function e(r){var e=t.call(this)||this;return e.parent=r,e}return r(e,t),e.prototype._next=function(t){this.parent.notifyNext(t)},e.prototype._error=function(t){this.parent.notifyError(t),this.unsubscribe()},e.prototype._complete=function(){this.parent.notifyComplete(),this.unsubscribe()},e}(d),N=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.notifyNext=function(t){this.destination.next(t)},e.prototype.notifyError=function(t){this.destination.error(t)},e.prototype.notifyComplete=function(){this.destination.complete()},e}(d),V=function(){function t(t){this.closingNotifier=t}return t.prototype.call=function(t,r){return r.subscribe(new C(t,this.closingNotifier))},t}(),C=function(t){function e(r,e){var n=t.call(this,r)||this;return n.buffer=[],n.add(function(t,r){if(!r.closed)return t instanceof w?t.subscribe(r):function(t){if(t&&"function"==typeof t[y])return o=t,function(t){var r=o[y]();if("function"!=typeof r.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return r.subscribe(t)};if((i=t)&&"number"==typeof i.length&&"function"!=typeof i)return n=t,function(t){for(var r=0,e=n.length;r<e&&!t.closed;r++)t.next(n[r]);t.complete()};if(function(t){return!!t&&"function"!=typeof t.subscribe&&"function"==typeof t.then}(t))return e=t,function(t){return e.then((function(r){t.closed||(t.next(r),t.complete())}),(function(r){return t.error(r)})).then(null,s),t};if(t&&"function"==typeof t[I])return r=t,function(t){for(var e=r[I]();;){var n=void 0;try{n=e.next()}catch(r){return t.error(r),t}if(n.done){t.complete();break}if(t.next(n.value),t.closed)break}return"function"==typeof e.return&&t.add((function(){e.return&&e.return()})),t};var r,e,n,i,o,u=a(t)?"an invalid object":"'"+t+"'";throw new TypeError("You provided "+u+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")}(t)(r)}(e,new L(n))),n}return r(e,t),e.prototype._next=function(t){this.buffer.push(t)},e.prototype.notifyNext=function(){var t=this.buffer;this.buffer=[],this.destination.next(t)},e}(N),U=function(){function t(t,r){this.predicate=t,this.thisArg=r}return t.prototype.call=function(t,r){return r.subscribe(new B(t,this.predicate,this.thisArg))},t}(),B=function(t){function e(r,e,n){var i=t.call(this,r)||this;return i.predicate=e,i.thisArg=n,i.count=0,i}return r(e,t),e.prototype._next=function(t){var r;try{r=this.predicate.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}r&&this.destination.next(t)},e}(d),Y=e(379),z=e.n(Y),q=e(426);z()(q.Z,{insert:"head",singleton:!1}),q.Z.locals;const F=document.getElementById("timer"),R=document.getElementById("startStop"),Z=document.getElementById("pause"),J=document.getElementById("reset"),G=(void 0===(K=100)&&(K=0),void 0===Q&&(Q=E),(c(W=K)||!(W-parseFloat(W)+1>=0)||K<0)&&(K=0),Q&&"function"==typeof Q.schedule||(Q=E),new w((function(t){return t.add(Q.schedule(S,K,{subscriber:t,counter:0,period:K})),t})));var K,Q,W;let X=!1,$=0;G.subscribe((t=>{X&&($++,F.innerHTML=String(Math.floor($/36e3)).padStart(2,"0")+":"+String(Math.floor($/600%60)).padStart(2,"0")+":"+String(Math.floor($/10%60)).padStart(2,"0"))})),j(R,"click").subscribe((t=>{!1===X?X=!0:(X=!1,$=0,F.innerHTML="00:00:00")}));const tt=j(Z,"click"),rt=tt.pipe(function(t,r){return void 0===r&&(r=E),function(t){return t.lift(new P(299,r))}}());var et,nt;tt.pipe((nt=rt,function(t){return t.lift(new V(nt))}),T((t=>t.length)),(et=t=>2===t,function(t){return t.lift(new U(et,undefined))})).subscribe((t=>{X=!1})),j(J,"click").subscribe((t=>{X=!0,$=0,F.innerHTML="00:00:00"}))})()})();