import DiaryEntries from "./components/DiaryEntries"
import DiaryEntryForm from "./components/DiaryEntryForm"
import * as diaryService from "./services/diaryService"
import { useEffect, useState } from "react"
import DiaryEntry from "./types/DiaryEntry"

function App() {
  const [entries, setEntries] = useState<DiaryEntry[]>([])

  useEffect(() => {
    diaryService.getAll().then(entries => setEntries(entries))
  }, [])

  return (
    <>
      <DiaryEntries entries={entries} />
      <DiaryEntryForm />
    </>
  )
}

export default App
