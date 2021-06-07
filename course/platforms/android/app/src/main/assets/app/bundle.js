require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../node_modules/@nativescript/webpack/helpers/style-hot-loader.js!../node_modules/@nativescript/webpack/helpers/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\nActionBar {\n    background-color: #53ba82;\n    color: #ffffff;\n}\n.app{\n  background-color: #333333;\n}\n.message {\n    text-align: left;\n    font-size: 20;\n    margin-left: 30px;\n}\n.btn {\n   font-size: 18;\n   vertical-align: center;\n   text-align: center;\n   height: 160px;\n   border-radius: 30%;\n   background-color: #cf7200;\n}\n.input{\n  background-color: #FF8C00;\n  border-radius: 10%;\n  color: #000000;\n  margin: 50px 30px;\n  text-align: center;\n  vertical-align: center;\n  font-size: 20;\n}\n.setting{\n  background: no-repeat #c46c00 center url(\"~/assets/images/setting.png\");\n  border-radius: 40%;\n}\n", "",{"version":3,"sources":["webpack://./../components/App.vue"],"names":[],"mappings":";AAgGA;IACA,yBAAA;IACA,cAAA;AACA;AACA;EACA,yBAAA;AACA;AAEA;IACA,gBAAA;IACA,aAAA;IACA,iBAAA;AACA;AAEA;GACA,aAAA;GACA,sBAAA;GACA,kBAAA;GACA,aAAA;GACA,kBAAA;GACA,yBAAA;AACA;AAEA;EACA,yBAAA;EACA,kBAAA;EACA,cAAA;EACA,iBAAA;EACA,kBAAA;EACA,sBAAA;EACA,aAAA;AACA;AAEA;EACA,uEAAA;EACA,kBAAA;AACA","sourcesContent":["<template>\n  <Page class = \"app\">\n    <ActionBar title=\"Поиск кабинета\"/>\n    <GridLayout columns=\"5*,2*\" rows=\"*,auto,auto,*,auto,auto\">\n      <Label text=\"кабинет:\" class=\"message\"  row=\"1\" col=\"0\"/>\n      <Label text=\"корпус:\" class=\"message\" row=\"1\" col=\"1\"/>\n      <TextField keyboardType=\"number\" class=\"input\" v-model=\"cabinet\" hint=\"кабинет\" row=\"2\" col=\"0\" />\n      <TextField keyboardType=\"number\" class=\"input\" v-model=\"corps\" hint=\"корпус\" row=\"2\" col=\"1\" @returnPress='request' />\n      <Button class='btn' @tap='request' row=\"4\" col=\"0\" text=\"найти\"/> \n      <Button class='btn setting' @tap='setUrl' row=\"4\" col=\"1\" /> \n      <Button class='btn' @tap='closeApp' row=\"5\" text=\"выход\" colSpan=\"2\"/> \n    </GridLayout>\n  </Page>\n</template>\n\n<script>\nimport page2 from './page2';\nimport * as application from \"@nativescript/core/application\";\nimport { Http } from '@nativescript/core'\n\n   export default {\n    data() {\n      return {\n        url: 'http://192.168.1.50:8000/',\n        cabinet: '',\n        corps: '',\n      }\n    },\n    methods:{\n      search: function(event){\n        this.$showModal(page2, {\n          fullscreen: true,\n        })\n      },\n      closeApp() {\n        if (application.android) {\n          application.android.foregroundActivity.finish();\n        } else {\n          exit(0);\n        }\n      },\n      request(){\n        const id = this.cabinet.slice(0,3) + this.corps.slice(0,1) \n        console.log(`Id: ${id}`)\n\n        console.log(`Get request ${this.url + id}`)\n        Http.request({\n          url: this.url + id,\n          method: 'get'\n        }).then(\n          (response) => {\n            if (response.statusCode != 200){\n              alert({ \n                  title: \"Ошибка\",\n                  message: \"Кабинет не найден\",\n                  okButtonText: \"OK\"})  \n            }\n            else{\n              console.log(`Получение результата:`)\n              const content = response.content.toJSON()\n              this.$store.commit('changeId', content.id);\n              this.$store.commit('changeX', content.x);\n              this.$store.commit('changeY', content.y);\n              this.$store.commit('changeImg', content.info);\n              console.log(`x: ${this.$store.state.x} y: ${this.$store.state.y} \n                          id: ${this.$store.state.id} img: ${this.$store.state.img}`)\n              this.search();\n            }\n          },\n          (e) => {\n            console.log(`Ошибка ${e}`);\n             alert({ \n                  title: \"Ошибка\",\n                  message: \"Проверьте соединение с интернетом\",\n                  okButtonText: \"OK\"})\n          }\n        )\n      },\n      setUrl(){\n        prompt({\n          title: \"Настройки\",\n          message: \"Введите адрес сервера:\",\n          okButtonText: \"ок\",\n          cancelButtonText: \"отмена\",\n          defaultText: this.url,\n        }).then(result => {\n          console.log(`Set url: ${result.result}, url: ${result.text}`)\n          this.url = result.text;\n          this.correctionX();\n        });\n      },\n    }\n  }\n</script>\n\n<style>\n    ActionBar {\n        background-color: #53ba82;\n        color: #ffffff;\n    }\n    .app{\n      background-color: #333333;\n    }\n\n    .message {\n        text-align: left;\n        font-size: 20;\n        margin-left: 30px;\n    }\n\n    .btn {\n       font-size: 18;\n       vertical-align: center;\n       text-align: center;\n       height: 160px;\n       border-radius: 30%;\n       background-color: #cf7200;\n    }\n\n    .input{\n      background-color: #FF8C00;\n      border-radius: 10%;\n      color: #000000;\n      margin: 50px 30px;\n      text-align: center;\n      vertical-align: center;\n      font-size: 20;\n    }\n\n    .setting{\n      background: no-repeat #c46c00 center url(\"~/assets/images/setting.png\");\n      border-radius: 40%;\n    }\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);

    const { Application } = __webpack_require__("../node_modules/@nativescript/core/index.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

    if (___CSS_LOADER_EXPORT___ && typeof ___CSS_LOADER_EXPORT___.forEach === "function") {
        ___CSS_LOADER_EXPORT___.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                Application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/App.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/@nativescript/webpack/helpers/style-hot-loader.js!../node_modules/@nativescript/webpack/helpers/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/page2.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n.app{\n    background-color: #333333;\n}\n.message {\n        vertical-align: center;\n        text-align: center;\n        font-size: 20;\n        color: #dfd7d7;\n}\n.btn {\n       font-size: 25;\n       text-align: center;\n       height: 200px;\n       margin: 50px 70px;\n       padding: 50px;\n       border-radius: 40%;\n       background-color: #cf7200;\n}\n.mark {\n    background-color: crimson;\n    height: 50px;\n    width: 50px;\n    text-align: center;\n    vertical-align: center;\n    border-radius: 100%;\n    border: thick double #0400ff;\n    font-size: 20;\n}\n.image {\n    width: 1080px; \n    height: auto;\n}\n", "",{"version":3,"sources":["webpack://./../components/page2.vue"],"names":[],"mappings":";AA8BA;IACA,yBAAA;AACA;AACA;QACA,sBAAA;QACA,kBAAA;QACA,aAAA;QACA,cAAA;AACA;AACA;OACA,aAAA;OACA,kBAAA;OACA,aAAA;OACA,iBAAA;OACA,aAAA;OACA,kBAAA;OACA,yBAAA;AACA;AACA;IACA,yBAAA;IACA,YAAA;IACA,WAAA;IACA,kBAAA;IACA,sBAAA;IACA,mBAAA;IACA,4BAAA;IACA,aAAA;AACA;AACA;IACA,aAAA;IACA,YAAA;AACA","sourcesContent":["<template actionBarHidden=\"true\">\r\n<Page class=\"app\">\r\n<StackLayout>\r\n<GridLayout rows=\"*,auto\">\r\n    <AbsoluteLayout row=\"0\">\r\n      <Image :src=this.$store.state.img class=\"image\" stretch=\"none\" top=\"\" left=\"0\" />\r\n      <Label text=\".\" class=\"mark\" :top='this.$store.state.y' :left='this.$store.state.x' />\r\n    </AbsoluteLayout>\r\n    <Button class='btn' @tap='goback' row=\"1\" text=\"назад\"/> \r\n</GridLayout>\r\n</StackLayout>\r\n</Page> \r\n</template>\r\n\r\n<script>\r\nimport App from './App';\r\n\r\n   export default {\r\n    methods:{\r\n      goback: function(event){\r\n        this.$showModal(App, {\r\n          fullscreen: true,\r\n        })\r\n      }\r\n      \r\n    }\r\n  }\r\n</script>\r\n\r\n<style>\r\n    .app{\r\n    background-color: #333333;\r\n}\r\n.message {\r\n        vertical-align: center;\r\n        text-align: center;\r\n        font-size: 20;\r\n        color: #dfd7d7;\r\n    }   \r\n .btn {\r\n       font-size: 25;\r\n       text-align: center;\r\n       height: 200px;\r\n       margin: 50px 70px;\r\n       padding: 50px;\r\n       border-radius: 40%;\r\n       background-color: #cf7200;\r\n    }  \r\n  .mark {\r\n    background-color: crimson;\r\n    height: 50px;\r\n    width: 50px;\r\n    text-align: center;\r\n    vertical-align: center;\r\n    border-radius: 100%;\r\n    border: thick double #0400ff;\r\n    font-size: 20;\r\n  }\r\n  .image {\r\n    width: 1080px; \r\n    height: auto;\r\n  }\r\n</style>\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);

    const { Application } = __webpack_require__("../node_modules/@nativescript/core/index.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

    if (___CSS_LOADER_EXPORT___ && typeof ___CSS_LOADER_EXPORT___.forEach === "function") {
        ___CSS_LOADER_EXPORT___.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                Application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/page2.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/page2.vue");
/* harmony import */ var _nativescript_core_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/application/index.js");
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/core/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      url: 'http://192.168.1.50:8000/',
      cabinet: '',
      corps: ''
    };
  },

  methods: {
    search: function search(event) {
      this.$showModal(_page2__WEBPACK_IMPORTED_MODULE_0__["default"], {
        fullscreen: true
      });
    },

    closeApp() {
      if (_nativescript_core_application__WEBPACK_IMPORTED_MODULE_1__["android"]) {
        _nativescript_core_application__WEBPACK_IMPORTED_MODULE_1__["android"].foregroundActivity.finish();
      } else {
        exit(0);
      }
    },

    request() {
      var id = this.cabinet.slice(0, 3) + this.corps.slice(0, 1);
      console.log("Id: ".concat(id));
      console.log("Get request ".concat(this.url + id));
      _nativescript_core__WEBPACK_IMPORTED_MODULE_2__["Http"].request({
        url: this.url + id,
        method: 'get'
      }).then(response => {
        if (response.statusCode != 200) {
          alert({
            title: "Ошибка",
            message: "Кабинет не найден",
            okButtonText: "OK"
          });
        } else {
          console.log("\u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430:");
          var content = response.content.toJSON();
          this.$store.commit('changeId', content.id);
          this.$store.commit('changeX', content.x);
          this.$store.commit('changeY', content.y);
          this.$store.commit('changeImg', content.info);
          console.log("x: ".concat(this.$store.state.x, " y: ").concat(this.$store.state.y, " \n                          id: ").concat(this.$store.state.id, " img: ").concat(this.$store.state.img));
          this.search();
        }
      }, e => {
        console.log("\u041E\u0448\u0438\u0431\u043A\u0430 ".concat(e));
        alert({
          title: "Ошибка",
          message: "Проверьте соединение с интернетом",
          okButtonText: "OK"
        });
      });
    },

    setUrl() {
      prompt({
        title: "Настройки",
        message: "Введите адрес сервера:",
        okButtonText: "ок",
        cancelButtonText: "отмена",
        defaultText: this.url
      }).then(result => {
        console.log("Set url: ".concat(result.result, ", url: ").concat(result.text));
        this.url = result.text;
        this.correctionX();
      });
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/page2.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/App.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    goback: function goback(event) {
      this.$showModal(_App__WEBPACK_IMPORTED_MODULE_0__["default"], {
        fullscreen: true
      });
    }
  }
});

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=template&id=45ba5ed4&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { staticClass: "app" },
    [
      _c("ActionBar", { attrs: { title: "Поиск кабинета" } }),
      _c(
        "GridLayout",
        { attrs: { columns: "5*,2*", rows: "*,auto,auto,*,auto,auto" } },
        [
          _c("Label", {
            staticClass: "message",
            attrs: { text: "кабинет:", row: "1", col: "0" }
          }),
          _c("Label", {
            staticClass: "message",
            attrs: { text: "корпус:", row: "1", col: "1" }
          }),
          _c("TextField", {
            staticClass: "input",
            attrs: {
              keyboardType: "number",
              hint: "кабинет",
              row: "2",
              col: "0"
            },
            model: {
              value: _vm.cabinet,
              callback: function($event) {
                _vm.cabinet = $event.object["text"]
              },
              expression: "cabinet"
            }
          }),
          _c("TextField", {
            staticClass: "input",
            attrs: {
              keyboardType: "number",
              hint: "корпус",
              row: "2",
              col: "1"
            },
            on: { returnPress: _vm.request },
            model: {
              value: _vm.corps,
              callback: function($event) {
                _vm.corps = $event.object["text"]
              },
              expression: "corps"
            }
          }),
          _c("Button", {
            staticClass: "btn",
            attrs: { row: "4", col: "0", text: "найти" },
            on: { tap: _vm.request }
          }),
          _c("Button", {
            staticClass: "btn setting",
            attrs: { row: "4", col: "1" },
            on: { tap: _vm.setUrl }
          }),
          _c("Button", {
            staticClass: "btn",
            attrs: { row: "5", text: "выход", colSpan: "2" },
            on: { tap: _vm.closeApp }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/page2.vue?vue&type=template&id=8017fc50&actionBarHidden=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { staticClass: "app" },
    [
      _c(
        "StackLayout",
        [
          _c(
            "GridLayout",
            { attrs: { rows: "*,auto" } },
            [
              _c(
                "AbsoluteLayout",
                { attrs: { row: "0" } },
                [
                  _c("Image", {
                    staticClass: "image",
                    attrs: {
                      src: this.$store.state.img,
                      stretch: "none",
                      top: "",
                      left: "0"
                    }
                  }),
                  _c("Label", {
                    staticClass: "mark",
                    attrs: {
                      text: ".",
                      top: this.$store.state.y,
                      left: this.$store.state.x
                    }
                  })
                ],
                1
              ),
              _c("Button", {
                staticClass: "btn",
                attrs: { row: "1", text: "назад" },
                on: { tap: _vm.goback }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.scss": "./app.scss"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.scss": "./app.scss",
	"./main.js": "./main.js",
	"./store.js": "./store.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app.scss":
/***/ (function(module, exports) {

throw new Error("Module build failed (from ../node_modules/sass-loader/dist/cjs.js):\nSassError: Can't find stylesheet to import.\n  ╷\n3 │ @import '~@nativescript/theme/core';\n  │         ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  ╵\n  src\\app.scss 3:9  root stylesheet");

/***/ }),

/***/ "./components/App.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_45ba5ed4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/App.vue?vue&type=template&id=45ba5ed4&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/App.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_45ba5ed4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_45ba5ed4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('45ba5ed4')) {
      api.createRecord('45ba5ed4', component.options)
    } else {
      api.reload('45ba5ed4', component.options)
    }
    module.hot.accept("./components/App.vue?vue&type=template&id=45ba5ed4&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _App_vue_vue_type_template_id_45ba5ed4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/App.vue?vue&type=template&id=45ba5ed4&");
(function () {
      api.rerender('45ba5ed4', {
        render: _App_vue_vue_type_template_id_45ba5ed4___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _App_vue_vue_type_template_id_45ba5ed4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/App.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/App.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_webpack_helpers_style_hot_loader_js_node_modules_nativescript_webpack_helpers_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/webpack/helpers/style-hot-loader.js!../node_modules/@nativescript/webpack/helpers/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=style&index=0&lang=css&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./components/App.vue?vue&type=template&id=45ba5ed4&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_45ba5ed4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=template&id=45ba5ed4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_45ba5ed4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_45ba5ed4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/page2.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page2_vue_vue_type_template_id_8017fc50_actionBarHidden_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/page2.vue?vue&type=template&id=8017fc50&actionBarHidden=true&");
/* harmony import */ var _page2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/page2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _page2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/page2.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _page2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _page2_vue_vue_type_template_id_8017fc50_actionBarHidden_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _page2_vue_vue_type_template_id_8017fc50_actionBarHidden_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('8017fc50')) {
      api.createRecord('8017fc50', component.options)
    } else {
      api.reload('8017fc50', component.options)
    }
    module.hot.accept("./components/page2.vue?vue&type=template&id=8017fc50&actionBarHidden=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _page2_vue_vue_type_template_id_8017fc50_actionBarHidden_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/page2.vue?vue&type=template&id=8017fc50&actionBarHidden=true&");
(function () {
      api.rerender('8017fc50', {
        render: _page2_vue_vue_type_template_id_8017fc50_actionBarHidden_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _page2_vue_vue_type_template_id_8017fc50_actionBarHidden_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/page2.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/page2.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_page2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/page2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_page2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/page2.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_webpack_helpers_style_hot_loader_js_node_modules_nativescript_webpack_helpers_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_page2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/webpack/helpers/style-hot-loader.js!../node_modules/@nativescript/webpack/helpers/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/page2.vue?vue&type=style&index=0&lang=css&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./components/page2.vue?vue&type=template&id=8017fc50&actionBarHidden=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_page2_vue_vue_type_template_id_8017fc50_actionBarHidden_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/page2.vue?vue&type=template&id=8017fc50&actionBarHidden=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_page2_vue_vue_type_template_id_8017fc50_actionBarHidden_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_page2_vue_vue_type_template_id_8017fc50_actionBarHidden_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./main.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _nativescript_core_bundle_entry_points__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/App.vue");
/* harmony import */ var nativescript_vue_devtools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-vue-devtools/dist/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./store.js");

        const isAndroid = __webpack_require__("../node_modules/@nativescript/core/index.js").isAndroid;
        if (isAndroid && !global["__snapshot"]) {
            __webpack_require__("../node_modules/@nativescript/core/ui/frame/index.js");
__webpack_require__("../node_modules/@nativescript/core/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/@nativescript/webpack/helpers/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/@nativescript/webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        
        



if (true) {
  nativescript_vue__WEBPACK_IMPORTED_MODULE_1___default.a.use(nativescript_vue_devtools__WEBPACK_IMPORTED_MODULE_3__["default"]);
}

 // Prints Vue logs when --env.production is *NOT* set while building

nativescript_vue__WEBPACK_IMPORTED_MODULE_1___default.a.config.silent = "development" === 'production';
new nativescript_vue__WEBPACK_IMPORTED_MODULE_1___default.a({
  store: _store__WEBPACK_IMPORTED_MODULE_4__["default"],
  render: h => h('frame', [h(_components_App__WEBPACK_IMPORTED_MODULE_2__["default"])])
}).$start();
    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/vuex/dist/vuex.esm.js");


vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  state: {
    x: '897px',
    y: '924px',
    img: '~/assets/maps/22.png',
    id: '2287',
    correctX: -20,
    correctY: -20
  },
  mutations: {
    changeX(state, newX) {
      state.x = newX + state.correctX + 'px';
    },

    changeY(state, newY) {
      state.y = newY + state.correctY + 'px';
    },

    changeImg(state, newImg) {
      state.img = '~/assets/maps/' + newImg;
    },

    changeId(state, newId) {
      state.url = newId;
    },

    correctionX(state, corX) {
      state.correctX = corX;
    },

    correctionY(state, corY) {
      state.correctY = corY;
    }

  },
  actions: {}
}));

/***/ }),

/***/ "~/package.json":
/***/ (function(module, exports) {

module.exports = require("~/package.json");

/***/ })

},[["./main.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/MTlmNiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2UyLnZ1ZT8zZTE3Iiwid2VicGFjazovLy9jb21wb25lbnRzL0FwcC52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvcGFnZTIudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwLnZ1ZT83YjBlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZTIudnVlPzNlNGYiLCJ3ZWJwYWNrOi8vLy4gc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2FwcFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJCIsIndlYnBhY2s6Ly8vXFxiX1tcXHctXSpcXC4pc2NzcykkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/OWUyMyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/ODMzZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/YjM3NyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2UyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2UyLnZ1ZT85ZjkwIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZTIudnVlPzUzNGUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlMi52dWU/N2RiYSIsIndlYnBhY2s6Ly8vLi9tYWluLmpzIiwid2VicGFjazovLy8uL3N0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIn4vcGFja2FnZS5qc29uXCIiXSwibmFtZXMiOlsiQXBwIiwiVnVlRGV2dG9vbHMiLCJUTlNfRU5WIiwiVnVlIiwidXNlIiwic3RvcmUiLCJjb25maWciLCJzaWxlbnQiLCJyZW5kZXIiLCJoIiwiVnVleCIsIlN0b3JlIiwic3RhdGUiLCJ4IiwieSIsImltZyIsImlkIiwiY29ycmVjdFgiLCJjb3JyZWN0WSIsIm11dGF0aW9ucyIsImNoYW5nZVgiLCJuZXdYIiwiY2hhbmdlWSIsIm5ld1kiLCJjaGFuZ2VJbWciLCJuZXdJbWciLCJjaGFuZ2VJZCIsIm5ld0lkIiwidXJsIiwiY29ycmVjdGlvblgiLCJjb3JYIiwiY29ycmVjdGlvblkiLCJjb3JZIiwiYWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN5SDtBQUM3QjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsc0dBQXFDO0FBQy9GO0FBQ0EsOEJBQThCLFFBQVMsZ0JBQWdCLGdDQUFnQyxxQkFBcUIsR0FBRyxPQUFPLDhCQUE4QixHQUFHLFlBQVksdUJBQXVCLG9CQUFvQix3QkFBd0IsR0FBRyxRQUFRLG1CQUFtQiw0QkFBNEIsd0JBQXdCLG1CQUFtQix3QkFBd0IsK0JBQStCLEdBQUcsU0FBUyw4QkFBOEIsdUJBQXVCLG1CQUFtQixzQkFBc0IsdUJBQXVCLDJCQUEyQixrQkFBa0IsR0FBRyxXQUFXLDhFQUE4RSx1QkFBdUIsR0FBRyxTQUFTLG9GQUFvRixNQUFNLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsZzRCQUFnNEIsa0VBQWtFLFVBQVUsT0FBTyxpREFBaUQsY0FBYyxnQkFBZ0IsOEZBQThGLE9BQU8sZ0JBQWdCLGdDQUFnQyxrQ0FBa0Msd0NBQXdDLFVBQVUscUJBQXFCLG9DQUFvQyw0REFBNEQsV0FBVyxPQUFPLG9CQUFvQixXQUFXLFNBQVMsbUJBQW1CLGtHQUFrRyxHQUFHLHlDQUF5QyxjQUFjLDBCQUEwQixtRUFBbUUsa0NBQWtDLDhDQUE4Qyx1QkFBdUIsbUlBQW1JLGtCQUFrQixtQkFBbUIsd0tBQXdLLHlEQUF5RCx5REFBeUQsOERBQThE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QU4sR0FBVVMsSUFBSSxHQUFDWCxLQUFLLENBQUNNLFFBQVgsR0FBc0IsSUFBaEM7QUFDRCxLQU5ROztBQU9UTSxhQUFTLENBQUNaLEtBQUQsRUFBUWEsTUFBUixFQUFlO0FBQ3RCYixXQUFLLENBQUNHLEdBQU4sR0FBWSxtQkFBbUJVLE1BQS9CO0FBQ0QsS0FUUTs7QUFVVEMsWUFBUSxDQUFDZCxLQUFELEVBQVFlLEtBQVIsRUFBYztBQUNwQmYsV0FBSyxDQUFDZ0IsR0FBTixHQUFZRCxLQUFaO0FBQ0QsS0FaUTs7QUFhVEUsZUFBVyxDQUFDakIsS0FBRCxFQUFRa0IsSUFBUixFQUFhO0FBQ3RCbEIsV0FBSyxDQUFDSyxRQUFOLEdBQWlCYSxJQUFqQjtBQUNELEtBZlE7O0FBZ0JUQyxlQUFXLENBQUNuQixLQUFELEVBQU9vQixJQUFQLEVBQVk7QUFDckJwQixXQUFLLENBQUNNLFFBQU4sR0FBaUJjLElBQWpCO0FBQ0Q7O0FBbEJRLEdBVGlCO0FBNkI1QkMsU0FBTyxFQUFFO0FBN0JtQixDQUFmLENBQWYsRTs7Ozs7OztBQ0xBLDJDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuQWN0aW9uQmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUzYmE4MjtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxufVxcbi5hcHB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xcbn1cXG4ubWVzc2FnZSB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbn1cXG4uYnRuIHtcXG4gICBmb250LXNpemU6IDE4O1xcbiAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgIGhlaWdodDogMTYwcHg7XFxuICAgYm9yZGVyLXJhZGl1czogMzAlO1xcbiAgIGJhY2tncm91bmQtY29sb3I6ICNjZjcyMDA7XFxufVxcbi5pbnB1dHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjhDMDA7XFxuICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIG1hcmdpbjogNTBweCAzMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjA7XFxufVxcbi5zZXR0aW5ne1xcbiAgYmFja2dyb3VuZDogbm8tcmVwZWF0ICNjNDZjMDAgY2VudGVyIHVybChcXFwifi9hc3NldHMvaW1hZ2VzL3NldHRpbmcucG5nXFxcIik7XFxuICBib3JkZXItcmFkaXVzOiA0MCU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLy4uL2NvbXBvbmVudHMvQXBwLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBZ0dBO0lBQ0EseUJBQUE7SUFDQSxjQUFBO0FBQ0E7QUFDQTtFQUNBLHlCQUFBO0FBQ0E7QUFFQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLGlCQUFBO0FBQ0E7QUFFQTtHQUNBLGFBQUE7R0FDQSxzQkFBQTtHQUNBLGtCQUFBO0dBQ0EsYUFBQTtHQUNBLGtCQUFBO0dBQ0EseUJBQUE7QUFDQTtBQUVBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBQ0E7QUFFQTtFQUNBLHVFQUFBO0VBQ0Esa0JBQUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICA8UGFnZSBjbGFzcyA9IFxcXCJhcHBcXFwiPlxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCLQn9C+0LjRgdC6INC60LDQsdC40L3QtdGC0LBcXFwiLz5cXG4gICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiNSosMipcXFwiIHJvd3M9XFxcIiosYXV0byxhdXRvLCosYXV0byxhdXRvXFxcIj5cXG4gICAgICA8TGFiZWwgdGV4dD1cXFwi0LrQsNCx0LjQvdC10YI6XFxcIiBjbGFzcz1cXFwibWVzc2FnZVxcXCIgIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIwXFxcIi8+XFxuICAgICAgPExhYmVsIHRleHQ9XFxcItC60L7RgNC/0YPRgTpcXFwiIGNsYXNzPVxcXCJtZXNzYWdlXFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCIvPlxcbiAgICAgIDxUZXh0RmllbGQga2V5Ym9hcmRUeXBlPVxcXCJudW1iZXJcXFwiIGNsYXNzPVxcXCJpbnB1dFxcXCIgdi1tb2RlbD1cXFwiY2FiaW5ldFxcXCIgaGludD1cXFwi0LrQsNCx0LjQvdC10YJcXFwiIHJvdz1cXFwiMlxcXCIgY29sPVxcXCIwXFxcIiAvPlxcbiAgICAgIDxUZXh0RmllbGQga2V5Ym9hcmRUeXBlPVxcXCJudW1iZXJcXFwiIGNsYXNzPVxcXCJpbnB1dFxcXCIgdi1tb2RlbD1cXFwiY29ycHNcXFwiIGhpbnQ9XFxcItC60L7RgNC/0YPRgVxcXCIgcm93PVxcXCIyXFxcIiBjb2w9XFxcIjFcXFwiIEByZXR1cm5QcmVzcz0ncmVxdWVzdCcgLz5cXG4gICAgICA8QnV0dG9uIGNsYXNzPSdidG4nIEB0YXA9J3JlcXVlc3QnIHJvdz1cXFwiNFxcXCIgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCLQvdCw0LnRgtC4XFxcIi8+IFxcbiAgICAgIDxCdXR0b24gY2xhc3M9J2J0biBzZXR0aW5nJyBAdGFwPSdzZXRVcmwnIHJvdz1cXFwiNFxcXCIgY29sPVxcXCIxXFxcIiAvPiBcXG4gICAgICA8QnV0dG9uIGNsYXNzPSdidG4nIEB0YXA9J2Nsb3NlQXBwJyByb3c9XFxcIjVcXFwiIHRleHQ9XFxcItCy0YvRhdC+0LRcXFwiIGNvbFNwYW49XFxcIjJcXFwiLz4gXFxuICAgIDwvR3JpZExheW91dD5cXG4gIDwvUGFnZT5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuaW1wb3J0IHBhZ2UyIGZyb20gJy4vcGFnZTInO1xcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gXFxcIkBuYXRpdmVzY3JpcHQvY29yZS9hcHBsaWNhdGlvblxcXCI7XFxuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSdcXG5cXG4gICBleHBvcnQgZGVmYXVsdCB7XFxuICAgIGRhdGEoKSB7XFxuICAgICAgcmV0dXJuIHtcXG4gICAgICAgIHVybDogJ2h0dHA6Ly8xOTIuMTY4LjEuNTA6ODAwMC8nLFxcbiAgICAgICAgY2FiaW5ldDogJycsXFxuICAgICAgICBjb3JwczogJycsXFxuICAgICAgfVxcbiAgICB9LFxcbiAgICBtZXRob2RzOntcXG4gICAgICBzZWFyY2g6IGZ1bmN0aW9uKGV2ZW50KXtcXG4gICAgICAgIHRoaXMuJHNob3dNb2RhbChwYWdlMiwge1xcbiAgICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxcbiAgICAgICAgfSlcXG4gICAgICB9LFxcbiAgICAgIGNsb3NlQXBwKCkge1xcbiAgICAgICAgaWYgKGFwcGxpY2F0aW9uLmFuZHJvaWQpIHtcXG4gICAgICAgICAgYXBwbGljYXRpb24uYW5kcm9pZC5mb3JlZ3JvdW5kQWN0aXZpdHkuZmluaXNoKCk7XFxuICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICBleGl0KDApO1xcbiAgICAgICAgfVxcbiAgICAgIH0sXFxuICAgICAgcmVxdWVzdCgpe1xcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLmNhYmluZXQuc2xpY2UoMCwzKSArIHRoaXMuY29ycHMuc2xpY2UoMCwxKSBcXG4gICAgICAgIGNvbnNvbGUubG9nKGBJZDogJHtpZH1gKVxcblxcbiAgICAgICAgY29uc29sZS5sb2coYEdldCByZXF1ZXN0ICR7dGhpcy51cmwgKyBpZH1gKVxcbiAgICAgICAgSHR0cC5yZXF1ZXN0KHtcXG4gICAgICAgICAgdXJsOiB0aGlzLnVybCArIGlkLFxcbiAgICAgICAgICBtZXRob2Q6ICdnZXQnXFxuICAgICAgICB9KS50aGVuKFxcbiAgICAgICAgICAocmVzcG9uc2UpID0+IHtcXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSAhPSAyMDApe1xcbiAgICAgICAgICAgICAgYWxlcnQoeyBcXG4gICAgICAgICAgICAgICAgICB0aXRsZTogXFxcItCe0YjQuNCx0LrQsFxcXCIsXFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXFxcItCa0LDQsdC40L3QtdGCINC90LUg0L3QsNC50LTQtdC9XFxcIixcXG4gICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFxcXCJPS1xcXCJ9KSAgXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGVsc2V7XFxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhg0J/QvtC70YPRh9C10L3QuNC1INGA0LXQt9GD0LvRjNGC0LDRgtCwOmApXFxuICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gcmVzcG9uc2UuY29udGVudC50b0pTT04oKVxcbiAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdjaGFuZ2VJZCcsIGNvbnRlbnQuaWQpO1xcbiAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdjaGFuZ2VYJywgY29udGVudC54KTtcXG4gICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnY2hhbmdlWScsIGNvbnRlbnQueSk7XFxuICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2NoYW5nZUltZycsIGNvbnRlbnQuaW5mbyk7XFxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgeDogJHt0aGlzLiRzdG9yZS5zdGF0ZS54fSB5OiAke3RoaXMuJHN0b3JlLnN0YXRlLnl9IFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICR7dGhpcy4kc3RvcmUuc3RhdGUuaWR9IGltZzogJHt0aGlzLiRzdG9yZS5zdGF0ZS5pbWd9YClcXG4gICAgICAgICAgICAgIHRoaXMuc2VhcmNoKCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICAoZSkgPT4ge1xcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGDQntGI0LjQsdC60LAgJHtlfWApO1xcbiAgICAgICAgICAgICBhbGVydCh7IFxcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcXFwi0J7RiNC40LHQutCwXFxcIixcXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcXFwi0J/RgNC+0LLQtdGA0YzRgtC1INGB0L7QtdC00LjQvdC10L3QuNC1INGBINC40L3RgtC10YDQvdC10YLQvtC8XFxcIixcXG4gICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFxcXCJPS1xcXCJ9KVxcbiAgICAgICAgICB9XFxuICAgICAgICApXFxuICAgICAgfSxcXG4gICAgICBzZXRVcmwoKXtcXG4gICAgICAgIHByb21wdCh7XFxuICAgICAgICAgIHRpdGxlOiBcXFwi0J3QsNGB0YLRgNC+0LnQutC4XFxcIixcXG4gICAgICAgICAgbWVzc2FnZTogXFxcItCS0LLQtdC00LjRgtC1INCw0LTRgNC10YEg0YHQtdGA0LLQtdGA0LA6XFxcIixcXG4gICAgICAgICAgb2tCdXR0b25UZXh0OiBcXFwi0L7QulxcXCIsXFxuICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFxcXCLQvtGC0LzQtdC90LBcXFwiLFxcbiAgICAgICAgICBkZWZhdWx0VGV4dDogdGhpcy51cmwsXFxuICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XFxuICAgICAgICAgIGNvbnNvbGUubG9nKGBTZXQgdXJsOiAke3Jlc3VsdC5yZXN1bHR9LCB1cmw6ICR7cmVzdWx0LnRleHR9YClcXG4gICAgICAgICAgdGhpcy51cmwgPSByZXN1bHQudGV4dDtcXG4gICAgICAgICAgdGhpcy5jb3JyZWN0aW9uWCgpO1xcbiAgICAgICAgfSk7XFxuICAgICAgfSxcXG4gICAgfVxcbiAgfVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG4gICAgQWN0aW9uQmFyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1M2JhODI7XFxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgfVxcbiAgICAuYXBwe1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XFxuICAgIH1cXG5cXG4gICAgLm1lc3NhZ2Uge1xcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcXG4gICAgfVxcblxcbiAgICAuYnRuIHtcXG4gICAgICAgZm9udC1zaXplOiAxODtcXG4gICAgICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICBoZWlnaHQ6IDE2MHB4O1xcbiAgICAgICBib3JkZXItcmFkaXVzOiAzMCU7XFxuICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjZjcyMDA7XFxuICAgIH1cXG5cXG4gICAgLmlucHV0e1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjhDMDA7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTAlO1xcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xcbiAgICAgIG1hcmdpbjogNTBweCAzMHB4O1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIH1cXG5cXG4gICAgLnNldHRpbmd7XFxuICAgICAgYmFja2dyb3VuZDogbm8tcmVwZWF0ICNjNDZjMDAgY2VudGVyIHVybChcXFwifi9hc3NldHMvaW1hZ2VzL3NldHRpbmcucG5nXFxcIik7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNDAlO1xcbiAgICB9XFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuXG4gICAgY29uc3QgeyBBcHBsaWNhdGlvbiB9ID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZVwiKTtcbiAgICByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAoX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gJiYgdHlwZW9mIF9fX0NTU19MT0FERVJfRVhQT1JUX19fLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBfX19DU1NfTE9BREVSX0VYUE9SVF9fXy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9BcHAudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5hcHB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XFxufVxcbi5tZXNzYWdlIHtcXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBmb250LXNpemU6IDIwO1xcbiAgICAgICAgY29sb3I6ICNkZmQ3ZDc7XFxufVxcbi5idG4ge1xcbiAgICAgICBmb250LXNpemU6IDI1O1xcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgIGhlaWdodDogMjAwcHg7XFxuICAgICAgIG1hcmdpbjogNTBweCA3MHB4O1xcbiAgICAgICBwYWRkaW5nOiA1MHB4O1xcbiAgICAgICBib3JkZXItcmFkaXVzOiA0MCU7XFxuICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjZjcyMDA7XFxufVxcbi5tYXJrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBib3JkZXI6IHRoaWNrIGRvdWJsZSAjMDQwMGZmO1xcbiAgICBmb250LXNpemU6IDIwO1xcbn1cXG4uaW1hZ2Uge1xcbiAgICB3aWR0aDogMTA4MHB4OyBcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi8uLi9jb21wb25lbnRzL3BhZ2UyLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBOEJBO0lBQ0EseUJBQUE7QUFDQTtBQUNBO1FBQ0Esc0JBQUE7UUFDQSxrQkFBQTtRQUNBLGFBQUE7UUFDQSxjQUFBO0FBQ0E7QUFDQTtPQUNBLGFBQUE7T0FDQSxrQkFBQTtPQUNBLGFBQUE7T0FDQSxpQkFBQTtPQUNBLGFBQUE7T0FDQSxrQkFBQTtPQUNBLHlCQUFBO0FBQ0E7QUFDQTtJQUNBLHlCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7SUFDQSw0QkFBQTtJQUNBLGFBQUE7QUFDQTtBQUNBO0lBQ0EsYUFBQTtJQUNBLFlBQUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGUgYWN0aW9uQmFySGlkZGVuPVxcXCJ0cnVlXFxcIj5cXHJcXG48UGFnZSBjbGFzcz1cXFwiYXBwXFxcIj5cXHJcXG48U3RhY2tMYXlvdXQ+XFxyXFxuPEdyaWRMYXlvdXQgcm93cz1cXFwiKixhdXRvXFxcIj5cXHJcXG4gICAgPEFic29sdXRlTGF5b3V0IHJvdz1cXFwiMFxcXCI+XFxyXFxuICAgICAgPEltYWdlIDpzcmM9dGhpcy4kc3RvcmUuc3RhdGUuaW1nIGNsYXNzPVxcXCJpbWFnZVxcXCIgc3RyZXRjaD1cXFwibm9uZVxcXCIgdG9wPVxcXCJcXFwiIGxlZnQ9XFxcIjBcXFwiIC8+XFxyXFxuICAgICAgPExhYmVsIHRleHQ9XFxcIi5cXFwiIGNsYXNzPVxcXCJtYXJrXFxcIiA6dG9wPSd0aGlzLiRzdG9yZS5zdGF0ZS55JyA6bGVmdD0ndGhpcy4kc3RvcmUuc3RhdGUueCcgLz5cXHJcXG4gICAgPC9BYnNvbHV0ZUxheW91dD5cXHJcXG4gICAgPEJ1dHRvbiBjbGFzcz0nYnRuJyBAdGFwPSdnb2JhY2snIHJvdz1cXFwiMVxcXCIgdGV4dD1cXFwi0L3QsNC30LDQtFxcXCIvPiBcXHJcXG48L0dyaWRMYXlvdXQ+XFxyXFxuPC9TdGFja0xheW91dD5cXHJcXG48L1BhZ2U+IFxcclxcbjwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuPHNjcmlwdD5cXHJcXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJztcXHJcXG5cXHJcXG4gICBleHBvcnQgZGVmYXVsdCB7XFxyXFxuICAgIG1ldGhvZHM6e1xcclxcbiAgICAgIGdvYmFjazogZnVuY3Rpb24oZXZlbnQpe1xcclxcbiAgICAgICAgdGhpcy4kc2hvd01vZGFsKEFwcCwge1xcclxcbiAgICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxcclxcbiAgICAgICAgfSlcXHJcXG4gICAgICB9XFxyXFxuICAgICAgXFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c3R5bGU+XFxyXFxuICAgIC5hcHB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XFxyXFxufVxcclxcbi5tZXNzYWdlIHtcXHJcXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIwO1xcclxcbiAgICAgICAgY29sb3I6ICNkZmQ3ZDc7XFxyXFxuICAgIH0gICBcXHJcXG4gLmJ0biB7XFxyXFxuICAgICAgIGZvbnQtc2l6ZTogMjU7XFxyXFxuICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgICAgbWFyZ2luOiA1MHB4IDcwcHg7XFxyXFxuICAgICAgIHBhZGRpbmc6IDUwcHg7XFxyXFxuICAgICAgIGJvcmRlci1yYWRpdXM6IDQwJTtcXHJcXG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NmNzIwMDtcXHJcXG4gICAgfSAgXFxyXFxuICAubWFyayB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG4gICAgYm9yZGVyOiB0aGljayBkb3VibGUgIzA0MDBmZjtcXHJcXG4gICAgZm9udC1zaXplOiAyMDtcXHJcXG4gIH1cXHJcXG4gIC5pbWFnZSB7XFxyXFxuICAgIHdpZHRoOiAxMDgwcHg7IFxcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICB9XFxyXFxuPC9zdHlsZT5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuXG4gICAgY29uc3QgeyBBcHBsaWNhdGlvbiB9ID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZVwiKTtcbiAgICByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAoX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gJiYgdHlwZW9mIF9fX0NTU19MT0FERVJfRVhQT1JUX19fLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBfX19DU1NfTE9BREVSX0VYUE9SVF9fXy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9wYWdlMi52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsIjx0ZW1wbGF0ZT5cbiAgPFBhZ2UgY2xhc3MgPSBcImFwcFwiPlxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XCLQn9C+0LjRgdC6INC60LDQsdC40L3QtdGC0LBcIi8+XG4gICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIjUqLDIqXCIgcm93cz1cIiosYXV0byxhdXRvLCosYXV0byxhdXRvXCI+XG4gICAgICA8TGFiZWwgdGV4dD1cItC60LDQsdC40L3QtdGCOlwiIGNsYXNzPVwibWVzc2FnZVwiICByb3c9XCIxXCIgY29sPVwiMFwiLz5cbiAgICAgIDxMYWJlbCB0ZXh0PVwi0LrQvtGA0L/Rg9GBOlwiIGNsYXNzPVwibWVzc2FnZVwiIHJvdz1cIjFcIiBjb2w9XCIxXCIvPlxuICAgICAgPFRleHRGaWVsZCBrZXlib2FyZFR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImlucHV0XCIgdi1tb2RlbD1cImNhYmluZXRcIiBoaW50PVwi0LrQsNCx0LjQvdC10YJcIiByb3c9XCIyXCIgY29sPVwiMFwiIC8+XG4gICAgICA8VGV4dEZpZWxkIGtleWJvYXJkVHlwZT1cIm51bWJlclwiIGNsYXNzPVwiaW5wdXRcIiB2LW1vZGVsPVwiY29ycHNcIiBoaW50PVwi0LrQvtGA0L/Rg9GBXCIgcm93PVwiMlwiIGNvbD1cIjFcIiBAcmV0dXJuUHJlc3M9J3JlcXVlc3QnIC8+XG4gICAgICA8QnV0dG9uIGNsYXNzPSdidG4nIEB0YXA9J3JlcXVlc3QnIHJvdz1cIjRcIiBjb2w9XCIwXCIgdGV4dD1cItC90LDQudGC0LhcIi8+IFxuICAgICAgPEJ1dHRvbiBjbGFzcz0nYnRuIHNldHRpbmcnIEB0YXA9J3NldFVybCcgcm93PVwiNFwiIGNvbD1cIjFcIiAvPiBcbiAgICAgIDxCdXR0b24gY2xhc3M9J2J0bicgQHRhcD0nY2xvc2VBcHAnIHJvdz1cIjVcIiB0ZXh0PVwi0LLRi9GF0L7QtFwiIGNvbFNwYW49XCIyXCIvPiBcbiAgICA8L0dyaWRMYXlvdXQ+XG4gIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgcGFnZTIgZnJvbSAnLi9wYWdlMic7XG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL2FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJ1xuXG4gICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHVybDogJ2h0dHA6Ly8xOTIuMTY4LjEuNTA6ODAwMC8nLFxuICAgICAgICBjYWJpbmV0OiAnJyxcbiAgICAgICAgY29ycHM6ICcnLFxuICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczp7XG4gICAgICBzZWFyY2g6IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgdGhpcy4kc2hvd01vZGFsKHBhZ2UyLCB7XG4gICAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBjbG9zZUFwcCgpIHtcbiAgICAgICAgaWYgKGFwcGxpY2F0aW9uLmFuZHJvaWQpIHtcbiAgICAgICAgICBhcHBsaWNhdGlvbi5hbmRyb2lkLmZvcmVncm91bmRBY3Rpdml0eS5maW5pc2goKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBleGl0KDApO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcmVxdWVzdCgpe1xuICAgICAgICBjb25zdCBpZCA9IHRoaXMuY2FiaW5ldC5zbGljZSgwLDMpICsgdGhpcy5jb3Jwcy5zbGljZSgwLDEpIFxuICAgICAgICBjb25zb2xlLmxvZyhgSWQ6ICR7aWR9YClcblxuICAgICAgICBjb25zb2xlLmxvZyhgR2V0IHJlcXVlc3QgJHt0aGlzLnVybCArIGlkfWApXG4gICAgICAgIEh0dHAucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiB0aGlzLnVybCArIGlkLFxuICAgICAgICAgIG1ldGhvZDogJ2dldCdcbiAgICAgICAgfSkudGhlbihcbiAgICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlICE9IDIwMCl7XG4gICAgICAgICAgICAgIGFsZXJ0KHsgXG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCLQntGI0LjQsdC60LBcIixcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi0JrQsNCx0LjQvdC10YIg0L3QtSDQvdCw0LnQtNC10L1cIixcbiAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wifSkgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYNCf0L7Qu9GD0YfQtdC90LjQtSDRgNC10LfRg9C70YzRgtCw0YLQsDpgKVxuICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gcmVzcG9uc2UuY29udGVudC50b0pTT04oKVxuICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2NoYW5nZUlkJywgY29udGVudC5pZCk7XG4gICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnY2hhbmdlWCcsIGNvbnRlbnQueCk7XG4gICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnY2hhbmdlWScsIGNvbnRlbnQueSk7XG4gICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnY2hhbmdlSW1nJywgY29udGVudC5pbmZvKTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYHg6ICR7dGhpcy4kc3RvcmUuc3RhdGUueH0geTogJHt0aGlzLiRzdG9yZS5zdGF0ZS55fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICR7dGhpcy4kc3RvcmUuc3RhdGUuaWR9IGltZzogJHt0aGlzLiRzdG9yZS5zdGF0ZS5pbWd9YClcbiAgICAgICAgICAgICAgdGhpcy5zZWFyY2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhg0J7RiNC40LHQutCwICR7ZX1gKTtcbiAgICAgICAgICAgICBhbGVydCh7IFxuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwi0J7RiNC40LHQutCwXCIsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcItCf0YDQvtCy0LXRgNGM0YLQtSDRgdC+0LXQtNC40L3QtdC90LjQtSDRgSDQuNC90YLQtdGA0L3QtdGC0L7QvFwiLFxuICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJ9KVxuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgfSxcbiAgICAgIHNldFVybCgpe1xuICAgICAgICBwcm9tcHQoe1xuICAgICAgICAgIHRpdGxlOiBcItCd0LDRgdGC0YDQvtC50LrQuFwiLFxuICAgICAgICAgIG1lc3NhZ2U6IFwi0JLQstC10LTQuNGC0LUg0LDQtNGA0LXRgSDRgdC10YDQstC10YDQsDpcIixcbiAgICAgICAgICBva0J1dHRvblRleHQ6IFwi0L7QulwiLFxuICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwi0L7RgtC80LXQvdCwXCIsXG4gICAgICAgICAgZGVmYXVsdFRleHQ6IHRoaXMudXJsLFxuICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coYFNldCB1cmw6ICR7cmVzdWx0LnJlc3VsdH0sIHVybDogJHtyZXN1bHQudGV4dH1gKVxuICAgICAgICAgIHRoaXMudXJsID0gcmVzdWx0LnRleHQ7XG4gICAgICAgICAgdGhpcy5jb3JyZWN0aW9uWCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAgIEFjdGlvbkJhciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1M2JhODI7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIH1cbiAgICAuYXBwe1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcbiAgICB9XG5cbiAgICAubWVzc2FnZSB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMjA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIH1cblxuICAgIC5idG4ge1xuICAgICAgIGZvbnQtc2l6ZTogMTg7XG4gICAgICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgaGVpZ2h0OiAxNjBweDtcbiAgICAgICBib3JkZXItcmFkaXVzOiAzMCU7XG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NmNzIwMDtcbiAgICB9XG5cbiAgICAuaW5wdXR7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY4QzAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTAlO1xuICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICBtYXJnaW46IDUwcHggMzBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDIwO1xuICAgIH1cblxuICAgIC5zZXR0aW5ne1xuICAgICAgYmFja2dyb3VuZDogbm8tcmVwZWF0ICNjNDZjMDAgY2VudGVyIHVybChcIn4vYXNzZXRzL2ltYWdlcy9zZXR0aW5nLnBuZ1wiKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDQwJTtcbiAgICB9XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlIGFjdGlvbkJhckhpZGRlbj1cInRydWVcIj5cclxuPFBhZ2UgY2xhc3M9XCJhcHBcIj5cclxuPFN0YWNrTGF5b3V0PlxyXG48R3JpZExheW91dCByb3dzPVwiKixhdXRvXCI+XHJcbiAgICA8QWJzb2x1dGVMYXlvdXQgcm93PVwiMFwiPlxyXG4gICAgICA8SW1hZ2UgOnNyYz10aGlzLiRzdG9yZS5zdGF0ZS5pbWcgY2xhc3M9XCJpbWFnZVwiIHN0cmV0Y2g9XCJub25lXCIgdG9wPVwiXCIgbGVmdD1cIjBcIiAvPlxyXG4gICAgICA8TGFiZWwgdGV4dD1cIi5cIiBjbGFzcz1cIm1hcmtcIiA6dG9wPSd0aGlzLiRzdG9yZS5zdGF0ZS55JyA6bGVmdD0ndGhpcy4kc3RvcmUuc3RhdGUueCcgLz5cclxuICAgIDwvQWJzb2x1dGVMYXlvdXQ+XHJcbiAgICA8QnV0dG9uIGNsYXNzPSdidG4nIEB0YXA9J2dvYmFjaycgcm93PVwiMVwiIHRleHQ9XCLQvdCw0LfQsNC0XCIvPiBcclxuPC9HcmlkTGF5b3V0PlxyXG48L1N0YWNrTGF5b3V0PlxyXG48L1BhZ2U+IFxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCc7XHJcblxyXG4gICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBtZXRob2RzOntcclxuICAgICAgZ29iYWNrOiBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgdGhpcy4kc2hvd01vZGFsKEFwcCwge1xyXG4gICAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiAgICAuYXBwe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxufVxyXG4ubWVzc2FnZSB7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMDtcclxuICAgICAgICBjb2xvcjogI2RmZDdkNztcclxuICAgIH0gICBcclxuIC5idG4ge1xyXG4gICAgICAgZm9udC1zaXplOiAyNTtcclxuICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICBtYXJnaW46IDUwcHggNzBweDtcclxuICAgICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICAgICBib3JkZXItcmFkaXVzOiA0MCU7XHJcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2Y3MjAwO1xyXG4gICAgfSAgXHJcbiAgLm1hcmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBib3JkZXI6IHRoaWNrIGRvdWJsZSAjMDQwMGZmO1xyXG4gICAgZm9udC1zaXplOiAyMDtcclxuICB9XHJcbiAgLmltYWdlIHtcclxuICAgIHdpZHRoOiAxMDgwcHg7IFxyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuPC9zdHlsZT5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImFwcFwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJBY3Rpb25CYXJcIiwgeyBhdHRyczogeyB0aXRsZTogXCLQn9C+0LjRgdC6INC60LDQsdC40L3QtdGC0LBcIiB9IH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICB7IGF0dHJzOiB7IGNvbHVtbnM6IFwiNSosMipcIiwgcm93czogXCIqLGF1dG8sYXV0bywqLGF1dG8sYXV0b1wiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWVzc2FnZVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCLQutCw0LHQuNC90LXRgjpcIiwgcm93OiBcIjFcIiwgY29sOiBcIjBcIiB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZXNzYWdlXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcItC60L7RgNC/0YPRgTpcIiwgcm93OiBcIjFcIiwgY29sOiBcIjFcIiB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGtleWJvYXJkVHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgaGludDogXCLQutCw0LHQuNC90LXRglwiLFxuICAgICAgICAgICAgICByb3c6IFwiMlwiLFxuICAgICAgICAgICAgICBjb2w6IFwiMFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5jYWJpbmV0LFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLmNhYmluZXQgPSAkZXZlbnQub2JqZWN0W1widGV4dFwiXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNhYmluZXRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBrZXlib2FyZFR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgIGhpbnQ6IFwi0LrQvtGA0L/Rg9GBXCIsXG4gICAgICAgICAgICAgIHJvdzogXCIyXCIsXG4gICAgICAgICAgICAgIGNvbDogXCIxXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjogeyByZXR1cm5QcmVzczogX3ZtLnJlcXVlc3QgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uY29ycHMsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uY29ycHMgPSAkZXZlbnQub2JqZWN0W1widGV4dFwiXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNvcnBzXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG5cIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCI0XCIsIGNvbDogXCIwXCIsIHRleHQ6IFwi0L3QsNC50YLQuFwiIH0sXG4gICAgICAgICAgICBvbjogeyB0YXA6IF92bS5yZXF1ZXN0IH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gc2V0dGluZ1wiLFxuICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjRcIiwgY29sOiBcIjFcIiB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uc2V0VXJsIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG5cIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCI1XCIsIHRleHQ6IFwi0LLRi9GF0L7QtFwiLCBjb2xTcGFuOiBcIjJcIiB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uY2xvc2VBcHAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJhcHBcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyByb3dzOiBcIiosYXV0b1wiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJBYnNvbHV0ZUxheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgcm93OiBcIjBcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiB0aGlzLiRzdG9yZS5zdGF0ZS5pbWcsXG4gICAgICAgICAgICAgICAgICAgICAgc3RyZXRjaDogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiMFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1hcmtcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIi5cIixcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IHRoaXMuJHN0b3JlLnN0YXRlLnksXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogdGhpcy4kc3RvcmUuc3RhdGUueFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjFcIiwgdGV4dDogXCLQvdCw0LfQsNC0XCIgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5nb2JhY2sgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuc2Nzc1wiOiBcIi4vYXBwLnNjc3NcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyBeXFxcXC5cXFxcL2FwcFxcXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2FwcC5zY3NzXCI6IFwiLi9hcHAuc2Nzc1wiLFxuXHRcIi4vbWFpbi5qc1wiOiBcIi4vbWFpbi5qc1wiLFxuXHRcIi4vc3RvcmUuanNcIjogXCIuL3N0b3JlLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgcmVjdXJzaXZlICg/PCFcXFxcYkFwcF9SZXNvdXJjZXNcXFxcYi4qKSg/PCFcXFxcLlxcXFwvXFxcXGJ0ZXN0c1xcXFxiXFxcXC8uKj8pXFxcXC4oeG1sfGNzc3xqc3woPzwhXFxcXC5kXFxcXC4pdHN8KD88IVxcXFxiX1tcXFxcdy1dKlxcXFwuKXNjc3MpJFwiOyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NWJhNWVkNCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRWR1XFxcXGNvdXJzZVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0NWJhNWVkNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0NWJhNWVkNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0NWJhNWVkNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NWJhNWVkNCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0NWJhNWVkNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9BcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL0BuYXRpdmVzY3JpcHQvd2VicGFjay9oZWxwZXJzL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL0BuYXRpdmVzY3JpcHQvd2VicGFjay9oZWxwZXJzL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ1YmE1ZWQ0JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9wYWdlMi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODAxN2ZjNTAmYWN0aW9uQmFySGlkZGVuPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcGFnZTIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9wYWdlMi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vcGFnZTIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXEVkdVxcXFxjb3Vyc2VcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnODAxN2ZjNTAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnODAxN2ZjNTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnODAxN2ZjNTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3BhZ2UyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04MDE3ZmM1MCZhY3Rpb25CYXJIaWRkZW49dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc4MDE3ZmM1MCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9wYWdlMi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGFnZTIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGFnZTIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL0BuYXRpdmVzY3JpcHQvd2VicGFjay9oZWxwZXJzL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL0BuYXRpdmVzY3JpcHQvd2VicGFjay9oZWxwZXJzL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BhZ2UyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BhZ2UyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04MDE3ZmM1MCZhY3Rpb25CYXJIaWRkZW49dHJ1ZSZcIiIsImltcG9ydCBWdWUgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZSdcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCdcbmltcG9ydCBWdWVEZXZ0b29scyBmcm9tICduYXRpdmVzY3JpcHQtdnVlLWRldnRvb2xzJ1xuXG5pZihUTlNfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgVnVlLnVzZShWdWVEZXZ0b29scylcbn1cbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJ1xuXG4vLyBQcmludHMgVnVlIGxvZ3Mgd2hlbiAtLWVudi5wcm9kdWN0aW9uIGlzICpOT1QqIHNldCB3aGlsZSBidWlsZGluZ1xuVnVlLmNvbmZpZy5zaWxlbnQgPSAoVE5TX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKVxuXG5cbm5ldyBWdWUoe1xuICBzdG9yZSxcbiAgcmVuZGVyOiBoID0+IGgoJ2ZyYW1lJywgW2goQXBwKV0pXG59KS4kc3RhcnQoKVxuIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCc7XG5cblZ1ZS51c2UoVnVleCk7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBWdWV4LlN0b3JlKHtcbiAgc3RhdGU6IHtcbiAgICB4IDogJzg5N3B4JyxcbiAgICB5IDogJzkyNHB4JyxcbiAgICBpbWcgOiAnfi9hc3NldHMvbWFwcy8yMi5wbmcnLFxuICAgIGlkIDogJzIyODcnLFxuICAgIGNvcnJlY3RYIDogLTIwLFxuICAgIGNvcnJlY3RZIDogLTIwLFxuICB9LFxuICBtdXRhdGlvbnM6IHtcbiAgICBjaGFuZ2VYKHN0YXRlLCBuZXdYKXtcbiAgICAgIHN0YXRlLnggPSBuZXdYK3N0YXRlLmNvcnJlY3RYICsgJ3B4JztcbiAgICB9LFxuICAgIGNoYW5nZVkoc3RhdGUsIG5ld1kpe1xuICAgICAgc3RhdGUueSA9IG5ld1krc3RhdGUuY29ycmVjdFkgKyAncHgnO1xuICAgIH0sXG4gICAgY2hhbmdlSW1nKHN0YXRlLCBuZXdJbWcpe1xuICAgICAgc3RhdGUuaW1nID0gJ34vYXNzZXRzL21hcHMvJyArIG5ld0ltZztcbiAgICB9LFxuICAgIGNoYW5nZUlkKHN0YXRlLCBuZXdJZCl7XG4gICAgICBzdGF0ZS51cmwgPSBuZXdJZDtcbiAgICB9LFxuICAgIGNvcnJlY3Rpb25YKHN0YXRlLCBjb3JYKXtcbiAgICAgIHN0YXRlLmNvcnJlY3RYID0gY29yWDtcbiAgICB9LFxuICAgIGNvcnJlY3Rpb25ZKHN0YXRlLGNvclkpe1xuICAgICAgc3RhdGUuY29ycmVjdFkgPSBjb3JZO1xuICAgIH0sXG4gIH0sXG4gIGFjdGlvbnM6IHtcblxuICB9XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIn4vcGFja2FnZS5qc29uXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=