import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: 35vh;
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
`;

export const Description = styled.p`
  width: 25%;
  font-size: 16px;
  text-align: center;
  font-weight: 400;
  color: #bcb8b1;
  line-height: 27px;
`;
