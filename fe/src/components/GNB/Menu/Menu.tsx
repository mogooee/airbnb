import React from 'react';
import styled from 'styled-components';
import { ReactComponent as AccomodationIcon } from 'icons/svg/accomodation.svg';
import { ReactComponent as ExperienceIcon } from 'icons/svg/experience.svg';
import { ReactComponent as OnlineExperienceIcon } from 'icons/svg/online-experience.svg';

const StyledMenu = styled.ul`
  display: flex;
`;

function Menu() {
  return (
    <StyledMenu className="menu">
      <li>
        <AccomodationIcon />
      </li>
      <li>
        <ExperienceIcon />
      </li>
      <li>
        <OnlineExperienceIcon />
      </li>
    </StyledMenu>
  );
}

export default Menu;
