import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  background-color: #f5ede3;
  justify-content: center;
  align-items: center;
  padding: 0 20%;
`;

export const Text = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Title = styled.h2`
  font-size: 4.3rem;
  font-weight: 700;
  color: #463f3a;
  text-align: left;
  margin-bottom: 1rem;

  span {
    color: #e0afa0;
  }
`;

export const Description = styled.p`
  width: 80%;
  font-size: 1.1rem;
  font-weight: 400;
  color: #bcb8b1;
  text-align: left;
  line-height: 25px;

  span {
    color: #8a817c;
  }
`;

export const Image = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;

  img {
    width: 90%;
    height: auto;
  }
`;
