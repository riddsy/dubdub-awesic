"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: ", ";\n"])), function (props) {
  return props.background ? "rgba(".concat(props.background, ", 1)") : 'red';
});

var Toggle = function Toggle(_ref) {
  var theme = _ref.theme;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Wrapper, {
    background: !!theme ? theme.colors.primary[0] : '55,155,51',
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      children: "on"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      children: "off"
    })]
  });
};

var _default = Toggle;
exports.default = _default;

//# sourceMappingURL=index.js.map