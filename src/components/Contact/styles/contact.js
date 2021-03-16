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

export const Header = styled.h2`
  font-size: 2.7rem;
  font-weight: 700;
  color: #e0afa0;
  margin-bottom: 2rem;
`;

export const Card = styled.div`
  width: 100%;
  height: 625px;
  background: #f4f3ee;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  margin-bottom: 4rem;
  border-radius: 50px;
  padding: 0 2rem;
`;

export const Bubble = styled.div`
  width: 30%;
  height: 97%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    130.16deg,
    #e0afa0 9.59%,
    rgba(224, 175, 160, 0.43) 102.85%
  );
  border-radius: 50px;
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 32px;
  color: #f4f3ee;
`;

export const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #8a817c;
`;

export const Inputs = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.div`
  textarea {
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    background: #f4f3ee;
    border: 3px solid #e0afa0;
    border-radius: 25px;
    outline: none;
    font-size: 16px;
    color: #e0afa0;
    filter: drop-shadow(4px 7px 9px rgba(0, 0, 0, 0.25));
    padding: 0 1.3rem;
  }

  &::placeholder {
    color: #00cc92;
  }
`;

export const Label = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    font-size: 36px;
    color: #f4f3ee;
    margin-right: 1rem;
  }

  p {
    font-weight: 500;
    font-size: 18px;
    color: #f4f3ee;
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    font-size: 28px;
    color: #f4f3ee;
    margin-right: 1rem;
  }
`;

export const Button = styled.button`
  height: 45px;
  background: linear-gradient(
    130.16deg,
    #e0afa0 9.59%,
    rgba(224, 175, 160, 0.43) 102.85%
  );
  border-radius: 50px;
  color: #f4f3ee;
  padding: 0 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
