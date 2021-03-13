import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20%;
  margin-top: 5rem;
`;

export const Message = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #bcb8b1;
  margin-bottom: 3rem;
`;

export const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  width: 100%;
  height: 510px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
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

export const Title = styled.div`
  display: flex;
  align-items: center;

  h2 {
    font-size: 3.3rem;
    font-weight: 800;
    color: #463f3a;
    margin-right: 0.7rem;
  }

  i {
    font-size: 37px;
    color: #e0afa0;
    margin-right: 0.5rem;
  }
`;

export const Description = styled.p`
  font-size: 22px;
  font-weight: 400;
  color: #8a817c;
`;

export const Link = styled.h3`
  font-size: 24px;
  font-weight: 500;
  color: #8a817c;

  span {
    color: #e0afa0;
  }
`;

export const Hashtags = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Hashtag = styled.div`
  height: 36px;
  padding: 0 7px;
  background: linear-gradient(
    130.16deg,
    #e0afa0 9.59%,
    rgba(224, 175, 160, 0.43) 102.85%
  );
  border-radius: 50px;
  color: #f4f3ee;
  font-weight: 700;
`;
