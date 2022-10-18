import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  button {
    width: 15rem;
    height: 7rem; 
    border: none;
    border-radius: 3rem ;
    background-color: var(--primary-color);
    backdrop-filter: blur(20px);
    color: white;
    margin: 4rem;
    font-size: 1.5rem;
    font-weight: 700;

    @media (max-width: 1024px) {
     width: 13rem;
    }
  }

  button:hover {
    backdrop-filter: none;
    box-shadow: 0 0 70px 5px #151d5a;
  }

  button p {
    font-size: 0.8rem;
  }
`;
