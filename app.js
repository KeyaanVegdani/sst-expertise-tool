const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  users.forEach(user => {
    const isVisible =
      user.name.toLowerCase().includes(value) ||
      user.dire.toLowerCase().includes(value)
    user.element.classList.toggle("hide", !isVisible)
  })
})

fetch("experts.json")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")
      const title = card.querySelector("[data-title]")
      const email = card.querySelector("[data-email]")
      const img = card.querySelector("[data-img]")
      const dir = card.querySelector("[data-directorate]")
      const exp = card.querySelector("[data-expertise]")
      const proj = card.querySelector("[data-project")
      const supervisor = card.querySelector("[data-supervisor]")
      var nam = user.first + " " + user.last;
      header.textContent = nam
      body.textContent = user.biography
      title.textContent = user.title
      email.href = user.email
      img.src = user.photo
      dir.textContent = " ∎ " + user.directorate
      // supervisor.textContent = "Supervisor:" + " " + user.supervisor
      exp.textContent = " ∎ " + user.expertise
      proj.textContent = " ∎ " + user.project

      userCardContainer.append(card)
      return { name: nam, dire: user.directorate, proje: user.project, element: card }
    })
  })


function setDirectorate(input){
    const value = input.toLowerCase();
    users.forEach(user => {
        const isVisible =
            user.dire.toLowerCase().includes(value)
        user.element.classList.toggle("hide", !isVisible)
    })
    console.log(value);
}

function setProject(input){
  const value = input.toLowerCase();
  users.forEach(user => {
      const isVisible =
          user.proje.toLowerCase().includes(value)
      user.element.classList.toggle("hide", !isVisible)
  })
  console.log(value);
}

function setAllVisible(){
    users.forEach(user => {
        const isVisible = true;
        user.element.classList.toggle("hide", !isVisible)
    })
    console.log(value);
}