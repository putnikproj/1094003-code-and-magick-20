'use strict';

(function () {
  var getRandomNumber = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max + 1);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  var createWizards = function () {
    var wizards = [];
    var possible = window.customization.possibleWizardProperties;
    for (var i = 0; i < window.constants.WIZARDS_AMOUNT; i++) {
      wizards[i] = {
        'name': possible.names[getRandomNumber(0, possible.names.length - 1)] + ' ' + possible.surnames[getRandomNumber(0, possible.surnames.length - 1)],
        'coatColor': possible.coatColors[getRandomNumber(0, possible.coatColors.length - 1)],
        'eyesColor': possible.eyesColors[getRandomNumber(0, possible.eyesColors.length - 1)]
      };
    }
    return wizards;
  };

  window.data = {
    createWizards: createWizards
  };
})();
