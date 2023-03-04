// axios.get('https://swapi.dev/api/peopleasdsa/1/').then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// });


// const getPeople = async (id) => {
//     try {
//         const res = await axios.get(`https://swapi.dev/api/people/${id}`)
//         console.log(res.data)
//     } catch (error) {
//         console.log(error)
//         console.log(error.message)
//         console.log(error.response.status)
//     }
// }

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addJoke = async () => {
    const joke = await getJokes();
    const newLi = document.createElement('li');
    newLi.append(joke)
    jokes.append(newLi);
}



const getJokes = async () => {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }
    const res = await axios.get('https://icanhazdadjoke.com/', config)
    return res.data.joke
}

button.addEventListener('click', () => {
    addJoke()
})