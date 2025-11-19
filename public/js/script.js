// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

// User Menu Dropdown Toggle
document.addEventListener('DOMContentLoaded', function() {
  const userMenuToggles = document.querySelectorAll('.user-menu-toggle');

  userMenuToggles.forEach(userMenuToggle => {
    const userDropdown = userMenuToggle.nextElementSibling;
    
    if (userDropdown && userDropdown.classList.contains('user-dropdown')) {
      // Toggle dropdown on click
      userMenuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        // Close all other dropdowns
        document.querySelectorAll('.user-dropdown.show').forEach(dropdown => {
          if (dropdown !== userDropdown) {
            dropdown.classList.remove('show');
          }
        });
        userDropdown.classList.toggle('show');
      });

      // Close dropdown when clicking on a dropdown item
      const dropdownItems = userDropdown.querySelectorAll('.dropdown-item');
      dropdownItems.forEach(item => {
        item.addEventListener('click', function() {
          // Close dropdown after a short delay to allow navigation
          setTimeout(() => {
            userDropdown.classList.remove('show');
          }, 100);
        });
      });
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.user-menu-toggle') && !e.target.closest('.user-dropdown')) {
      document.querySelectorAll('.user-dropdown.show').forEach(dropdown => {
        dropdown.classList.remove('show');
      });
    }
  });
});