export const getArt = async (id) => {
    console.log('get art')
    const metUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects';
    // const idNum = id;
    const endpoint = `${metUrl}/${id}`;
    try {
        const response = await fetch(endpoint, { cache: 'no-cache' });
        if (response.ok) {
            const jsonResponse = await response.json();
            renderResponse(jsonResponse);
        }
    } catch (error) {
        console.log(error);
    }
};

const renderResponse = (val) => {
    console.log(val)
    const background = document.getElementById('background');
    let imgDimensions;
    if (val.measurements.length > 1) {
        const imgFilter = val.measurements.filter(
            (el) => el.elementName === 'Overall'
        );
        imgDimensions = imgFilter[0];
    } else {
        imgDimensions = val.measurements[0];
    }
    if (
        imgDimensions.elementMeasurements.Height >
            imgDimensions.elementMeasurements.width ||
        !imgDimensions.elementMeasurements.width
    ) {
        background.classList.toggle('tall');
    } else {
        background.classList.toggle('wide');
    }
    background.style.backgroundImage = `url(${val.primaryImage})`;
};

// const fetchQuote = async () => {
//     let obj;
//     const res = await fetch('https://api.quotable.io/random');
//     obj = await res.json();
//     return obj;
// }

// export const getQuote = async () => {
//     await fetchQuote().then()
// }

// export const renderQuote = (res) => {
//     let displayQuote = [];
//     for (let item in res) {
//         if (item === 'content' || item === 'author') {
//             console.log(res[item])
//             displayQuote.push(res[item])
//             console.log(displayQuote)
//         }
//     }
//     return displayQuote;
// }

// 
// const renderResponse = (res) => {
//     // Handles if res is falsey
//     if(!res){
//       console.log(res.status);
//     }
//     // In case res comes back as a blank array
//     if(!res.length){
//       responseField.innerHTML = "<p>Try again!</p><p>There were no suggestions found!</p>";
//       return;
//     }
  
//     // Creates an empty array to contain the HTML strings
//     let wordList = [];
//     // Loops through the response and caps off at 10
//     for(let i = 0; i < Math.min(res.length, 10); i++){
//       // creating a list of words
//       wordList.push(`<li>${res[i].word}</li>`);
//     }
//     // Joins the array of HTML strings into one string
//     wordList = wordList.join("");
  
//     // Manipulates responseField to render the modified response
//     responseField.innerHTML = `<p>You might be interested in:</p><ol>${wordList}</ol>`;
//     return
//   }
//   