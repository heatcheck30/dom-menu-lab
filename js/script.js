//So this HW is slighly outdated since they used var, but you shouldn't!! 

// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '/catalog'},
  {text: 'orders', href: '/orders'},
  {text: 'account', href: '/account'},
];


// Task 1.0

const mainEl = document.querySelector('main');

console.log(mainEl);


// Task 1.1

mainEl.style.backgroundColor = 'var(--main-bg)'


// Task 1.2

mainEl.innerHTML = '<h1>SEIR Rocks!</h1>';

// Task 1.3 ADD CLASS

mainEl.classList.add('flex-ctr')

// Task 2.0
var topMenuEl = document.getElementById('top-menu')

// Task 2.1
topMenuEl.style.height = '100%'

// Task 2.2

topMenuEl.style.background = 'var(--top-menu-bg)'

// Task 2.3

topMenuEl.classList.add('flex-around')

// Task 3.0


// Task 3.1
for(let i = 0; i < menuLinks.length; i++){
  
const element = document.createElement('a')
element.href = menuLinks[i]['href']
element.text = menuLinks[i]['text']
topMenuEl.appendChild(element)
}