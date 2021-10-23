const linksSocialMedia = {
  github: 'luccaraphae',
  discord: 'luccaraphae#3029',
  instagram: 'miixangel',
  linkedin: 'in/luccaraphae',
  twitter: 'Miixangel'
}

function changeSocialMediaLinks() {
  for (let li of socialMedia.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userLink.href = data.html_url
      bioProfile.textContent = data.bio
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getProfileInfos()
