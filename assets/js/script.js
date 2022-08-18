// *Make an asynchronous request to a remote server via javascript using async/await and try/catch.
// *Publish a web page that shows a random quote from an available Web Service, from the Quotes serving website: https://thatsthespir.it
// 

let bodycontent = document.querySelector('body');

let headercontent = document.createElement('header');
bodycontent.appendChild(headercontent);

let maincontainer = document.createElement("main")
bodycontent.appendChild(maincontainer);

// *Send a request to a remote server via javascript using async/await and try/catch.
// fetch API data
async function getQuotes() {

    // *if the request succeed, transform a JSON response into Html, injected in the DOM.
    try {
        let rep = await fetch('https://thatsthespir.it/api', { method: 'GET' })
        await rep.json()
        .then((result)=>
        maincontainer.innerHTML =
        `<article class="article">

            <h1 class="article__title">Today's spiritual quote</h1>

            <section class="article__section">
            
                <blockquote class="article__section__blockquote" id="${result.id}">
                <span class="blockquote__opentag"></span>
                <span class="blockquote__text">${result.quote}</span>
                <span class="blockquote__closetag"></span>
                </blockquote>

            </section>

            <figure class="article__figure">
                <img class="article__figure__img>src="${result.photo}"></img>
                <figcaption class="article__figure__caption">${result.author}</figcaption>
            </figure>

            <button class="article__button" onclick="getQuotes()">Click Here to get another inspiration quote</button>

        </article>`
        )
    }
    // * Make a button to generate another random quote (see template literal)
    // * If the request failed, show an error message to the user.
    catch (error){
        alert("error")
    }
    
    

}


let article = document.querySelector('.article');
let title = document.querySelector(".article__title");
let section = document.querySelector('.article__section');
let blockquote = document.querySelector('.article__section__blockquote');
let quote = document.querySelector('.blockquote__text');
let piccontainer = document.querySelector('.article__figure');
let pic = document.querySelector('.article__figure__img');
let figcaption = document.querySelector('.article__figure__caption');
let button = document.querySelector('.article__button');



getQuotes()


// .then(data => console.log(data))







// RESSOURCES: https://www.devenir-webmaster.com/V2/TUTO/CHAPITRE/JAVASCRIPT/68-async-await/
// https://dev.to/bjhaid_93/beginners-guide-to-fetching-data-with-ajax-fetch-api--asyncawait-3m1l
