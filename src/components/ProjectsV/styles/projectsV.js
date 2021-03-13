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
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  margin-bottom: 3rem;
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

  img {
    width: 90%;
    height: auto;
  }
`;

export const Text = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 3rem;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.4rem;

  h2 {
    font-size: 3rem;
    font-weight: 800;
    color: #463f3a;
    margin-right: 0.7rem;
  }

  i {
    font-size: 27px;
    color: #e0afa0;
    margin-right: 1rem;
  }
`;

export const Description = styled.p`
  width: 90%;
  font-size: 1rem;
  font-weight: 400;
  color: #8a817c;
  margin-bottom: 0.7rem;
  line-height: 25px;
`;

export const Link = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: #8a817c;

  span {
    color: #e0afa0;
  }

  margin-bottom: 2rem;
`;

export const Hashtags = styled.div`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
`;

export const Hashtag = styled.div`
  height: 28px;
  padding: 0 1.5rem;
  background: linear-gradient(
    130.16deg,
    #e0afa0 9.59%,
    rgba(224, 175, 160, 0.43) 102.85%
  );
  border-radius: 50px;
  color: #f4f3ee;
  font-size: 0.8rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.2rem;
`;
