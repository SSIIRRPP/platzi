

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

    async function getData(movie_url) {

        const URL_CONSTRUCTOR = movie_ref => `https://www.omdbapi.com/?i=${movie_ref}&apikey=1e7080a0`
        const response = await fetch(URL_CONSTRUCTOR(movie_url))
        const data = await response.json()
        return data
    }// tt0449088
    const guardians = await getData('tt3896198')
    var pirates;
    getData('tt0449088')
    .then(function(data){
        console.log(data)
        pirates = data
    })
    console.log('guardians', guardians, 'pirates', pirates)

    const $home = document.getElementById('#home')

    const $actionContainer = document.querySelector('#action')
    const $dramaContainer = document.getElementById('#drama')
    const $animationContainer = document.getElementById('#animation')

    const $featuringContainer = document.getElementById('#featuring')
    const $form = document.getElementById('#form') 

    const $modal = document.getElementById('modal')
    const $overlay = document.getElementById('overlay')
    const $hideModal = document.getElementById('hide-modal')

    const $modalImage = $modal.querySelector('img')
    const $modalTitle = $modal.querySelector('h1')
    const $modalDescription = $modal.querySelector('p')
    
    
})()