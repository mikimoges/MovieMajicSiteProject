let movies_container = document.getElementById('movie-row');
let tv_container = document.getElementById('tv-serial-row');
let movie_header = document.getElementById('movie-header');
let tv_header = document.getElementById('tv-header');
let moviesTrailerArray = [];

let fetchAndDisplay = (data, row) => {
  for (let i = 0; i < data.results.length; i++) {
    let col = document.createElement('div');
    let card = document.createElement('div');
    let image = document.createElement('img');
    let title = document.createElement('h5');
    let cardBody = document.createElement('div');
    let playBtn = document.createElement('i');
    let playLink = document.createElement('a');
    let Ul = document.createElement('ul');
    let rating = document.createElement('li');
    let language = document.createElement('li');
    let releeaseDate = document.createElement('li');
    let id = document.createElement('li');
    let trailerLink = document.createElement('p');
    let overView = document.createElement('p');

    col.classList.add('col-md-6', 'col-xl-3', 'col-lg-4', 'col-sm-6', 'mb-5');
    card.classList.add(
      'card',
      'bg-dark',
      'text-white',
      'me-auto',
      'ms-auto',
      'pb-5',
      'px-1'
    );
    card.setAttribute('id', 'cards');
    playBtn.classList.add('playBtn', 'fa-solid', 'fa-play');
    playLink.classList.add('playLink');
    playLink.setAttribute('target', '_blank');
    image.classList.add('card-img-top');
    trailerLink.classList.add('displayHidden');
    overView.classList.add('displayHidden');
    overView.setAttribute('id', 'overView');
    title.classList.add('card-title');
    cardBody.classList.add('card-body', 'bg-dark');
    Ul.classList.add('list-group', 'list-group-light', 'list-group-small');
    rating.classList.add('list-group-item', 'px-1', 'bg-dark', 'text-white','movie-rating');
    language.classList.add('list-group-item', 'px-1', 'bg-dark', 'text-white');
    id.classList.add(
      'list-group-item',
      'px-1',
      'bg-dark',
      'text-white',
      'card-id'
    );
    releeaseDate.classList.add(
      'list-group-item',
      'px-1',
      'bg-dark',
      'text-white'
    );
    releeaseDate.style.fontSize = '14px';

    card.style = 'width: 15rem; height: 29rem; overflow:hidden; ';
    title.style = 'font-size: 16px;';
    image.style = 'width: 78%; margin: auto;';

    title.innerHTML = data.results[i].title;
    image.src =
      'https://image.tmdb.org/t/p/w500/' + data.results[i].poster_path;
    rating.innerHTML =
      'Rating: &nbsp; &nbsp;' + '⭐' + Math.round(data.results[i].vote_average) + '/10';
    language.innerHTML =
      'Language :  &nbsp;  🌍' + data.results[i].original_language;
    releeaseDate.innerHTML = 'Released : ' + data.results[i].release_date;
    id.innerHTML = data.results[i].id;

    overView.innerHTML = data.results[i].overview;
    


    fetch(
      `https://api.themoviedb.org/3/movie/${data.results[i].id}?api_key=00e946ded81d239394aab83115903a2e&append_to_response=videos`
    )
      .then(response => response.json())
      .then(ID => {
        for (i = 0; i < ID.videos.results.length; i++) {
          if (ID.videos.results[i].type === 'Trailer') {
            // playLink.href = `https://www.youtube.com/embed/${ID.videos.results[i].key}`;
            trailerLink.innerHTML = `https://www.youtube.com/embed/${ID.videos.results[i].key}` 
            break;
          }
        }
      });

    // playLink.innerHTML = '';

    Ul.appendChild(rating);
    Ul.appendChild(language);
    Ul.appendChild(releeaseDate);
    // Ul.appendChild(id);
    cardBody.appendChild(title);
    cardBody.appendChild(Ul);
    playLink.appendChild(playBtn);
    cardBody.appendChild(playLink);
    cardBody.appendChild(trailerLink);
    cardBody.appendChild(overView);
    

    card.appendChild(image);
    card.appendChild(cardBody);
    col.appendChild(card);
    row.appendChild(col);
  }
};


// Add event listener to a parent element that is already present in the HTML
const parentElement = document.getElementById('movie-row');

// Listen for click events on the parent element
parentElement.addEventListener('click', event => {
  // Check if the clicked element has the class "playBtn"
  if (event.target.classList.contains('playBtn')) {
    // Handle the button click here
     const card = event.target.closest('.card');
     let url = card.querySelector('p');
     let rating = card.querySelector('.movie-rating');
     let titleModal = card.querySelector('h5');
     let overView = card.querySelector('#overView');

    // alert(url.innerHTML);
    document.getElementById('trailer-title').innerHTML = titleModal.textContent;
    document.getElementById('movie-overview').innerHTML = overView.innerHTML;
    document.getElementById('rating-modal').innerHTML =  rating.innerHTML;
    document.getElementById('playingPlace').src = url.innerHTML;
    document.getElementById('playBox').show()
    document.querySelector('.overlay').style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden';
  }
});
document.getElementById('closeModalTrailer').addEventListener('click', ()=>{
   document.getElementById('playingPlace').src = '';
    document.getElementById('playBox').close();
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('body').style.overflow = 'auto';
})


// try{
//   let playBtns = document.querySelectorAll('.playBtn');
//   playBtns.forEach(button => {
//     button.addEventListener('click', () => {
//       // const card = button.closest('.card');
//       // let h2 = card.querySelector('h2');
//       alert('innerHTML');
//     });
//   });
// }catch(e){
//   alert(error)
// }
let fetchAndDisplayTv = (data, row) => {
  for (let i = 0; i < data.results.length; i++) {
    let col = document.createElement('div');
    let card = document.createElement('div');
    let image = document.createElement('img');
    let title = document.createElement('h5');
    let cardBody = document.createElement('div');
    let playBtn = document.createElement('i');
    let playLink = document.createElement('a');
    let Ul = document.createElement('ul');
    let rating = document.createElement('li');
    let language = document.createElement('li');
    let releeaseDate = document.createElement('li');
    let id = document.createElement('li');

    col.classList.add('col-md-6', 'col-xl-3', 'col-lg-4', 'col-sm-6', 'mb-6');
    card.classList.add(
      'card',
      'bg-dark',
      'text-white',
      'me-auto',
      'ms-auto',
      'pb-5',
      'px-1'
    );
    card.setAttribute('id', 'cards');
    playBtn.classList.add('playBtn', 'fa-solid', 'fa-play');
    playLink.classList.add('playLink');
    playLink.setAttribute('target', '_blank');
    image.classList.add('card-img-top');
    title.classList.add('card-title');
    cardBody.classList.add('card-body', 'bg-dark');
    Ul.classList.add('list-group', 'list-group-light', 'list-group-small');
    rating.classList.add('list-group-item', 'px-1', 'bg-dark', 'text-white');
    language.classList.add('list-group-item', 'px-1', 'bg-dark', 'text-white');
    id.classList.add(
      'list-group-item',
      'px-2',
      'bg-dark',
      'text-white',
      'card-id'
    );
    releeaseDate.classList.add(
      'list-group-item',
      'px-1',
      'bg-dark',
      'text-white'
    );
    releeaseDate.style.fontSize = '14px';

    card.style = 'width: 15rem; height: 29rem; overflow:hidden; ';
    title.style = 'font-size: 16px;';
    image.style = 'width: 78%; margin: auto;';

    title.innerHTML = data.results[i].name;
    image.src =
      'https://image.tmdb.org/t/p/w500/' + data.results[i].poster_path;
    rating.innerHTML =
      'Rating: &nbsp; &nbsp;&nbsp;' + '⭐' + data.results[i].vote_average;
    language.innerHTML =
      'Language :  &nbsp; &nbsp;&nbsp;' + data.results[i].original_language;
    releeaseDate.innerHTML = 'Released : ' + data.results[i].first_air_date;
    id.innerHTML = data.results[i].id;

    

    fetch(
      `https://api.themoviedb.org/3/tv/${data.results[i].id}?api_key=00e946ded81d239394aab83115903a2e&append_to_response=videos`
    )
      .then(response => response.json())
      .then(ID => {
        for (i = 0; i < ID.videos.results.length; i++) {
          if (ID.videos.results[i].type === 'Trailer') {
            playLink.href = `https://www.youtube.com/watch?v=${ID.videos.results[i].key}`;
            break;
          }
        }
      });

    // playLink.innerHTML = '';

    Ul.appendChild(rating);
    Ul.appendChild(language);
    Ul.appendChild(releeaseDate);
    // Ul.appendChild(id);
    cardBody.appendChild(title);
    cardBody.appendChild(Ul);
    playLink.appendChild(playBtn);
    cardBody.appendChild(playLink);
   

    card.appendChild(image);
    card.appendChild(cardBody);
    col.appendChild(card);
    row.appendChild(col);
  }
};

document.getElementById('Explore-Movies').addEventListener('click', () => {
  movies_container.innerHTML = '';
  tv_container.innerHTML = '';

  fetch(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=00e946ded81d239394aab83115903a2e'
  )
    .then(response => response.json())
    .then(data => {
      movie_header.innerHTML = `Trending Movies <br><br>`;

      setTimeout(function () {
        var targetSection = document.getElementById('section-movies-container');
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }, 500);

      fetchAndDisplay(data, movies_container);
    })
    .catch(err => console.error(err));

  fetch(
    'https://api.themoviedb.org/3/trending/tv/day?api_key=00e946ded81d239394aab83115903a2e'
  )
    .then(response => response.json())
    .then(data => {
      tv_header.innerHTML = `Trending Tv Shows <br><br>`;
      fetchAndDisplayTv(data, tv_container);
    });
});

//home screen search
let home_screen_search_box = document.getElementById('form1');
let home_screen_search_button = document.getElementById('search-button-home');
let selectMovieType = document.getElementById('select-list');

home_screen_search_button.addEventListener('click', function () {
  movies_container.innerHTML = '';
  tv_container.innerHTML = '';
  tv_header.innerHTML = '';
  movie_header.innerHTML = '';

  fetch(
    `https://api.themoviedb.org/3/search/${selectMovieType.value}?api_key=00e946ded81d239394aab83115903a2e&query=${home_screen_search_box.value}`
  )
    .then(response => response.json())
    .then(data => {
      movie_header.innerHTML = `Search Results for: ${home_screen_search_box.value}<br><br>`;
      setTimeout(function () {
        var targetSection = document.getElementById('section-movies-container');
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }, 500);

      if (selectMovieType.value === 'movie') {
        fetchAndDisplay(data, movies_container);
      } else {
        fetchAndDisplayTv(data, movies_container);
      }
    });
});

home_screen_search_box.addEventListener('keypress', function (e) {
  if (e.key === 'Enter' && home_screen_search_box.value !== '') {
    home_screen_search_button.click();
  }
});

document.getElementById('movies-btn-nav').addEventListener('click', () => {
  movies_container.innerHTML = '';
  tv_container.innerHTML = '';
  tv_header.innerHTML = '';
  movie_header.innerHTML = '';
  fetch(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=00e946ded81d239394aab83115903a2e'
  )
    .then(response => response.json())
    .then(data => {
      movie_header.innerHTML = `Trending Movies <br><br>`;
      setTimeout(function () {
        var targetSection = document.getElementById('section-movies-container');
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }, 500);

      fetchAndDisplay(data, movies_container);
    });
  fetch(
    'https://api.themoviedb.org/3/movie/top_rated?api_key=00e946ded81d239394aab83115903a2e'
  )
    .then(response => response.json())
    .then(data => {
      tv_header.innerHTML = `Top Rated Movies <br><br>`;
      fetchAndDisplay(data, tv_container);
    });
});

document.getElementById('tv-serial-nav-btn').addEventListener('click', () => {
  movies_container.innerHTML = '';
  tv_container.innerHTML = '';
  tv_header.innerHTML = '';
  movie_header.innerHTML = '';

  fetch(
    'https://api.themoviedb.org/3/trending/tv/day?api_key=00e946ded81d239394aab83115903a2e'
  )
    .then(response => response.json())
    .then(data => {
      setTimeout(function () {
        var targetSection = document.getElementById('section-movies-container');
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }, 500);

      movie_header.innerHTML = `Trending TV Shows <br><br>`;
      fetchAndDisplayTv(data, movies_container);
    });

  fetch(
    'https://api.themoviedb.org/3/tv/top_rated?api_key=00e946ded81d239394aab83115903a2e'
  )
    .then(response => response.json())
    .then(data => {
      tv_header.innerHTML = `Top Rated TV Shows <br><br>`;
      fetchAndDisplayTv(data, tv_container);
    });
});

document.getElementById('animation-nav-btn').addEventListener('click', () => {
  movies_container.innerHTML = '';
  tv_container.innerHTML = '';
  tv_header.innerHTML = '';
  movie_header.innerHTML = '';

  fetch(
    'https://api.themoviedb.org/3/keyword/4344/movies?api_key=00e946ded81d239394aab83115903a2e&language=en-US'
  )
    .then(response => response.json())
    .then(data => {
      setTimeout(function () {
        var targetSection = document.getElementById('section-movies-container');
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }, 500);
      movie_header.innerHTML = 'Animation Movies';
      fetchAndDisplay(data, movies_container);
    });
});

document.getElementById('up-btn').addEventListener('click', () => {
  setTimeout(function () {
    var targetSection = document.getElementById('home');
    targetSection.scrollIntoView();
  }, 500);
});
