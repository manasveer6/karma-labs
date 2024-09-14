import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const NotificationContainer = styled.div<{ isMobile: boolean }>`
  display: ${({ isMobile }) => (isMobile ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
`;

const Message = styled.div`
  font-size: 1.5rem;
`;

const DesktopOnlyNotification = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <NotificationContainer isMobile={isMobile}>
      <Message>This website is only available on desktop. Please switch to a desktop device for the best experience.</Message>
    </NotificationContainer>
  );
};

export default DesktopOnlyNotification;
