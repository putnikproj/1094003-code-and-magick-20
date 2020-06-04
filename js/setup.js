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

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var possibleWizardProperties = {
  'names': ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  'surnames': ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  'coatColors': ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  'eyesColors': ['black', 'red', 'blue', 'yellow', 'green']
};

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
