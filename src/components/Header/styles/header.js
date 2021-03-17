import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: 8vh;
  background-color: ${({ bgColor }) => bgColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20%;
`;

export const Links = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Link = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: #bcb8b1;
  transition: all 0.5s ease;

  &:hover {
    color: #8a817c;
  }

  @media (max-width: 1360px) {
    font-size: 1rem;
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
    font-size: 28px;
    color: #e0afa0;

    @media (max-width: 1360px) {
      font-size: 25px;
    }
  }
`;
