'use strict';

var WIZARDS_AMOUNT = 4;

var getRandomNumber = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max + 1);
  return Math.floor(Math.random() * (max - min)) + min;
};

var createWizards = function (possibleWizardProperties, wizardsAmount) {
  wizards = [];
  for (var i = 0; i < wizardsAmount; i++) {
    wizards[i] = {
      'name': possibleWizardProperties.names[getRandomNumber(0, possibleWizardProperties.names.length - 1)] + ' ' + possibleWizardProperties.surnames[getRandomNumber(0, possibleWizardProperties.surnames.length - 1)],
      'coatColor': possibleWizardProperties.coatColors[getRandomNumber(0, possibleWizardProperties.coatColors.length - 1)],
      'eyesColor': possibleWizardProperties.eyesColors[getRandomNumber(0, possibleWizardProperties.eyesColors.length - 1)]
    };
  }
  return wizards;
};

var generateWizard = function (templateElement, wizardProperties) {
  var element = templateElement.cloneNode(true);

  element.querySelector('.setup-similar-label').textContent = wizardProperties.name;
  element.querySelector('.wizard-coat').style.fill = wizardProperties.coatColor;
  element.querySelector('.wizard-eyes').style.fill = wizardProperties.eyesColor;

  return element;
};

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
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

var changeSetup = function (thingToChange, input, preoperty) {
  if (thingToChange.tagName === 'use') {
    thingToChange.style.fill = preoperty;
  } else {
    thingToChange.style.backgroundColor = preoperty;
  }
  input.value = preoperty;
};

var possibleWizardProperties = {
  'names': ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  'surnames': ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  'coatColors': ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  'eyesColors': ['black', 'red', 'blue', 'yellow', 'green']
};

var possibleFireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var wizards = createWizards(possibleWizardProperties, WIZARDS_AMOUNT);

var setupSimilar = document.querySelector('.setup-similar');
var setupSimilarList = setupSimilar.querySelector('.setup-similar-list');
var newWizard = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var fragment = document.createDocumentFragment();

for (var i = 0; i < WIZARDS_AMOUNT; i++) {
  fragment.appendChild(generateWizard(newWizard, wizards[i]));
}

setupSimilarList.appendChild(fragment);
setupSimilar.classList.remove('hidden');

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});


var setupWizard = document.querySelector('.setup-wizard');

var setupWizardCoat = setupWizard.querySelector('.wizard-coat');
var setupWizardCoatInput = document.querySelector('#coat-color');
var setupWizardCurrentCoat = changeSetupCounter(possibleWizardProperties.coatColors.length - 1);
setupWizardCoat.addEventListener('click', function () {
  changeSetup(setupWizardCoat, setupWizardCoatInput, possibleWizardProperties.coatColors[setupWizardCurrentCoat()]);
});

var setupWizardEyes = setupWizard.querySelector('.wizard-eyes');
var setupWizardEyesInput = document.querySelector('#eyes-color');
var setupWizardCurrentEye = changeSetupCounter(possibleWizardProperties.eyesColors.length - 1);
setupWizardEyes.addEventListener('click', function () {
  changeSetup(setupWizardEyes, setupWizardEyesInput, possibleWizardProperties.eyesColors[setupWizardCurrentEye()]);
});

var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
var setupFireballWrapInput = document.querySelector('#fireball-color');
var setupCurrentFireballWrap = changeSetupCounter(possibleFireballColor.length - 1);
setupFireballWrap.addEventListener('click', function () {
  changeSetup(setupFireballWrap, setupFireballWrapInput, possibleFireballColor[setupCurrentFireballWrap()]);
});
