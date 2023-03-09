const hiframe = document.getElementById("hiframe");
const dropdownBtn = hiframe.contentDocument.querySelector('.dropbtn');
const dropdownContent = hiframe.contentDocument.querySelector('.dropdown-content');
const dropdown = hiframe.contentDocument.querySelector('.dropdown');

dropdownBtn.addEventListener('click', function() {
  dropdown.classList.toggle('active');
});


