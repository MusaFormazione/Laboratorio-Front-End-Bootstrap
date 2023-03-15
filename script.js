let zoomedImg = document.querySelector('#zoomed-img');
const galleryModal = document.querySelector('#gallery-modal');
galleryModal.addEventListener('show.bs.modal', event => {
  const button = event.relatedTarget;
  const photo = button.getAttribute('data-bs-photo');
  zoomedImg.setAttribute('src', `img/${photo}.jpg`);
})

let themeSwitch = document.querySelector('#flexSwitchCheck');
themeSwitch.addEventListener('click', function() {
  themeSwitch.checked ? setTheme('dark') : setTheme('light');
})

function setTheme(theme) {
  document.documentElement.setAttribute('data-bs-theme', theme);
}