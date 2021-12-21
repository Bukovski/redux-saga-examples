import styled from 'styled-components/macro';


export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 24rem;
  height: 100%;
  margin: 0 auto;
  margin-top: 20px;
`;

export const Count = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 2.5rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
`;

export const Button = styled.button`
  background: #80bdff;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 24px 0 12px;
  padding: 16px;
  border: 0;
  color: #fff;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const User = styled.div`
	font-size: 1.5rem;
`;