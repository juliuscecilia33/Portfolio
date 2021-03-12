import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 12%;
`;

export const Text = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
`;

export const Title = styled.h2`
  font-size: 6rem;
  font-weight: 700;
  color: #463f3a;

  span {
    color: #e0afa0;
  }
`;

export const Description = styled.p`
  font-size: 2rem;
  font-weight: 500;
  color: #bcb8b1;

  span {
    color: #8a817c;
  }
`;

export const Image = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
  }
`;
