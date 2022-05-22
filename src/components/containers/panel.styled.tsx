import styled from 'styled-components';

export const Panel = styled.div`
  position: relative;
  background-color: #ee3127;
  color: white;
  padding: 1rem;
  width: 100%;
  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-left: 12px solid white;
    border-bottom: 12px solid white;
  }
  &::before {
    position: absolute;
    top: 0;
    right: 0;
    content: '';
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-right: 12px solid white;
    border-top: 12px solid white;
  }
`;
