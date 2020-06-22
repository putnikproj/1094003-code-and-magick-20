'use strict';

(function () {
  var generateSimilarWizard = function (preoperties) {
    var element = wizardTemplate.cloneNode(true);

    element.querySelector('.setup-similar-label').textContent = preoperties.name;
    element.querySelector('.wizard-coat').style.fill = preoperties.coatColor;
    element.querySelector('.wizard-eyes').style.fill = preoperties.eyesColor;

    return element;
  };

  var renderSimilarWizards = function () {
    for (var i = 0; i < window.constants.WIZARDS_AMOUNT; i++) {
      fragment.appendChild(generateSimilarWizard(similarWizards[i]));
    }

    setupSimilarList.appendChild(fragment);
    setupSimilar.classList.remove('hidden');
  };

  var similarWizards = window.data.createWizards();

  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var fragment = document.createDocumentFragment();

  var setupSimilar = document.querySelector('.setup-similar');
  var setupSimilarList = setupSimilar.querySelector('.setup-similar-list');

  window.similarWizards = {
    render: renderSimilarWizards
  };
})();
