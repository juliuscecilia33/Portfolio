import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20%;
  margin: 1.5rem 0;
  background: none;

  img {
    width: 97%;
    height: auto;
    ${"" /* box-shadow: -3px 10px 10px 2px rgba(0, 0, 0, 0.1); */}
    border-radius: 20px;
    background: none;
  }
`;

export const Logos = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 20%;
`;

export const Logo = styled.div`
  img {
    height: 300px;
    width: auto;
  }
`;

export const Teams = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 0 20%;
`;

export const Team = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;

  img {
    width: auto;
    height: 230px;
    margin-bottom: 1rem;
  }
`;

export const Text = styled.h2`
  font-size: 16px;
  font-weight: 500;
  color: #463f3a;
`;
