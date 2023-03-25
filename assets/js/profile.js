const user = localStorage.getItem('USER_DATA')
if (!user) {
  window.location.href = 'home.html'
} else {
  const { name, email } = JSON.parse(user)
  const h3 = document.getElementById('user-profile')
  h3.innerHTML = `Welcome<br>${name}`
}

const signOut = document.querySelector('#sign-out')

signOut.addEventListener('click', () => {
  clearLocalStorage()
  window.location.href = 'index.html'
})

const clearLocalStorage = () => {
  localStorage.removeItem('AUTH_TOKEN')
  localStorage.removeItem('USER_DATA')
}
