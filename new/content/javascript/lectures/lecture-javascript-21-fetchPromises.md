<!doctype html>
<html>
	<head>
    <title>JavaScript - Fetch & Promises</title>
    <meta charset="utf-8">
    <meta name="robots" content="noindex, nofollow">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

		<link rel="stylesheet" href="../../libs/reveal/css/reset.css">
		<link rel="stylesheet" href="../../libs/reveal/css/reveal.css">
		<link rel="stylesheet" href="../../libs/reveal/css/theme/softhouse.css">

		<link rel="stylesheet" href="../../libs/bootstrap/css/bootstrap.min.css">
		<link rel="stylesheet" href="../../style.css">

		<script src="../../libs/jquery/jquery.min.js"></script>
		<script src="../../libs/bootstrap/js/bootstrap.min.js"></script>


		<!-- Theme used for syntax highlighting of code -->
		<link rel="stylesheet" href="../../libs/reveal/lib/css/monokai.css">
	</head>
	<body>
		<nav class="navbar navbar-expand-lg  navbar-dark bg-dark fixed-top shadow-lg">
			<a class="navbar-brand" href="https://www.softhouse.se">
				<?xml version="1.0" encoding="utf-8"?>
				<!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
				<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					viewBox="0 0 928 179" style="enable-background:new 0 0 928 179;" xml:space="preserve">
				<style type="text/css">
					.st0{fill:#FFFFFF;}
				</style>
				<g>
					<path class="st0" d="M795,121.4c-9.5,4.3-6.3,24.8-15.8,31.6c-5.3,3.8-31,4-34.3-3.8c-4.7-11.1,30.2-28.8,23.5-38.9
						c-8.6-12.9-58.5-8.8-61.6-18c-1-3.1,7-17.5,17.7-18.8c11.8-1.9,31.6,19.9,48.2,19.4c32.2-1.1,34.9-51.8,58.5-58
						c20.7-5.4,37.6-1.6,38.8,7.3c2.2,17.3-59.7,45.1-55.8,59.8c4.9,18.6,74.6,26.4,73.8,41.5c-0.4,7.2-13.7,12.5-25.1,9.6
						C840.6,147.4,818.1,111,795,121.4 M866.5,166.7c20.8,6.4,53.4,1.7,54.2-13.4c1.5-30.6-93.3-36.1-99.1-53
						c-3.8-11.2,85.4-49.2,83.1-73.3c-1.4-15.1-33.7-18-62.2-12.1C787.6,26,807.3,84,772.8,86.7c-14.9,1.2-32.8-26.1-54.2-26.1
						c-13.9,0-33,25.6-30.3,33.2c5.8,16.9,63.6,6.4,73.2,20.1c5.8,8.2-36,26.9-27.8,45.2c4.6,10.2,40.9,14.6,52.1,5
						c9.3-7.9,4.9-34.5,12.1-37.7C814.7,119,839.5,158.4,866.5,166.7"/>
					<path class="st0" d="M62.8,101.3H21.3v9.8h30.5c9.3,0,12.2,2.2,12.2,11v6.4c0,8.7-2.9,11-12.2,11H11v-8.7h42.7l0-10.7H23.3
						c-9.2,0-12.3-2.2-12.3-11v-5.1c0-8.8,3.1-11,12.3-11h39.4V101.3z"/>
					<path class="st0" d="M571.8,101.3h-41.4v9.8h30.5c9.3,0,12.2,2.2,12.2,11v6.4c0,8.7-2.9,11-12.2,11H520v-8.7h42.7v-10.7h-30.4
						c-9.2,0-12.3-2.2-12.3-11v-5.1c0-8.8,3.1-11,12.3-11h39.4V101.3z"/>
					<path class="st0" d="M81.5,103.9v24.5c0,8.8,2.9,11,12.2,11H130c9.2,0,12.2-2.2,12.2-11v-24.5c0-8.9-3-11-12.2-11H93.7
						C84.5,92.9,81.5,95,81.5,103.9 M93,101.5h37.9v29H93V101.5z"/>
				</g>
				<polygon class="st0" points="159.8,92.9 209.3,92.9 209.3,101.3 171.3,101.3 171.3,113.4 197.2,113.4 197.2,122.1 171.3,122.1
					171.3,139.5 159.8,139.5 "/>
				<polygon class="st0" points="256.5,139.5 245.1,139.5 245.1,101.3 222.6,101.3 222.6,92.9 279.3,92.9 279.3,101.3 256.5,101.3 "/>
				<polygon class="st0" points="292.5,92.9 304,92.9 304,110.6 339.7,110.6 339.7,92.9 351.2,92.9 351.2,139.5 339.7,139.5
					339.7,119.9 304,119.9 304,139.5 292.5,139.5 "/>
				<g>
					<path class="st0" d="M368.6,103.9v24.5c0,8.8,2.9,11,12.2,11h36.3c9.2,0,12.2-2.2,12.2-11v-24.5c0-8.9-3-11-12.2-11h-36.3
						C371.6,92.9,368.6,95,368.6,103.9 M380.1,101.5h37.8v29h-37.8V101.5z"/>
					<path class="st0" d="M458.3,130.8H491V92.9h11.5v35.5c0,8.7-3,11-12.3,11h-31.1c-9.3,0-12.2-2.3-12.2-11V92.9h11.4V130.8z"/>
				</g>
				<polygon class="st0" points="590.5,92.9 640.9,92.9 640.9,101.2 602.1,101.2 602.1,111.3 627.1,111.3 627.1,119.4 602.1,119.4
					602.1,130.8 641.5,130.8 641.5,139.5 590.5,139.5 "/>
				</svg>
			</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav m-auto">
					<script src="../../navigation.js"></script>
				</ul>
			</div>
    </nav>
    
		<div class="reveal">
			<div class="slides">

### 21. JavaScript</h3>
##### Fetch & Promises</h5>

---


  #### Asynchronous JavaScript and XML</h4>
            <ul>
              <li>Is a collection of client based techniques to fetch web based data asynchronos.</li>
              <li>A browser built-in XMLHttpRequest object (to request data from a web server)</li>
              <li>JavaScript and HTML DOM (to display or use the data)</li>
              <li>AJAX applications might use XML to transport data, but it is equally common to transport data as plain text or JSON text.</li>
            </ul>
  ---
  
  
  #### With Ajax you can:</h4>
            <ul>
              <li>Read data from a web server - after the page has loaded.</li>
              <li>Request data from a server and load it without having to refresh the entire page.</li>
              <li>Update a web page without reloading the page.</li>
              <li>Send data to a web server - in the background.</li>
            </ul>
  ---
  
  
  #### Synchronous & Asynchronos</h4>
            <ul>
              <li>Execute something <b>synchronously</b> = you wait for it to finish before moving on to another task.</li>
              <li>Standing in line waiting for food</li>
              <li>Execute something <b>Asynchronously</b> = you can move on to another task before it finishes.</li>
              <li>Make an order, sit at the table and wait for your food</li>
            </ul>
  ---
  
  
  #### AJAX examples</h4>
            <ul>
              <li>Live search - You enter something into a input and you get alternatives matching.</li>
              <li>Tradera - Auctions and bids are updated continually.</li>
              <li>Login without reload.</li>
            </ul>
  ---
  
  
            <h2>How AJAX works</h2>
            <ol>
              <li>The browser request data from the server.</li>
              <li>The server responds with data (usally HTML, XML, JSON formats).</li>
              <li>The browser processes the content and adds it to the page.</li>
            </ol>
  ---
  
  
  #### Modern browsers support two different APIs for making HTTP requests</h4>
            <ul>
              <li>XMLHttpRequest</li>
              <li><u>Fetch API</u></li>
            </ul>
  ---

  
  #### The fetch API</h4>
            <ul>
							<li>The Fetch API provides an interface for fetching resources (including across the network).</li>
							<li>The is a global fetch( ) method</li> 
							<li>fetch( ) provides an easy, logical way to fetch resources asynchronously.</li>
            </ul>
  ---

  
  #### Fetch</h4>
            <ul>
              <li>The fetch( ) method takes one mandatory argument (the path to the resource you want to fetch). 
              <li>And it returns a <u>Promise</u> that resolves to the Response to that request, whether it is successful or not.</li>
            </ul>
	---

					<section data-markdown>
						<script type="text/template">
							#### Using ```fetch()```
	
							```JavaScript
							const URL = 'https://jsonplaceholder.typicode.com/todos/1';

							fetch(URL) // Call the fetch function passing the url of the API as a parameter
							.then(function() {
								// Your code for handling the data you get from the API
							})
							.catch(function() {
								// This is where you run code if the server returns any errors
							});
							```
						</script>
	---

  
	#### Promises</h4>
						<ul>
							<li>A promise is and Object.</li>
							<li>It represents the eventual completion (or failure) of an asynchronous operation</li>
							<li>It results in a value.</li>
						</ul>
	---

	
	#### Promise states</h4>
						<ul>
							<li>A Promise is in one of these states:</li>
							<ul>
								<li>pending: initial state, neither fulfilled nor rejected.</li>
								<li>fulfilled: meaning that the operation completed successfully.</li>
								<li>rejected: meaning that the operation failed.</li>
							</ul>
						</ul>
	---

	
	#### Promise</h4>
						<img style="width: 800px;" src="../../media/javascript-images/javascript-21/promise.png" alt="promise">
	---

					<section data-markdown>
						<script type="text/template">
							#### Promises
	
							* ```.then()``` runs if ```resolved```

							```JavaScript
							var promise1 = new Promise(function(resolve, reject) {
								setTimeout(function() {
									resolve('success');
								}, 300);
							});
							
							promise1.then(function(value) {
								console.log(value); // expected output: "success"
							});
							```
						</script>
	---
					
					<section data-markdown>
						<script type="text/template">
							#### Promises
	
							* ```.catch()``` runs if ```rejected```

							```JavaScript
							var promise1 = new Promise(function(resolve, reject) {
								setTimeout(function() {
									reject('rejected');
								}, 300);
							});
							
							promise1.catch(function(error) {
								console.log(error); // expected output: "rejected"
							});
							```
						</script>
	---
					
	
	#### Promise</h4>
						<img style="width: 800px;" src="../../media/javascript-images/javascript-21/promise.png" alt="promise">
	---


  
	#### Async/Await</h4>
						<ul>
							<li>async & await are special syntax which makes it more comfortable to work with promises.</li>
						</ul>
	---

					<section data-markdown>
						<script type="text/template">
							#### ```async```
	
							* Adding the ```async``` keyword before a function results in it always returning a promise.

							```JavaScript
							async function f() {
								return 1;
							}
							
							console.log(f()); // A fulfilled promise
							```
						</script>
	---

					<section data-markdown>
						<script type="text/template">
							#### ```async```
	
							* Adding the ```async``` keyword before a function results in it always returning a promise.

							```JavaScript
							async function f() {
								return 1;
							}
							
							f().then(function(value){
								console.log(value); // 1
							}); 
							```
						</script>
	---

					<section data-markdown>
						<script type="text/template">
							#### ```async```
							* The code beneath is the same as the previous slide.

							```JavaScript
							async function f() {
								return Promise.resolve(1);
							}
							
							f().then(function(value){
								console.log(value); // 1
							}); 
							```
						</script>
	---

					<section data-markdown>
						<script type="text/template">
							#### ```await```

							* await makes JavaScript wait until that promise settles and returns its result.

							```JavaScript
							async function f() {

								let promise = new Promise((resolve, reject) => {
									setTimeout(() => resolve("done!"), 1000)
								});
							
								// Execution “pauses” at the line beneath and resumes when the promise settles, 
								// with result becoming its result.
								let result = await promise; 
							
								alert(result); // "done!"
							}
							
							f();
							```
						</script>
	---
					
	
	#### ```await``` has to be in an async function, otherwise there would be a syntax error!</h4>
	---

	
						<h3><a href="https://github.com/SofthouseVxo/Education" target="_blank">Github examples!</a></h3>
	---
