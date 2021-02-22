"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ai = require("react-icons/ai");

var _fa = require("react-icons/fa");

var _bs = require("react-icons/bs");

var _io = require("react-icons/io");

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var IconWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  > * {\n    font-size: ", ";\n    padding: ", ";\n    margin: ", ";\n    border-radius: ", ";\n    background-color: ", ";\n    color: ", ";\n    align-self: center;\n  }\n"])), function (props) {
  return props.size ? "".concat(props.size, "rem") : '1rem';
}, function (props) {
  return props.padding ? props.padding : '0.25rem';
}, function (props) {
  return props.margin ? props.margin : 'auto';
}, function (props) {
  return props.borderRadius ? props.borderRadius : '';
}, function (props) {
  return props.backgroundColor ? props.backgroundColor : '';
}, function (props) {
  return props.iconColor ? props.iconColor : 'black';
});

var Icon = function Icon(_ref) {
  var iconType = _ref.iconType,
      size = _ref.size,
      iconColor = _ref.iconColor,
      backgroundColor = _ref.backgroundColor,
      margin = _ref.margin,
      borderRadius = _ref.borderRadius,
      padding = _ref.padding;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(IconWrapper, {
    size: size,
    iconColor: iconColor,
    backgroundColor: backgroundColor,
    margin: margin,
    borderRadius: borderRadius,
    padding: padding,
    children: [iconType === 'twitter' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineTwitter, {}), iconType === 'facebook' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaFacebookF, {}), iconType === 'linkedin' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaLinkedinIn, {}), iconType === 'mail' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineMail, {}), iconType === 'search' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineSearch, {}), iconType === 'upArrow' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineArrowUp, {}), iconType === 'rightArrow' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineArrowRight, {}), iconType === 'downArrow' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineArrowDown, {}), iconType === 'clock' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineClockCircle, {}), iconType === 'user' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaUserAlt, {}), iconType === 'quote' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaQuoteRight, {}), iconType === 'phone' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaPhone, {}), iconType === 'add' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineUserAdd, {}), iconType === 'close' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineClose, {}), iconType === 'downcaret' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineCaretDown, {}), iconType === 'bulletpoint' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineRightCircle, {}), iconType === 'dashboard' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineDashboard, {}), iconType === 'userlist' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineUsergroupAdd, {}), iconType === 'tasklist' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineOrderedList, {}), iconType === 'profile' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineLock, {}), iconType === 'calendar' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineCalendar, {}), iconType === 'addresscard' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaRegAddressCard, {}), iconType === 'fileupload' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineFileText, {}), iconType === 'fileinvoice' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaFileInvoice, {}), iconType === 'folderopen' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineFolderOpen, {}), iconType === 'logout' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineLogin, {}), iconType === 'exclamationTriangle' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineExclamationCircle, {}), iconType === 'checkCircle' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_bs.BsCheckCircle, {}), iconType === 'stickyNote' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaRegStickyNote, {}), iconType === 'calculator' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineCalculator, {}), iconType === 'bookmark' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_bs.BsBookmark, {}), iconType === 'ellipsisV' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaEllipsisV, {}), iconType === 'toggleOff' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_bs.BsToggleOff, {}), iconType === 'toggleOn' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_bs.BsToggleOn, {}), iconType === 'infoCircle' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineInfoCircle, {}), iconType === 'history' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineHistory, {}), iconType === 'filePdf' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineFilePdf, {}), iconType === 'fileImage' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineFileImage, {}), iconType === 'cog' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaCog, {}), iconType === 'times' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaTimes, {}), iconType === 'settings' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineSetting, {}), iconType === 'reconcile' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineReconciliation, {}), iconType === 'solution' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineSolution, {}), iconType === 'hdd' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineHdd, {}), iconType === 'global' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineGlobal, {}), iconType === 'asterisk' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaAsterisk, {}), iconType === 'copy' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineCopy, {}), iconType === 'copied' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiFillCopy, {}), iconType === 'next' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineArrowRight, {}), iconType === 'back' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineArrowLeft, {}), iconType === 'trash' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_bs.BsTrash, {}), iconType === 'plus' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_io.IoIosAddCircleOutline, {}), iconType === 'userCircle' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaRegUserCircle, {}), iconType === 'notification' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineBell, {}), iconType === 'options' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineAppstoreAdd, {}), iconType === 'wallet' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineWallet, {}), iconType === 'upload' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineUpload, {}), iconType === 'download' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineDownload, {}), iconType === 'questionCircle' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineQuestionCircle, {}), iconType === 'swap' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineSwap, {}), iconType === 'userOutline' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineUser, {}), iconType === 'outlineBlock' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineBlock, {}), iconType === 'pie' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlinePieChart, {}), iconType === 'comments' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineComment, {})]
  });
}; //impelment the icons instead of iconclass


Icon.propTypes = {
  size: _propTypes.default.number,
  padding: _propTypes.default.string,
  borderRadius: _propTypes.default.string,
  iconColor: _propTypes.default.string,
  backgroundColor: _propTypes.default.string,
  margin: _propTypes.default.string,
  iconType: _propTypes.default.oneOf(['twitter', 'comments', 'pie', 'userOutline', 'facebook', 'linkedin', 'outlineBlock', 'mail', 'questionCircle', 'search', 'upArrow', 'downArrow', 'rightArrow', 'user', 'clock', 'quote', 'phone', 'add', 'close', 'bulletpoint', 'downcaret', 'dashboard', 'userlist', 'tasklist', 'profile', 'calendar', 'addresscard', 'fileupload', 'fileinvoice', 'folderopen', 'logout', 'exclamationTriangle', 'checkCircle', 'asterisk', 'stickyNote', 'calculator', 'swap', 'bookmark', 'ellipsisV', 'toggleOff', 'toggleOn', 'infoCircle', 'history', 'filePdf', 'fileImage', 'cog', 'times', 'settings', 'reconcile', 'solution', 'hdd', 'global', 'copy', 'copied', 'next', 'back', 'trash', 'plus', 'userCircle', 'notification', 'options', 'wallet', 'upload', 'download']).isRequired
};
var _default = Icon;
exports.default = _default;

//# sourceMappingURL=index.js.map