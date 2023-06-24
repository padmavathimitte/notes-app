// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`
export const Heading = styled.h1`
  font-size: 22px;
  color: #4c63b6;
  font-family: 'Bree Serif';
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-shadow: 0px 2px 2px #475569;
  margin-bottom: 20px;
  width: 90%;
`
export const InputContainer = styled.input`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 16px;
  height: 36px;
  border: none;

  margin-bottom: 20px;
  outline: none;
`
export const TextAreaContainer = styled.textarea`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 16px;
  height: 36px;
  border: none;

  margin-bottom: 20px;
  outline: none;
`

export const Button = styled.button`
  align-self: flex-end;
  color: #ffffff;
  background-color: #1976d2;
  font-family: 'Roboto';
  font-size: 16px;
  border: none;
  padding: 10px 16px;
  margin-top: 10px;
  margin-bottom: 24px;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
`
export const NotesList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`
export const NoNotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Image = styled.img`
  width: 130px;
  height: 130px;
`
export const NoNotesHeading = styled.h1`
  font-size: 18px;
  font-family: 'Bree Serif';
  margin-bottom: 10px;
`
export const NoNotesPara = styled.p`
  font-size: 12px;
  font-family: 'Bree Serif';
  margin-bottom: 10px;
`
