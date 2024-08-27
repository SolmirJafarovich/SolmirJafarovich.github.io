System.register(["./application.js"], function (_export, _context) {
  "use strict";

  var Application, application;
  function topLevelImport(url) {
    return System["import"](url);
  }
  return {
    setters: [function (_applicationJs) {
      Application = _applicationJs.Application;
    }],
    execute: function () {
      application = new Application();
      topLevelImport('cc').then(function (engine) {
        return application.init(engine);
      }).then(function () {
        return application.start();
      })["catch"](function (err) {
        console.error(err);
      });
    }
  };
  window.addEventListener('resize', resizeGame);

  function resizeGame() {
      const canvas = document.getElementById('GameCanvas');
      const gameDiv = document.getElementById('GameDiv');
  
      canvas.width = gameDiv.clientWidth;
      canvas.height = gameDiv.clientHeight;
  }
  
  // Вызовите функцию resizeGame сразу после загрузки страницы, чтобы убедиться, что игра правильно инициализирована
  resizeGame();
});
