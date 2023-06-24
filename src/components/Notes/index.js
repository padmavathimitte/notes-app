// Write your code here
import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  AppContainer,
  Heading,
  Form,
  NotesList,
  InputContainer,
  TextAreaContainer,
  Button,
  NoNotesContainer,
  Image,
  NoNotesHeading,
  NoNotesPara,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')

  const [notesList, setNotesList] = useState([])
  const isNotesList = notesList.length > 0

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeNote = event => {
    setNote(event.target.value)
  }

  const onAddNote = event => {
    event.preventDefault()
    const newNote = {
      id: uuidv4(),
      title,
      note,
    }
    setNotesList(prevNotesList => [...prevNotesList, newNote])
    setTitle('')
    setNote('')
  }

  return (
    <AppContainer>
      <Heading>Notes</Heading>
      <Form onSubmit={onAddNote}>
        <InputContainer
          type="text"
          onChange={onChangeTitle}
          value={title}
          placeholder="Title"
        />
        <TextAreaContainer
          type="text"
          onChange={onChangeNote}
          value={note}
          placeholder="Take a Note..."
        />
        <Button type="submit">Add</Button>
      </Form>
      {isNotesList ? (
        <NotesList>
          {notesList.map(eachNote => (
            <NoteItem key={eachNote.id} noteDetails={eachNote} />
          ))}
        </NotesList>
      ) : (
        <NoNotesContainer>
          <Image
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <NoNotesHeading>No Notes Yet</NoNotesHeading>
          <NoNotesPara>Notes you add will appear here</NoNotesPara>
        </NoNotesContainer>
      )}
    </AppContainer>
  )
}

export default Notes
