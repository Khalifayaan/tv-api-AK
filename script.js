


const searchInput = document.querySelector('.search-box');
const searchButton = document.querySelector('#search');


const moviesSection = document.querySelector('.movies-section');


function createMovieCard(show) {
 
  const movieCard = document.createElement('div');
  const movieImage = document.createElement('div');
  const image = document.createElement('img');
  const movieHeading = document.createElement('h3');
  const details = document.createElement('div');
  const rating = document.createElement('div');
  const ratingImage = document.createElement('img');
  const ratingValue = document.createElement('h3');
  const genres = document.createElement('p');
  const websiteButton = document.createElement('button');

  
  movieCard.classList.add('movie-card');
  movieImage.classList.add('movie-image');
  rating.classList.add('rating');
  websiteButton.classList.add('button');

 
  image.src = show.image.medium;
  movieHeading.textContent = show.name;
  ratingImage.src = 'https://pngimg.com/d/star_PNG41474.png';
  ratingValue.textContent = show.rating.average;
  genres.textContent = show.genres.join(' | ');
  websiteButton.textContent = 'Website';
  websiteButton.addEventListener('click', function() {
    window.location.href = show.officialSite;
  });

  
  movieImage.appendChild(image);
  rating.appendChild(ratingImage);
  rating.appendChild(ratingValue);
  details.appendChild(rating);
  details.appendChild(genres);
  movieCard.appendChild(movieImage);
  movieCard.appendChild(movieHeading);
  movieCard.appendChild(details);
  movieCard.appendChild(websiteButton);

 
  moviesSection.appendChild(movieCard);
}


function clearMoviesSection() {
  moviesSection.innerHTML = '';
}


function handleSearch() {
  const searchTerm = searchInput.value.trim();

 
  clearMoviesSection();

  
  fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
    .then(response => response.json())
    .then(data => {
     

      data.forEach(result => {
        const show = result.show;
        createMovieCard(show);
      });
    })
    .catch(error => {
      console.log('An error occurred:', error);
    });
}


searchButton.addEventListener('click', handleSearch);