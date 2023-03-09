const hiframe = document.getElementById("hiframe");
const dropdownBtn = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');
const dropdown = document.querySelector('.dropdown');

dropdownBtn.addEventListener('click', function() {
  dropdown.classList.toggle('active');
});

