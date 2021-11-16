const offcanvasData = [
  {   
    id: 'react-offcanvas',
    offcanvasTitle: 'My experience with ReactJS',
    offcanvasBody: `React is a front-end component based UI library. It allows for the making of robust and reuseable components that can be used anywhere in the application, even within another component. React is a step up from vanilla JavaScript because it moves away from the traditional DOM (Document Object Model) manipulation. \n
    Each react component is bound by state cycle management. In a functional component, these states are managed by react hooks. Hooks allow us to perform actions when the current state is changed such as a change in an input.`
  },
  {   
    id: 'nodeJS-offcanvas',
    offcanvasTitle: `NodeJS's Versatile Libraries and Routing Options`,
    offcanvasBody:`NodeJS is a server side runtime environment that executes JavaScript code outside of the browser. This means all backend service applications are written in JavaScript. NodeJS offers thousands of libraries made by developers and for developers.\n
    Some of the reasons I had chosen NodeJS for my service applications is because I liked the "JavaScript everywhere" paradigm. I would have the freedom to use JavaScript as my client side and service language. 
    `
  },
  {   
    id: 'expressJS-offcanvas',
    offcanvasTitle: 'Express For Back-End HTTP Request Service',
    offcanvasBody: 'Express is a VERY widely used routing application service. It allows us to accept requests made in the form of http requests from the client side and return responses back in the form we see fit, such as utilizing REST API.'
  },
  {   
    id: 'mySQL-offcanvas',
    offcanvasTitle: 'MySQL Database Integration For Data Persistence & REST',
    offcanvasBody: 'MySQL is a popular relational database utilizing SQL. I mainly chose it since I was mostly familiar using it in my previous work. '
  },
  {   
    id: 'restAPI-offcanvas',
    offcanvasTitle: 'My Experience with Rest API',
    offcanvasBody: `A RESTful API confirms to the REST architecture. REST architechure says that the backend service performs HTTP requests on an URI endpoint. HTTP requests are performed by using methods such as POST to update a resource, GET to retrieve an individual resource of the whole resource, etc. Many people often implement these API with CRUD (create, retrieve, update, and delete) with HTTP requests as the methods to perform these actions on the given URI. REST API allow for more versatile data management than fully committing to just using SQL queries in a database table.`
  },
  {   
    id: 'stripe-offcanvas',
    offcanvasTitle: 'Stripes Managing Customer Checkout Session',
    offcanvasBody: `Stripe is one of the top rated payment processing API worldwide. Stripe manages all of its customer transactions through a dashboard and has dozens of useful REST API usages to make your customer payment data management very easy. I highly recommend this API for developers who are in their early stages of development as Stripe makes it easy to switch between development and production use.`
  },
  {   
    id: 'favorite-offcanvas',
    offcanvasTitle: 'Hey, what were some of your favorite moments in developing the project Ryan?',
    offcanvasBody: `When I first developed the web application, I had no direction in terms of design. I used pure HTML and CSS to create a usable component and it quite frankly looked dull. My homepage is a testiment to this statement, as it was the first component I made. The first slow on the homepage was made from scratch and is a little dull since CSS is not my strongest point. Comparing this to my Service or About Me page, the slideshows created from react-bootstrap's carousel (and the entire components) are a step up.\n    
    I really loved learning react-bootstrap and its flexbox design pattern with the grid system. Moving away from the design aspect, I really enjoyed when my functionality came to life such as my cart being able to save user's items across browser tabs, having the item price and total price be updated by the quantity the customer wants for each item, and implementing Stripe's checkout session process.`
  },
  {   
    id: 'issues-offcanvas',
    offcanvasTitle: 'What issues did you face when developing the web application? How did you work to resolve them?',
    offcanvasBody: `
    On the front-end, responsive UI was a huge problem for me. I was using only HTML and CSS at first, and it was glaring my application on mobile wasn't great. I solved this by learning bootstrap and used react's library, react-bootstrap to create flexbox containers that will handle the responsive screen sizing on its own with the arguments I pass along with it.\n   
    An issue I had relating to server side was routing between subdomains since I was reacts client side dom-router. Once I pushed my application live, any direct URL towards a page resulted in a 404 error. When implementing server side routing, the server will look at the pathname and return back the requested page, but this will not be the case with client side routing since without rendering the index.html, there will be no JavaScript code to run (resulting in 404 error). To resolve this issue in production, we must point our direct URL to index.html when requesting a subdomain to render the JavaScript code, and have it return back the correct page.\n
    I wanted to take my project a step further, so I decided to deploy it into a live production environment. This started with just my client side react application using Hostinger as my hosting platform. It worked great, but then... I started to develop the server side application with Express. I had trouble finding how I could host my server side applications (NodeJS), since Hostinger was iffy. My solution? I went with Heroku on the server side. My project has a workable client and service side application that talks to each other when needed such as registering users and using Stripes checkout session. Even now I still face the issue of automating my build since it takes a lot of time to constantly manually push my builds for every change I want to make.`
  },
];

export default offcanvasData;