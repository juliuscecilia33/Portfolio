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
  height: 580px;
  background-color: ${({ bgColor }) => bgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 40px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  padding: 1rem 1rem;
  margin: 2rem;
  cursor: pointer;
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
`;

export const Description = styled.p`
  width: 90%;
  font-size: 1.2rem;
  font-weight: 400;
  color: #8a817c;
  line-height: 25px;
`;
