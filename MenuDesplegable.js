document.getElementById('toggleDropdown').addEventListener('click', function() {
    var dropdown = document.getElementById('dropdownMenu');
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
      dropdown.style.display = 'block';
    } else {
      dropdown.style.display = 'none';  
    }
  });