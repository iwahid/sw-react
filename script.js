/*  Event interception. */
const form = document.getElementById('form')
form.addEventListener("submit", function formHandler(e) {
  e.preventDefault()
  postFormData()
})

/* Collection data from HTML form. */
function formDataCollector() {
  const formData = new FormData(form)

  const dataList = {
    fields: {},
    model: 'resourse.people'
  }

  /* Fill the object with data from the form. */
  formData.forEach((value, key) => (dataList.fields[key] = value || "udefined"))

  return dataList
}

function postFormData() {
  fetch('https://js-camp-star-wars-default-rtdb.firebaseio.com/swapi/people.json', {
    method: 'POST',
    body: JSON.stringify(formDataCollector())
  })
}