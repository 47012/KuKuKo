
document.addEventListener('DOMContentLoaded', function() {
  const dropdownBtn = document.querySelector('.dropbtn');
  const dropdownContent = document.querySelector('.dropdown-content');
  const dropdown = document.querySelector('.dropdown');

  dropdownBtn.addEventListener('click', function() {
    dropdown.classList.toggle('active');
  });

  // Close dropdown when user clicks outside of it
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.dropdown')) {
      dropdown.classList.remove('active');
    }
  });
});