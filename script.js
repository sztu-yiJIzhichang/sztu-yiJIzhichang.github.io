const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('#main-nav');

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const filterButtons = document.querySelectorAll('[data-filter]');
const storyCards = document.querySelectorAll('[data-category]');
const emptyState = document.querySelector('.empty-state');

function applyFilter(category) {
  let visibleCount = 0;
  filterButtons.forEach((button) => button.classList.toggle('active', button.dataset.filter === category));
  storyCards.forEach((card) => {
    const visible = category === '全部' || card.dataset.category === category;
    card.hidden = !visible;
    if (visible) visibleCount += 1;
  });
  emptyState.hidden = visibleCount !== 0;
}

filterButtons.forEach((button) => button.addEventListener('click', () => applyFilter(button.dataset.filter)));
document.querySelectorAll('[data-filter-link]').forEach((link) => link.addEventListener('click', () => applyFilter(link.dataset.filterLink)));
