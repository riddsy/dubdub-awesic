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
    font-size: ${(props) => (props.size ? `${props.size}rem` : '1rem')};
    padding: ${(props) => (props.padding ? props.padding : '0.25rem')};
    margin: ${(props) => (props.margin ? props.margin : 'auto')};
    border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '')};
    background-color: ${(props) =>
      props.backgroundColor ? props.backgroundColor : ''};
    color: ${(props) => (props.iconColor ? props.iconColor : 'black')};
    align-self: center;
  }
`;

const Icon = ({
  iconType,
  size,
  iconColor,
  backgroundColor,
  margin,
  borderRadius,
  padding,
}) => {
  return (
    <IconWrapper
      size={size}
      iconColor={iconColor}
      backgroundColor={backgroundColor}
      margin={margin}
      borderRadius={borderRadius}
      padding={padding}
    >
      {iconType === 'twitter' && <AiOutlineTwitter />}
      {iconType === 'facebook' && <FaFacebookF />}
      {iconType === 'linkedin' && <FaLinkedinIn />}
      {iconType === 'mail' && <AiOutlineMail />}
      {iconType === 'search' && <AiOutlineSearch />}
      {iconType === 'upArrow' && <AiOutlineArrowUp />}
      {iconType === 'rightArrow' && <AiOutlineArrowRight />}
      {iconType === 'downArrow' && <AiOutlineArrowDown />}
      {iconType === 'clock' && <AiOutlineClockCircle />}
      {iconType === 'user' && <FaUserAlt />}
      {iconType === 'quote' && <FaQuoteRight />}
      {iconType === 'phone' && <FaPhone />}
      {iconType === 'add' && <AiOutlineUserAdd />}
      {iconType === 'close' && <AiOutlineClose />}
      {iconType === 'downcaret' && <AiOutlineCaretDown />}
      {iconType === 'bulletpoint' && <AiOutlineRightCircle />}
      {iconType === 'dashboard' && <AiOutlineDashboard />}
      {iconType === 'userlist' && <AiOutlineUsergroupAdd />}
      {iconType === 'tasklist' && <AiOutlineOrderedList />}
      {iconType === 'profile' && <AiOutlineLock />}
      {iconType === 'calendar' && <AiOutlineCalendar />}
      {iconType === 'addresscard' && <FaRegAddressCard />}
      {iconType === 'fileupload' && <AiOutlineFileText />}
      {iconType === 'fileinvoice' && <FaFileInvoice />}
      {iconType === 'folderopen' && <AiOutlineFolderOpen />}
      {iconType === 'logout' && <AiOutlineLogin />}
      {iconType === 'exclamationTriangle' && <AiOutlineExclamationCircle />}
      {iconType === 'checkCircle' && <BsCheckCircle />}
      {iconType === 'stickyNote' && <FaRegStickyNote />}
      {iconType === 'calculator' && <AiOutlineCalculator />}
      {iconType === 'bookmark' && <BsBookmark />}
      {iconType === 'ellipsisV' && <FaEllipsisV />}
      {iconType === 'toggleOff' && <BsToggleOff />}
      {iconType === 'toggleOn' && <BsToggleOn />}
      {iconType === 'infoCircle' && <AiOutlineInfoCircle />}
      {iconType === 'history' && <AiOutlineHistory />}
      {iconType === 'filePdf' && <AiOutlineFilePdf />}
      {iconType === 'fileImage' && <AiOutlineFileImage />}
      {iconType === 'cog' && <FaCog />}
      {iconType === 'times' && <FaTimes />}
      {iconType === 'settings' && <AiOutlineSetting />}
      {iconType === 'reconcile' && <AiOutlineReconciliation />}
      {iconType === 'solution' && <AiOutlineSolution />}
      {iconType === 'hdd' && <AiOutlineHdd />}
      {iconType === 'global' && <AiOutlineGlobal />}
      {iconType === 'asterisk' && <FaAsterisk />}
      {iconType === 'copy' && <AiOutlineCopy />}
      {iconType === 'copied' && <AiFillCopy />}
      {iconType === 'next' && <AiOutlineArrowRight />}
      {iconType === 'back' && <AiOutlineArrowLeft />}
      {iconType === 'trash' && <BsTrash />}
      {iconType === 'plus' && <IoIosAddCircleOutline />}
      {iconType === 'userCircle' && <FaRegUserCircle />}
      {iconType === 'notification' && <AiOutlineBell />}
      {iconType === 'options' && <AiOutlineAppstoreAdd />}
      {iconType === 'wallet' && <AiOutlineWallet />}
      {iconType === 'upload' && <AiOutlineUpload />}
      {iconType === 'download' && <AiOutlineDownload />}
      {iconType === 'questionCircle' && <AiOutlineQuestionCircle />}
      {iconType === 'swap' && <AiOutlineSwap />}
      {iconType === 'userOutline' && <AiOutlineUser />}
      {iconType === 'outlineBlock' && <AiOutlineBlock />}
      {iconType === 'pie' && <AiOutlinePieChart />}
      {iconType === 'comments' && <AiOutlineComment />}
    </IconWrapper>
  );
};
//impelment the icons instead of iconclass
Icon.propTypes = {
  size: PropTypes.number,
  padding: PropTypes.string,
  borderRadius: PropTypes.string,
  iconColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  margin: PropTypes.string,
  iconType: PropTypes.oneOf([
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
