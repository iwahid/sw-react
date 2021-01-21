/*  event interception */
let form = document.getElementById('form')
form.addEventListener("submit", function formHandler(e) {
  e.preventDefault()
  postFormData()
})

/* collection data from HTML form */
function dataCollector() {
  const inputsCollection = [...document.getElementsByClassName('content')]

  let dataList = {
    fields: {},
    model: 'resourse.people'
  }

  inputsCollection.forEach((input) => {
    dataList.fields[input.id] = input.value
  })

  return dataList
}

async function postFormData() {

  async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data)
    })
    return await response.json()
  }

  postData('https://js-camp-star-wars-default-rtdb.firebaseio.com/swapi/people.json', await dataCollector())
}