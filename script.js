/*  Event interception. */
const form = document.getElementById('form')
form.addEventListener("submit", function formHandler(e) {
  e.preventDefault()
  postFormData()
})

/* Collection data from HTML form. */
function dataCollector() {
  const inputsCollection = [...document.getElementsByClassName('content')]

  const dataList = {
    fields: {},
    model: 'resourse.people'
  }

  inputsCollection.forEach((input) => {
    dataList.fields[input.id] = input.value
  })

  return dataList
}

async function postFormData() {
  const response = await fetch('https://js-camp-star-wars-default-rtdb.firebaseio.com/swapi/people.json', {
    method: 'POST',
    body: JSON.stringify(dataCollector())
  })
}