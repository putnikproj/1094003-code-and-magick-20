'use strict';

(function () {
  var generateSimilarWizard = function (preoperties) {
    var element = wizardTemplate.cloneNode(true);

    element.querySelector('.setup-similar-label').textContent = preoperties.name;
    element.querySelector('.wizard-coat').style.fill = preoperties.colorCoat;
    element.querySelector('.wizard-eyes').style.fill = preoperties.colorEyes;

    return element;
  };

  var renderSimilarWizards = function (similarWizards) {
    var similarWizardsNums = [];

    for (var i = 0; i < similarWizards.length; i++) {
      similarWizardsNums[i] = i;
    }

    for (i = 0; i < window.constants.WIZARDS_AMOUNT; i++) {
      var num = window.data.getRandomNumber(0, similarWizards.length - 1 - i);
      fragment.appendChild(generateSimilarWizard(similarWizards[similarWizardsNums[num]]));
      similarWizardsNums.splice(num, 1);
    }

    setupSimilarList.appendChild(fragment);
    setupSimilar.classList.remove('hidden');
  };

  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var fragment = document.createDocumentFragment();

  var setupSimilar = document.querySelector('.setup-similar');
  var setupSimilarList = setupSimilar.querySelector('.setup-similar-list');

  window.similarWizards = {
    render: renderSimilarWizards
  };
})();
