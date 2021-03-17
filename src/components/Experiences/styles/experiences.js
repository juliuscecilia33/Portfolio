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
  margin-bottom: 2rem;
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
  height: 330px;
  background: #f4f3ee;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  margin-bottom: 4rem;
  border-radius: 50px;
  padding: 0 2rem;

  @media (max-width: 1650px) {
    height: 300px;
    padding: 1.5rem;
  }
`;

export const Image = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 240px;
    height: auto;
  }
`;

export const Text = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  color: #463f3a;
  margin-bottom: 7px;

  @media (max-width: 1650px) {
    font-size: 2.5rem;
  }

  @media (max-width: 1450px) {
    font-size: 2rem;
  }
`;

export const Date = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  color: #e0afa0;
  margin-bottom: 7px;

  @media (max-width: 1650px) {
    font-size: 1rem;
  }

  @media (max-width: 1450px) {
    font-size: 0.9rem;
  }
`;

export const Location = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  color: #8a817c;
  margin-bottom: 1rem;

  @media (max-width: 1650px) {
    font-size: 1rem;
  }

  @media (max-width: 1450px) {
    font-size: 0.9rem;
  }
`;

export const Description = styled.p`
  width: 75%;
  font-size: 1rem;
  line-height: 30px;
  font-weight: 400;
  color: #8a817c;

  @media (max-width: 1650px) {
    font-size: 0.9rem;
    line-height: 27px;
  }

  @media (max-width: 1450px) {
    font-size: 0.9rem;
    line-height: 26px;
  }
`;

export const Button = styled.button`
  height: 55px;
  background: linear-gradient(
    130.16deg,
    #e0afa0 9.59%,
    rgba(224, 175, 160, 0.43) 102.85%
  );
  border-radius: 50px;
  font-weight: 600;
  font-size: 20px;
  color: #f4f3ee;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2.7rem;

  @media (max-width: 1650px) {
    height: 48px;
    padding: 0 2.5rem;
    font-size: 18px;
  }

  @media (max-width: 1450px) {
    height: 45px;
    padding: 0 2.3rem;
    font-size: 17px;
  }
`;
