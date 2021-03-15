import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20%;
  margin-top: 5rem;
`;

export const Contain = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.h2`
  font-size: 2.7rem;
  font-weight: 700;
  color: #e0afa0;
  margin-bottom: 2rem;
`;

export const Logo = styled.div`
  margin: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    height: 170px;
    width: auto;
    margin-bottom: 1rem;
  }
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #8a817c;
`;
