'use strict';

(function () {
  var changeSetup = function (thingToChange, input, preoperty) {
    if (thingToChange.tagName === 'use') {
      thingToChange.style.fill = preoperty;
    } else {
      thingToChange.style.backgroundColor = preoperty;
    }
    input.value = preoperty;
  };

  var changeSetupCounter = function (maxCount) {
    var count = 0;

    return function () {
      if (count === maxCount) {
        count = 0;
      } else {
        count++;
      }
      return count;
    };
  };

  var addEventListenersOnCustomization = function () {
    setupWizardPreoperties.coat.element.addEventListener('click', function () {
      changeSetup(setupWizardPreoperties.coat.element, setupWizardPreoperties.coat.input, possibleWizardProperties.coatColors[setupWizardPreoperties.coat.current()]);
    });

    setupWizardPreoperties.eyes.element.addEventListener('click', function () {
      changeSetup(setupWizardPreoperties.eyes.element, setupWizardPreoperties.eyes.input, possibleWizardProperties.eyesColors[setupWizardPreoperties.eyes.current()]);
    });

    setupWizardPreoperties.fireball.element.addEventListener('click', function () {
      changeSetup(setupWizardPreoperties.fireball.element, setupWizardPreoperties.fireball.input, possibleFireballColor[setupWizardPreoperties.fireball.current()]);
    });
  };

  var possibleWizardProperties = {
    'names': ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    'surnames': ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
    'coatColors': ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    'eyesColors': ['black', 'red', 'blue', 'yellow', 'green']
  };

  var possibleFireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];


  var setupWizard = document.querySelector('.setup-wizard');

  var setupWizardPreoperties = {
    coat: {
      element: setupWizard.querySelector('.wizard-coat'),
      input: document.querySelector('#coat-color'),
      current: changeSetupCounter(possibleWizardProperties.coatColors.length - 1)
    },
    eyes: {
      element: setupWizard.querySelector('.wizard-eyes'),
      input: document.querySelector('#eyes-color'),
      current: changeSetupCounter(possibleWizardProperties.eyesColors.length - 1)
    },
    fireball: {
      element: document.querySelector('.setup-fireball-wrap'),
      input: document.querySelector('#fireball-color'),
      current: changeSetupCounter(possibleFireballColor.length - 1)
    }
  };

  window.customization = {
    possibleWizardProperties: possibleWizardProperties,
    addEventListeners: addEventListenersOnCustomization
  };
})();
