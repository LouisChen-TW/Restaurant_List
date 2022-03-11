// const submitButton = document.querySelector('#submitButton')
const form = document.querySelector('#form')
const imgUrl = document.querySelector('#image')

form.addEventListener(
  'submit',
  function (event) {
    if (!form.checkValidity() || !isImage(imgUrl.value)) {
      event.preventDefault()
      event.stopPropagation()
    }
    form.classList.add('was-validated')
  },
  false
)

function isImage(url) {
  return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url)
}
