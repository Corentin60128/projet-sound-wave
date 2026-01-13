const burger = document.querySelector('.burger');
  const navMenu = document.querySelector('nav ul');

  // Créer les 3 spans du burger
  for (let i = 0; i < 3; i++) {
    const span = document.createElement('span');
    burger.appendChild(span);
  }

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Ferme le menu quand on clique sur un lien
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });