import { useState } from 'react'

const MIN = 8
const MAX = 64
const DEFAULT = MIN
const divMaster = 'w-full max-w-2xl bg-[#111111] border border-white/10 rounded-xl px-6 py-5'
const subText = 'text-[#7eb8d4]/30 text-xs tracking-widest'
const textPrin = 'text-[#7eb8d4]/50 text-xs tracking-widest"'
const colorNumberLength = 'text-[#7eb8d4] text-3xl font-mono font-bold drop-shadow-[0_0_8px_rgba(126,184,212,0.9)]'


function LengthSlider() {
  const [length, setLength] = useState(DEFAULT)

  return (
    <div className={divMaster}>

      <div className="flex justify-between items-center mb-4">
        <div>
          <p className={textPrin}>STRING LENGTH</p>
          <p className={subText}>RECOMMENDED: 16-32</p>
        </div>
        <p className={colorNumberLength}>
          {length}
        </p>
      </div>

      <input
        type="range"
        min={MIN}
        max={MAX}
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
        className="w-full accent-[#7eb8d4] cursor-pointer"
      />

      <div className="flex justify-between mt-2">
        <p className={subText}>MIN: {MIN}</p>
        <p className={subText}>MAX: {MAX}</p>
      </div>

    </div>
  )
}

export default LengthSlider