//array of projects

const projectList = [
    {
        _id: 'project-1',
        image: 'melted-cone.png',
        title: 'The Melted cone',
        description: 'This is a full stack MERN eCommerce web-app for selling ice cream. This was a group project for my bootcamp class completed on 7/20/2022. It was designed using REACT on a mongoDB with Apollo server and graphQl. There is Stripe integration included and fully functional including adding the newly created order to the database. This database is hosted through mongoDb Atlas. The rest of the app is deployed on Heroku.',
        deployedSite: 'https://the-melted-cone.herokuapp.com/',
        gitHub: 'https://github.com/CaseySMiller/theMeltedCone',
    },
    {
        _id: 'project-2',
        image: 'shopKeep.png',
        title: 'ShopKeep',
        description: 'This is a general inventory control web application that can be used for managing inventory for a business. This was a group project that I developed with three other students. This application is deployed and live on Heroku. It is built on node.js and uses express-sessions for authentication to limit functionality to logged in users with added functionality for those with admin priviledges.  All user and inventory data is stored on a mySQL database using jawsDB. The gitHub repo can be found at the link below.',
        deployedSite: 'https://dry-caverns-71259.herokuapp.com/',
        gitHub: 'https://github.com/PeterBookmyer/Inventory-Management-App',
    },
    {
        _id: 'project-3',
        image: 'blackjack.png',
        title: 'Bootcamp Blackjack',
        description: 'This is a blackjack game designed entirely with HTML/CSS/JavaScript. It uses https://www.deckofcardsapi.com/ to handle the deck. This was our first group project and was quite the challenge because we had not yet learned the more advanced methods of coding that I have in my arsenal now. We had not yet even covered async functions. Half way through the project I found out about them while researching and realized it would have been much easier to write that way. However, we were far enough in that it made more sense to use setTimeout to make the timing work right instead of refactoring all of our code.',
        deployedSite: 'https://caseysmiller.github.io/bootcapBlackjack/',
        gitHub: 'https://github.com/CaseySMiller/bootcapBlackjack',
    },
    {
        _id: 'project-4',
        image: 'googleBooks.png',
        title: 'Google Book Search',
        description: 'This is a web app for using the Google Books API to search for books. It allows a user to sign in and save books to their profile. This was an assignment for my boot camp class through the University of Denver. The original code was provided and used a RESTful API. My assignment was to refactor the code to use Apollo server and graphQl instead. One of the challenges I faced with this project was deploying to Heroku as this was the first time we had done this with a full MERN stack application.',
        deployedSite: 'https://google-book-search-by-casey.herokuapp.com/',
        gitHub: 'https://github.com/CaseySMiller/bookSearch',
    },
    {
        _id: 'project-5',
        image: 'passwordGenerator.png',
        title: 'Password Generator',
        description: 'This is a simple password generator web app. It was written in HTML/CSS/Javascript for my bootcamp class. The app will prompt the user for the length of password and type of characters to include. It will then generate the password randomly and display it in the output window.',
        deployedSite: 'https://caseysmiller.github.io/passwordGenerator/',
        gitHub: 'https://github.com/CaseySMiller/passwordGenerator',
    },
    {
        _id: 'project-6',
        image: '',
        title: 'project 6',
        description: 'This is project 6',
        deployedSite: '',
        gitHub: '',
    },
    {
        _id: 'project-7',
        image: '',
        title: 'project 7',
        description: 'This is project 7',
        deployedSite: '',
        gitHub: '',
    },

];

export default projectList;