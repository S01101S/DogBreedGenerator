const dogButton = document.getElementById('getDogButton');
const dogContainer = document.getElementById('dogContainer');
const dogImage = document.getElementById('dogImage'); 
const dogName = document.getElementById('dogName');
const dogTemperament = document.getElementById('dogTemperament');
const dogLifespan = document.getElementById('dogLifespan');
const dogBredFor = document.getElementById('dogBredFor');


const API_KEY = 'live_uDld2KOPkWm0ZiIXIfOKSyGWMaYpwAYBYsI0zT1j945TFXtTjbBmycX03iXpjpzE'; 
const API_URL = 'https://api.thedogapi.com/v1/images/search?has_breeds=1';

dogButton.addEventListener('click', fetchNewDogData);



async function fetchNewDogData()
{
    try
    {
        dogButton.textContent = "Fetching...🦴";
        dogButton.disabled = true;

        const response = await fetch(API_URL, {
            headers: {
                'x-api-key' : API_KEY
            }
        });

        const dogDataArray = await response.json();

        const dogData = dogDataArray[0];
        const breedInfo = dogData.breeds[0];

        dogImage.src = dogData.url;
        dogName.textContent = breedInfo.name;
        dogTemperament.textContent = breedInfo.temperament;
        dogLifespan.textContent = breedInfo.life_span;
        dogBredFor.textContent = breedInfo.bred_for;


        dogContainer.classList.remove('hidden');

    }
    catch (error)
    {
        console.error("Error while fetching dog data: ", error);
        alert("Sorry, couldn't fetch a dog. Please Try Again");
    }
    finally 
    {
        dogButton.textContent = 'Get a New Dog Breed!';
        dogButton.disabled = false;
    }
}



fetchNewDogData();