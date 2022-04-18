// selectors
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

// functions
//
const openModal = function () {
  modal.classList.remove('hidden1');
  overlay.classList.remove('hidden1');
  console.log('button ');
};

const closeModal = function () {
  modal.classList.add('hidden1');
  overlay.classList.add('hidden1');
};

//
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden1')) {
    closeModal();
    //   console.log(e.key);
  }
});
