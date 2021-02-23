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
  return "".concat(props.size, "rem");
}, function (props) {
  return props.padding;
}, function (props) {
  return props.margin;
}, function (props) {
  return props.borderradius;
}, function (props) {
  return props.backgroundcolor;
}, function (props) {
  return props.iconcolor;
});

var Icon = function Icon(_ref) {
  var icontype = _ref.icontype,
      size = _ref.size,
      iconcolor = _ref.iconcolor,
      backgroundcolor = _ref.backgroundcolor,
      margin = _ref.margin,
      borderradius = _ref.borderradius,
      padding = _ref.padding;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(IconWrapper, {
    size: size,
    iconcolor: iconcolor,
    backgroundcolor: backgroundcolor,
    margin: margin,
    borderradius: borderradius,
    padding: padding,
    children: [icontype === 'twitter' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineTwitter, {}), icontype === 'facebook' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaFacebookF, {}), icontype === 'linkedin' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaLinkedinIn, {}), icontype === 'mail' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineMail, {}), icontype === 'search' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineSearch, {}), icontype === 'upArrow' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineArrowUp, {}), icontype === 'rightArrow' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineArrowRight, {}), icontype === 'downArrow' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineArrowDown, {}), icontype === 'clock' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineClockCircle, {}), icontype === 'user' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaUserAlt, {}), icontype === 'quote' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaQuoteRight, {}), icontype === 'phone' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaPhone, {}), icontype === 'add' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineUserAdd, {}), icontype === 'close' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineClose, {}), icontype === 'downcaret' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineCaretDown, {}), icontype === 'bulletpoint' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineRightCircle, {}), icontype === 'dashboard' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineDashboard, {}), icontype === 'userlist' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineUsergroupAdd, {}), icontype === 'tasklist' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineOrderedList, {}), icontype === 'profile' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineLock, {}), icontype === 'calendar' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineCalendar, {}), icontype === 'addresscard' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaRegAddressCard, {}), icontype === 'fileupload' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineFileText, {}), icontype === 'fileinvoice' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaFileInvoice, {}), icontype === 'folderopen' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineFolderOpen, {}), icontype === 'logout' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineLogin, {}), icontype === 'exclamationTriangle' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineExclamationCircle, {}), icontype === 'checkCircle' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_bs.BsCheckCircle, {}), icontype === 'stickyNote' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaRegStickyNote, {}), icontype === 'calculator' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineCalculator, {}), icontype === 'bookmark' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_bs.BsBookmark, {}), icontype === 'ellipsisV' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaEllipsisV, {}), icontype === 'toggleOff' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_bs.BsToggleOff, {}), icontype === 'toggleOn' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_bs.BsToggleOn, {}), icontype === 'infoCircle' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineInfoCircle, {}), icontype === 'history' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineHistory, {}), icontype === 'filePdf' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineFilePdf, {}), icontype === 'fileImage' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineFileImage, {}), icontype === 'cog' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaCog, {}), icontype === 'times' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaTimes, {}), icontype === 'settings' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineSetting, {}), icontype === 'reconcile' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineReconciliation, {}), icontype === 'solution' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineSolution, {}), icontype === 'hdd' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineHdd, {}), icontype === 'global' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineGlobal, {}), icontype === 'asterisk' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaAsterisk, {}), icontype === 'copy' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineCopy, {}), icontype === 'copied' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiFillCopy, {}), icontype === 'next' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineArrowRight, {}), icontype === 'back' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineArrowLeft, {}), icontype === 'trash' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_bs.BsTrash, {}), icontype === 'plus' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_io.IoIosAddCircleOutline, {}), icontype === 'userCircle' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaRegUserCircle, {}), icontype === 'notification' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineBell, {}), icontype === 'options' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineAppstoreAdd, {}), icontype === 'wallet' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineWallet, {}), icontype === 'upload' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineUpload, {}), icontype === 'download' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineDownload, {}), icontype === 'questionCircle' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineQuestionCircle, {}), icontype === 'swap' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineSwap, {}), icontype === 'userOutline' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineUser, {}), icontype === 'outlineBlock' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineBlock, {}), icontype === 'pie' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlinePieChart, {}), icontype === 'comments' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ai.AiOutlineComment, {})]
  });
};

Icon.defaultProps = {
  size: 1,
  iconcolor: 'black',
  backgroundcolor: '',
  borderradius: '',
  margin: 'auto',
  padding: '0.25rem'
};
Icon.propTypes = {
  size: _propTypes.default.number,
  padding: _propTypes.default.string,
  borderradius: _propTypes.default.string,
  iconcolor: _propTypes.default.string,
  backgroundcolor: _propTypes.default.string,
  margin: _propTypes.default.string,
  icontype: _propTypes.default.oneOf(['twitter', 'comments', 'pie', 'userOutline', 'facebook', 'linkedin', 'outlineBlock', 'mail', 'questionCircle', 'search', 'upArrow', 'downArrow', 'rightArrow', 'user', 'clock', 'quote', 'phone', 'add', 'close', 'bulletpoint', 'downcaret', 'dashboard', 'userlist', 'tasklist', 'profile', 'calendar', 'addresscard', 'fileupload', 'fileinvoice', 'folderopen', 'logout', 'exclamationTriangle', 'checkCircle', 'asterisk', 'stickyNote', 'calculator', 'swap', 'bookmark', 'ellipsisV', 'toggleOff', 'toggleOn', 'infoCircle', 'history', 'filePdf', 'fileImage', 'cog', 'times', 'settings', 'reconcile', 'solution', 'hdd', 'global', 'copy', 'copied', 'next', 'back', 'trash', 'plus', 'userCircle', 'notification', 'options', 'wallet', 'upload', 'download']).isRequired
};
var _default = Icon;
exports.default = _default;

//# sourceMappingURL=index.js.map