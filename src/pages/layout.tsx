import React from 'react';
import { Outlet } from 'react-router';
import { StyledPageContainer } from '../components/containers/page-container.styled';

import { Navigation } from '../components/navigation/navigation';

import {
  LINK_ABOUT,
  LINK_AGENT,
  LINK_MAIN,
  PATH_ABOUT,
  PATH_AGENT,
  PATH_MAIN
} from '../pages/constants';

const navigationMap = {
  [LINK_MAIN]: `${PATH_MAIN}`,
  [LINK_AGENT]: `${PATH_AGENT}`,
  [LINK_ABOUT]: `${PATH_ABOUT}`
};

export const Layout: React.FC = () => (
  <>
    <Navigation links={navigationMap} />
    <StyledPageContainer>
      <Outlet />
    </StyledPageContainer>
  </>
);
