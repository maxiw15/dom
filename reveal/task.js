const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal_active');
    } else {
      entry.target.classList.remove('reveal_active');
    }
  });
});

Array.from(document.querySelectorAll('.reveal')).forEach(element => observer.observe(element));
