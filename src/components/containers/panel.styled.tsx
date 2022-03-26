import styled from 'styled-components';

export const Panel = styled.div`
  position: relative;
  background-color: #ee3127;
  color: white;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  padding: 1rem;
  min-width: 400px;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    left: 20px;
    bottom: -20px;
    border: 10px solid transparent;
    border-top: 10px solid green;
  }
`;
