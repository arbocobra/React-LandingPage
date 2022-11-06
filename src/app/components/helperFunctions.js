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
    console.log('render response')
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