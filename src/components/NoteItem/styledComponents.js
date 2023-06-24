// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  margin-top: 20px;
  list-style-type: none;
  width: 90%;
  @media screen and (min-width: 768px) {
    width: 350px;
    margin-right: 20px;
  }
`

export const TitleNoteContainer = styled.div`
  border: 1px solid #000;
  border-radius: 10px;
  padding: 20px 10px;
  width: 90%;
  @media screen and (min-width: 768px) {
    width: 500px;
    margin-right: 20px;
  }
`
export const TitleText = styled.h1`
  font-size: 18px;
  font-weight: bold;
  font-family: 'Bree Serif';
  color: ##334155;
`
export const NoteText = styled.p`
  font-size: 18px;

  font-family: 'Bree Serif';
  color: ##334155;
`
