//array of projects

const projectList = [
    {
        _id: 'project-1',
        image: 'Screenshot-freelance-portfolio.png',
        title: 'codeKase Freelance Portfolio',
        description: "This is my portfolio for my freelancing business. It is utilizing Next.js for the core of the front end framework. This was my first project working with tailwindCSS and I haven't looked back. The power and customizability of tailwaind is a pleasure to work with. The 3d component on the landing page is designed with react-three-fiber. This is still a work in progress and will eventually be my only portfolio.",
        deployedSite: 'https://main--gleaming-bonbon-86fa37.netlify.app/',
        gitHub: 'https://github.com/CaseySMiller/freelance-portfolio',
    },
    {
        _id: 'project-2',
        image: 'demo-jamstack-ss.png',
        title: '2peex Mountain Sports',
        description: 'This is a JAMstack web app for a fictional mountain sports store. It is built with Next.JS and utilizes Shopify as a headless CMS. This was heavily modified from a template provided by Vercel to demonstrate using Next.JS as a front-end for Shopify. All of the data is pulled from the Shopify API allowing the store owner to have full control over their storefront without ever touching a line of code.',
        deployedSite: 'https://next-shopify-demo-ashen.vercel.app/',
        gitHub: 'https://github.com/CaseySMiller/next-shopify-demo',
    },
    {
        _id: 'project-3',
        image: 'melted-cone.png',
        title: 'The Melted cone',
        description: 'This is a full stack MERN eCommerce web-app for selling ice cream. This was a group project for my bootcamp class completed on 7/20/2022. It was designed using REACT on mongoDB with Apollo server and graphQl. Fully functional Stripe integration is included and will add the newly created order to the database after a purchase (use "4242 4242 4242 4242" for the credit card number to test). This app and most of my others are currently hosted on Heroku. I am in the process of learning AWS so that I can transfer everything to that platform when Heroku shuts down most of the free functionality in November.',
        deployedSite: 'https://the-melted-cone.herokuapp.com/',
        gitHub: 'https://github.com/CaseySMiller/theMeltedCone',
    },
    {
        _id: 'project-4',
        image: 'shopKeep.png',
        title: 'ShopKeep',
        description: 'This is a general inventory control web application that can be used for managing inventory for a business. This was a group project that I developed with three other students. This application is deployed and live on Heroku. It is built on node.js and uses express-sessions for authentication to limit functionality to logged in users with added functionality for those with admin priviledges. To test use (username: root, password: password) for admin or (username: nonAdmin, password: password) for non admin.  All user and inventory data is stored on a mySQL database using jawsDB. The gitHub repo can be found at the link below.',
        deployedSite: 'https://dry-caverns-71259.herokuapp.com/',
        gitHub: 'https://github.com/PeterBookmyer/Inventory-Management-App',
    },
    {
        _id: 'project-5',
        image: 'blackjack.png',
        title: 'Bootcamp Blackjack',
        description: 'This is a blackjack game designed entirely with HTML/CSS/JavaScript. It uses https://www.deckofcardsapi.com/ to handle the deck. This was our first group project and was quite the challenge because we had not yet learned the more advanced methods of coding that I have in my arsenal now. We had not yet even covered async functions. Half way through the project I found out about them while researching and realized it would have been much easier to write that way. However, we were far enough in that it made more sense to use setTimeout to make the timing work right instead of refactoring all of our code.',
        deployedSite: 'https://caseysmiller.github.io/bootcapBlackjack/',
        gitHub: 'https://github.com/CaseySMiller/bootcapBlackjack',
    },
    {
        _id: 'project-6',
        image: 'googleBooks.png',
        title: 'Google Book Search',
        description: 'This is a web app for using the Google Books API to search for books. It allows a user to sign in and save books to their profile. This was an assignment for my boot camp class through the University of Denver. The original code was provided and used a RESTful API. My assignment was to refactor the code to use Apollo server and graphQl instead. One of the challenges I faced with this project was deploying to Heroku as this was the first time we had done this with a full MERN stack application.',
        deployedSite: 'https://google-book-search-by-casey.herokuapp.com/',
        gitHub: 'https://github.com/CaseySMiller/bookSearch',
    },
    {
        _id: 'project-7',
        image: 'passwordGenerator.png',
        title: 'Password Generator',
        description: 'This is a simple password generator web app. It was written in HTML/CSS/Javascript for my bootcamp class. The app will prompt the user for the length of password and type of characters to include. It will then generate the password randomly and display it in the output window.',
        deployedSite: 'https://caseysmiller.github.io/passwordGenerator/',
        gitHub: 'https://github.com/CaseySMiller/passwordGenerator',
    },
    {
        _id: 'project-8',
        image: '',
        title: 'project 6',
        description: 'This is project 6',
        deployedSite: '',
        gitHub: '',
    },
    {
        _id: 'project-9',
        image: '',
        title: 'project 7',
        description: 'This is project 7',
        deployedSite: '',
        gitHub: '',
    },

];

export default projectList;