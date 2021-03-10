import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: 8vh;
  background-color: ${({ bgColor }) => bgColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12%;
`;

export const Links = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Link = styled.h3`
  font-size: 20px;
  font-weight: 500;
  color: #bcb8b1;
  transition: all 0.5s ease;

  &:hover {
    color: #8a817c;
  }
`;

export const Icons = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Icon = styled.div`
  i {
    font-size: 32px;
    color: #e0afa0;
  }
`;
