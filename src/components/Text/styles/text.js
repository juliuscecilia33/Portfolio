import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20%;
  margin: 4rem 0;
`;

export const Title = styled.h2`
  font-weight: 800;
  font-size: 3rem;
  color: #e0afa0;
  margin-bottom: 0.7rem;

  @media (max-width: 1550px) {
    font-size: 2.5rem;
  }

  @media (max-width: 1350px) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 30px;
  color: #463f3a;

  span {
    color: #e0afa0;
    font-weight: 500;
  }

  @media (max-width: 1550px) {
    font-size: 1rem;
  }
`;

export const Message = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #8a817c;
  margin-top: 3rem;

  @media (max-width: 1550px) {
    font-size: 1rem;
  }

  @media (max-width: 1350px) {
    font-size: 0.8rem;
  }
`;
