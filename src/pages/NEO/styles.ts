import styled from 'styled-components';

export const Container = styled.div`
  width: 60vw;
  background-color: var(--primary-color);
  backdrop-filter: blur(100px);
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block: 3rem;
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
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;

    @media (max-width: 425px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      
    }
  }

  header input:focus {
    outline: none;
    backdrop-filter: none;
    box-shadow: 0 0 10px 1px rgba(255, 255, 255, 0.2);
  }

  header input::-webkit-calendar-picker-indicator{
    filter: invert();
    margin-right: 0.3vw;
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
  }

  header input:hover {
    backdrop-filter: none;
    box-shadow: 0 0 10px 1px rgba(255, 255, 255, 0.2);
  }

  .numberObjects {
    margin-block: 1rem;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
`;
