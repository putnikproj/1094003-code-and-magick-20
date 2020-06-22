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

  var createErrorBlock = function (errorMessage) {
    var errorBlock = document.createElement('div');
    errorBlock.textContent = errorMessage;
    errorBlock.style.width = '700px';
    errorBlock.style.minHeight = '65px';
    errorBlock.style.backgroundColor = 'white';
    errorBlock.style.color = 'black';
    errorBlock.style.border = '2px solid black';
    errorBlock.style.borderRadius = '5px';
    errorBlock.style.position = 'absolute';
    errorBlock.style.textAlign = 'center';
    errorBlock.style.boxSizing = 'border-box';
    errorBlock.style.padding = '20px';
    errorBlock.style.top = '10px';
    errorBlock.style.left = '50%';
    errorBlock.style.marginLeft = '-350px';
    return errorBlock;
  };

  var renderRequestError = function (errorMessage) {
    document.body.appendChild(createErrorBlock(errorMessage));
  };

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');

  setupOpen.addEventListener('click', openPopup);
  setupOpen.addEventListener('keydown', onOpenPopupKeydown);

  setupClose.addEventListener('click', closePopup);
  setupClose.addEventListener('keydown', onClosePopupKeydown);

  window.customization.addEventListeners();
  window.backend.load(window.similarWizards.render, renderRequestError);

  var setupForm = document.querySelector('.setup-wizard-form');
  setupForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(setupForm), closePopup, renderRequestError);
  });
})();
