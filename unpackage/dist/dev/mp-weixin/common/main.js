(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/main"],[
/* 0 */
/*!*************************************************!*\
  !*** D:/code/HBuilderProjects/通用办公系统示例/main.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, createApp) {__webpack_require__(/*! uni-pages */ 4);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 5));

var _store = _interopRequireDefault(__webpack_require__(/*! @/store */ 16));

var _assetsConfig = _interopRequireDefault(__webpack_require__(/*! @/config/assets.config.js */ 18));
var _indexConfig = _interopRequireDefault(__webpack_require__(/*! @/config/index.config.js */ 19));
var _routesConfig = _interopRequireDefault(__webpack_require__(/*! @/config/routes.config.js */ 20));
var _formRuleConfig = _interopRequireDefault(__webpack_require__(/*! @/config/formRule.config.js */ 21));
var _constDataConfig = _interopRequireDefault(__webpack_require__(/*! @/config/constData.config.js */ 17));
var _websocketConfig = _interopRequireDefault(__webpack_require__(/*! @/config/websocket.config.js */ 22));
var _settingConfig = _interopRequireDefault(__webpack_require__(/*! @/config/setting.config.js */ 23));

var _request = __webpack_require__(/*! @/utils/request */ 24);
var _graceChecker = _interopRequireDefault(__webpack_require__(/*! @/utils/graceChecker */ 30));
var _helper = _interopRequireDefault(__webpack_require__(/*! @/utils/helper */ 27));
var _router = _interopRequireDefault(__webpack_require__(/*! @/utils/router */ 28));
var _payment = _interopRequireDefault(__webpack_require__(/*! @/utils/payment */ 31));
var _websocket = _interopRequireDefault(__webpack_require__(/*! @/utils/websocket */ 33));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var rfImage = function rfImage() {Promise.all(/*! require.ensure | components/oa-image/oa-image */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/oa-image/oa-image")]).then((function () {return resolve(__webpack_require__(/*! @/components/oa-image/oa-image */ 801));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var rfEmpty = function rfEmpty() {__webpack_require__.e(/*! require.ensure | components/oa-empty/index */ "components/oa-empty/index").then((function () {return resolve(__webpack_require__(/*! @/components/oa-empty */ 808));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var rfLoading = function rfLoading() {__webpack_require__.e(/*! require.ensure | components/oa-loading/index */ "components/oa-loading/index").then((function () {return resolve(__webpack_require__(/*! @/components/oa-loading */ 815));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var rfLoadProgress = function rfLoadProgress() {__webpack_require__.e(/*! require.ensure | components/oa-load-progress/oa-load-progress */ "components/oa-load-progress/oa-load-progress").then((function () {return resolve(__webpack_require__(/*! @/components/oa-load-progress/oa-load-progress */ 822));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var rfParser = function rfParser() {Promise.all(/*! require.ensure | components/oa-parser/index */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/oa-parser/index")]).then((function () {return resolve(__webpack_require__(/*! @/components/oa-parser */ 827));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var rfBackTop = function rfBackTop() {__webpack_require__.e(/*! require.ensure | components/oa-back-top/index */ "components/oa-back-top/index").then((function () {return resolve(__webpack_require__(/*! @/components/oa-back-top */ 837));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var rfTag = function rfTag() {__webpack_require__.e(/*! require.ensure | components/oa-tag/index */ "components/oa-tag/index").then((function () {return resolve(__webpack_require__(/*! @/components/oa-tag */ 844));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var rfNavDetail = function rfNavDetail() {__webpack_require__.e(/*! require.ensure | components/oa-nav-detail/index */ "components/oa-nav-detail/index").then((function () {return resolve(__webpack_require__(/*! @/components/oa-nav-detail */ 851));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var cuCustom = function cuCustom() {__webpack_require__.e(/*! require.ensure | components/cu-custom/index */ "components/cu-custom/index").then((function () {return resolve(__webpack_require__(/*! @/components/cu-custom */ 858));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};










// 网络状态监听
uni.getNetworkType({
  success: function success(res) {
    _store.default.dispatch('networkStateChange', res.networkType);
  } });

uni.onNetworkStatusChange(function (res) {
  _store.default.dispatch('networkStateChange', res.networkType);
});
// 挂载全局自定义方法
_vue.default.prototype.$mStore = _store.default;

_vue.default.prototype.$http = _request.http;
_vue.default.prototype.$mConfig = _indexConfig.default;
_vue.default.prototype.$mAssetsPath = _assetsConfig.default;
_vue.default.prototype.$mFormRule = _formRuleConfig.default;
_vue.default.prototype.$mRoutesConfig = _routesConfig.default;
_vue.default.prototype.$mConstDataConfig = _constDataConfig.default;
_vue.default.prototype.$mWebsocketConfig = _websocketConfig.default;
_vue.default.prototype.$mSettingConfig = _settingConfig.default;

_vue.default.prototype.$mGraceChecker = _graceChecker.default;
_vue.default.prototype.$mHelper = _helper.default;
_vue.default.prototype.$mRouter = _router.default;
_vue.default.prototype.$mPayment = _payment.default;
_vue.default.prototype.$mWebsocket = _websocket.default;

_vue.default.component('rfImage', rfImage);
_vue.default.component('rfEmpty', rfEmpty);
_vue.default.component('rfLoading', rfLoading);
_vue.default.component('rfLoadProgress', rfLoadProgress);
_vue.default.component('rfParser', rfParser);
_vue.default.component('rfBackTop', rfBackTop);
_vue.default.component('rfTag', rfTag);
_vue.default.component('rfNavDetail', rfNavDetail);
_vue.default.component('cuCustom', cuCustom);

if (false) {}

// 路由导航
_router.default.beforeEach(function (navType, to) {
  if (to.route === undefined) {
    throw '路由钩子函数中没有找到to对象，路由信息:' + JSON.stringify(to);
  }
  if (to.route === _routesConfig.default.login.path && _store.default.getters.hasLogin) {
    uni.reLaunch({
      url: _helper.default.objParseUrlAndParam(_routesConfig.default.main.path) });

    return;
  }
  // 过滤需要权限的页面
  if (to.route.requiresAuth) {
    if (_store.default.getters.hasLogin) {
      // 已经登录
      uni[navType]({
        url: _helper.default.objParseUrlAndParam(to.route.path, to.query) });

    } else {
      // 登录成功后的重定向地址和参数
      var query = _objectSpread({
        redirectUrl: to.route.path },
      to.query);

      // 没有登录 是否强制登录?
      if (_store.default.state.forcedLogin) {
        uni.redirectTo({
          url: _helper.default.objParseUrlAndParam(_routesConfig.default.login.path, query) });

      } else {
        uni.navigateTo({
          url: _helper.default.objParseUrlAndParam(_routesConfig.default.login.path, query) });

      }
    }
  } else {
    uni[navType]({
      url: _helper.default.objParseUrlAndParam(to.route, to.query) });

  }
});

_App.default.mpType = 'app';

_vue.default.mixin({
  computed: {
    themeColor: {
      get: function get() {
        return _store.default.getters.themeColor;
      },
      set: function set(val) {
        _store.default.state.themeColor = val;
      } } } });




_vue.default.prototype.moneySymbol = _constDataConfig.default.moneySymbol;
_vue.default.prototype.singleSkuText = _constDataConfig.default.singleSkuText;

// 保留小数点后两位
_vue.default.filter('keepTwoDecimal', function (value) {
  return (Math.floor((value || 0) * 100) / 100).toFixed(2);
});

var app = new _vue.default(_objectSpread(_objectSpread({},
_App.default), {}, {
  store: _store.default }));

createApp(app).$mount();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createApp"]))

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/*!*************************************************!*\
  !*** D:/code/HBuilderProjects/通用办公系统示例/App.vue ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 6);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss& */ 13);
/* harmony import */ var _home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../home/Tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 15);
var render, staticRenderFns, recyclableRender, components
var renderjs





/* normalize component */

var component = Object(_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null,
  false,
  components,
  renderjs
)

component.options.__file = "App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 6 */
/*!**************************************************************************!*\
  !*** D:/code/HBuilderProjects/通用办公系统示例/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../home/Tools/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../home/Tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../home/Tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../home/Tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../home/Tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=script&lang=js& */ 7);
/* harmony import */ var _home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 7 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/code/HBuilderProjects/通用办公系统示例/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 8));

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _basic = __webpack_require__(/*! @/api/basic */ 11);
var _vuex = __webpack_require__(/*! vuex */ 12);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var _default =
{
  onLaunch: function onLaunch() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
              console.log('开始启动');_context.next = 3;return (
                _this2.initData());case 3:
              console.log('初始化完成');case 4:case "end":return _context.stop();}}}, _callee);}))();
  },
  onHide: function onHide() {},
  methods: _objectSpread(_objectSpread({},
  (0, _vuex.mapMutations)(['setNotifyNum'])), {}, {
    // 数据初始化
    initData: function initData() {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var _this, token;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                // 获取页面设置配置

                _this = _this3;

                //1.获取code，判断是否绑定
                uni.login({
                  provider: 'weixin',
                  success: function success(res) {
                    console.log('code:' + res.code);
                    _this.initUser(res.code);
                  } });


                token = uni.getStorageSync('accessToken');


















                // 获取系统title高度
                _context2.next = 5;return _this3.initSystemInfo();case 5:if (!
                _this3.$mStore.getters.hasLogin) {_context2.next = 9;break;}_context2.next = 8;return (

                  _this3.$mWebsocket.initWebsocket());case 8:
                // 初始化购物车数量
                _this3.setNotifyNum(uni.getStorageSync('notifyNum') || 0);case 9:case "end":return _context2.stop();}}}, _callee2);}))();








    },
    initUser: function initUser(code) {var _this4 = this;
      this.$http.post('/auth/mobile/token/social?grant_type=mobil&mobile=MINI@' + code).
      then(function (r) {
        _this4.$mStore.commit('login', r.data);
      }).
      catch(function (err) {
        if (err.statusCode === 401) {
          uni.navigateTo({
            url: '/pages/public/login' });

        }
      });
    },
    // 初始化系统信息
    initSystemInfo: function initSystemInfo() {
      uni.getSystemInfo({
        success: function success(e) {









          _vue.default.prototype.StatusBar = e.statusBarHeight;
          // eslint-disable-next-line
          var custom = wx.getMenuButtonBoundingClientRect();
          _vue.default.prototype.Custom = custom;
          _vue.default.prototype.CustomBar = custom.top - e.statusBarHeight;





        } });

    },
    // 初始化通用配置

    // 初始化全局配置

    // 设备绑定(app推送)
    handleBindingEquipment: function handleBindingEquipment(id, token) {var _this5 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var oauth_client;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
                oauth_client = uni.getSystemInfoSync().platform;_context3.next = 3;return (
                  _this5.$http.post(_basic.bindingEquipment, {
                    token: token,
                    oauth_client: oauth_client,
                    oauth_client_user_id: id }));case 3:case "end":return _context3.stop();}}}, _callee3);}))();

    },
    // 推送消息跳转
    navTo: function navTo(item) {var _this6 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var route, id, type;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:

                id = item.target_id;
                type = item.target_type;_context4.t0 =
                type;_context4.next = _context4.t0 ===
                'order_consign' ? 5 : _context4.t0 ===
                'order_stock_up_accomplish' ? 5 : _context4.t0 ===
                'order_return_money' ? 5 : _context4.t0 ===
                'order_bargain_accomplish' ? 5 : _context4.t0 ===


                'order_wholesale_open' ? 7 : _context4.t0 ===
                'order_wholesale_join' ? 7 : _context4.t0 ===
                'order_wholesale_accomplish' ? 7 : _context4.t0 ===
                'order_wholesale_close' ? 7 : _context4.t0 ===


                'order_bargain_friend_join' ? 9 : _context4.t0 ===


                'order_bargain_close' ? 11 : _context4.t0 ===


                'coupon_give' ? 13 : _context4.t0 ===


                'order_virtual' ? 15 : _context4.t0 ===
                'order_virtual_card' ? 15 : _context4.t0 ===
                'order_virtual_network_disk' ? 15 : _context4.t0 ===
                'order_virtual_download' ? 15 : 17;break;case 5:route = "/pages/order/detail?id=".concat(id);return _context4.abrupt("break", 19);case 7:route = "/pages/marketing/wholesale/detail?id=".concat(id);return _context4.abrupt("break", 19);case 9:route = "/pages/marketing/bargain/detail?id=".concat(id);return _context4.abrupt("break", 19);case 11:route = "/pages/marketing/bargain/detail?id=".concat(id);return _context4.abrupt("break", 19);case 13:route = '/pages/user/coupon/coupon?type=1';return _context4.abrupt("break", 19);case 15:
                route = "/pages/user/virtual/detail?id=".concat(id);return _context4.abrupt("break", 19);case 17:


                route = '/pages/index/index';return _context4.abrupt("break", 19);case 19:


                if (route) _this6.$mRouter.push({ route: route });case 20:case "end":return _context4.stop();}}}, _callee4);}))();
    } }) };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/*!***********************************************************************************!*\
  !*** D:/code/HBuilderProjects/通用办公系统示例/App.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../home/Tools/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../home/Tools/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../home/Tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../home/Tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../home/Tools/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../home/Tools/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../home/Tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../home/Tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../home/Tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=style&index=0&lang=scss& */ 14);
/* harmony import */ var _home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 14 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/code/HBuilderProjects/通用办公系统示例/App.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })
],[[0,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/main.js.map