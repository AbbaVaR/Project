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
___CSS_LOADER_EXPORT___.push([module.i, "\nActionBar {\n    background-color: #53ba82;\n    color: #ffffff;\n}\n.app{\n  background-color: #333333;\n}\n.message {\n    text-align: left;\n    font-size: 20;\n    margin-left: 30px;\n}\n.btn {\n   font-size: 18;\n   vertical-align: center;\n   text-align: center;\n   height: 160px;\n   border-radius: 30%;\n   background-color: #cf7200;\n}\n.input{\n  background-color: #FF8C00;\n  border-radius: 10%;\n  color: #000000;\n  margin: 50px 30px;\n  text-align: center;\n  vertical-align: center;\n  font-size: 20;\n}\n.setting{\n  background: no-repeat #c46c00 center url(\"~/assets/images/setting.png\");\n  border-radius: 40%;\n}\n", "",{"version":3,"sources":["webpack://./../components/App.vue"],"names":[],"mappings":";AAuFA;IACA,yBAAA;IACA,cAAA;AACA;AACA;EACA,yBAAA;AACA;AAEA;IACA,gBAAA;IACA,aAAA;IACA,iBAAA;AACA;AAEA;GACA,aAAA;GACA,sBAAA;GACA,kBAAA;GACA,aAAA;GACA,kBAAA;GACA,yBAAA;AACA;AAEA;EACA,yBAAA;EACA,kBAAA;EACA,cAAA;EACA,iBAAA;EACA,kBAAA;EACA,sBAAA;EACA,aAAA;AACA;AAEA;EACA,uEAAA;EACA,kBAAA;AACA","sourcesContent":["<template>\n  <Page class = \"app\">\n    <ActionBar title=\"Поиск кабинета\"/>\n    <GridLayout columns=\"5*,2*\" rows=\"*,auto,auto,*,auto,auto\">\n      <Label text=\"кабинет:\" class=\"message\"  row=\"1\" col=\"0\"/>\n      <Label text=\"корпус:\" class=\"message\" row=\"1\" col=\"1\"/>\n      <TextField keyboardType=\"number\" class=\"input\" v-model=\"cabinet\" hint=\"кабинет\" row=\"2\" col=\"0\" />\n      <TextField keyboardType=\"number\" class=\"input\" v-model=\"corps\" hint=\"корпус\" row=\"2\" col=\"1\" />\n      <Button class='btn' @tap='request' row=\"4\" col=\"0\" text=\"найти\"/> \n      <Button class='btn setting' @tap='setUrl' row=\"4\" col=\"1\" /> \n      <Button class='btn' @tap='closeApp' row=\"5\" text=\"выход\" colSpan=\"2\"/> \n    </GridLayout>\n  </Page>\n</template>\n\n<script>\nimport page2 from './page2';\nimport * as application from \"@nativescript/core/application\";\nimport { Http } from '@nativescript/core'\n\n   export default {\n    data() {\n      return {\n        url: 'http://192.168.1.50:8000/',\n        cabinet: '',\n        corps: '',\n      }\n    },\n    methods:{\n      search: function(event){\n        this.$showModal(page2, {\n          fullscreen: true,\n        })\n      },\n      closeApp() {\n        if (application.android) {\n          application.android.foregroundActivity.finish();\n        } else {\n          exit(0);\n        }\n      },\n      request(){\n        const id = this.cabinet.slice(0,3) + this.corps.slice(0,1) \n        console.log(`Id: ${id}`)\n\n        console.log(`Get request ${this.url + id}`)\n        Http.request({\n          url: this.url + id,\n          method: 'get'\n        }).then(\n          (response) => {\n            console.log(`Получение результата:`)\n            const content = response.content.toJSON()\n            this.$store.commit('changeId', content.id);\n            this.$store.commit('changeX', content.x);\n            this.$store.commit('changeY', content.y);\n            this.$store.commit('changeImg', content.info);\n            console.log(`x: ${this.$store.state.x} y: ${this.$store.state.y} \n                         id: ${this.$store.state.id} img: ${this.$store.state.img}`)\n            this.search();\n          },\n          (e) => {\n            console.log(`Ошибка ${e}`);\n             alert({ \n                  title: \"Ошибка\",\n                  message: e,\n                  okButtonText: \"OK\"})\n          }\n        )\n      },\n      setUrl(){\n        prompt({\n          title: \"Настройки\",\n          message: \"Введите адрес сервера:\",\n          okButtonText: \"ок\",\n          cancelButtonText: \"отмена\",\n          defaultText: this.url,\n        }).then(result => {\n          console.log(`Set url: ${result.result}, url: ${result.text}`)\n          this.url = result.text;\n        });\n      }\n    }\n  }\n</script>\n\n<style>\n    ActionBar {\n        background-color: #53ba82;\n        color: #ffffff;\n    }\n    .app{\n      background-color: #333333;\n    }\n\n    .message {\n        text-align: left;\n        font-size: 20;\n        margin-left: 30px;\n    }\n\n    .btn {\n       font-size: 18;\n       vertical-align: center;\n       text-align: center;\n       height: 160px;\n       border-radius: 30%;\n       background-color: #cf7200;\n    }\n\n    .input{\n      background-color: #FF8C00;\n      border-radius: 10%;\n      color: #000000;\n      margin: 50px 30px;\n      text-align: center;\n      vertical-align: center;\n      font-size: 20;\n    }\n\n    .setting{\n      background: no-repeat #c46c00 center url(\"~/assets/images/setting.png\");\n      border-radius: 40%;\n    }\n</style>\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "\n.app{\n    background-color: #333333;\n}\n.message {\n        vertical-align: center;\n        text-align: center;\n        font-size: 20;\n        color: #dfd7d7;\n}\n.btn {\n       font-size: 25;\n       text-align: center;\n       height: 200px;\n       margin: 50px 70px;\n       padding: 50px;\n       border-radius: 40%;\n       background-color: #cf7200;\n}\n.mark {\n    background-color: crimson;\n    height: 50px;\n    width: 50px;\n    text-align: center;\n    vertical-align: center;\n    border-radius: 100%;\n    border: thick double #0400ff;\n    font-size: 20;\n}\n.image {\n    width: 1080px; \n    height: auto;\n}\n", "",{"version":3,"sources":["webpack://./../components/page2.vue"],"names":[],"mappings":";AA8BA;IACA,yBAAA;AACA;AACA;QACA,sBAAA;QACA,kBAAA;QACA,aAAA;QACA,cAAA;AACA;AACA;OACA,aAAA;OACA,kBAAA;OACA,aAAA;OACA,iBAAA;OACA,aAAA;OACA,kBAAA;OACA,yBAAA;AACA;AACA;IACA,yBAAA;IACA,YAAA;IACA,WAAA;IACA,kBAAA;IACA,sBAAA;IACA,mBAAA;IACA,4BAAA;IACA,aAAA;AACA;AACA;IACA,aAAA;IACA,YAAA;AACA","sourcesContent":["<template actionBarHidden=\"true\">\r\n<Page class=\"app\">\r\n<StackLayout>\r\n<GridLayout rows=\"*,auto\">\r\n    <AbsoluteLayout row=\"0\">\r\n      <Image :src=this.$store.state.img class=\"image\" stretch=\"none\" top=\"0\" left=\"0\" />\r\n      <Label text=\".\" class=\"mark\" :top=this.$store.state.y :left=this.$store.state.x />\r\n    </AbsoluteLayout>\r\n    <Button class='btn' @tap='goback' row=\"1\" text=\"Назад\"/> \r\n</GridLayout>\r\n</StackLayout>\r\n</Page> \r\n</template>\r\n\r\n<script>\r\nimport App from './App';\r\n\r\n   export default {\r\n    methods:{\r\n      goback: function(event){\r\n        this.$showModal(App, {\r\n          fullscreen: true,\r\n        })\r\n      }\r\n      \r\n    }\r\n  }\r\n</script>\r\n\r\n<style>\r\n    .app{\r\n    background-color: #333333;\r\n}\r\n.message {\r\n        vertical-align: center;\r\n        text-align: center;\r\n        font-size: 20;\r\n        color: #dfd7d7;\r\n    }   \r\n .btn {\r\n       font-size: 25;\r\n       text-align: center;\r\n       height: 200px;\r\n       margin: 50px 70px;\r\n       padding: 50px;\r\n       border-radius: 40%;\r\n       background-color: #cf7200;\r\n    }  \r\n  .mark {\r\n    background-color: crimson;\r\n    height: 50px;\r\n    width: 50px;\r\n    text-align: center;\r\n    vertical-align: center;\r\n    border-radius: 100%;\r\n    border: thick double #0400ff;\r\n    font-size: 20;\r\n  }\r\n  .image {\r\n    width: 1080px; \r\n    height: auto;\r\n  }\r\n</style>\r\n"],"sourceRoot":""}]);
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
        console.log("\u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430:");
        var content = response.content.toJSON();
        this.$store.commit('changeId', content.id);
        this.$store.commit('changeX', content.x);
        this.$store.commit('changeY', content.y);
        this.$store.commit('changeImg', content.info);
        console.log("x: ".concat(this.$store.state.x, " y: ").concat(this.$store.state.y, " \n                         id: ").concat(this.$store.state.id, " img: ").concat(this.$store.state.img));
        this.search();
      }, e => {
        console.log("\u041E\u0448\u0438\u0431\u043A\u0430 ".concat(e));
        alert({
          title: "Ошибка",
          message: e,
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
                      top: "0",
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
                attrs: { row: "1", text: "Назад" },
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
    id: '2287'
  },
  mutations: {
    changeX(state, newX) {
      state.x = newX + 'px';
    },

    changeY(state, newY) {
      state.y = newY + 'px';
    },

    changeImg(state, newImg) {
      state.img = '~/assets/maps/' + newImg;
    },

    changeId(state, newId) {
      state.url = newId;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/MTlmNiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2UyLnZ1ZT8zZTE3Iiwid2VicGFjazovLy9jb21wb25lbnRzL0FwcC52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvcGFnZTIudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwLnZ1ZT83YjBlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZTIudnVlPzNlNGYiLCJ3ZWJwYWNrOi8vLy4gc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2FwcFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJCIsIndlYnBhY2s6Ly8vXFxiX1tcXHctXSpcXC4pc2NzcykkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/OWUyMyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/ODMzZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/YjM3NyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2UyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2UyLnZ1ZT85ZjkwIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZTIudnVlPzUzNGUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlMi52dWU/N2RiYSIsIndlYnBhY2s6Ly8vLi9tYWluLmpzIiwid2VicGFjazovLy8uL3N0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIn4vcGFja2FnZS5qc29uXCIiXSwibmFtZXMiOlsiQXBwIiwiVnVlRGV2dG9vbHMiLCJUTlNfRU5WIiwiVnVlIiwidXNlIiwic3RvcmUiLCJjb25maWciLCJzaWxlbnQiLCJyZW5kZXIiLCJoIiwiVnVleCIsIlN0b3JlIiwic3RhdGUiLCJ4IiwieSIsImltZyIsImlkIiwibXV0YXRpb25zIiwiY2hhbmdlWCIsIm5ld1giLCJjaGFuZ2VZIiwibmV3WSIsImNoYW5nZUltZyIsIm5ld0ltZyIsImNoYW5nZUlkIiwibmV3SWQiLCJ1cmwiLCJhY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3lIO0FBQzdCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyxzR0FBcUM7QUFDL0Y7QUFDQSw4QkFBOEIsUUFBUyxnQkFBZ0IsZ0NBQWdDLHFCQUFxQixHQUFHLE9BQU8sOEJBQThCLEdBQUcsWUFBWSx1QkFBdUIsb0JBQW9CLHdCQUF3QixHQUFHLFFBQVEsbUJBQW1CLDRCQUE0Qix3QkFBd0IsbUJBQW1CLHdCQUF3QiwrQkFBK0IsR0FBRyxTQUFTLDhCQUE4Qix1QkFBdUIsbUJBQW1CLHNCQUFzQix1QkFBdUIsMkJBQTJCLGtCQUFrQixHQUFHLFdBQVcsOEVBQThFLHVCQUF1QixHQUFHLFNBQVMsb0ZBQW9GLE1BQU0sV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyx5MkJBQXkyQixrRUFBa0UsVUFBVSxPQUFPLGlEQUFpRCxjQUFjLGdCQUFnQiw4RkFBOEYsT0FBTyxnQkFBZ0IsZ0NBQWdDLGtDQUFrQyx3Q0FBd0MsVUFBVSxxQkFBcUIsb0NBQW9DLDREQUE0RCxXQUFXLE9BQU8sb0JBQW9CLFdBQVcsU0FBUyxtQkFBbUIsa0dBQWtHLEdBQUcseUNBQXlDLGNBQWMsMEJBQTBCLG1FQUFtRSxrQ0FBa0Msa0tBQWtLLHVEQUF1RCx1REFBdUQsNERBQTRELGdDQUFnQyxvQkFBb0IsTUFBTSxvQkFBb0Isa0NBQWtDLHFCQUFxQixRQUFRLHNCQUFzQiw4QkFBOEIsYUFBYSxxQkFBcUIsb0NBQW9DLEVBQUUsR0FBRyxzQkFBc0IsK0dB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ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuQWN0aW9uQmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUzYmE4MjtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxufVxcbi5hcHB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xcbn1cXG4ubWVzc2FnZSB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbn1cXG4uYnRuIHtcXG4gICBmb250LXNpemU6IDE4O1xcbiAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgIGhlaWdodDogMTYwcHg7XFxuICAgYm9yZGVyLXJhZGl1czogMzAlO1xcbiAgIGJhY2tncm91bmQtY29sb3I6ICNjZjcyMDA7XFxufVxcbi5pbnB1dHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjhDMDA7XFxuICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIG1hcmdpbjogNTBweCAzMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjA7XFxufVxcbi5zZXR0aW5ne1xcbiAgYmFja2dyb3VuZDogbm8tcmVwZWF0ICNjNDZjMDAgY2VudGVyIHVybChcXFwifi9hc3NldHMvaW1hZ2VzL3NldHRpbmcucG5nXFxcIik7XFxuICBib3JkZXItcmFkaXVzOiA0MCU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLy4uL2NvbXBvbmVudHMvQXBwLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBdUZBO0lBQ0EseUJBQUE7SUFDQSxjQUFBO0FBQ0E7QUFDQTtFQUNBLHlCQUFBO0FBQ0E7QUFFQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLGlCQUFBO0FBQ0E7QUFFQTtHQUNBLGFBQUE7R0FDQSxzQkFBQTtHQUNBLGtCQUFBO0dBQ0EsYUFBQTtHQUNBLGtCQUFBO0dBQ0EseUJBQUE7QUFDQTtBQUVBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBQ0E7QUFFQTtFQUNBLHVFQUFBO0VBQ0Esa0JBQUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICA8UGFnZSBjbGFzcyA9IFxcXCJhcHBcXFwiPlxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCLQn9C+0LjRgdC6INC60LDQsdC40L3QtdGC0LBcXFwiLz5cXG4gICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiNSosMipcXFwiIHJvd3M9XFxcIiosYXV0byxhdXRvLCosYXV0byxhdXRvXFxcIj5cXG4gICAgICA8TGFiZWwgdGV4dD1cXFwi0LrQsNCx0LjQvdC10YI6XFxcIiBjbGFzcz1cXFwibWVzc2FnZVxcXCIgIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIwXFxcIi8+XFxuICAgICAgPExhYmVsIHRleHQ9XFxcItC60L7RgNC/0YPRgTpcXFwiIGNsYXNzPVxcXCJtZXNzYWdlXFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCIvPlxcbiAgICAgIDxUZXh0RmllbGQga2V5Ym9hcmRUeXBlPVxcXCJudW1iZXJcXFwiIGNsYXNzPVxcXCJpbnB1dFxcXCIgdi1tb2RlbD1cXFwiY2FiaW5ldFxcXCIgaGludD1cXFwi0LrQsNCx0LjQvdC10YJcXFwiIHJvdz1cXFwiMlxcXCIgY29sPVxcXCIwXFxcIiAvPlxcbiAgICAgIDxUZXh0RmllbGQga2V5Ym9hcmRUeXBlPVxcXCJudW1iZXJcXFwiIGNsYXNzPVxcXCJpbnB1dFxcXCIgdi1tb2RlbD1cXFwiY29ycHNcXFwiIGhpbnQ9XFxcItC60L7RgNC/0YPRgVxcXCIgcm93PVxcXCIyXFxcIiBjb2w9XFxcIjFcXFwiIC8+XFxuICAgICAgPEJ1dHRvbiBjbGFzcz0nYnRuJyBAdGFwPSdyZXF1ZXN0JyByb3c9XFxcIjRcXFwiIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwi0L3QsNC50YLQuFxcXCIvPiBcXG4gICAgICA8QnV0dG9uIGNsYXNzPSdidG4gc2V0dGluZycgQHRhcD0nc2V0VXJsJyByb3c9XFxcIjRcXFwiIGNvbD1cXFwiMVxcXCIgLz4gXFxuICAgICAgPEJ1dHRvbiBjbGFzcz0nYnRuJyBAdGFwPSdjbG9zZUFwcCcgcm93PVxcXCI1XFxcIiB0ZXh0PVxcXCLQstGL0YXQvtC0XFxcIiBjb2xTcGFuPVxcXCIyXFxcIi8+IFxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuICA8L1BhZ2U+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbmltcG9ydCBwYWdlMiBmcm9tICcuL3BhZ2UyJztcXG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tIFxcXCJAbmF0aXZlc2NyaXB0L2NvcmUvYXBwbGljYXRpb25cXFwiO1xcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnXFxuXFxuICAgZXhwb3J0IGRlZmF1bHQge1xcbiAgICBkYXRhKCkge1xcbiAgICAgIHJldHVybiB7XFxuICAgICAgICB1cmw6ICdodHRwOi8vMTkyLjE2OC4xLjUwOjgwMDAvJyxcXG4gICAgICAgIGNhYmluZXQ6ICcnLFxcbiAgICAgICAgY29ycHM6ICcnLFxcbiAgICAgIH1cXG4gICAgfSxcXG4gICAgbWV0aG9kczp7XFxuICAgICAgc2VhcmNoOiBmdW5jdGlvbihldmVudCl7XFxuICAgICAgICB0aGlzLiRzaG93TW9kYWwocGFnZTIsIHtcXG4gICAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcXG4gICAgICAgIH0pXFxuICAgICAgfSxcXG4gICAgICBjbG9zZUFwcCgpIHtcXG4gICAgICAgIGlmIChhcHBsaWNhdGlvbi5hbmRyb2lkKSB7XFxuICAgICAgICAgIGFwcGxpY2F0aW9uLmFuZHJvaWQuZm9yZWdyb3VuZEFjdGl2aXR5LmZpbmlzaCgpO1xcbiAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgZXhpdCgwKTtcXG4gICAgICAgIH1cXG4gICAgICB9LFxcbiAgICAgIHJlcXVlc3QoKXtcXG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5jYWJpbmV0LnNsaWNlKDAsMykgKyB0aGlzLmNvcnBzLnNsaWNlKDAsMSkgXFxuICAgICAgICBjb25zb2xlLmxvZyhgSWQ6ICR7aWR9YClcXG5cXG4gICAgICAgIGNvbnNvbGUubG9nKGBHZXQgcmVxdWVzdCAke3RoaXMudXJsICsgaWR9YClcXG4gICAgICAgIEh0dHAucmVxdWVzdCh7XFxuICAgICAgICAgIHVybDogdGhpcy51cmwgKyBpZCxcXG4gICAgICAgICAgbWV0aG9kOiAnZ2V0J1xcbiAgICAgICAgfSkudGhlbihcXG4gICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XFxuICAgICAgICAgICAgY29uc29sZS5sb2coYNCf0L7Qu9GD0YfQtdC90LjQtSDRgNC10LfRg9C70YzRgtCw0YLQsDpgKVxcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSByZXNwb25zZS5jb250ZW50LnRvSlNPTigpXFxuICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdjaGFuZ2VJZCcsIGNvbnRlbnQuaWQpO1xcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnY2hhbmdlWCcsIGNvbnRlbnQueCk7XFxuICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdjaGFuZ2VZJywgY29udGVudC55KTtcXG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2NoYW5nZUltZycsIGNvbnRlbnQuaW5mbyk7XFxuICAgICAgICAgICAgY29uc29sZS5sb2coYHg6ICR7dGhpcy4kc3RvcmUuc3RhdGUueH0geTogJHt0aGlzLiRzdG9yZS5zdGF0ZS55fSBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICR7dGhpcy4kc3RvcmUuc3RhdGUuaWR9IGltZzogJHt0aGlzLiRzdG9yZS5zdGF0ZS5pbWd9YClcXG4gICAgICAgICAgICB0aGlzLnNlYXJjaCgpO1xcbiAgICAgICAgICB9LFxcbiAgICAgICAgICAoZSkgPT4ge1xcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGDQntGI0LjQsdC60LAgJHtlfWApO1xcbiAgICAgICAgICAgICBhbGVydCh7IFxcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcXFwi0J7RiNC40LHQutCwXFxcIixcXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlLFxcbiAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXFxcIk9LXFxcIn0pXFxuICAgICAgICAgIH1cXG4gICAgICAgIClcXG4gICAgICB9LFxcbiAgICAgIHNldFVybCgpe1xcbiAgICAgICAgcHJvbXB0KHtcXG4gICAgICAgICAgdGl0bGU6IFxcXCLQndCw0YHRgtGA0L7QudC60LhcXFwiLFxcbiAgICAgICAgICBtZXNzYWdlOiBcXFwi0JLQstC10LTQuNGC0LUg0LDQtNGA0LXRgSDRgdC10YDQstC10YDQsDpcXFwiLFxcbiAgICAgICAgICBva0J1dHRvblRleHQ6IFxcXCLQvtC6XFxcIixcXG4gICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXFxcItC+0YLQvNC10L3QsFxcXCIsXFxuICAgICAgICAgIGRlZmF1bHRUZXh0OiB0aGlzLnVybCxcXG4gICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcXG4gICAgICAgICAgY29uc29sZS5sb2coYFNldCB1cmw6ICR7cmVzdWx0LnJlc3VsdH0sIHVybDogJHtyZXN1bHQudGV4dH1gKVxcbiAgICAgICAgICB0aGlzLnVybCA9IHJlc3VsdC50ZXh0O1xcbiAgICAgICAgfSk7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcbiAgICBBY3Rpb25CYXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUzYmE4MjtcXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICB9XFxuICAgIC5hcHB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXG4gICAgfVxcblxcbiAgICAubWVzc2FnZSB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgZm9udC1zaXplOiAyMDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgICB9XFxuXFxuICAgIC5idG4ge1xcbiAgICAgICBmb250LXNpemU6IDE4O1xcbiAgICAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgIGhlaWdodDogMTYwcHg7XFxuICAgICAgIGJvcmRlci1yYWRpdXM6IDMwJTtcXG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NmNzIwMDtcXG4gICAgfVxcblxcbiAgICAuaW5wdXR7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOEMwMDtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICAgICAgY29sb3I6ICMwMDAwMDA7XFxuICAgICAgbWFyZ2luOiA1MHB4IDMwcHg7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICAgICAgZm9udC1zaXplOiAyMDtcXG4gICAgfVxcblxcbiAgICAuc2V0dGluZ3tcXG4gICAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgI2M0NmMwMCBjZW50ZXIgdXJsKFxcXCJ+L2Fzc2V0cy9pbWFnZXMvc2V0dGluZy5wbmdcXFwiKTtcXG4gICAgICBib3JkZXItcmFkaXVzOiA0MCU7XFxuICAgIH1cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG5cbiAgICBjb25zdCB7IEFwcGxpY2F0aW9uIH0gPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlXCIpO1xuICAgIHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmIChfX19DU1NfTE9BREVSX0VYUE9SVF9fXyAmJiB0eXBlb2YgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIF9fX0NTU19MT0FERVJfRVhQT1JUX19fLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgQXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL0FwcC52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmFwcHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXG59XFxuLm1lc3NhZ2Uge1xcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgICAgICBjb2xvcjogI2RmZDdkNztcXG59XFxuLmJ0biB7XFxuICAgICAgIGZvbnQtc2l6ZTogMjU7XFxuICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgICAgbWFyZ2luOiA1MHB4IDcwcHg7XFxuICAgICAgIHBhZGRpbmc6IDUwcHg7XFxuICAgICAgIGJvcmRlci1yYWRpdXM6IDQwJTtcXG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NmNzIwMDtcXG59XFxuLm1hcmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIGJvcmRlcjogdGhpY2sgZG91YmxlICMwNDAwZmY7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxufVxcbi5pbWFnZSB7XFxuICAgIHdpZHRoOiAxMDgwcHg7IFxcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLy4uL2NvbXBvbmVudHMvcGFnZTIudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUE4QkE7SUFDQSx5QkFBQTtBQUNBO0FBQ0E7UUFDQSxzQkFBQTtRQUNBLGtCQUFBO1FBQ0EsYUFBQTtRQUNBLGNBQUE7QUFDQTtBQUNBO09BQ0EsYUFBQTtPQUNBLGtCQUFBO09BQ0EsYUFBQTtPQUNBLGlCQUFBO09BQ0EsYUFBQTtPQUNBLGtCQUFBO09BQ0EseUJBQUE7QUFDQTtBQUNBO0lBQ0EseUJBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtJQUNBLDRCQUFBO0lBQ0EsYUFBQTtBQUNBO0FBQ0E7SUFDQSxhQUFBO0lBQ0EsWUFBQTtBQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZSBhY3Rpb25CYXJIaWRkZW49XFxcInRydWVcXFwiPlxcclxcbjxQYWdlIGNsYXNzPVxcXCJhcHBcXFwiPlxcclxcbjxTdGFja0xheW91dD5cXHJcXG48R3JpZExheW91dCByb3dzPVxcXCIqLGF1dG9cXFwiPlxcclxcbiAgICA8QWJzb2x1dGVMYXlvdXQgcm93PVxcXCIwXFxcIj5cXHJcXG4gICAgICA8SW1hZ2UgOnNyYz10aGlzLiRzdG9yZS5zdGF0ZS5pbWcgY2xhc3M9XFxcImltYWdlXFxcIiBzdHJldGNoPVxcXCJub25lXFxcIiB0b3A9XFxcIjBcXFwiIGxlZnQ9XFxcIjBcXFwiIC8+XFxyXFxuICAgICAgPExhYmVsIHRleHQ9XFxcIi5cXFwiIGNsYXNzPVxcXCJtYXJrXFxcIiA6dG9wPXRoaXMuJHN0b3JlLnN0YXRlLnkgOmxlZnQ9dGhpcy4kc3RvcmUuc3RhdGUueCAvPlxcclxcbiAgICA8L0Fic29sdXRlTGF5b3V0PlxcclxcbiAgICA8QnV0dG9uIGNsYXNzPSdidG4nIEB0YXA9J2dvYmFjaycgcm93PVxcXCIxXFxcIiB0ZXh0PVxcXCLQndCw0LfQsNC0XFxcIi8+IFxcclxcbjwvR3JpZExheW91dD5cXHJcXG48L1N0YWNrTGF5b3V0PlxcclxcbjwvUGFnZT4gXFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xcclxcblxcclxcbiAgIGV4cG9ydCBkZWZhdWx0IHtcXHJcXG4gICAgbWV0aG9kczp7XFxyXFxuICAgICAgZ29iYWNrOiBmdW5jdGlvbihldmVudCl7XFxyXFxuICAgICAgICB0aGlzLiRzaG93TW9kYWwoQXBwLCB7XFxyXFxuICAgICAgICAgIGZ1bGxzY3JlZW46IHRydWUsXFxyXFxuICAgICAgICB9KVxcclxcbiAgICAgIH1cXHJcXG4gICAgICBcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbjwvc2NyaXB0PlxcclxcblxcclxcbjxzdHlsZT5cXHJcXG4gICAgLmFwcHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXHJcXG59XFxyXFxuLm1lc3NhZ2Uge1xcclxcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjA7XFxyXFxuICAgICAgICBjb2xvcjogI2RmZDdkNztcXHJcXG4gICAgfSAgIFxcclxcbiAuYnRuIHtcXHJcXG4gICAgICAgZm9udC1zaXplOiAyNTtcXHJcXG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICAgICBtYXJnaW46IDUwcHggNzBweDtcXHJcXG4gICAgICAgcGFkZGluZzogNTBweDtcXHJcXG4gICAgICAgYm9yZGVyLXJhZGl1czogNDAlO1xcclxcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2Y3MjAwO1xcclxcbiAgICB9ICBcXHJcXG4gIC5tYXJrIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgICBib3JkZXI6IHRoaWNrIGRvdWJsZSAjMDQwMGZmO1xcclxcbiAgICBmb250LXNpemU6IDIwO1xcclxcbiAgfVxcclxcbiAgLmltYWdlIHtcXHJcXG4gICAgd2lkdGg6IDEwODBweDsgXFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gIH1cXHJcXG48L3N0eWxlPlxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG5cbiAgICBjb25zdCB7IEFwcGxpY2F0aW9uIH0gPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlXCIpO1xuICAgIHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmIChfX19DU1NfTE9BREVSX0VYUE9SVF9fXyAmJiB0eXBlb2YgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIF9fX0NTU19MT0FERVJfRVhQT1JUX19fLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgQXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL3BhZ2UyLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiPHRlbXBsYXRlPlxuICA8UGFnZSBjbGFzcyA9IFwiYXBwXCI+XG4gICAgPEFjdGlvbkJhciB0aXRsZT1cItCf0L7QuNGB0Log0LrQsNCx0LjQvdC10YLQsFwiLz5cbiAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiNSosMipcIiByb3dzPVwiKixhdXRvLGF1dG8sKixhdXRvLGF1dG9cIj5cbiAgICAgIDxMYWJlbCB0ZXh0PVwi0LrQsNCx0LjQvdC10YI6XCIgY2xhc3M9XCJtZXNzYWdlXCIgIHJvdz1cIjFcIiBjb2w9XCIwXCIvPlxuICAgICAgPExhYmVsIHRleHQ9XCLQutC+0YDQv9GD0YE6XCIgY2xhc3M9XCJtZXNzYWdlXCIgcm93PVwiMVwiIGNvbD1cIjFcIi8+XG4gICAgICA8VGV4dEZpZWxkIGtleWJvYXJkVHlwZT1cIm51bWJlclwiIGNsYXNzPVwiaW5wdXRcIiB2LW1vZGVsPVwiY2FiaW5ldFwiIGhpbnQ9XCLQutCw0LHQuNC90LXRglwiIHJvdz1cIjJcIiBjb2w9XCIwXCIgLz5cbiAgICAgIDxUZXh0RmllbGQga2V5Ym9hcmRUeXBlPVwibnVtYmVyXCIgY2xhc3M9XCJpbnB1dFwiIHYtbW9kZWw9XCJjb3Jwc1wiIGhpbnQ9XCLQutC+0YDQv9GD0YFcIiByb3c9XCIyXCIgY29sPVwiMVwiIC8+XG4gICAgICA8QnV0dG9uIGNsYXNzPSdidG4nIEB0YXA9J3JlcXVlc3QnIHJvdz1cIjRcIiBjb2w9XCIwXCIgdGV4dD1cItC90LDQudGC0LhcIi8+IFxuICAgICAgPEJ1dHRvbiBjbGFzcz0nYnRuIHNldHRpbmcnIEB0YXA9J3NldFVybCcgcm93PVwiNFwiIGNvbD1cIjFcIiAvPiBcbiAgICAgIDxCdXR0b24gY2xhc3M9J2J0bicgQHRhcD0nY2xvc2VBcHAnIHJvdz1cIjVcIiB0ZXh0PVwi0LLRi9GF0L7QtFwiIGNvbFNwYW49XCIyXCIvPiBcbiAgICA8L0dyaWRMYXlvdXQ+XG4gIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgcGFnZTIgZnJvbSAnLi9wYWdlMic7XG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL2FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJ1xuXG4gICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHVybDogJ2h0dHA6Ly8xOTIuMTY4LjEuNTA6ODAwMC8nLFxuICAgICAgICBjYWJpbmV0OiAnJyxcbiAgICAgICAgY29ycHM6ICcnLFxuICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczp7XG4gICAgICBzZWFyY2g6IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgdGhpcy4kc2hvd01vZGFsKHBhZ2UyLCB7XG4gICAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBjbG9zZUFwcCgpIHtcbiAgICAgICAgaWYgKGFwcGxpY2F0aW9uLmFuZHJvaWQpIHtcbiAgICAgICAgICBhcHBsaWNhdGlvbi5hbmRyb2lkLmZvcmVncm91bmRBY3Rpdml0eS5maW5pc2goKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBleGl0KDApO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcmVxdWVzdCgpe1xuICAgICAgICBjb25zdCBpZCA9IHRoaXMuY2FiaW5ldC5zbGljZSgwLDMpICsgdGhpcy5jb3Jwcy5zbGljZSgwLDEpIFxuICAgICAgICBjb25zb2xlLmxvZyhgSWQ6ICR7aWR9YClcblxuICAgICAgICBjb25zb2xlLmxvZyhgR2V0IHJlcXVlc3QgJHt0aGlzLnVybCArIGlkfWApXG4gICAgICAgIEh0dHAucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiB0aGlzLnVybCArIGlkLFxuICAgICAgICAgIG1ldGhvZDogJ2dldCdcbiAgICAgICAgfSkudGhlbihcbiAgICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGDQn9C+0LvRg9GH0LXQvdC40LUg0YDQtdC30YPQu9GM0YLQsNGC0LA6YClcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSByZXNwb25zZS5jb250ZW50LnRvSlNPTigpXG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2NoYW5nZUlkJywgY29udGVudC5pZCk7XG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2NoYW5nZVgnLCBjb250ZW50LngpO1xuICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdjaGFuZ2VZJywgY29udGVudC55KTtcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnY2hhbmdlSW1nJywgY29udGVudC5pbmZvKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGB4OiAke3RoaXMuJHN0b3JlLnN0YXRlLnh9IHk6ICR7dGhpcy4kc3RvcmUuc3RhdGUueX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICR7dGhpcy4kc3RvcmUuc3RhdGUuaWR9IGltZzogJHt0aGlzLiRzdG9yZS5zdGF0ZS5pbWd9YClcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYNCe0YjQuNCx0LrQsCAke2V9YCk7XG4gICAgICAgICAgICAgYWxlcnQoeyBcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcItCe0YjQuNCx0LrQsFwiLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZSxcbiAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wifSlcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgIH0sXG4gICAgICBzZXRVcmwoKXtcbiAgICAgICAgcHJvbXB0KHtcbiAgICAgICAgICB0aXRsZTogXCLQndCw0YHRgtGA0L7QudC60LhcIixcbiAgICAgICAgICBtZXNzYWdlOiBcItCS0LLQtdC00LjRgtC1INCw0LTRgNC10YEg0YHQtdGA0LLQtdGA0LA6XCIsXG4gICAgICAgICAgb2tCdXR0b25UZXh0OiBcItC+0LpcIixcbiAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcItC+0YLQvNC10L3QsFwiLFxuICAgICAgICAgIGRlZmF1bHRUZXh0OiB0aGlzLnVybCxcbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBTZXQgdXJsOiAke3Jlc3VsdC5yZXN1bHR9LCB1cmw6ICR7cmVzdWx0LnRleHR9YClcbiAgICAgICAgICB0aGlzLnVybCA9IHJlc3VsdC50ZXh0O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gICAgQWN0aW9uQmFyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUzYmE4MjtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgfVxuICAgIC5hcHB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xuICAgIH1cblxuICAgIC5tZXNzYWdlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgZm9udC1zaXplOiAyMDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgfVxuXG4gICAgLmJ0biB7XG4gICAgICAgZm9udC1zaXplOiAxODtcbiAgICAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xuICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICBoZWlnaHQ6IDE2MHB4O1xuICAgICAgIGJvcmRlci1yYWRpdXM6IDMwJTtcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2Y3MjAwO1xuICAgIH1cblxuICAgIC5pbnB1dHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjhDMDA7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMCU7XG4gICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgIG1hcmdpbjogNTBweCAzMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMjA7XG4gICAgfVxuXG4gICAgLnNldHRpbmd7XG4gICAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgI2M0NmMwMCBjZW50ZXIgdXJsKFwifi9hc3NldHMvaW1hZ2VzL3NldHRpbmcucG5nXCIpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNDAlO1xuICAgIH1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGUgYWN0aW9uQmFySGlkZGVuPVwidHJ1ZVwiPlxyXG48UGFnZSBjbGFzcz1cImFwcFwiPlxyXG48U3RhY2tMYXlvdXQ+XHJcbjxHcmlkTGF5b3V0IHJvd3M9XCIqLGF1dG9cIj5cclxuICAgIDxBYnNvbHV0ZUxheW91dCByb3c9XCIwXCI+XHJcbiAgICAgIDxJbWFnZSA6c3JjPXRoaXMuJHN0b3JlLnN0YXRlLmltZyBjbGFzcz1cImltYWdlXCIgc3RyZXRjaD1cIm5vbmVcIiB0b3A9XCIwXCIgbGVmdD1cIjBcIiAvPlxyXG4gICAgICA8TGFiZWwgdGV4dD1cIi5cIiBjbGFzcz1cIm1hcmtcIiA6dG9wPXRoaXMuJHN0b3JlLnN0YXRlLnkgOmxlZnQ9dGhpcy4kc3RvcmUuc3RhdGUueCAvPlxyXG4gICAgPC9BYnNvbHV0ZUxheW91dD5cclxuICAgIDxCdXR0b24gY2xhc3M9J2J0bicgQHRhcD0nZ29iYWNrJyByb3c9XCIxXCIgdGV4dD1cItCd0LDQt9Cw0LRcIi8+IFxyXG48L0dyaWRMYXlvdXQ+XHJcbjwvU3RhY2tMYXlvdXQ+XHJcbjwvUGFnZT4gXHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJztcclxuXHJcbiAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG1ldGhvZHM6e1xyXG4gICAgICBnb2JhY2s6IGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICB0aGlzLiRzaG93TW9kYWwoQXBwLCB7XHJcbiAgICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuICAgIC5hcHB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG59XHJcbi5tZXNzYWdlIHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDIwO1xyXG4gICAgICAgIGNvbG9yOiAjZGZkN2Q3O1xyXG4gICAgfSAgIFxyXG4gLmJ0biB7XHJcbiAgICAgICBmb250LXNpemU6IDI1O1xyXG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgIG1hcmdpbjogNTBweCA3MHB4O1xyXG4gICAgICAgcGFkZGluZzogNTBweDtcclxuICAgICAgIGJvcmRlci1yYWRpdXM6IDQwJTtcclxuICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjZjcyMDA7XHJcbiAgICB9ICBcclxuICAubWFyayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJvcmRlcjogdGhpY2sgZG91YmxlICMwNDAwZmY7XHJcbiAgICBmb250LXNpemU6IDIwO1xyXG4gIH1cclxuICAuaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwODBweDsgXHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG48L3N0eWxlPlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiYXBwXCIgfSxcbiAgICBbXG4gICAgICBfYyhcIkFjdGlvbkJhclwiLCB7IGF0dHJzOiB7IHRpdGxlOiBcItCf0L7QuNGB0Log0LrQsNCx0LjQvdC10YLQsFwiIH0gfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgY29sdW1uczogXCI1KiwyKlwiLCByb3dzOiBcIiosYXV0byxhdXRvLCosYXV0byxhdXRvXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZXNzYWdlXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcItC60LDQsdC40L3QtdGCOlwiLCByb3c6IFwiMVwiLCBjb2w6IFwiMFwiIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1lc3NhZ2VcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwi0LrQvtGA0L/Rg9GBOlwiLCByb3c6IFwiMVwiLCBjb2w6IFwiMVwiIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICBoaW50OiBcItC60LDQsdC40L3QtdGCXCIsXG4gICAgICAgICAgICAgIHJvdzogXCIyXCIsXG4gICAgICAgICAgICAgIGNvbDogXCIwXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNhYmluZXQsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uY2FiaW5ldCA9ICRldmVudC5vYmplY3RbXCJ0ZXh0XCJdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY2FiaW5ldFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGtleWJvYXJkVHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgaGludDogXCLQutC+0YDQv9GD0YFcIixcbiAgICAgICAgICAgICAgcm93OiBcIjJcIixcbiAgICAgICAgICAgICAgY29sOiBcIjFcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uY29ycHMsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uY29ycHMgPSAkZXZlbnQub2JqZWN0W1widGV4dFwiXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNvcnBzXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG5cIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCI0XCIsIGNvbDogXCIwXCIsIHRleHQ6IFwi0L3QsNC50YLQuFwiIH0sXG4gICAgICAgICAgICBvbjogeyB0YXA6IF92bS5yZXF1ZXN0IH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gc2V0dGluZ1wiLFxuICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjRcIiwgY29sOiBcIjFcIiB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uc2V0VXJsIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG5cIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCI1XCIsIHRleHQ6IFwi0LLRi9GF0L7QtFwiLCBjb2xTcGFuOiBcIjJcIiB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uY2xvc2VBcHAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJhcHBcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyByb3dzOiBcIiosYXV0b1wiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJBYnNvbHV0ZUxheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgcm93OiBcIjBcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiB0aGlzLiRzdG9yZS5zdGF0ZS5pbWcsXG4gICAgICAgICAgICAgICAgICAgICAgc3RyZXRjaDogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjBcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYXJrXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCIuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiB0aGlzLiRzdG9yZS5zdGF0ZS55LFxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IHRoaXMuJHN0b3JlLnN0YXRlLnhcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0blwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIxXCIsIHRleHQ6IFwi0J3QsNC30LDQtFwiIH0sXG4gICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29iYWNrIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLnNjc3NcIjogXCIuL2FwcC5zY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgXlxcXFwuXFxcXC9hcHBcXFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuc2Nzc1wiOiBcIi4vYXBwLnNjc3NcIixcblx0XCIuL21haW4uanNcIjogXCIuL21haW4uanNcIixcblx0XCIuL3N0b3JlLmpzXCI6IFwiLi9zdG9yZS5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIHJlY3Vyc2l2ZSAoPzwhXFxcXGJBcHBfUmVzb3VyY2VzXFxcXGIuKikoPzwhXFxcXC5cXFxcL1xcXFxidGVzdHNcXFxcYlxcXFwvLio/KVxcXFwuKHhtbHxjc3N8anN8KD88IVxcXFwuZFxcXFwuKXRzfCg/PCFcXFxcYl9bXFxcXHctXSpcXFxcLilzY3NzKSRcIjsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDViYTVlZDQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXEVkdVxcXFxjb3Vyc2VcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDViYTVlZDQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDViYTVlZDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDViYTVlZDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDViYTVlZDQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDViYTVlZDQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9AbmF0aXZlc2NyaXB0L3dlYnBhY2svaGVscGVycy9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9AbmF0aXZlc2NyaXB0L3dlYnBhY2svaGVscGVycy9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NWJhNWVkNCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vcGFnZTIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTgwMTdmYzUwJmFjdGlvbkJhckhpZGRlbj10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3BhZ2UyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vcGFnZTIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3BhZ2UyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxFZHVcXFxcY291cnNlXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzgwMTdmYzUwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzgwMTdmYzUwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzgwMTdmYzUwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9wYWdlMi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODAxN2ZjNTAmYWN0aW9uQmFySGlkZGVuPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignODAxN2ZjNTAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvcGFnZTIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BhZ2UyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BhZ2UyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9AbmF0aXZlc2NyaXB0L3dlYnBhY2svaGVscGVycy9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9AbmF0aXZlc2NyaXB0L3dlYnBhY2svaGVscGVycy9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wYWdlMi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wYWdlMi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODAxN2ZjNTAmYWN0aW9uQmFySGlkZGVuPXRydWUmXCIiLCJpbXBvcnQgVnVlIGZyb20gJ25hdGl2ZXNjcmlwdC12dWUnXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAnXG5pbXBvcnQgVnVlRGV2dG9vbHMgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZS1kZXZ0b29scydcblxuaWYoVE5TX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIFZ1ZS51c2UoVnVlRGV2dG9vbHMpXG59XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSdcblxuLy8gUHJpbnRzIFZ1ZSBsb2dzIHdoZW4gLS1lbnYucHJvZHVjdGlvbiBpcyAqTk9UKiBzZXQgd2hpbGUgYnVpbGRpbmdcblZ1ZS5jb25maWcuc2lsZW50ID0gKFROU19FTlYgPT09ICdwcm9kdWN0aW9uJylcblxuXG5uZXcgVnVlKHtcbiAgc3RvcmUsXG4gIHJlbmRlcjogaCA9PiBoKCdmcmFtZScsIFtoKEFwcCldKVxufSkuJHN0YXJ0KClcbiIsImltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnO1xuXG5WdWUudXNlKFZ1ZXgpO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgVnVleC5TdG9yZSh7XG4gIHN0YXRlOiB7XG4gICAgeCA6ICc4OTdweCcsXG4gICAgeSA6ICc5MjRweCcsXG4gICAgaW1nIDogJ34vYXNzZXRzL21hcHMvMjIucG5nJyxcbiAgICBpZCA6ICcyMjg3JyxcbiAgfSxcbiAgbXV0YXRpb25zOiB7XG4gICAgY2hhbmdlWChzdGF0ZSwgbmV3WCl7XG4gICAgICBzdGF0ZS54ID0gbmV3WCArICdweCc7XG4gICAgfSxcbiAgICBjaGFuZ2VZKHN0YXRlLCBuZXdZKXtcbiAgICAgIHN0YXRlLnkgPSBuZXdZICsgJ3B4JztcbiAgICB9LFxuICAgIGNoYW5nZUltZyhzdGF0ZSwgbmV3SW1nKXtcbiAgICAgIHN0YXRlLmltZyA9ICd+L2Fzc2V0cy9tYXBzLycgKyBuZXdJbWc7XG4gICAgfSxcbiAgICBjaGFuZ2VJZChzdGF0ZSwgbmV3SWQpe1xuICAgICAgc3RhdGUudXJsID0gbmV3SWQ7XG4gICAgfSxcbiAgfSxcbiAgYWN0aW9uczoge1xuXG4gIH1cbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwifi9wYWNrYWdlLmpzb25cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==