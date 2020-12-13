

/* $.ajax('https://randomuser.me/api/', {
    method: 'GET',
    success: function(data){
        console.log(data)
    },
    error: function(error){
        console.log(error)
    }
})

fetch('https://randomuser.me/api/')
.then(function(response) {
    return response.json()
})
.then(function (user) {
    console.log('user', user.results[0])
}) */


(async function load(){

    const API_URL = 'https://www.omdbapi.com/'
    const API_KEY = '&apikey=1e7080a0'
    const url_constructor_IMDbId = movie_ref => `${API_URL}?i=${movie_ref}${API_KEY}`
    const url_constructor_name = movie_ref => `${API_URL}?t=${movie_ref}${API_KEY}`
    var peliculas = []
    var friends = []
    const $form = document.getElementById('form') 
    const $home = document.getElementById('home')
    const $featuringContainer = document.getElementById('featuring')

    function setHTMLAttributes($element, attributes) {
        for (const attribute in attributes) {
            $element.setAttribute(attribute, attributes[attribute])
        }
    }

    function renderFeaturing(peli) {
        return (
            `
      <div class="featuring">
        <div class="featuring-image">
          <img src="${peli.Poster}" width="70" height="100" alt="">
        </div>
        <div class="featuring-content">
          <p class="featuring-title">Pelicula encontrada</p>
          <p class="featuring-album">${peli.Title}</p>
        </div>
      </div>
      `
        )

    }

    $form.addEventListener('submit', async (event) => {
        event.preventDefault()
        $home.classList.add('search-active')
        const $loader = document.createElement('img')
        setHTMLAttributes($loader, {
            src: 'src/images/loader.gif',
            height: 50,
            width: 50
        })
        $featuringContainer.append($loader)
        const data = new FormData($form)
        try{
            const peli = await getDataSearch(`${data.get('name')}`, url_constructor_name)
            const HTMLString = renderFeaturing(peli)
            $featuringContainer.innerHTML = HTMLString
        }catch(error){
            $loader.remove()
            $home.classList.remove('search-active')
            alert(error.message)
        }
        
    })

    async function getData(movie_url, url_method) {

        const response = await fetch(url_method(movie_url))
        const data = await response.json()
        peliculas.push(data)
    }

    async function getDataSearch(movie_url, url_method) {

        const response = await fetch(url_method(movie_url))
        const data = await response.json()
        if (data.Response == 'True') {
            return data
        }else{
            throw new Error('No se encontró ningun resultado :(')
        }
    }

    async function getFriends() {
        const response = await fetch('https://randomuser.me/api/?results=8', {
                'mode': 'cors',
                'headers': {
                'Access-Control-Allow-Origin': '*'
                }
        	})
        const users = await response.json()
        return users.results
    }

    async function cacheExists () {
        if (window.localStorage.getItem('peliculas')) {
            let local_peliculas = window.localStorage.getItem('peliculas')
            peliculas = JSON.parse(local_peliculas)
        }else{
            await getData('tt3896198', url_constructor_IMDbId)
            await getData('tt0449088', url_constructor_IMDbId)
            await getData('tt0099785', url_constructor_IMDbId)
            await getData('tt0107290', url_constructor_IMDbId)
            await getData('tt0119567', url_constructor_IMDbId)
            await getData('tt0163025', url_constructor_IMDbId)
            await getData('tt0369610', url_constructor_IMDbId)
            await getData('tt4881806', url_constructor_IMDbId)
            await getData('tt0383574', url_constructor_IMDbId)
            await getData('tt0325980', url_constructor_IMDbId)
            localStorage.setItem('peliculas', JSON.stringify(peliculas))
        }
        if (window.localStorage.getItem('friends')){
            let local_friends = window.localStorage.getItem('friends')
            friends = JSON.parse(local_friends)
        }else{
            friends = await getFriends()
            localStorage.setItem('friends', JSON.stringify(friends))
        }
    }

    

    const $actionContainer = document.querySelector('#action')
    const $dramaContainer = document.getElementById('drama')
    const $animationContainer = document.getElementById('animation')
    const $modal = document.getElementById('modal')
    const $overlay = document.getElementById('overlay')
    const $hideModal = document.getElementById('hide-modal')
    const $modalImage = $modal.querySelector('img')
    const $modalTitle = $modal.querySelector('h1')
    const $modalDescription = $modal.querySelector('p')
    const $friendsList = document.getElementById('friend-list')

    function videoItemTemplate(movie) {
        return (
          `<div class="primaryPlaylistItem" data-id="${movie.imdbID}">
            <div class="primaryPlaylistItem-image">
              <img src="${movie.Poster}">
            </div>
            <h4 class="primaryPlaylistItem-title">
              ${movie.Title}
            </h4>
          </div>`
        )
    }

    function friendItemTemplate(friend) {
        return(
            `<li class="playlistFriends-item friend">
                <a href="#">
                    <img src="${friend.picture.thumbnail}" alt="echame la culpa" class="friend-img"/>
                    <span class="friend-span">
                    ${friend.name.first} ${friend.name.last}
                    </span>
                </a>
            </li>`
        )
    }

    function createTemplate(HTMLString) {
        const $html = document.implementation.createHTMLDocument()
        $html.body.innerHTML = HTMLString
        return $html.body.children[0]
    }

    function findMovie(id) {
        return peliculas.find(movie => movie.imdbID === id)
    }
    
    function showModal ($element) {
        $overlay.classList.add('active')
        $modal.style.animation = 'modalIn .8s forwards'
        const id = $element.dataset.id
        const data = findMovie(id)
        $modalTitle.textContent = data.Title
        $modalDescription.textContent = data.Plot
        $modalImage.setAttribute('src', data.Poster)
    }

    function hideModal() {
        $overlay.classList.remove('active')
        $modal.style.animation = 'modalOut .8s forwards'
    }

    $hideModal.addEventListener('click', hideModal)


    function addEventClick($element) {
        $element.addEventListener('click', () => showModal($element))
        
    }

    function renderMovieList(list, $container) {
        $container.children[0].remove()
        list.forEach((movie) => {
            const HTMLString = videoItemTemplate(movie)
            const movieElement = createTemplate(HTMLString)
            const image = movieElement.querySelector('img')
            $container.append(movieElement)
            image.addEventListener('load', (event) => {
                event.target.classList.add('fadeIn')
            })
            addEventClick(movieElement)
        })
    }

    function renderFriends(friends){
        friends.forEach((friend) => {
            const HTMLString = friendItemTemplate(friend)
            const friendElement = createTemplate(HTMLString)
            $friendsList.append(friendElement)
        })
    }

    await cacheExists()

    renderMovieList(peliculas, $actionContainer)
    renderMovieList(peliculas, $dramaContainer)
    renderMovieList(peliculas, $animationContainer)



    renderFriends(friends)



    
})()