import styled from 'styled-components/macro';


export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 20px;
`;

export const FormTitle = styled.p`
  font-weight: 500;
  color: #fff;
  font-size: 1.4rem;
  margin-top: 0;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
`

export const Form = styled.form`
  background: #FFFFFF4C;
  padding: 1.2rem;
  border-radius: 20px;
  border-left: 1px solid #FFFFFF4C;
  border-top: 1px solid #FFFFFF4C;
  box-shadow: 20px 20px 40px -6px rgba(0,0,0,0.2);
  text-align: center;
`

export const FormInput = styled.input`
  padding: 1em;
  margin: .8rem;
  border: 1px solid #FFFFFF4C;

  border-radius: 20px;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 1.2rem;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  background-color: transparent;
  outline: none;

  &::placeholder {
    font-weight: 400;
    color: rgba(255, 255, 255, 0.89);
  }


  &[type="text"] {
	  width: 85%;
	  padding: .6rem 1rem;
	  
	  &:focus {
      background: #77af88;
	  }
  }

  &[type="button"],
  &[type="submit"] {
    padding: 1rem 1.5rem;
    font-size: 1rem;
    cursor: pointer;
	  
    &:active {
      background: #77af88;
    }
  }
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
`

export const Column = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
	`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
	margin: 2px;
	padding: 5px 12px;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: 0.25rem;
`
