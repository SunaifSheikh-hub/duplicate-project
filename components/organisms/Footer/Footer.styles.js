import styled from "styled-components";


export const Body = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const UpperSection = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(var(--secondary-rgb));
`;

export const BottomSection = styled.div`
  padding: 40px 0px;
  width: 100%;
  background-color: rgb(var(--primary-rgb));

  .img-cont {
    display: grid;
    place-items: center;
    margin-bottom: 30px;
  }

  p {
    text-align: center;
    margin-bottom: 20px;
    font-size: small;
    :last-child {
      margin-bottom: 0px;
    }
  }
`;

export const Menu = styled.ul`
  margin-left: auto;
  display: flex;
  gap: 40px;
  align-items: center;
  list-style: none;
`;