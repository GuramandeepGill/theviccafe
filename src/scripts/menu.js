document.getElementById('hamburger').onclick = function() {
   this.classList.toggle('expanded');
   document.getElementById('nav-links').classList.toggle('expanded');
}