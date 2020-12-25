
const section = document.querySelectorAll('section');
const navBar = document.querySelector('nav');
const ul = document.querySelector('#navbar_list')
let ticking = false;

/* creating nav*/
section.forEach(item => {
    const newLink = document.createElement('li');
    const secData = item.dataset.nav;
    newLink.innerHTML = `<a href="#${secData}" class="navbar__link">${secData}</a>`;
    ul.appendChild(newLink);
})

function selectActive() {
    section.forEach(item =>{
        const poz = item.getBoundingClientRect().top;
        console.log(poz)
        if (poz >=0 && poz < 300) {
            item.classList.add('active');
            removeActive(item.id);
            selectNavActive(item.id);
        }
    })
}

function removeActive(e){
    section.forEach(item => {
        if(item.id == e){
            
        } else {
            item.classList.remove('active');
        }
    })
    if(e == 'plastic'){
        navBar.classList.remove('sticky')
    } else {
        navBar.classList.add('sticky')
    }
}

const ulList = document.querySelectorAll('li');

function selectNavActive(e){
    ulList.forEach(item => {
        if(item.textContent == e){
            item.classList.add('active_nav');
        } else {
            item.classList.remove('active_nav');
        }
    })
   
}

document.addEventListener('scroll', function(e) {
  if (!ticking) {
    window.requestAnimationFrame(function() {
      selectActive();
      ticking = false;
    });
    ticking = true;
  }
});