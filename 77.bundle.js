/*! For license information please see 77.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunktest_task_courses=self.webpackChunktest_task_courses||[]).push([[77],{736:(t,e,r)=>{r.r(e),r.d(e,{default:()=>x});var o=function(){var t=this,e=t._self._c;return t.loaded?e("div",{staticClass:"course"},[e("vCourseWelcome",{attrs:{title:t.courseTitle,description:t.courseDescription,"course-active":t.isCourseActive,"all-lessons-completed":t.isAllLessonsCompleted},on:{"course-started-event":function(e){return t.courseStartedHandler(t.course)},"course-completed-event":function(e){return t.courseCompletedHandler(t.course)}}}),t._v(" "),e("div",{staticClass:"container"},[e("vCourseProgress",{attrs:{progress:t.courseProgress,"course-active":t.isCourseActive}}),t._v(" "),e("div",{staticClass:"course-lessons"},[e("vCourseLessons",{attrs:{courseLessons:t.courseLessons,"course-active":t.isCourseActive,"course-id":t.courseId},on:{"open-lesson-overlay-event":t.openLessonOverlayHandler}})],1)],1),t._v(" "),t.isPopupVisible?e("vLessonOverlay",{attrs:{lesson:t.lessonOverlayContent,"course-id":t.courseId},on:{"lesson-completed-event":t.lessonCompletedHandler}}):t._e()],1):t._e()};o._withStripped=!0;var n=r(973),s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"course-welcome"},[e("div",{staticClass:"container"},[e("div",{staticClass:"course-welcome-content content"},[e("div",{staticClass:"content-info"},[e("h1",{staticClass:"content-title"},[t._v(t._s(t.title))]),t._v(" "),e("p",[t._v(t._s(t.description))])]),t._v(" "),e("div",{staticClass:"content-actions"},[t.courseActive||t.allLessonsCompleted?t._e():e("button",{staticClass:"btn btn--primary btn--md",on:{click:function(e){return t.$emit("course-started-event")}}},[t._v("\n          Start Course\n        ")]),t._v(" "),t.allLessonsCompleted?e("button",{staticClass:"btn btn--primary btn--md",on:{click:function(e){return t.$emit("course-completed-event")}}},[t._v("\n          Complete Course\n        ")]):t._e()])])])])};s._withStripped=!0;const i={props:{title:{type:String,default:"Course Title"},description:{type:String,default:"Course Description"},courseActive:{type:Boolean,default:!1},allLessonsCompleted:{type:Boolean,default:!1}}};var c=r(900);const a=(0,c.Z)(i,s,[],!1,null,null,null).exports;var l=function(){var t=this,e=t._self._c;return e("ul",{staticClass:"course-lessons-list"},t._l(t.courseLessons,(function(r){return e("vLessonsListItem",{key:r.id,attrs:{lesson:r,courseId:t.courseId,courseActive:t.courseActive}})})),1)};l._withStripped=!0;var u=function(){var t=this,e=t._self._c;return t.lesson?e("li",{staticClass:"course-lessons-card card",class:{"card--completed":t.isLessonCompleted}},[e("div",{staticClass:"card-info"},[e("h3",[t._v(t._s(t.lesson.title))]),t._v(" "),e("p",[t._v(t._s(t.lesson.description))])]),t._v(" "),t.courseActive&&!t.isLessonCompleted?e("button",{staticClass:"btn btn--primary btn--md",on:{click:function(e){return t.openLessonOverlay()}}},[t._v("\n    Start lesson\n  ")]):t._e(),t._v(" "),t.courseActive&&t.isLessonCompleted?e("button",{staticClass:"btn btn--secondary btn--md",on:{click:function(e){return t.openLessonOverlay()}}},[t._v("\n    Open lesson\n  ")]):t._e()]):t._e()};u._withStripped=!0;const p={props:{lesson:{type:Object,default:null},courseId:{type:Number,default:0},courseActive:{type:Boolean,default:!1}},computed:{isLessonCompleted:function(){if(this.lesson){var t=this.lesson.id,e={courseId:this.courseId,lessonId:t};return this.$store.getters["courses/isLessonCompleted"](e)}return!1}},methods:{openLessonOverlay:function(){this.lesson&&this.$parent.$emit("open-lesson-overlay-event",this.lesson)}}},f={components:{vLessonsListItem:(0,c.Z)(p,u,[],!1,null,null,null).exports},props:{courseLessons:{type:Array,default:function(){return[]}},courseActive:{type:Boolean,default:!1},courseId:{type:Number,default:0}}},d=(0,c.Z)(f,l,[],!1,null,null,null).exports;var v=function(){var t=this,e=t._self._c;return t.progress>-1&&t.courseActive?e("div",{staticClass:"course-progress"},[e("h2",[t._v("Your course progress:")]),t._v(" "),e("div",{staticClass:"course-progress-shell"},[e("span",{staticClass:"course-progress-start"},[t._v("0")]),t._v(" "),e("div",{staticClass:"course-progress-bar",style:{width:t.progress+"%"}},[e("span",[t._v(t._s(t.progress)+"%")])])])]):t._e()};v._withStripped=!0;const h={props:{progress:{type:Number,default:0,validator:function(t){return t>=0&&t<=100}},courseActive:{type:Boolean,default:!1}}},y=(0,c.Z)(h,v,[],!1,null,null,null).exports;var m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"lesson-overlay"},[e("div",{staticClass:"lesson-overlay--decoration decoration--left"}),t._v(" "),e("div",{staticClass:"lesson-overlay--decoration decoration--right"}),t._v(" "),e("button",{staticClass:"lesson-overlay-close btn btn--close",on:{click:t.closeLessonOverlay}},[e("svg",{staticClass:"w-5 h-5",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})])]),t._v(" "),e("div",{staticClass:"lesson-overlay-wrap"},[e("div",{staticClass:"container"},[e("div",{staticClass:"lesson-overlay-info"},[e("h2",[t._v(t._s(t.lessonTitle))]),t._v(" "),e("p",[t._v(t._s(t.lessonDescription))])]),t._v(" "),e("div",{staticClass:"lesson-overlay-content",domProps:{innerHTML:t._s(t.lessonContent)}}),t._v(" "),t.isLessonCompleted?t._e():e("div",{staticClass:"lesson-overlay-actions"},[e("button",{staticClass:"btn btn--primary",on:{click:function(e){return t.completeLesson(t.lessonId)}}},[t._v("\n          Complete lesson\n        ")])]),t._v(" "),t.isLessonCompleted?e("div",{staticClass:"lesson-overlay-message"},[t._v("\n        You've completed this lesson!\n      ")]):t._e()])])])};m._withStripped=!0;const g={props:{lesson:{type:Object,default:function(){return{}}},courseId:{type:Number,default:0}},computed:{lessonTitle:function(){return this.lesson.title},lessonId:function(){return this.lesson.id},lessonDescription:function(){return this.lesson.description},lessonContent:function(){return this.lesson.content},isLessonCompleted:function(){var t={courseId:this.courseId,lessonId:this.lesson.id};return this.$store.getters["courses/isLessonCompleted"](t)}},methods:{closeLessonOverlay:function(){this.$router.replace({query:null}),this.$store.dispatch("popup/hidePopup"),document.body.classList.remove("body--overflow")},completeLesson:function(t){this.$emit("lesson-completed-event",t)}}},b=(0,c.Z)(g,m,[],!1,null,null,null).exports;var C=function(){var t=new Date;return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()};function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function w(){w=function(){return e};var t,e={},r=Object.prototype,o=r.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},s="function"==typeof Symbol?Symbol:{},i=s.iterator||"@@iterator",c=s.asyncIterator||"@@asyncIterator",a=s.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function u(t,e,r,o){var s=e&&e.prototype instanceof m?e:m,i=Object.create(s.prototype),c=new k(o||[]);return n(i,"_invoke",{value:I(t,r,c)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=u;var f="suspendedStart",d="suspendedYield",v="executing",h="completed",y={};function m(){}function g(){}function b(){}var C={};l(C,i,(function(){return this}));var L=Object.getPrototypeOf,O=L&&L(L($([])));O&&O!==r&&o.call(O,i)&&(C=O);var S=b.prototype=m.prototype=Object.create(C);function A(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function r(n,s,i,c){var a=p(t[n],t,s);if("throw"!==a.type){var l=a.arg,u=l.value;return u&&"object"==_(u)&&o.call(u,"__await")?e.resolve(u.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(u).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(a.arg)}var s;n(this,"_invoke",{value:function(t,o){function n(){return new e((function(e,n){r(t,o,e,n)}))}return s=s?s.then(n,n):n()}})}function I(e,r,o){var n=f;return function(s,i){if(n===v)throw new Error("Generator is already running");if(n===h){if("throw"===s)throw i;return{value:t,done:!0}}for(o.method=s,o.arg=i;;){var c=o.delegate;if(c){var a=j(c,o);if(a){if(a===y)continue;return a}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(n===f)throw n=h,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);n=v;var l=p(e,r,o);if("normal"===l.type){if(n=o.done?h:d,l.arg===y)continue;return{value:l.arg,done:o.done}}"throw"===l.type&&(n=h,o.method="throw",o.arg=l.arg)}}}function j(e,r){var o=r.method,n=e.iterator[o];if(n===t)return r.delegate=null,"throw"===o&&e.iterator.return&&(r.method="return",r.arg=t,j(e,r),"throw"===r.method)||"return"!==o&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+o+"' method")),y;var s=p(n,e.iterator,r.arg);if("throw"===s.type)return r.method="throw",r.arg=s.arg,r.delegate=null,y;var i=s.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function $(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,s=function r(){for(;++n<e.length;)if(o.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=t,r.done=!0,r};return s.next=s}}throw new TypeError(_(e)+" is not iterable")}return g.prototype=b,n(S,"constructor",{value:b,configurable:!0}),n(b,"constructor",{value:g,configurable:!0}),g.displayName=l(b,a,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,a,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},A(x.prototype),l(x.prototype,c,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,o,n,s){void 0===s&&(s=Promise);var i=new x(u(t,r,o,n),s);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},A(S),l(S,a,"Generator"),l(S,i,(function(){return this})),l(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var o in e)r.push(o);return r.reverse(),function t(){for(;r.length;){var o=r.pop();if(o in e)return t.value=o,t.done=!1,t}return t.done=!0,t}},e.values=$,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(E),!e)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(o,n){return c.type="throw",c.arg=e,r.next=o,n&&(r.method="next",r.arg=t),!!n}for(var s=this.tryEntries.length-1;s>=0;--s){var i=this.tryEntries[s],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var a=o.call(i,"catchLoc"),l=o.call(i,"finallyLoc");if(a&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var s=n;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=e&&e<=s.finallyLoc&&(s=null);var i=s?s.completion:{};return i.type=t,i.arg=e,s?(this.method="next",this.next=s.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var o=r.completion;if("throw"===o.type){var n=o.arg;E(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,o){return this.delegate={iterator:$(e),resultName:r,nextLoc:o},"next"===this.method&&(this.arg=t),y}},e}function L(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=t[r];return o}function O(t,e,r,o,n,s,i){try{var c=t[s](i),a=c.value}catch(t){return void r(t)}c.done?e(a):Promise.resolve(a).then(o,n)}function S(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}const A={components:{vCourseWelcome:a,vCourseLessons:d,vCourseProgress:y,vLessonOverlay:b},data:function(){return{course:null,courseId:this.$route.params.courseId,lessonOverlayContent:null,loaded:!1}},computed:{courseTitle:function(){return this.course.title},isAllLessonsCompleted:function(){var t=this.$store.getters["courses/getAllCompletedLessonsByCourse"](this.courseId),e=this.$store.getters["courses/getAllLessonsByCourse"](this.courseId);return t.length===e},courseProgress:function(){var t=this.$store.getters["courses/getAllCompletedLessonsByCourse"](this.courseId);return t.length?Math.round(100*t.length/this.course.lessons.length):0},courseDescription:function(){return this.course.description},courseLessons:function(){return this.course.lessons.map((function(t){return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?S(Object(r),!0).forEach((function(e){var o,n,s;o=t,n=e,s=r[e],(n=function(t){var e=function(t,e){if("object"!==_(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==_(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===_(e)?e:String(e)}(n))in o?Object.defineProperty(o,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):o[n]=s})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},t)}))},isCourseActive:function(){return this.$store.getters["courses/isCourseActive"](this.courseId)},isPopupVisible:function(){return this.$store.getters["popup/isPopupVisible"]},getCompletedCourseAttempts:function(){return this.$store.getters["courses/getCompletedCourseAttempts"](this.courseId)||0},getActiveCourseStartDate:function(){return this.$store.getters["courses/getActiveCourseStartDate"](this.courseId)||!1}},created:function(){this.course||this.fetchSingleCourse()},methods:{fetchSingleCourse:function(){var t,e=this;return(t=w().mark((function t(){var r,o,s;return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,n.n)(e.courseId);case 2:(r=t.sent).length&&(c=1,o=function(t){if(Array.isArray(t))return t}(i=r)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var o,n,s,i,c=[],a=!0,l=!1;try{if(s=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;a=!1}else for(;!(a=(o=s.call(r)).done)&&(c.push(o.value),c.length!==e);a=!0);}catch(t){l=!0,n=t}finally{try{if(!a&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw n}}return c}}(i,c)||function(t,e){if(t){if("string"==typeof t)return L(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?L(t,e):void 0}}(i,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),s=o[0],e.course=s,e.loaded=!0);case 4:case"end":return t.stop()}var i,c}),t)})),function(){var e=this,r=arguments;return new Promise((function(o,n){var s=t.apply(e,r);function i(t){O(s,o,n,i,c,"next",t)}function c(t){O(s,o,n,i,c,"throw",t)}i(void 0)}))})()},courseStartedHandler:function(t){var e=C(),r={id:t.id,title:t.title,startedAt:e,totalLessons:this.course.lessons.length,completedLessons:[]};this.$store.dispatch("courses/courseStarted",r)},lessonCompletedHandler:function(t){var e={completedLessonId:t,courseId:this.courseId};this.$store.dispatch("courses/lessonCompleted",e)},openLessonOverlayHandler:function(t){this.lessonOverlayContent=t,this.$router.push({query:{lesson:t.id}}),this.$store.dispatch("popup/showPopup"),document.body.classList.add("body--overflow")},courseCompletedHandler:function(t){var e,r,o,n,s,i,c,a,l=C(),u=this.getActiveCourseStartDate,p={id:t.id,title:t.title,lastAttemptTime:l,attempts:this.getCompletedCourseAttempts+1,elapsedTime:(e=u,r=l,o=new Date(e),n=new Date(r)-o,s=Math.floor(n/864e5),i=Math.floor(n/36e5%24),c=Math.floor(n/6e4%60),a=Math.floor(n/1e3%60),"Elapsed time: ".concat(s," days, ").concat(i," hours, ").concat(c," minutes, ").concat(a," seconds"))};this.$store.dispatch("courses/courseCompleted",p)}}},x=(0,c.Z)(A,o,[],!1,null,null,null).exports}}]);