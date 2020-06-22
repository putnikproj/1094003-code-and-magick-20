'use strict';

(function () {
  var onWindowKeydown = function (evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closePopup();
    }
  };

  var onOpenPopupKeydown = function (evt) {
    if (evt.key === 'Enter') {
      openPopup();
    }
  };

  var onClosePopupKeydown = function (evt) {
    if (evt.key === 'Enter') {
      closePopup();
    }
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onWindowKeydown);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onWindowKeydown);
  };

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');

  setupOpen.addEventListener('click', openPopup);
  setupOpen.addEventListener('keydown', onOpenPopupKeydown);

  setupClose.addEventListener('click', closePopup);
  setupClose.addEventListener('keydown', onClosePopupKeydown);

  window.customization.addEventListeners();
  window.similarWizards.render();
})();
