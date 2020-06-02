'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var EDGE_GAP = 20;
var FONT_SIZE = 16;
var FONT_GAP = 5;
var COLUMN_WIDTH = 40;
var COLUMN_GAP = 50;
var BAR_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = FONT_SIZE + 'px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + EDGE_GAP, CLOUD_Y + EDGE_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + EDGE_GAP, CLOUD_Y + EDGE_GAP + FONT_SIZE + FONT_GAP);

  var maxTime = getMaxElement(times);

  ctx.textBaseline = 'bottom';

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + COLUMN_GAP * (i + 1) + COLUMN_WIDTH * i, CLOUD_Y + CLOUD_HEIGHT - EDGE_GAP);

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + Math.random() * 100 + '%, 50%)';
    }

    var columnHeight = ((BAR_HEIGHT * times[i]) / maxTime) - FONT_SIZE;
    var columnY = CLOUD_Y + CLOUD_HEIGHT - (EDGE_GAP + FONT_SIZE + FONT_GAP * 2 + columnHeight);
    var columnX = CLOUD_X + COLUMN_GAP * (i + 1) + COLUMN_WIDTH * i;

    ctx.fillRect(columnX, columnY, COLUMN_WIDTH, columnHeight);

    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), columnX, columnY - FONT_GAP);
  }
};
