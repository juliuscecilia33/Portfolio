import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20%;
  margin-top: 8rem;
`;

export const Header = styled.h2`
  font-size: 2.7rem;
  font-weight: 700;
  color: #e0afa0;
  margin-bottom: 1rem;
`;

export const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  width: 100%;
  height: 465px;
  background: #f4f3ee;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  margin-bottom: 4rem;
  border-radius: 50px;
`;

export const Image = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 320px;
    height: auto;
  }
`;

export const Text = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 4rem;
  font-weight: 800;
  color: #463f3a;
  margin-bottom: 5px;
`;

export const Date = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: #e0afa0;
  margin-bottom: 5px;
`;

export const Location = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  color: #8a817c;
  margin-bottom: 0.8rem;
`;

export const Description = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  color: #8a817c;
`;
