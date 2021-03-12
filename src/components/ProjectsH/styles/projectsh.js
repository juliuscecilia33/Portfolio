import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 15%;
`;

export const Header = styled.h2`
  font-size: 3.5rem;
  font-weight: 700;
  color: #e0afa0;
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  width: 650px;
  height: 775px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Image = styled.div`
  width: 560px;
  height: 430px;
  background: #f4f3ee;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 555px;
    height: auto;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 3.5rem;
  color: #463f3a;
`;

export const Description = styled.p`
  font-size: 25px;
  font-weight: 500;
  color: #8a817c;
`;
