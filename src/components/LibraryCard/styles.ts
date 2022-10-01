import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--primary-color);
  border-radius: 2rem;
  padding: 2rem 4rem;
  gap: 1rem;

  img {
    width: 800px;
    border-radius: 1rem;
  }

  p {
    text-align: center;
  }
`;
