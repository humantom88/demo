import styled from 'styled-components';

export const StyledProfileTopContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
`;

export const StyledAgentContainer = styled.div`
  min-width: 100%;
`;

export const StyledArmorContainer = styled.div`
  background-color: red;
`;

export const StyledWeaponsContainer = styled.div`
  background-color: red;
`;

export const StyledImplantsContainer = styled.div`
  background-color: red;
`;

export const StyledEquipmentContainer = styled.div`
  background-color: red;
`;

export const StyledStoryContainer = styled.div`
  background-color: red;
`;

export const StyledAvatarContainer = styled.div`
  img {
    max-width: 180px;
  }
`;

export const StyledStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px;
`;

export const StyledCharacterName = styled.div`  
  margin: 0.5rem 0;

  h2 {
    display: inline-block;
    margin: 0 12px 0 0;
    text-align: left;
  }

  input, select {
    min-width: 12rem;
    font-size: 1rem;
    padding: 8px 12px;
    margin-right: 12px;
  }
`;

export const StyledAgentForm = styled.div`
  display: block;
`;

export const StyledClassDescription = styled.div`
  display: inline-block;
  font-size: 1rem;
`;