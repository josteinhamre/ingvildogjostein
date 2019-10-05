import "bootstrap";

let tablinks = document.querySelectorAll(".tablinks");
let tabcontent = document.querySelectorAll(".tabcontent");



tablinks.forEach ((tab) => {
  tab.addEventListener("click", (event) => {
    document.querySelectorAll('.active').forEach ((active) => {
      active.classList.remove('active');
    });
    event.target.classList.add('active');
    document.getElementById(event.target.dataset.tab).classList.add('active');
      if (event.target.dataset.tab == 'info') {
    document.documentElement.scrollTop = 0;
    };
  });

});
