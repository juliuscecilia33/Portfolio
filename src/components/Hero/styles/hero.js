import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15%;
  margin-top: 3rem;
`;

export const Text = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Title = styled.h2`
  font-size: 6rem;
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
  font-size: 1.5rem;
  font-weight: 400;
  color: #bcb8b1;
  text-align: left;
  line-height: 33px;

  span {
    color: #8a817c;
  }
`;

export const Image = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;

  img {
    width: 90%;
    height: auto;
  }
`;
