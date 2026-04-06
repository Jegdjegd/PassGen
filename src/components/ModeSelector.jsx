import { useState } from 'react'
import { AlignJustify, Hash, Infinity } from 'lucide-react'

const modes = [
  { id: 'alphanumeric', icon: AlignJustify, label: 'Alphanumeric', description: 'A-Z, a-z, 0-9' },
  { id: 'numeric', icon: Hash, label: 'Numeric + Special', description: '0-9, !@#$%^&*' },
  { id: 'all', icon: Infinity, label: 'All Together', description: 'COMPLEX ENTROPY STRING' },
]

const btnActive = 'bg-[#7eb8d4]/10 border-[#7eb8d4]/60 shadow-[0_0_12px_rgba(126,184,212,0.2)]'
const btnInactive = 'bg-[#111111] border-white/10 hover:border-[#7eb8d4]/30'
const iconActive = 'bg-[#7eb8d4]/20'
const iconInactive = 'bg-white/10'
const dotActive = 'border-[#7eb8d4] shadow-[0_0_8px_rgba(126,184,212,0.8)] bg-[#7eb8d4]/30'
const dotInactive = 'border-[#7eb8d4]/30'

function ModeSelector() {
  const [selected, setSelected] = useState('alphanumeric')

  return (
    <div className="w-full max-w-2xl">

      <p className="text-[#7eb8d4]/50 text-xs tracking-widest mb-3">MODE SELECTION</p>

      <div className="flex flex-col gap-3">
        {modes.map((mode) => {
          const isSelected = selected === mode.id
          return (
            <button
              key={mode.id}
              onClick={() => setSelected(mode.id)}
              className={`flex items-center gap-4 px-5 py-4 rounded-xl border text-left cursor-pointer transition-all ${isSelected ? btnActive : btnInactive}`}
            >
              <div className={`p-2 rounded-lg ${isSelected ? iconActive : iconInactive}`}>
                <mode.icon size={16} className="text-[#7eb8d4]" />
              </div>
              <div className="flex-1">
                <p className="text-[#7eb8d4] text-sm font-semibold tracking-wider">{mode.label}</p>
                <p className="text-[#7eb8d4]/40 text-xs tracking-widest">{mode.description}</p>
              </div>
              <div className={`w-4 h-4 rounded-full border-2 transition-all ${isSelected ? dotActive : dotInactive}`} />
            </button>
          )
        })}
      </div>

    </div>
  )
}

export default ModeSelector