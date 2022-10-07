import styled from 'styled-components';

export const Container = styled.div`
  width: 60vw;
  background-color: var(--primary-color);
  backdrop-filter: blur(100px);
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem;
  padding: 2rem; 

  @media (max-width: 1150px) {
    width: 80vw;
  }

  @media (max-width: 425px) {
    width: 95vw;
    margin: 1rem;
  }
 
  nav {
    margin-bottom: 2rem;
    width: 30%;
    display: flex;
    justify-content: space-around;
    gap: 2rem;

    @media (max-width: 914px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  header {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media (max-width: 914px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  header input{
    width: 9rem;
    height: 3rem;
    color: var(--text-color);
    background-color: var(--primary-color);
    backdrop-filter: blur(8px);
    border: none;
    border-radius: 0.4rem;
    text-align: center;
    font-size: 1rem;
    
    ::placeholder {
      color: var(--text-color);
    }
  }

  header input:hover{
    backdrop-filter: none;
    box-shadow: 0 0 10px 1px rgba(255, 255, 255, 0.2);
  }

  .errorMsg {
    margin-top: 2rem;
  }

  .cardsContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    gap: 2rem;

    @media (max-width: 375px) {
      padding: 1rem;
    }
  }
`;
