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

export const Message = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #bcb8b1;
  margin-bottom: 2rem;
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  width: 425px;
  height: 560px;
  background-color: ${({ bgColor }) => bgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 40px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  padding: 1rem 1rem;
  margin: 2rem;
  cursor: pointer;

  @media (max-width: 1650px) {
    width: 359px;
    height: 472px;
  }

  @media (max-width: 1450px) {
    margin: 1.4rem;
  }

  @media (max-width: 1360px) {
    width: 328px;
    height: 432px;
  }
`;

export const Image = styled.div`
  width: 370px;
  height: 285px;
  background: #f4f3ee;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;

  @media (max-width: 1650px) {
    width: 312px;
    height: 241px;
  }

  @media (max-width: 1360px) {
    width: 285px;
    height: 220px;
  }

  img {
    width: 90%;
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
  font-weight: 800;
  font-size: 2.5rem;
  color: #463f3a;
  margin-bottom: 0.5rem;

  @media (max-width: 1650px) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  width: 90%;
  font-size: 1rem;
  font-weight: 400;
  color: #8a817c;
  line-height: 25px;

  @media (max-width: 1650px) {
    font-size: 0.9rem;
    line-height: 23px;
  }

  @media (max-width: 1360px) {
    font-size: 0.8rem;
    line-height: 22px;
    width: 92%;
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
  margin-top: 2.5rem;
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
