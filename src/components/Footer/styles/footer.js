import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: 12vh;
  background-color: #8a817c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20%;
  margin-top: 9%;
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
  color: #f4f3ee;
  transition: all 0.5s ease;

  &:hover {
    color: #e0afa0;
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
    color: #f4f3ee;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
      color: #e0afa0;
    }
  }
`;
