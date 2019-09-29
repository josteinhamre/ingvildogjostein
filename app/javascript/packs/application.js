import "bootstrap";

let homeTab = document.getElementById("homeTab");
let home = document.getElementById("home");
let infoTab = document.getElementById("infoTab");
let info = document.getElementById("info");
let wishlistTab = document.getElementById("wishlistTab");
let wishlist = document.getElementById("wishlist");
let contactTab = document.getElementById("contactTab");
let contact = document.getElementById("contact");


// console.log(homeTab)
// console.log(home)
// console.log(infoTab)
// console.log(info)
// console.log(wishlistTab)
// console.log(wishlist)
// console.log(contactTab)
// console.log(contact)

const selectTab = () => {
  homeTab.addEventListener("click", (event) => {
    home.classList.add('active')
    homeTab.classList.add('active-tab')
    info.classList.remove('active')
    infoTab.classList.remove('active-tab')
    wishlist.classList.remove('active')
    wishlistTab.classList.remove('active-tab')
    contact.classList.remove('active')
    contactTab.classList.remove('active-tab')
  });

  infoTab.addEventListener("click", (event) => {
    home.classList.remove('active')
    homeTab.classList.remove('active-tab')
    info.classList.add('active')
    infoTab.classList.add('active-tab')
    wishlist.classList.remove('active')
    wishlistTab.classList.remove('active-tab')
    contact.classList.remove('active')
    contactTab.classList.remove('active-tab')
  });

  wishlistTab.addEventListener("click", (event) => {
    home.classList.remove('active')
    homeTab.classList.remove('active-tab')
    info.classList.remove('active')
    infoTab.classList.remove('active-tab')
    wishlist.classList.add('active')
    wishlistTab.classList.add('active-tab')
    contact.classList.remove('active')
    contactTab.classList.remove('active-tab')
  });

  contactTab.addEventListener("click", (event) => {
    home.classList.remove('active')
    homeTab.classList.remove('active-tab')
    info.classList.remove('active')
    infoTab.classList.remove('active-tab')
    wishlist.classList.remove('active')
    wishlistTab.classList.remove('active-tab')
    contact.classList.add('active')
    contactTab.classList.add('active-tab')
  });
};

selectTab()
