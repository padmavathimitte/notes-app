// Write your code here
import {
  ListItem,
  TitleNoteContainer,
  TitleText,
  NoteText,
} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {title, note} = noteDetails

  return (
    <>
      <ListItem>
        <TitleNoteContainer>
          <TitleText>{title}</TitleText>
          <NoteText>{note}</NoteText>
        </TitleNoteContainer>
      </ListItem>
    </>
  )
}

export default NoteItem
