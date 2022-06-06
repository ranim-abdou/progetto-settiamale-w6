var checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function() {
   if(this.checked) {
      document.documentElement.setAttribute('select-theme', 'dark');
   } else {
      document.documentElement.setAttribute('select-theme', 'light');
   }
});

