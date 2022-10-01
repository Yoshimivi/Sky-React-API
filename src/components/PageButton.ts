import styled from 'styled-components';

export const PageButton = styled.button`
  width: 9rem;
  height: 3rem;
  color: var(--text-color);
  background-color: var(--primary-color);
  backdrop-filter: blur(8px);
  border: none;
  border-radius: 0.4rem;
  text-align: center;
  font-size: 1rem;
  

  &:hover{
    backdrop-filter: none;
    box-shadow: 0 0 10px 1px rgba(255, 255, 255, 0.2);
  }
`;
