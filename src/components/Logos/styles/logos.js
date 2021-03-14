import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0 20%;
  margin-top: 5rem;
`;

export const Logo = styled.div`
  margin: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    height: 260px;
    width: auto;
  }
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #8a817c;
`;
