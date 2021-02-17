const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const peopleUrl = `${API_URL}${PEOPLE_URL}`
const opts = { crossDomain: true }
/* 
$.get(lukeUrl, opts, function(luke){
    console.log(`Hola, soy ${luke.name}`)
})
 */

const onPeopleResponse = function(persona){
    console.log(`Mi nombre es ${persona.name}`)
}


/* $.get(lukeUrl, opts, onResponse) */

var setPeopleUrl = number => `${API_URL}${PEOPLE_URL.replace(':id', number)}`

for (var i = 0; i<10; i++){
    var localPeopleUrl = setPeopleUrl(i + 1)
    $.get(localPeopleUrl, opts, onPeopleResponse)
}