import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: 10vh;
  background-color: ${({ bgColor }) => bgColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15%;
`;

export const Links = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Link = styled.h3`
  font-size: 26px;
  font-weight: 600;
  color: #bcb8b1;

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
    font-size: 40px;
    color: #e0afa0;
  }
`;
