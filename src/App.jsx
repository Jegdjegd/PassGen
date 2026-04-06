import Sidebar from './components/Sidebar'
import OutputDisplay from './components/OutputDisplay'
import ModeSelector from './components/ModeSelector'
import LengthSlider from './components/LengthSlider'
import GenerateButton from './components/GenerateButton'

function App() {
  return (
    <div className="flex min-h-screen bg-[#0d0d0d] text-white">
      <Sidebar />
      <main className="flex flex-col items-center flex-1 px-6 py-10 gap-6">
        <OutputDisplay />
        <ModeSelector />
        <LengthSlider />
        <GenerateButton />
      </main>
    </div>
  )
}

export default App