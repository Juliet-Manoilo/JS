// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"homework1.js":[function(require,module,exports) {
/* Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!»  */
document.getElementById('task1').onclick = function func() {
  const userName = prompt('What is your name?');
  alert(`Hello, ${userName}!`);
};
/* Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. 
Текущий год укажите в коде как константу. */


document.getElementById('task2').onclick = function func() {
  const currentYear = 2020;
  const userYearBirth = Number(prompt('Year of your birth?'));
  const userAge = currentYear - userYearBirth;
  alert(`Your age is  ${userAge}`);
};
/* Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.  */


document.getElementById('task3').onclick = function func() {
  const perimeter = 4;
  const userLength = Number(prompt('Length of your square side?'));
  const userPerimeter = userLength * perimeter;
  alert(`Perimeter of your square is  ${userPerimeter}`);
};
/* Запросите у пользователя радиус окружности и выведите площадь такой окружности.  */


document.getElementById('task4').onclick = function func() {
  const pi = 3.14;
  const userRadius = Number(prompt('Put the radius'));
  const circleArea = userRadius * 2 * pi;
  alert(`Area of your circle is  ${circleArea}`);
};
/* Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. 
Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.  */


document.getElementById('task5').onclick = function func() {
  const userDistance = Number(prompt('Put the distance between A and B in km'));
  const userTime = Number(prompt('How many hours do you want to spent on this travel?'));
  const userSpeed = userDistance / userTime;
  alert(`You should move with a speed  ${userSpeed} km/hour`);
};
/* Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.  */


document.getElementById('task6').onclick = function func() {
  const currentExchange = 0.85;
  const userUsdQuantity = Number(prompt('How much money do you want to exchange USD to Euro?'));
  const userEuroAmount = currentExchange * userUsdQuantity;
  alert(`You will have  ${userEuroAmount}  EURO`);
};
/* Пользователь указывает объем флешки в Гб. Программа должна посчитать, сколько файлов размером в 820 Мб помещается на флешку.  */


document.getElementById('task7').onclick = function func() {
  const gigabyte = 1024;
  const file = 820;
  const userCard = Number(prompt('How many gigabytes contain your card?'));
  const userFilesQuantity = userCard * gigabyte / file;
  alert(`Your card storage can contain   ${userFilesQuantity}  files per 820 Mb`);
};
/* Пользователь вводит сумму денег в кошельке и цену одной шоколадки. 
Программа выводит, сколько шоколадок может купить пользователь, и сколько сдачи у него останется.  */


document.getElementById('task8').onclick = function func() {
  const userMoney = Number(prompt('How much money do you want to spent on chokolate bars?'));
  const barPrice = Number(prompt('How much money does chokolate bar costs?'));
  const userChocolate = userMoney / barPrice;
  const oddMoney = userMoney % barPrice;
  alert(`You can buy  ${userChocolate} chocolate bars and your odd money is  ${oddMoney}`);
};
/* Запросите у пользователя трехзначное число и выведите его задом наперед. 
Для решения задачи вам понадобится оператор % (остаток от деления).  */


document.getElementById('task9').onclick = function func() {
  const userNumber = Number(prompt('Put any number'));
  let x = userNumber;
  let revers = 0;

  while (x > 0) {
    const y = x % 10;
    revers = revers * 10 + y;
    x = parseInt(x / 10);
  }

  let numberContrary = revers;
  alert(`Your number on the contrary is  ${numberContrary}`);
};
/* Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. 
Вывести сумму начисленных процентов. */


document.getElementById('task10').onclick = function func() {
  const userCash = Number(prompt('How much money do you want to put on deposit?'));
  const bankYearPercent = 5;
  const monthsPerYear = 12;
  const twoMonthPercent = bankYearPercent / monthsPerYear * 2;
  const userSummary = userCash + twoMonthPercent;
  const userEarning = userCash * twoMonthPercent / 100;
  alert(`You will earn  ${userEarning}  for 2 months`);
};
},{}],"homework2.js":[function(require,module,exports) {
/* LESSON JS-2: Типи даних та оператори
Запросить у пользователя его возраст и определить, кем он является: 
ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...). */
document.getElementById('task11').onclick = function func() {
  const userAge2 = Number(prompt('How old are you?'));

  switch (true) {
    case userAge2 < 2:
      alert('You are a baby');
      break;

    case userAge2 > 2 && userAge2 < 12:
      alert('You are a children');
      break;

    case userAge2 > 12 && userAge2 < 18:
      alert('You are a teenager');
      break;

    case userAge2 > 18 && userAge2 < 60:
      alert('You are adult');
      break;

    case userAge2 > 60:
      alert('You are old');
      break;

    default:
      break;
  }
};
/* Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д). */


document.getElementById('task12').onclick = function func() {
  const userSymbol = Number(prompt('Put any number from 0 to 9'));

  switch (userSymbol) {
    case 0:
      alert('Your symbol is )');
      break;

    case 1:
      alert('Your symbol is !');
      break;

    case 2:
      alert('Your symbol is @');
      break;

    case 3:
      alert('Your symbol is #');
      break;

    case 4:
      alert('Your symbol is $');
      break;

    case 5:
      alert('Your symbol is %');
      break;

    case 6:
      alert('Your symbol is ^');
      break;

    case 7:
      alert('Your symbol is &');
      break;

    case 8:
      alert('Your symbol is *');
      break;

    case 9:
      alert('Your symbol is (');
      break;

    default:
      break;
  }
};
/* Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры. */


document.getElementById('task13').onclick = function func() {
  const userNumber2 = Number(prompt('Put any three-digit number'));
  const number1 = parseInt(userNumber2 / 100);
  const number2 = parseInt(userNumber2 / 10) % 10;
  const number3 = userNumber2 % 10;
  if (number1 === number2 || number2 === number3 || number1 === number3) alert('The same numbers were found');else alert('The same numbers were not found');
};
/* Запросить у пользователя год и проверить, високосный он или нет. 
Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.*/


document.getElementById('task14').onclick = function func() {
  const userYear = Number(prompt('Put any year'));
  if (userYear % 4 === 0 && userYear % 100 != 0 || userYear % 400 == 0) alert('This year is leap');else alert('This year is not leap');
};
/*Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.*/


document.getElementById('task15').onclick = function func() {
  const userNumber3 = Number(prompt('Put any five-digits number'));
};
},{}],"index.js":[function(require,module,exports) {
"use strict";

var obj = _interopRequireWildcard(require("./homework1.js"));

var a = _interopRequireWildcard(require("./homework2.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
},{"./homework1.js":"homework1.js","./homework2.js":"homework2.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56347" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/js.e31bb0bc.js.map