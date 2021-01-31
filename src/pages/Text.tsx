import React, { useState } from 'react'
import Highlighter from 'react-highlight-words'
import Input from '../components/Input'
import style from './Text.module.css'

export const Text: React.FC = () => {
  const [text, setText] = useState('')
  const [searchText, setSearchText] = useState('')
  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value)
  }
  const onSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchText(e.target.value)
  }
  const arrayOfSearchText: string[] = searchText.split(' ')

  return (
    <div className={style.wrapper}>
      <Input
        name="Text"
        placeholder="Enter text for search"
        id="Text"
        onChange={onTextChange}
        value={text}
      />
      <Input
        name="searchText"
        placeholder="What do you need to find?"
        id="searchText"
        onChange={onSearchTextChange}
        value={searchText}
      />
      <Highlighter
        highlightClassName="highlight"
        searchWords={arrayOfSearchText}
        textToHighlight={text}
      />
    </div>
  )
}
