import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: ${({ height }) => height};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ bgColor }) => bgColor};
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  color: #463f3a;
  margin-bottom: 1rem;

  @media (max-width: 1400px) {
    font-size: 2.8rem;
  }
`;

export const Description = styled.p`
  width: 25%;
  font-size: 16px;
  text-align: center;
  font-weight: 400;
  color: #bcb8b1;
  line-height: 27px;
`;
