import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--primary-color);
  border-radius: 2rem;
  padding: 2rem 4rem;
  gap: 1rem;

  @media (max-width: 375px) {
    padding: 2rem 1rem;
  }
  

  img {
    width: 50vw;
    border-radius: 1rem;

    @media (max-width: 1440px) {
      width: 45vw
    }

    @media (max-width: 768px) {
      width: 60vw;
    }

    @media (max-width: 375px) {
      width: 80vw;
    }
  }

  p {
    text-align: center;
  }
`;
