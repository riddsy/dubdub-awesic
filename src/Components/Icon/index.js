import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

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

const WrapperBackgroundStyles = ({ background }) => {
  if (background === 'light') {
    return css`
      background-color: ${(props) =>
        `rgba(${props.theme.colors.neutral[5]}, 1)`};
    `;
  } else if (background === 'dark') {
    return css`
      background-color: ${(props) =>
        `rgba(${props.theme.colors.neutral[0]}, 1)`};
    `;
  } else if (background === 'primary') {
    return css`
      background-color: ${(props) =>
        `rgba(${props.theme.colors.primary[0]}, 1)`};
    `;
  } else if (background === 'alt') {
    return css`
      background-color: ${(props) =>
        `rgba(${props.theme.colors.secondary[0]}, 1)`};
    `;
  } else if (background === 'lightGrey') {
    return css`
      background-color: ${(props) =>
        `rgba(${props.theme.colors.neutral[4]}, 1)`};
    `;
  } else if (background === 'darkOverlay') {
    return css`
      background-color: ${(props) =>
        `rgba(${props.theme.colors.neutral[2]}, 0.7)`};
    `;
  } else if (background === 'danger') {
    return css`
      color: ${(props) => `rgba(${props.theme.colors.danger[0]}, 1)`};
    `;
  } else if (background === 'success') {
    return css`
      color: ${(props) => `rgba(${props.theme.colors.success[0]}, 1)`};
    `;
  } else {
    return css`
      background-color: none;
    `;
  }
};

const IconColorStyles = ({ color }) => {
  if (color === 'light') {
    return css`
      color: ${(props) => `rgba(${props.theme.colors.neutral[5]}, 1)`};
    `;
  } else if (color === 'darkOverlay') {
    return css`
      color: ${(props) => `rgba(${props.theme.colors.neutral[0]}, 1)`};
    `;
  } else if (color === 'primary') {
    return css`
      color: ${(props) => `rgba(${props.theme.colors.primary[2]}, 1)`};
    `;
  } else if (color === 'alt') {
    return css`
      color: ${(props) => `rgba(${props.theme.colors.secondary[0]}, 1)`};
    `;
  } else if (color === 'lightGrey') {
    return css`
      color: ${(props) => `rgba(${props.theme.colors.neutral[3]}, 1)`};
    `;
  } else if (color === 'midGrey') {
    return css`
      color: ${(props) => `rgba(${props.theme.colors.neutral[2]}, 1)`};
    `;
  } else if (color === 'danger') {
    return css`
      color: ${(props) => `rgba(${props.theme.colors.danger[0]}, 1)`};
    `;
  } else if (color === 'success') {
    return css`
      color: ${(props) => `rgba(${props.theme.colors.success[0]}, 1)`};
    `;
  } else {
    return css`
      color: ${(props) => `rgba(${props.theme.colors.neutral[2]}, 1)`};
    `;
  }
};

const IconWrapper = styled.div`
  border-radius: ${(props) =>
    props.isCircle ? '50%' : props.theme.styles.borderRadius};
  font-size: ${(props) => (props.size ? `${props.size}rem` : '1rem')};
  padding: ${(props) => (props.background ? '0.5rem 0.5rem 0 0.5rem;' : '0')};
  padding-bottom: ${(props) => (props.isCircle ? '0.1rem' : '')};
  margin: ${(props) => (props.margin ? props.margin : '')};
  display: flex;
  ${WrapperBackgroundStyles}
  > * {
    ${IconColorStyles}
    align-self: center;
  }
`;

const Icon = ({ iconType, size, color, background, isCircle, margin }) => {
  return (
    <IconWrapper
      background={background}
      size={size}
      color={color}
      isCircle={isCircle}
      margin={margin}
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
  ]),
  size: PropTypes.number.isRequired,
  isCircle: PropTypes.bool,
  color: PropTypes.oneOf([
    'light',
    'dark',
    'primary',
    'alt',
    'lightGrey',
    'midGrey',
    'danger',
    'success',
  ]),
  background: PropTypes.oneOf([
    'light',
    'dark',
    'primary',
    'alt',
    'lightGrey',
    'darkOverlay',
  ]),
};

export default Icon;
