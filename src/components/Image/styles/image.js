import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20%;
  margin: 1.5rem 0;

  img {
    width: 97%;
    height: auto;
    box-shadow: -3px 10px 10px 2px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
  }
`;
