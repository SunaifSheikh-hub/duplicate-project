import styled from "styled-components";


export const Body = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: rgb(var(--primary-rgb));
  height: 60px;
  position: fixed;
  top: 0px;
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  max-width: var(--content-max-width);
  display: flex;
  justify-content: space-between;
`;

export const Menu = styled.ul`
  margin-left: auto;
  display: flex;
  gap: 40px;
  align-items: center;
  list-style: none;
`;