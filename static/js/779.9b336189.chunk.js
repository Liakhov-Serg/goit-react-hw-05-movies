"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[779],{687:function(t,e,n){n.d(e,{Hq:function(){return p},Hx:function(){return d},Tg:function(){return A},Y5:function(){return s},xc:function(){return l}});var r=n(861),o=n(757),a=n.n(o),u=n(912),c=n(660);u.Z.defaults.baseURL="https://api.themoviedb.org/3",u.Z.defaults.params={api_key:"bc23d88e8c379b88dcc9e69c75bc8f78",include_adult:!1};var i="https://image.tmdb.org/t/p/w500",A=function(){var t=(0,r.Z)(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",u.Z.get("/trending/all/day?").then((function(t){return t.data.results.map((function(t){var e=t.id,n=t.title,r=t.poster_path;return{id:e,title:n,poster:i+r}}))})).catch((function(t){console.log(t.message)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",u.Z.get("/search/movie?query=".concat(e)).then((function(t){return t.data.results.map((function(t){var e=t.id,n=t.title,r=t.poster_path;return{id:e,title:n,poster:i+r}}))})).catch((function(t){console.log(t.message)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s=function(t){return u.Z.get("/movie/".concat(t,"?")).then((function(t){var e=t.data,n=e.id,r=e.poster_path,o=e.title,a=e.release_date,u=e.vote_average,c=e.overview,A=e.genres;return{id:n,poster:i+r,title:o,releaseYear:new Date(a).getFullYear(),userScore:Math.round(10*u),overview:c,genres:A}})).catch((function(t){console.log(t.message)}))},l=function(t){return u.Z.get("/movie/".concat(t,"/credits?")).then((function(t){return t.data.cast.map((function(t){var e=t.id,n=t.name,r=t.character,o=t.profile_path;return{id:e,name:n,character:r,photo:o?i+o:c}}))})).catch((function(t){console.log(t.message)}))},d=function(t){return u.Z.get("/movie/".concat(t,"/reviews?")).then((function(t){return t.data.results.map((function(t){return{id:t.id,author:t.author,content:t.content}}))})).catch((function(t){console.log(t.message)}))}},779:function(t,e,n){n.r(e),n.d(e,{default:function(){return s}});var r,o=n(439),a=n(687),u=n(689),c=n(791),i=n(168),A=n(444).ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  padding: 30px;\n  background-color: #3f51b542;\n  margin: 20px 30px 30px;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  flex-direction: column;\n  align-items: center;\n"]))),p=n(184),s=function(){var t=(0,u.UO)("movieId").movieId,e=(0,c.useState)([]),n=(0,o.Z)(e,2),r=n[0],i=n[1];return(0,c.useEffect)((function(){(0,a.Hx)(t).then(i)}),[t]),(0,p.jsx)(A,{children:r.length>0?(0,p.jsx)("ul",{children:r.map((function(t){var e=t.id,n=t.author,r=t.content;return(0,p.jsxs)("li",{children:[(0,p.jsx)("h3",{children:n}),(0,p.jsx)("p",{children:r})]},e)}))}):(0,p.jsx)("p",{children:"We don`t have any reviews for this movie"})})}},660:function(t){t.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=779.9b336189.chunk.js.map