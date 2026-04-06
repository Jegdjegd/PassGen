import { useState } from 'react'
import Sidebar from './components/Sidebar'
import OutputDisplay from './components/OutputDisplay'
import ModeSelector from './components/ModeSelector'
import LengthSlider from './components/LengthSlider'
import GenerateButton from './components/GenerateButton'
import BottomBar from './components/BottomBar'
import { generatePassword } from './utils/generatePassword'

function App() {
  const [mode, setMode] = useState('alphanumeric')
  const [length, setLength] = useState(8)
  const [password, setPassword] = useState('')

  const handleGenerate = () => {
    const newPassword = generatePassword(mode, length)
    setPassword(newPassword)
  }

  const bottomBar = 'flex flex-col items-center flex-1 px-6 py-10 gap-6 pb-24 md:pb-10'

  return (
    <div className="flex min-h-screen bg-[#0d0d0d] text-white">
      <Sidebar />
      <main className={bottomBar}>
        
        <OutputDisplay password={password} onRegenerate={handleGenerate} />
        <ModeSelector mode={mode} onModeChange={setMode} />
        <LengthSlider length={length} onLengthChange={setLength} />
        <GenerateButton onGenerate={handleGenerate} />
        <BottomBar />
      </main>
    </div>
  )
}

export default App