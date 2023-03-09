const toggleBtn = document.getElementById('nav-toggle')
const menue = document.getElementById('nav-right')

toggleBtn.addEventListener('click' , ()=>{
  menue.classList.toggle('active')
})
