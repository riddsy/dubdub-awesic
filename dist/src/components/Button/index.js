"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StyledButton = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledButton = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-size: ", ";\n  border-radius: ", ";\n  margin: ", ";\n  padding: ", ";\n  background-color: ", ";\n  color: ", ";\n  width: ", ";\n  &:hover {\n    opacity: 0.7;\n    cursor: ", ";\n  }\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  outline: none;\n  border: none;\n  text-transform: uppercase;\n  white-space: nowrap;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),\n    0 6px 6px rgba(0, 0, 0, 0.23);\n  -moz-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),\n    0 6px 6px rgba(0, 0, 0, 0.23);\n"])), function (props) {
  return "".concat(props.fontsize, "rem");
}, function (props) {
  return props.borderradius;
}, function (props) {
  return props.margin;
}, function (props) {
  return props.padding;
}, function (props) {
  return props.backgroundcolor;
}, function (props) {
  return props.textcolor;
}, function (props) {
  return props.block === 'true' ? '100%' : '';
}, function (props) {
  return props.disabled ? 'no-drop' : 'pointer';
});

exports.StyledButton = StyledButton;

var Button = function Button(_ref) {
  var fontsize = _ref.fontsize,
      borderradius = _ref.borderradius,
      margin = _ref.margin,
      padding = _ref.padding,
      backgroundcolor = _ref.backgroundcolor,
      textcolor = _ref.textcolor,
      disabled = _ref.disabled,
      block = _ref.block,
      children = _ref.children;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledButton, {
    fontsize: fontsize,
    borderradius: borderradius,
    margin: margin,
    padding: padding,
    backgroundcolor: backgroundcolor,
    textcolor: textcolor,
    disabled: disabled,
    block: block,
    children: children
  });
};

Button.defaultProps = {
  fontsize: 1,
  borderradius: '5px',
  margin: 'auto',
  padding: '0.5rem 1rem',
  backgroundcolor: 'lightgrey',
  textcolor: 'black',
  disabled: false,
  block: 'false'
};
Button.propTypes = {
  fontsize: _propTypes.default.number,
  borderradius: _propTypes.default.string,
  margin: _propTypes.default.string,
  padding: _propTypes.default.string,
  backgroundcolor: _propTypes.default.string,
  textcolor: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  block: _propTypes.default.string
};
var _default = Button;
exports.default = _default;

//# sourceMappingURL=index.js.map