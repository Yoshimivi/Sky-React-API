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

  header input:hover{
    backdrop-filter: none;
    box-shadow: 0 0 10px 1px rgba(255, 255, 255, 0.2);
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding-top: 1.5rem;
  }

  .content img {
    width: 100%;
  }

  iframe {
    width: 100%;
    height: 30vw;
    border: none;
  }

  .content p:nth-child(3) {
    font-size: 0.85rem;
  }

  .content p:nth-last-child(1) {
    width: 90%;
  }
`;
