import styled from "styled-components"

export const ContainerCards = styled.details`
  width: 100%;
  background-color: rgba(179, 179, 179, 0.02);
  border-radius: 50px 50px 0 0;

  .infosContainer {
    display: flex;
    flex-direction: column;
    margin-inline: auto;
    gap: 1rem;

    .subInfosContainer {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.2rem;

      @media (max-width: 650px) {
        display: flex;
      }

      span {
        display: block;
        font-weight: 600;
        margin-bottom: 0.2rem;
      }
    }
  }

  &[open] {
    border-radius: 50px 50px 1rem 1rem;
  }

  &[open] > div {
    text-align: center;
    animation-name: slideDown;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      height: 0;
      padding: 0;
    }

    to {
      opacity: 1;
      height: fit-content;
      padding: 20px;
    }
  }

  summary {
    cursor: pointer;
    list-style: none;
    border-bottom: 2px solid #fff;
    padding: 1rem;
    text-align: center;
    font-weight: 700;
    font-size: 20px;
    backdrop-filter: blur(8px);
    border-radius: 50px 50px 0 0;

    &:hover {
      backdrop-filter: none;
      box-shadow: 0 0 10px 1px rgba(255, 255, 255, 0.2);
    }
  }

  .hazard {
    span {
      font-weight: 700;
      font-size: 1.17em;
    }
  }
`