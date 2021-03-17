import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20%;
`;

export const Message = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #bcb8b1;
  margin-top: 5rem;
  margin-bottom: 3rem;
`;

export const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    width: 100%;
  }
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
  cursor: pointer;

  @media (max-width: 1650px) {
    height: 300px;
  }

  @media (max-width: 1550px) {
    height: 275px;
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

  @media (max-width: 1650px) {
    width: 340px;
    height: 262px;
  }

  @media (max-width: 1550px) {
    width: 314px;
    height: 242px;
  }

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

  @media (max-width: 1650px) {
    margin-left: 2.7rem;
  }
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

    @media (max-width: 1650px) {
      font-size: 2.5rem;
    }

    @media (max-width: 1550px) {
      font-size: 2rem;
    }
  }

  i {
    font-size: 27px;
    color: #e0afa0;
    margin-right: 1rem;

    @media (max-width: 1650px) {
      font-size: 25px;
    }

    @media (max-width: 1550px) {
      font-size: 22px;
    }
  }
`;

export const Description = styled.p`
  width: 90%;
  font-size: 1rem;
  font-weight: 400;
  color: #8a817c;
  margin-bottom: 0.7rem;
  line-height: 25px;

  @media (max-width: 1650px) {
    font-size: 0.9rem;
    line-height: 23px;
  }

  @media (max-width: 1550px) {
    font-size: 0.8rem;
    line-height: 22px;
  }
`;

export const Link = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: #8a817c;

  @media (max-width: 1650px) {
    font-size: 1rem;
  }

  @media (max-width: 1550px) {
    font-size: 14px;
  }

  span {
    a {
      color: #e0afa0;
    }
  }

  margin-bottom: 2rem;
`;

export const Hashtags = styled.div`
  width: 95%;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1650px) {
    width: 98%;
  }

  @media (max-width: 1550px) {
    width: 99%;
  }
`;

export const Hashtag = styled.div`
  height: 28px;
  padding: 0 1.3rem;
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

  @media (max-width: 1650px) {
    height: 25px;
    font-size: 0.75rem;
    padding: 0 1.2rem;
  }
`;
