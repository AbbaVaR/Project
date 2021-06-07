webpackHotUpdate("bundle",{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWU/MTlmNiIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9BcHAudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN5SDtBQUM3QjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsc0dBQXFDO0FBQy9GO0FBQ0EsOEJBQThCLFFBQVMsZ0JBQWdCLGdDQUFnQyxxQkFBcUIsR0FBRyxPQUFPLDhCQUE4QixHQUFHLFlBQVksdUJBQXVCLG9CQUFvQix3QkFBd0IsR0FBRyxRQUFRLG1CQUFtQiw0QkFBNEIsd0JBQXdCLG1CQUFtQix3QkFBd0IsK0JBQStCLEdBQUcsU0FBUyw4QkFBOEIsdUJBQXVCLG1CQUFtQixzQkFBc0IsdUJBQXVCLDJCQUEyQixrQkFBa0IsR0FBRyxXQUFXLDhFQUE4RSx1QkFBdUIsR0FBRyxTQUFTLG9GQUFvRixNQUFNLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsZzRCQUFnNEIsa0VBQWtFLFVBQVUsT0FBTyxpREFBaUQsY0FBYyxnQkFBZ0IsOEZBQThGLE9BQU8sZ0JBQWdCLGdDQUFnQyxrQ0FBa0Msd0NBQXdDLFVBQVUscUJBQXFCLG9DQUFvQyw0REFBNEQsV0FBVyxPQUFPLG9CQUFvQixXQUFXLFNBQVMsbUJBQW1CLGtHQUFrRyxHQUFHLHlDQUF5QyxjQUFjLDBCQUEwQixtRUFBbUUsa0NBQWtDLDhDQUE4Qyx1QkFBdUIsbUlBQW1JLGtCQUFrQixtQkFBbUIsd0tBQXdLLHlEQUF5RCx5REFBeUQsOERBQThELGtDQUFrQyxvQkFBb0IsTUFBTSxvQkFBb0IsbUNBQW1DLHFCQUFxQixRQUFRLHNCQUFzQixnQ0FBZ0MsZUFBZSxhQUFhLHFCQUFxQixvQ0FBb0MsRUFBRSxHQUFHLHNCQUFzQixtSkFBbUosY0FBYyxvQkFBb0Isa0JBQWtCLGtCQUFrQix3TUFBd00sa0JBQWtCLG9DQUFvQyxjQUFjLFNBQVMsWUFBWSxxQ0FBcUMsK0JBQStCLFdBQVcsRUFBRSxTQUFTLFFBQVEsS0FBSyx1Q0FBdUMsb0NBQW9DLHlCQUF5QixPQUFPLFdBQVcsa0NBQWtDLE9BQU8sa0JBQWtCLDJCQUEyQix3QkFBd0IsNEJBQTRCLE9BQU8sY0FBYyx1QkFBdUIsZ0NBQWdDLDRCQUE0Qix1QkFBdUIsNEJBQTRCLG1DQUFtQyxPQUFPLGVBQWUsa0NBQWtDLDJCQUEyQix1QkFBdUIsMEJBQTBCLDJCQUEyQiwrQkFBK0Isc0JBQXNCLE9BQU8saUJBQWlCLGtGQUFrRiwyQkFBMkIsT0FBTywrQkFBK0I7QUFDN2hLO0FBQ2Usc0ZBQXVCLEVBQUM7O0FBRXZDLFdBQVcsY0FBYyxHQUFHLG1CQUFPLENBQUMsNkNBQW9CO0FBQ3hELElBQUksbUJBQU8sQ0FBQyw4REFBMkM7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsUUFBUSxJQUFVO0FBQ2xCO0FBQ0E7QUFDQSwrQkFBK0IsOENBQThDO0FBQzdFLFNBQVM7QUFDVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQ0FEQTtBQUVBLGlCQUZBO0FBR0E7QUFIQTtBQUtBLEdBUEE7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBLEtBTEE7O0FBTUE7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBLEtBWkE7O0FBYUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBLDBCQURBO0FBRUE7QUFGQSxTQUdBLElBSEEsQ0FJQTtBQUNBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBLHdDQUZBO0FBR0E7QUFIQTtBQUlBLFNBTEEsTUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdJQUNBLG9CQURBLG1CQUNBLHFCQURBO0FBRUE7QUFDQTtBQUNBLE9BdEJBLEVBdUJBO0FBQ0E7QUFDQTtBQUNBLHlCQURBO0FBRUEsc0RBRkE7QUFHQTtBQUhBO0FBSUEsT0E3QkE7QUErQkEsS0FqREE7O0FBa0RBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBLHlDQUZBO0FBR0EsMEJBSEE7QUFJQSxrQ0FKQTtBQUtBO0FBTEEsU0FNQSxJQU5BLENBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVZBO0FBV0E7O0FBOURBO0FBUkEsRyIsImZpbGUiOiJidW5kbGUuZjZiMGY4MDYzZDFhZDc1ZjA3ZjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuQWN0aW9uQmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUzYmE4MjtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxufVxcbi5hcHB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xcbn1cXG4ubWVzc2FnZSB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbn1cXG4uYnRuIHtcXG4gICBmb250LXNpemU6IDE4O1xcbiAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgIGhlaWdodDogMTYwcHg7XFxuICAgYm9yZGVyLXJhZGl1czogMzAlO1xcbiAgIGJhY2tncm91bmQtY29sb3I6ICNjZjcyMDA7XFxufVxcbi5pbnB1dHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjhDMDA7XFxuICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIG1hcmdpbjogNTBweCAzMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjA7XFxufVxcbi5zZXR0aW5ne1xcbiAgYmFja2dyb3VuZDogbm8tcmVwZWF0ICNjNDZjMDAgY2VudGVyIHVybChcXFwifi9hc3NldHMvaW1hZ2VzL3NldHRpbmcucG5nXFxcIik7XFxuICBib3JkZXItcmFkaXVzOiA0MCU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLy4uL2NvbXBvbmVudHMvQXBwLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBZ0dBO0lBQ0EseUJBQUE7SUFDQSxjQUFBO0FBQ0E7QUFDQTtFQUNBLHlCQUFBO0FBQ0E7QUFFQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLGlCQUFBO0FBQ0E7QUFFQTtHQUNBLGFBQUE7R0FDQSxzQkFBQTtHQUNBLGtCQUFBO0dBQ0EsYUFBQTtHQUNBLGtCQUFBO0dBQ0EseUJBQUE7QUFDQTtBQUVBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBQ0E7QUFFQTtFQUNBLHVFQUFBO0VBQ0Esa0JBQUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICA8UGFnZSBjbGFzcyA9IFxcXCJhcHBcXFwiPlxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCLQn9C+0LjRgdC6INC60LDQsdC40L3QtdGC0LBcXFwiLz5cXG4gICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiNSosMipcXFwiIHJvd3M9XFxcIiosYXV0byxhdXRvLCosYXV0byxhdXRvXFxcIj5cXG4gICAgICA8TGFiZWwgdGV4dD1cXFwi0LrQsNCx0LjQvdC10YI6XFxcIiBjbGFzcz1cXFwibWVzc2FnZVxcXCIgIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIwXFxcIi8+XFxuICAgICAgPExhYmVsIHRleHQ9XFxcItC60L7RgNC/0YPRgTpcXFwiIGNsYXNzPVxcXCJtZXNzYWdlXFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCIvPlxcbiAgICAgIDxUZXh0RmllbGQga2V5Ym9hcmRUeXBlPVxcXCJudW1iZXJcXFwiIGNsYXNzPVxcXCJpbnB1dFxcXCIgdi1tb2RlbD1cXFwiY2FiaW5ldFxcXCIgaGludD1cXFwi0LrQsNCx0LjQvdC10YJcXFwiIHJvdz1cXFwiMlxcXCIgY29sPVxcXCIwXFxcIiAvPlxcbiAgICAgIDxUZXh0RmllbGQga2V5Ym9hcmRUeXBlPVxcXCJudW1iZXJcXFwiIGNsYXNzPVxcXCJpbnB1dFxcXCIgdi1tb2RlbD1cXFwiY29ycHNcXFwiIGhpbnQ9XFxcItC60L7RgNC/0YPRgVxcXCIgcm93PVxcXCIyXFxcIiBjb2w9XFxcIjFcXFwiIEByZXR1cm5QcmVzcz0ncmVxdWVzdCcgLz5cXG4gICAgICA8QnV0dG9uIGNsYXNzPSdidG4nIEB0YXA9J3JlcXVlc3QnIHJvdz1cXFwiNFxcXCIgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCLQvdCw0LnRgtC4XFxcIi8+IFxcbiAgICAgIDxCdXR0b24gY2xhc3M9J2J0biBzZXR0aW5nJyBAdGFwPSdzZXRVcmwnIHJvdz1cXFwiNFxcXCIgY29sPVxcXCIxXFxcIiAvPiBcXG4gICAgICA8QnV0dG9uIGNsYXNzPSdidG4nIEB0YXA9J2Nsb3NlQXBwJyByb3c9XFxcIjVcXFwiIHRleHQ9XFxcItCy0YvRhdC+0LRcXFwiIGNvbFNwYW49XFxcIjJcXFwiLz4gXFxuICAgIDwvR3JpZExheW91dD5cXG4gIDwvUGFnZT5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuaW1wb3J0IHBhZ2UyIGZyb20gJy4vcGFnZTInO1xcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gXFxcIkBuYXRpdmVzY3JpcHQvY29yZS9hcHBsaWNhdGlvblxcXCI7XFxuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSdcXG5cXG4gICBleHBvcnQgZGVmYXVsdCB7XFxuICAgIGRhdGEoKSB7XFxuICAgICAgcmV0dXJuIHtcXG4gICAgICAgIHVybDogJ2h0dHA6Ly8xOTIuMTY4LjEuNTA6ODAwMC8nLFxcbiAgICAgICAgY2FiaW5ldDogJycsXFxuICAgICAgICBjb3JwczogJycsXFxuICAgICAgfVxcbiAgICB9LFxcbiAgICBtZXRob2RzOntcXG4gICAgICBzZWFyY2g6IGZ1bmN0aW9uKGV2ZW50KXtcXG4gICAgICAgIHRoaXMuJHNob3dNb2RhbChwYWdlMiwge1xcbiAgICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxcbiAgICAgICAgfSlcXG4gICAgICB9LFxcbiAgICAgIGNsb3NlQXBwKCkge1xcbiAgICAgICAgaWYgKGFwcGxpY2F0aW9uLmFuZHJvaWQpIHtcXG4gICAgICAgICAgYXBwbGljYXRpb24uYW5kcm9pZC5mb3JlZ3JvdW5kQWN0aXZpdHkuZmluaXNoKCk7XFxuICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICBleGl0KDApO1xcbiAgICAgICAgfVxcbiAgICAgIH0sXFxuICAgICAgcmVxdWVzdCgpe1xcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLmNhYmluZXQuc2xpY2UoMCwzKSArIHRoaXMuY29ycHMuc2xpY2UoMCwxKSBcXG4gICAgICAgIGNvbnNvbGUubG9nKGBJZDogJHtpZH1gKVxcblxcbiAgICAgICAgY29uc29sZS5sb2coYEdldCByZXF1ZXN0ICR7dGhpcy51cmwgKyBpZH1gKVxcbiAgICAgICAgSHR0cC5yZXF1ZXN0KHtcXG4gICAgICAgICAgdXJsOiB0aGlzLnVybCArIGlkLFxcbiAgICAgICAgICBtZXRob2Q6ICdnZXQnXFxuICAgICAgICB9KS50aGVuKFxcbiAgICAgICAgICAocmVzcG9uc2UpID0+IHtcXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSAhPSAyMDApe1xcbiAgICAgICAgICAgICAgYWxlcnQoeyBcXG4gICAgICAgICAgICAgICAgICB0aXRsZTogXFxcItCe0YjQuNCx0LrQsFxcXCIsXFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXFxcItCa0LDQsdC40L3QtdGCINC90LUg0L3QsNC50LTQtdC9XFxcIixcXG4gICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFxcXCJPS1xcXCJ9KSAgXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGVsc2V7XFxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhg0J/QvtC70YPRh9C10L3QuNC1INGA0LXQt9GD0LvRjNGC0LDRgtCwOmApXFxuICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gcmVzcG9uc2UuY29udGVudC50b0pTT04oKVxcbiAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdjaGFuZ2VJZCcsIGNvbnRlbnQuaWQpO1xcbiAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdjaGFuZ2VYJywgY29udGVudC54KTtcXG4gICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnY2hhbmdlWScsIGNvbnRlbnQueSk7XFxuICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2NoYW5nZUltZycsIGNvbnRlbnQuaW5mbyk7XFxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgeDogJHt0aGlzLiRzdG9yZS5zdGF0ZS54fSB5OiAke3RoaXMuJHN0b3JlLnN0YXRlLnl9IFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICR7dGhpcy4kc3RvcmUuc3RhdGUuaWR9IGltZzogJHt0aGlzLiRzdG9yZS5zdGF0ZS5pbWd9YClcXG4gICAgICAgICAgICAgIHRoaXMuc2VhcmNoKCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICAoZSkgPT4ge1xcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGDQntGI0LjQsdC60LAgJHtlfWApO1xcbiAgICAgICAgICAgICBhbGVydCh7IFxcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcXFwi0J7RiNC40LHQutCwXFxcIixcXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcXFwi0J/RgNC+0LLQtdGA0YzRgtC1INGB0L7QtdC00LjQvdC10L3QuNC1INGBINC40L3RgtC10YDQvdC10YLQvtC8XFxcIixcXG4gICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFxcXCJPS1xcXCJ9KVxcbiAgICAgICAgICB9XFxuICAgICAgICApXFxuICAgICAgfSxcXG4gICAgICBzZXRVcmwoKXtcXG4gICAgICAgIHByb21wdCh7XFxuICAgICAgICAgIHRpdGxlOiBcXFwi0J3QsNGB0YLRgNC+0LnQutC4XFxcIixcXG4gICAgICAgICAgbWVzc2FnZTogXFxcItCS0LLQtdC00LjRgtC1INCw0LTRgNC10YEg0YHQtdGA0LLQtdGA0LA6XFxcIixcXG4gICAgICAgICAgb2tCdXR0b25UZXh0OiBcXFwi0L7QulxcXCIsXFxuICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFxcXCLQvtGC0LzQtdC90LBcXFwiLFxcbiAgICAgICAgICBkZWZhdWx0VGV4dDogdGhpcy51cmwsXFxuICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XFxuICAgICAgICAgIGNvbnNvbGUubG9nKGBTZXQgdXJsOiAke3Jlc3VsdC5yZXN1bHR9LCB1cmw6ICR7cmVzdWx0LnRleHR9YClcXG4gICAgICAgICAgdGhpcy51cmwgPSByZXN1bHQudGV4dDtcXG4gICAgICAgICAgdGhpcy5jb3JyZWN0aW9uWCgpO1xcbiAgICAgICAgfSk7XFxuICAgICAgfSxcXG4gICAgfVxcbiAgfVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG4gICAgQWN0aW9uQmFyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1M2JhODI7XFxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgfVxcbiAgICAuYXBwe1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XFxuICAgIH1cXG5cXG4gICAgLm1lc3NhZ2Uge1xcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcXG4gICAgfVxcblxcbiAgICAuYnRuIHtcXG4gICAgICAgZm9udC1zaXplOiAxODtcXG4gICAgICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICBoZWlnaHQ6IDE2MHB4O1xcbiAgICAgICBib3JkZXItcmFkaXVzOiAzMCU7XFxuICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjZjcyMDA7XFxuICAgIH1cXG5cXG4gICAgLmlucHV0e1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjhDMDA7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTAlO1xcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xcbiAgICAgIG1hcmdpbjogNTBweCAzMHB4O1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIH1cXG5cXG4gICAgLnNldHRpbmd7XFxuICAgICAgYmFja2dyb3VuZDogbm8tcmVwZWF0ICNjNDZjMDAgY2VudGVyIHVybChcXFwifi9hc3NldHMvaW1hZ2VzL3NldHRpbmcucG5nXFxcIik7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNDAlO1xcbiAgICB9XFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuXG4gICAgY29uc3QgeyBBcHBsaWNhdGlvbiB9ID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZVwiKTtcbiAgICByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAoX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gJiYgdHlwZW9mIF9fX0NTU19MT0FERVJfRVhQT1JUX19fLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBfX19DU1NfTE9BREVSX0VYUE9SVF9fXy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9BcHAudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCI8dGVtcGxhdGU+XG4gIDxQYWdlIGNsYXNzID0gXCJhcHBcIj5cbiAgICA8QWN0aW9uQmFyIHRpdGxlPVwi0J/QvtC40YHQuiDQutCw0LHQuNC90LXRgtCwXCIvPlxuICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCI1KiwyKlwiIHJvd3M9XCIqLGF1dG8sYXV0bywqLGF1dG8sYXV0b1wiPlxuICAgICAgPExhYmVsIHRleHQ9XCLQutCw0LHQuNC90LXRgjpcIiBjbGFzcz1cIm1lc3NhZ2VcIiAgcm93PVwiMVwiIGNvbD1cIjBcIi8+XG4gICAgICA8TGFiZWwgdGV4dD1cItC60L7RgNC/0YPRgTpcIiBjbGFzcz1cIm1lc3NhZ2VcIiByb3c9XCIxXCIgY29sPVwiMVwiLz5cbiAgICAgIDxUZXh0RmllbGQga2V5Ym9hcmRUeXBlPVwibnVtYmVyXCIgY2xhc3M9XCJpbnB1dFwiIHYtbW9kZWw9XCJjYWJpbmV0XCIgaGludD1cItC60LDQsdC40L3QtdGCXCIgcm93PVwiMlwiIGNvbD1cIjBcIiAvPlxuICAgICAgPFRleHRGaWVsZCBrZXlib2FyZFR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImlucHV0XCIgdi1tb2RlbD1cImNvcnBzXCIgaGludD1cItC60L7RgNC/0YPRgVwiIHJvdz1cIjJcIiBjb2w9XCIxXCIgQHJldHVyblByZXNzPSdyZXF1ZXN0JyAvPlxuICAgICAgPEJ1dHRvbiBjbGFzcz0nYnRuJyBAdGFwPSdyZXF1ZXN0JyByb3c9XCI0XCIgY29sPVwiMFwiIHRleHQ9XCLQvdCw0LnRgtC4XCIvPiBcbiAgICAgIDxCdXR0b24gY2xhc3M9J2J0biBzZXR0aW5nJyBAdGFwPSdzZXRVcmwnIHJvdz1cIjRcIiBjb2w9XCIxXCIgLz4gXG4gICAgICA8QnV0dG9uIGNsYXNzPSdidG4nIEB0YXA9J2Nsb3NlQXBwJyByb3c9XCI1XCIgdGV4dD1cItCy0YvRhdC+0LRcIiBjb2xTcGFuPVwiMlwiLz4gXG4gICAgPC9HcmlkTGF5b3V0PlxuICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHBhZ2UyIGZyb20gJy4vcGFnZTInO1xuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSBcIkBuYXRpdmVzY3JpcHQvY29yZS9hcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSdcblxuICAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB1cmw6ICdodHRwOi8vMTkyLjE2OC4xLjUwOjgwMDAvJyxcbiAgICAgICAgY2FiaW5ldDogJycsXG4gICAgICAgIGNvcnBzOiAnJyxcbiAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6e1xuICAgICAgc2VhcmNoOiBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIHRoaXMuJHNob3dNb2RhbChwYWdlMiwge1xuICAgICAgICAgIGZ1bGxzY3JlZW46IHRydWUsXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgY2xvc2VBcHAoKSB7XG4gICAgICAgIGlmIChhcHBsaWNhdGlvbi5hbmRyb2lkKSB7XG4gICAgICAgICAgYXBwbGljYXRpb24uYW5kcm9pZC5mb3JlZ3JvdW5kQWN0aXZpdHkuZmluaXNoKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZXhpdCgwKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHJlcXVlc3QoKXtcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLmNhYmluZXQuc2xpY2UoMCwzKSArIHRoaXMuY29ycHMuc2xpY2UoMCwxKSBcbiAgICAgICAgY29uc29sZS5sb2coYElkOiAke2lkfWApXG5cbiAgICAgICAgY29uc29sZS5sb2coYEdldCByZXF1ZXN0ICR7dGhpcy51cmwgKyBpZH1gKVxuICAgICAgICBIdHRwLnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogdGhpcy51cmwgKyBpZCxcbiAgICAgICAgICBtZXRob2Q6ICdnZXQnXG4gICAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSAhPSAyMDApe1xuICAgICAgICAgICAgICBhbGVydCh7IFxuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwi0J7RiNC40LHQutCwXCIsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcItCa0LDQsdC40L3QtdGCINC90LUg0L3QsNC50LTQtdC9XCIsXG4gICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIn0pICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDQn9C+0LvRg9GH0LXQvdC40LUg0YDQtdC30YPQu9GM0YLQsNGC0LA6YClcbiAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IHJlc3BvbnNlLmNvbnRlbnQudG9KU09OKClcbiAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdjaGFuZ2VJZCcsIGNvbnRlbnQuaWQpO1xuICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2NoYW5nZVgnLCBjb250ZW50LngpO1xuICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2NoYW5nZVknLCBjb250ZW50LnkpO1xuICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2NoYW5nZUltZycsIGNvbnRlbnQuaW5mbyk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGB4OiAke3RoaXMuJHN0b3JlLnN0YXRlLnh9IHk6ICR7dGhpcy4kc3RvcmUuc3RhdGUueX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAke3RoaXMuJHN0b3JlLnN0YXRlLmlkfSBpbWc6ICR7dGhpcy4kc3RvcmUuc3RhdGUuaW1nfWApXG4gICAgICAgICAgICAgIHRoaXMuc2VhcmNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYNCe0YjQuNCx0LrQsCAke2V9YCk7XG4gICAgICAgICAgICAgYWxlcnQoeyBcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcItCe0YjQuNCx0LrQsFwiLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLQn9GA0L7QstC10YDRjNGC0LUg0YHQvtC10LTQuNC90LXQvdC40LUg0YEg0LjQvdGC0LXRgNC90LXRgtC+0LxcIixcbiAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wifSlcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgIH0sXG4gICAgICBzZXRVcmwoKXtcbiAgICAgICAgcHJvbXB0KHtcbiAgICAgICAgICB0aXRsZTogXCLQndCw0YHRgtGA0L7QudC60LhcIixcbiAgICAgICAgICBtZXNzYWdlOiBcItCS0LLQtdC00LjRgtC1INCw0LTRgNC10YEg0YHQtdGA0LLQtdGA0LA6XCIsXG4gICAgICAgICAgb2tCdXR0b25UZXh0OiBcItC+0LpcIixcbiAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcItC+0YLQvNC10L3QsFwiLFxuICAgICAgICAgIGRlZmF1bHRUZXh0OiB0aGlzLnVybCxcbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBTZXQgdXJsOiAke3Jlc3VsdC5yZXN1bHR9LCB1cmw6ICR7cmVzdWx0LnRleHR9YClcbiAgICAgICAgICB0aGlzLnVybCA9IHJlc3VsdC50ZXh0O1xuICAgICAgICAgIHRoaXMuY29ycmVjdGlvblgoKTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgICBBY3Rpb25CYXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTNiYTgyO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB9XG4gICAgLmFwcHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG4gICAgfVxuXG4gICAgLm1lc3NhZ2Uge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBmb250LXNpemU6IDIwO1xuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICB9XG5cbiAgICAuYnRuIHtcbiAgICAgICBmb250LXNpemU6IDE4O1xuICAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgIGhlaWdodDogMTYwcHg7XG4gICAgICAgYm9yZGVyLXJhZGl1czogMzAlO1xuICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjZjcyMDA7XG4gICAgfVxuXG4gICAgLmlucHV0e1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOEMwMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgbWFyZ2luOiA1MHB4IDMwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAyMDtcbiAgICB9XG5cbiAgICAuc2V0dGluZ3tcbiAgICAgIGJhY2tncm91bmQ6IG5vLXJlcGVhdCAjYzQ2YzAwIGNlbnRlciB1cmwoXCJ+L2Fzc2V0cy9pbWFnZXMvc2V0dGluZy5wbmdcIik7XG4gICAgICBib3JkZXItcmFkaXVzOiA0MCU7XG4gICAgfVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=