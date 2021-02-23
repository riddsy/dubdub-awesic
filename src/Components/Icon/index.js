import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  AiOutlineTwitter,
  AiOutlineMail,
  AiOutlineArrowUp,
  AiOutlineBlock,
  AiOutlineSearch,
  AiOutlineClockCircle,
  AiOutlinePieChart,
  AiOutlineCopy,
  AiOutlineSwap,
  AiOutlineQuestionCircle,
  AiOutlineArrowDown,
  AiOutlineUserAdd,
  AiOutlineClose,
  AiOutlineCaretDown,
  AiOutlineRightCircle,
  AiOutlineDashboard,
  AiOutlineOrderedList,
  AiOutlineLock,
  AiOutlineUser,
  AiOutlineUsergroupAdd,
  AiOutlineComment,
  AiOutlineCalendar,
  AiOutlineFileText,
  AiOutlineFolderOpen,
  AiOutlineLogin,
  AiOutlineExclamationCircle,
  AiOutlineCalculator,
  AiOutlineInfoCircle,
  AiOutlineHistory,
  AiOutlineFilePdf,
  AiOutlineFileImage,
  AiOutlineSetting,
  AiOutlineReconciliation,
  AiOutlineSolution,
  AiOutlineHdd,
  AiOutlineGlobal,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
  AiFillCopy,
  AiOutlineBell,
  AiOutlineWallet,
  AiOutlineAppstoreAdd,
  AiOutlineUpload,
  AiOutlineDownload,
} from 'react-icons/ai';
import {
  FaLinkedinIn,
  FaFacebookF,
  FaUserAlt,
  FaQuoteRight,
  FaPhone,
  FaRegAddressCard,
  FaFileInvoice,
  FaRegStickyNote,
  FaEllipsisV,
  FaCog,
  FaTimes,
  FaAsterisk,
  FaRegUserCircle,
} from 'react-icons/fa';
import {
  BsCheckCircle,
  BsBookmark,
  BsToggleOn,
  BsToggleOff,
  BsTrash,
} from 'react-icons/bs';
import { IoIosAddCircleOutline } from 'react-icons/io';

const IconWrapper = styled.div`
  > * {
    font-size: ${(props) => `${props.size}rem`};
    padding: ${(props) => props.padding};
    margin: ${(props) => props.margin};
    border-radius: ${(props) => props.borderradius};
    background-color: ${(props) => props.backgroundcolor};
    color: ${(props) => props.iconcolor};
    align-self: center;
  }
`;

const Icon = ({
  icontype,
  size,
  iconcolor,
  backgroundcolor,
  margin,
  borderradius,
  padding,
}) => {
  return (
    <IconWrapper
      size={size}
      iconcolor={iconcolor}
      backgroundcolor={backgroundcolor}
      margin={margin}
      borderradius={borderradius}
      padding={padding}
    >
      {icontype === 'twitter' && <AiOutlineTwitter />}
      {icontype === 'facebook' && <FaFacebookF />}
      {icontype === 'linkedin' && <FaLinkedinIn />}
      {icontype === 'mail' && <AiOutlineMail />}
      {icontype === 'search' && <AiOutlineSearch />}
      {icontype === 'upArrow' && <AiOutlineArrowUp />}
      {icontype === 'rightArrow' && <AiOutlineArrowRight />}
      {icontype === 'downArrow' && <AiOutlineArrowDown />}
      {icontype === 'clock' && <AiOutlineClockCircle />}
      {icontype === 'user' && <FaUserAlt />}
      {icontype === 'quote' && <FaQuoteRight />}
      {icontype === 'phone' && <FaPhone />}
      {icontype === 'add' && <AiOutlineUserAdd />}
      {icontype === 'close' && <AiOutlineClose />}
      {icontype === 'downcaret' && <AiOutlineCaretDown />}
      {icontype === 'bulletpoint' && <AiOutlineRightCircle />}
      {icontype === 'dashboard' && <AiOutlineDashboard />}
      {icontype === 'userlist' && <AiOutlineUsergroupAdd />}
      {icontype === 'tasklist' && <AiOutlineOrderedList />}
      {icontype === 'profile' && <AiOutlineLock />}
      {icontype === 'calendar' && <AiOutlineCalendar />}
      {icontype === 'addresscard' && <FaRegAddressCard />}
      {icontype === 'fileupload' && <AiOutlineFileText />}
      {icontype === 'fileinvoice' && <FaFileInvoice />}
      {icontype === 'folderopen' && <AiOutlineFolderOpen />}
      {icontype === 'logout' && <AiOutlineLogin />}
      {icontype === 'exclamationTriangle' && <AiOutlineExclamationCircle />}
      {icontype === 'checkCircle' && <BsCheckCircle />}
      {icontype === 'stickyNote' && <FaRegStickyNote />}
      {icontype === 'calculator' && <AiOutlineCalculator />}
      {icontype === 'bookmark' && <BsBookmark />}
      {icontype === 'ellipsisV' && <FaEllipsisV />}
      {icontype === 'toggleOff' && <BsToggleOff />}
      {icontype === 'toggleOn' && <BsToggleOn />}
      {icontype === 'infoCircle' && <AiOutlineInfoCircle />}
      {icontype === 'history' && <AiOutlineHistory />}
      {icontype === 'filePdf' && <AiOutlineFilePdf />}
      {icontype === 'fileImage' && <AiOutlineFileImage />}
      {icontype === 'cog' && <FaCog />}
      {icontype === 'times' && <FaTimes />}
      {icontype === 'settings' && <AiOutlineSetting />}
      {icontype === 'reconcile' && <AiOutlineReconciliation />}
      {icontype === 'solution' && <AiOutlineSolution />}
      {icontype === 'hdd' && <AiOutlineHdd />}
      {icontype === 'global' && <AiOutlineGlobal />}
      {icontype === 'asterisk' && <FaAsterisk />}
      {icontype === 'copy' && <AiOutlineCopy />}
      {icontype === 'copied' && <AiFillCopy />}
      {icontype === 'next' && <AiOutlineArrowRight />}
      {icontype === 'back' && <AiOutlineArrowLeft />}
      {icontype === 'trash' && <BsTrash />}
      {icontype === 'plus' && <IoIosAddCircleOutline />}
      {icontype === 'userCircle' && <FaRegUserCircle />}
      {icontype === 'notification' && <AiOutlineBell />}
      {icontype === 'options' && <AiOutlineAppstoreAdd />}
      {icontype === 'wallet' && <AiOutlineWallet />}
      {icontype === 'upload' && <AiOutlineUpload />}
      {icontype === 'download' && <AiOutlineDownload />}
      {icontype === 'questionCircle' && <AiOutlineQuestionCircle />}
      {icontype === 'swap' && <AiOutlineSwap />}
      {icontype === 'userOutline' && <AiOutlineUser />}
      {icontype === 'outlineBlock' && <AiOutlineBlock />}
      {icontype === 'pie' && <AiOutlinePieChart />}
      {icontype === 'comments' && <AiOutlineComment />}
    </IconWrapper>
  );
};

Icon.defaultProps = {
  size: 1,
  iconcolor: 'black',
  backgroundcolor: '',
  borderradius: '',
  margin: 'auto',
  padding: '0.25rem',
};

Icon.propTypes = {
  size: PropTypes.number,
  padding: PropTypes.string,
  borderradius: PropTypes.string,
  iconcolor: PropTypes.string,
  backgroundcolor: PropTypes.string,
  margin: PropTypes.string,
  icontype: PropTypes.oneOf([
    'twitter',
    'comments',
    'pie',
    'userOutline',
    'facebook',
    'linkedin',
    'outlineBlock',
    'mail',
    'questionCircle',
    'search',
    'upArrow',
    'downArrow',
    'rightArrow',
    'user',
    'clock',
    'quote',
    'phone',
    'add',
    'close',
    'bulletpoint',
    'downcaret',
    'dashboard',
    'userlist',
    'tasklist',
    'profile',
    'calendar',
    'addresscard',
    'fileupload',
    'fileinvoice',
    'folderopen',
    'logout',
    'exclamationTriangle',
    'checkCircle',
    'asterisk',
    'stickyNote',
    'calculator',
    'swap',
    'bookmark',
    'ellipsisV',
    'toggleOff',
    'toggleOn',
    'infoCircle',
    'history',
    'filePdf',
    'fileImage',
    'cog',
    'times',
    'settings',
    'reconcile',
    'solution',
    'hdd',
    'global',
    'copy',
    'copied',
    'next',
    'back',
    'trash',
    'plus',
    'userCircle',
    'notification',
    'options',
    'wallet',
    'upload',
    'download',
  ]).isRequired,
};

export default Icon;
