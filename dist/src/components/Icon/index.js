"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _ai = require("react-icons/ai");

var _fa = require("react-icons/fa");

var _bs = require("react-icons/bs");

var _io = require("react-icons/io");

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var WrapperBackgroundStyles = function WrapperBackgroundStyles(_ref) {
  var background = _ref.background;

  if (background === 'light') {
    return (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      background-color: ", ";\n    "])), function (props) {
      return "rgba(".concat(props.theme.colors.neutral[5], ", 1)");
    });
  } else if (background === 'dark') {
    return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      background-color: ", ";\n    "])), function (props) {
      return "rgba(".concat(props.theme.colors.neutral[0], ", 1)");
    });
  } else if (background === 'primary') {
    return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      background-color: ", ";\n    "])), function (props) {
      return "rgba(".concat(props.theme.colors.primary[0], ", 1)");
    });
  } else if (background === 'alt') {
    return (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      background-color: ", ";\n    "])), function (props) {
      return "rgba(".concat(props.theme.colors.secondary[0], ", 1)");
    });
  } else if (background === 'lightGrey') {
    return (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      background-color: ", ";\n    "])), function (props) {
      return "rgba(".concat(props.theme.colors.neutral[4], ", 1)");
    });
  } else if (background === 'darkOverlay') {
    return (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      background-color: ", ";\n    "])), function (props) {
      return "rgba(".concat(props.theme.colors.neutral[2], ", 0.7)");
    });
  } else if (background === 'danger') {
    return (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      color: ", ";\n    "])), function (props) {
      return "rgba(".concat(props.theme.colors.danger[0], ", 1)");
    });
  } else if (background === 'success') {
    return (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      color: ", ";\n    "])), function (props) {
      return "rgba(".concat(props.theme.colors.success[0], ", 1)");
    });
  } else {
    return (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      background-color: none;\n    "])));
  }
};

var IconColorStyles = function IconColorStyles(_ref2) {
  var color = _ref2.color;

  if (color === 'light') {
    return (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      color: ", ";\n    "])), function (props) {
      return "rgba(".concat(props.theme.colors.neutral[5], ", 1)");
    });
  } else if (color === 'darkOverlay') {
    return (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      color: ", ";\n    "])), function (props) {
      return "rgba(".concat(props.theme.colors.neutral[0], ", 1)");
    });
  } else if (color === 'primary') {
    return (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      color: ", ";\n    "])), function (props) {
      return "rgba(".concat(props.theme.colors.primary[2], ", 1)");
    });
  } else if (color === 'alt') {
    return (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n      color: ", ";\n    "])), function (props) {
      return "rgba(".concat(props.theme.colors.secondary[0], ", 1)");
    });
  } else if (color === 'lightGrey') {
    return (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      color: ", ";\n    "])), function (props) {
      return "rgba(".concat(props.theme.colors.neutral[3], ", 1)");
    });
  } else if (color === 'midGrey') {
    return (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n      color: ", ";\n    "])), function (props) {
      return "rgba(".concat(props.theme.colors.neutral[2], ", 1)");
    });
  } else if (color === 'danger') {
    return (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n      color: ", ";\n    "])), function (props) {
      return "rgba(".concat(props.theme.colors.danger[0], ", 1)");
    });
  } else if (color === 'success') {
    return (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n      color: ", ";\n    "])), function (props) {
      return "rgba(".concat(props.theme.colors.success[0], ", 1)");
    });
  } else {
    return (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n      color: ", ";\n    "])), function (props) {
      return "rgba(".concat(props.theme.colors.neutral[2], ", 1)");
    });
  }
};

var IconWrapper = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  border-radius: ", ";\n  font-size: ", ";\n  padding: ", ";\n  padding-bottom: ", ";\n  margin: ", ";\n  display: flex;\n  ", "\n  > * {\n    ", "\n    align-self: center;\n  }\n"])), function (props) {
  return props.isCircle ? '50%' : props.theme.styles.borderRadius;
}, function (props) {
  return props.size ? "".concat(props.size, "rem") : '1rem';
}, function (props) {
  return props.background ? '0.5rem 0.5rem 0 0.5rem;' : '0';
}, function (props) {
  return props.isCircle ? '0.1rem' : '';
}, function (props) {
  return props.margin ? props.margin : '';
}, WrapperBackgroundStyles, IconColorStyles);

var Icon = function Icon(_ref3) {
  var iconType = _ref3.iconType,
      size = _ref3.size,
      color = _ref3.color,
      background = _ref3.background,
      isCircle = _ref3.isCircle,
      margin = _ref3.margin;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(IconWrapper, {
    background: background,
    size: size,
    color: color,
    isCircle: isCircle,
    margin: margin,
    children: [iconType === 'twitter' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineTwitter, {}), iconType === 'facebook' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaFacebookF, {}), iconType === 'linkedin' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaLinkedinIn, {}), iconType === 'mail' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineMail, {}), iconType === 'search' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineSearch, {}), iconType === 'upArrow' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineArrowUp, {}), iconType === 'rightArrow' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineArrowRight, {}), iconType === 'downArrow' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineArrowDown, {}), iconType === 'clock' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineClockCircle, {}), iconType === 'user' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaUserAlt, {}), iconType === 'quote' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaQuoteRight, {}), iconType === 'phone' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaPhone, {}), iconType === 'add' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineUserAdd, {}), iconType === 'close' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineClose, {}), iconType === 'downcaret' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineCaretDown, {}), iconType === 'bulletpoint' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineRightCircle, {}), iconType === 'dashboard' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineDashboard, {}), iconType === 'userlist' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineUsergroupAdd, {}), iconType === 'tasklist' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineOrderedList, {}), iconType === 'profile' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineLock, {}), iconType === 'calendar' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineCalendar, {}), iconType === 'addresscard' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaRegAddressCard, {}), iconType === 'fileupload' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineFileText, {}), iconType === 'fileinvoice' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaFileInvoice, {}), iconType === 'folderopen' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineFolderOpen, {}), iconType === 'logout' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineLogin, {}), iconType === 'exclamationTriangle' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineExclamationCircle, {}), iconType === 'checkCircle' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_bs.BsCheckCircle, {}), iconType === 'stickyNote' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaRegStickyNote, {}), iconType === 'calculator' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineCalculator, {}), iconType === 'bookmark' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_bs.BsBookmark, {}), iconType === 'ellipsisV' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaEllipsisV, {}), iconType === 'toggleOff' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_bs.BsToggleOff, {}), iconType === 'toggleOn' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_bs.BsToggleOn, {}), iconType === 'infoCircle' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineInfoCircle, {}), iconType === 'history' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineHistory, {}), iconType === 'filePdf' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineFilePdf, {}), iconType === 'fileImage' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineFileImage, {}), iconType === 'cog' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaCog, {}), iconType === 'times' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaTimes, {}), iconType === 'settings' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineSetting, {}), iconType === 'reconcile' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineReconciliation, {}), iconType === 'solution' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineSolution, {}), iconType === 'hdd' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineHdd, {}), iconType === 'global' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineGlobal, {}), iconType === 'asterisk' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaAsterisk, {}), iconType === 'copy' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineCopy, {}), iconType === 'copied' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiFillCopy, {}), iconType === 'next' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineArrowRight, {}), iconType === 'back' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineArrowLeft, {}), iconType === 'trash' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_bs.BsTrash, {}), iconType === 'plus' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_io.IoIosAddCircleOutline, {}), iconType === 'userCircle' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaRegUserCircle, {}), iconType === 'notification' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineBell, {}), iconType === 'options' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineAppstoreAdd, {}), iconType === 'wallet' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineWallet, {}), iconType === 'upload' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineUpload, {}), iconType === 'download' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineDownload, {}), iconType === 'questionCircle' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineQuestionCircle, {}), iconType === 'swap' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineSwap, {}), iconType === 'userOutline' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineUser, {}), iconType === 'outlineBlock' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineBlock, {}), iconType === 'pie' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlinePieChart, {}), iconType === 'comments' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineComment, {})]
  });
}; //impelment the icons instead of iconclass


Icon.propTypes = {
  margin: _propTypes.default.string,
  iconType: _propTypes.default.oneOf(['twitter', 'comments', 'pie', 'userOutline', 'facebook', 'linkedin', 'outlineBlock', 'mail', 'questionCircle', 'search', 'upArrow', 'downArrow', 'rightArrow', 'user', 'clock', 'quote', 'phone', 'add', 'close', 'bulletpoint', 'downcaret', 'dashboard', 'userlist', 'tasklist', 'profile', 'calendar', 'addresscard', 'fileupload', 'fileinvoice', 'folderopen', 'logout', 'exclamationTriangle', 'checkCircle', 'asterisk', 'stickyNote', 'calculator', 'swap', 'bookmark', 'ellipsisV', 'toggleOff', 'toggleOn', 'infoCircle', 'history', 'filePdf', 'fileImage', 'cog', 'times', 'settings', 'reconcile', 'solution', 'hdd', 'global', 'copy', 'copied', 'next', 'back', 'trash', 'plus', 'userCircle', 'notification', 'options', 'wallet', 'upload', 'download']),
  size: _propTypes.default.number.isRequired,
  isCircle: _propTypes.default.bool,
  color: _propTypes.default.oneOf(['light', 'dark', 'primary', 'alt', 'lightGrey', 'midGrey', 'danger', 'success']),
  background: _propTypes.default.oneOf(['light', 'dark', 'primary', 'alt', 'lightGrey', 'darkOverlay'])
};
var _default = Icon;
exports.default = _default;

//# sourceMappingURL=index.js.map