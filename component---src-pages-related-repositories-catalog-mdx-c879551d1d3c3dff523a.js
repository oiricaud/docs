(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{xXyI:function(A,e,a){"use strict";a.r(e),a.d(e,"_frontmatter",(function(){return c})),a.d(e,"default",(function(){return m}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var t=a("7ljp"),i=a("013z");a("qKvR");function o(){return(o=Object.assign||function(A){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(A[t]=a[t])}return A}).apply(this,arguments)}var c={},r=function(A){return function(e){return console.warn("Component "+A+" was not imported, exported, or provided by MDXProvider as global scope"),Object(t.b)("div",e)}},l=r("Tabs"),n=r("Tab"),s=r("Row"),b=r("Column"),p=r("ImageCard"),g={_frontmatter:c},d=i.a;function m(A){var e=A.components,a=function(A,e){if(null==A)return{};var a,t,i={},o=Object.keys(A);for(t=0;t<o.length;t++)a=o[t],e.indexOf(a)>=0||(i[a]=A[a]);return i}(A,["components"]);return Object(t.b)(d,o({},g,a,{components:e,mdxType:"MDXLayout"}),Object(t.b)("h2",null,"Introduction"),Object(t.b)("p",null,"This project demonstrates the implementation of Catalog Microservice. The catalog microservice uses Elastic Search and serves as cache to the Inventory service."),Object(t.b)("p",null,"Though it is a part of a bigger application, Catalog service is itself an application which serves as a cache to the storefront inventory."),Object(t.b)("h2",null,"Architecture"),Object(t.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"341px"}},"\n      ",Object(t.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"76.38888888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAACy0lEQVQ4y5VT204UQRCdr/HV39AvIL6giUr0AV58MTExEWMUjeEVYoiI8KKGBIxEFAO7AwpxxQ3sFfbG3tidndm57+wOM3XsbrIaLolaSaW7Kl2nq06flja3fl5QlFZMrSxDKS2QpmRJ13UYhnHCLcuCaZpirzPne9u26N2nDXrzcQNqq5VIJnYvSi3V/gF8hbs/FFiJS/DK9xF6eXQ6HhzHYWtHFFcqFfCLeOw4LrodB+Mzi3g2u4znc8vB28gugp4Xk0zLRad0LzAzQzDTN8lKD5LTikLTVLiuK0B5d9VqVXTHY9u24Xc93Bh9QYl8lepKG1cfTIXNRj2QdKNDgfUNdnqA3MwAHTUn4JpFNJsK68YVoLzDUqkkgHlsMcDwyEdkO4snr5ZobGYJkXiO6tUKpHZbIzDr2HWKxz6j3W7hX01TFWwnstiKp6jHOk6nMyTx2y3LRCwWx+raOmRZRqPREAVhGIKIznVu32MxRCOrkCNrSKZS2Nvbg8R56fV6jPA2G7PBeNLFaNz6haeB+iu/UNU0KIoicsVikY/cPj4UHiGbScH3eyeKzgP8nTtFQS6X+wN4FAL5YhM9/yzI38BPAOq6ybZddJtzcKqTCNwk69Y/czgIAjHiMehxzvV6mH4vY3J+FX5AKPGRdcMlvzkNK3uLjJ3LsPeH4du7Qm/Hv8EWgi4UClBVVcSmyeRjm7g7/hoT82uYWojQo5cfcFirEAN0yCuPwkheISM1SFbmGpzWOlqM6NPC5mtf2AHjeuTpDOJ7ZZQbKt0emwXTIUmG2QF186FXvINucYTIXCTPVdjrtcU3484B6vW6WPtfjwMmchV6zIT9cGoR6YNmWC0fCGEbnA/29OFBqYBK9RD/Y7vJFLbjO4JcTdMUqVarXT+s14LNzc1QltdJlqPE9cQfgOvT9/0zzvP8lRkN9GVlheRoNCywGtbU8C+kxlT+h1UgoQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(t.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Catalog Microservice",title:"Catalog Microservice",src:"/static/2fffa87d56308d4e9ad8e8bada5e4be5/93f07/catalog.png",srcSet:["/static/2fffa87d56308d4e9ad8e8bada5e4be5/7fc1e/catalog.png 288w","/static/2fffa87d56308d4e9ad8e8bada5e4be5/93f07/catalog.png 341w"],sizes:"(max-width: 341px) 100vw, 341px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(t.b)("h2",null,"APIs"),Object(t.b)("table",null,Object(t.b)("thead",{parentName:"table"},Object(t.b)("tr",{parentName:"thead"},Object(t.b)("th",o({parentName:"tr"},{align:null}),"APIs"),Object(t.b)("th",o({parentName:"tr"},{align:null}),"Function"))),Object(t.b)("tbody",{parentName:"table"},Object(t.b)("tr",{parentName:"tbody"},Object(t.b)("td",o({parentName:"tr"},{align:null}),Object(t.b)("inlineCode",{parentName:"td"},"/micro/items")),Object(t.b)("td",o({parentName:"tr"},{align:null}),"Get all items in catalog")),Object(t.b)("tr",{parentName:"tbody"},Object(t.b)("td",o({parentName:"tr"},{align:null}),Object(t.b)("inlineCode",{parentName:"td"},"/micro/items/{item-id}")),Object(t.b)("td",o({parentName:"tr"},{align:null}),"Get item from catalog using id")))),Object(t.b)("h2",null,"Frameworks"),Object(t.b)(l,{mdxType:"Tabs"},Object(t.b)(n,{label:"SpringBoot",mdxType:"Tab"},Object(t.b)("p",null,Object(t.b)("a",o({parentName:"p"},{href:"https://github.com/ibm-garage-ref-storefront/catalog-ms-spring"}),"Catalog Github Repo")),Object(t.b)("h3",null,"Project Features"),Object(t.b)("br",null),Object(t.b)("br",null),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},"Leverage ",Object(t.b)("a",o({parentName:"li"},{href:"https://projects.spring.io/spring-boot/"}),"Spring Boot")," framework to build a Microservices application."),Object(t.b)("li",{parentName:"ul"},"Uses ",Object(t.b)("a",o({parentName:"li"},{href:"https://www.elastic.co/products/elasticsearch"}),"Elasticsearch")," to persist Catalog data to Elasticsearch database."),Object(t.b)("li",{parentName:"ul"},"Uses ",Object(t.b)("a",o({parentName:"li"},{href:"https://spring.io/projects/spring-data-elasticsearch"}),"Spring data elasticsearch")," to persist the data to Elasticsearch."),Object(t.b)("li",{parentName:"ul"},"Uses ",Object(t.b)("a",o({parentName:"li"},{href:"https://docs.docker.com/"}),"Docker")," to package application binary and its dependencies.")),Object(t.b)("br",null),Object(t.b)("br",null),Object(t.b)(s,{mdxType:"Row"},Object(t.b)(b,{colMd:3,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(t.b)(p,{title:"Deploy the app locally",titleColor:"light",aspectRatio:"1:1",href:"https://github.com/ibm-garage-ref-storefront/catalog-ms-spring/blob/master/README.md",actionIcon:"arrowRight",subTitleColor:"light",subTitle:"Appsody",mdxType:"ImageCard"},Object(t.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(t.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.59722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIEBf/EABYBAQEBAAAAAAAAAAAAAAAAAAIAA//aAAwDAQACEAMQAAABWlZ53PS//8QAGRABAQEBAQEAAAAAAAAAAAAAAQIDABIi/9oACAEBAAEFAvP1ZJzvQ12yzhSr/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oACAEDAQE/AYx//8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oACAECAQE/Aa2P/8QAGxAAAgEFAAAAAAAAAAAAAAAAAAExAhBBcZH/2gAIAQEABj8CTgW8EU8EJq3/xAAZEAEBAQEBAQAAAAAAAAAAAAABEQAhMYH/2gAIAQEAAT8hmx6PcxMSOruSA5c7+LlNi5Sr3f/aAAwDAQACAAMAAAAQ3A//xAAWEQEBAQAAAAAAAAAAAAAAAAAAAVH/2gAIAQMBAT8Q2lP/xAAXEQEAAwAAAAAAAAAAAAAAAAAAATFR/9oACAECAQE/ELJwf//EAB0QAQEAAQQDAAAAAAAAAAAAAAERACExQVFhceH/2gAIAQEAAT8QdCiluzzOsOLa2tPZt8cHKED7eMOgrCJeaa5ZJiob4h9S5//Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(t.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Light dark",title:"Light dark",src:"/static/f279444ed74a822d768cc7b76191de8a/2e753/local_run.jpg",srcSet:["/static/f279444ed74a822d768cc7b76191de8a/69549/local_run.jpg 288w","/static/f279444ed74a822d768cc7b76191de8a/473e3/local_run.jpg 576w","/static/f279444ed74a822d768cc7b76191de8a/2e753/local_run.jpg 1152w","/static/f279444ed74a822d768cc7b76191de8a/74f4b/local_run.jpg 1728w","/static/f279444ed74a822d768cc7b76191de8a/de5bb/local_run.jpg 2304w","/static/f279444ed74a822d768cc7b76191de8a/cc621/local_run.jpg 5712w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(t.b)(b,{colMd:3,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(t.b)(p,{title:"Deploy the app to Openshift 4.3",titleColor:"light",aspectRatio:"1:1",href:"/",actionIcon:"arrowRight",subTitleColor:"light",subTitle:"Appsody",mdxType:"ImageCard"},Object(t.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"600px"}},"\n      ",Object(t.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.59722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAECAwQF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB4rsziIh//8QAGRAAAQUAAAAAAAAAAAAAAAAAAQAQIUFD/9oACAEBAAEFAqghZlv/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAXEAADAQAAAAAAAAAAAAAAAAAAESAy/9oACAEBAAY/AjSn/8QAGhAAAgMBAQAAAAAAAAAAAAAAAREAIUEQUf/aAAgBAQABPyE6tOLYeERi7i7/AP/aAAwDAQACAAMAAAAQs8//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAbEAADAAIDAAAAAAAAAAAAAAAAARExYSGB8P/aAAgBAQABPxBIqOjKdCf1PAyQewiONmDHk//Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(t.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Light dark",title:"Light dark",src:"/static/cdb2baf9353d923691970e11ccfa6806/f6133/redhat_openshift.jpg",srcSet:["/static/cdb2baf9353d923691970e11ccfa6806/69549/redhat_openshift.jpg 288w","/static/cdb2baf9353d923691970e11ccfa6806/473e3/redhat_openshift.jpg 576w","/static/cdb2baf9353d923691970e11ccfa6806/f6133/redhat_openshift.jpg 600w"],sizes:"(max-width: 600px) 100vw, 600px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(t.b)(b,{colMd:3,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(t.b)(p,{title:"Deploy the app using CP4Apps",titleColor:"light",aspectRatio:"1:1",href:"https://github.com/ibm-garage-ref-storefront/catalog-ms-spring/blob/master/docs/CP4APPS.md",actionIcon:"arrowRight",subTitleColor:"light",subTitle:"CP4Apps",mdxType:"ImageCard"},Object(t.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"445px"}},"\n      ",Object(t.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"71.875%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEBf/EABUBAQEAAAAAAAAAAAAAAAAAAAID/9oADAMBAAIQAxAAAAHHpmcpoANP/8QAGBAAAwEBAAAAAAAAAAAAAAAAAAECAxD/2gAIAQEAAQUCKzSnlaNo/8QAFxEAAwEAAAAAAAAAAAAAAAAAAQIREP/aAAgBAwEBPwFg1Ez/xAAXEQADAQAAAAAAAAAAAAAAAAACEBFB/9oACAECAQE/ARmr/8QAFhAAAwAAAAAAAAAAAAAAAAAAEBEg/9oACAEBAAY/AoQ//8QAGBABAAMBAAAAAAAAAAAAAAAAAQAQESH/2gAIAQEAAT8hDUJsjdo4zgxX/9oADAMBAAIAAwAAABCLz//EABYRAQEBAAAAAAAAAAAAAAAAAEEBEP/aAAgBAwEBPxCwLn//xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPxBEY//EABwQAQABBQEBAAAAAAAAAAAAAAERABAhQVExgf/aAAgBAQABPxD2TLGCaKpBt38soGBjpQJB2Lf/2Q==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(t.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Light dark",title:"Light dark",src:"/static/8f3c4279a52c34780b26f354b809a401/ea62e/cloud-pak-for-applications.jpg",srcSet:["/static/8f3c4279a52c34780b26f354b809a401/69549/cloud-pak-for-applications.jpg 288w","/static/8f3c4279a52c34780b26f354b809a401/ea62e/cloud-pak-for-applications.jpg 445w"],sizes:"(max-width: 445px) 100vw, 445px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))))),Object(t.b)(n,{label:"OpenLiberty",mdxType:"Tab"},Object(t.b)("p",null,"TBD")),Object(t.b)(n,{label:"Quarkus",mdxType:"Tab"},Object(t.b)("p",null,"TBD"))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-related-repositories-catalog-mdx-c879551d1d3c3dff523a.js.map