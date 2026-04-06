import { useState } from 'react'
import { Copy, RefreshCw, Check } from 'lucide-react'

const ACCENT = '#7eb8d4'

const btnClass = "flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 text-[#7eb8d4]/70 text-xs tracking-widest hover:bg-white/20 cursor-pointer"

function OutputDisplay({password, onRegenerate}) {
  
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
  if (!password) return
  
  if (navigator.clipboard) {
    navigator.clipboard.writeText(password)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
      .catch(() => fallbackCopy())
  } else {
    fallbackCopy()
  }
}

const fallbackCopy = () => {
  const el = document.createElement('textarea')
  el.value = password
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
  setCopied(true)
  setTimeout(() => setCopied(false), 2000)
}

  return (
    <div className="w-full max-w-2xl">

      <p className="text-[#7eb8d4]/50 text-xs tracking-widest mb-3">
        GENERATED OUTPUT
      </p>

      <div className="w-full bg-linear-to-tl from-[#0e1012] to-[#1d2229] border border-white/10 rounded-xl px-8 py-10 flex flex-col items-center gap-6 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.4),inset_-4px_-4px_8px_rgba(255,255,255,0.03)]">

        <p className={`text-[${ACCENT}] text-4xl font-mono tracking-widest break-all text-center font-semibold drop-shadow-[0_0_8px_rgba(126,184,212,0.9)]`}>
          {password || '(GEN-A-NEW-PASSWORD)'}
        </p>

        <div className="flex gap-3">

          <button 
            className={`${btnClass} ${!password ? 'opacity-30 cursor-not-allowed' : ''}`} 
            onClick={handleCopy}
            disabled={!password}
            >

            {copied ? <Check size={14} /> : <Copy size={14} />}

            {copied ? 'COPIED!' : 'COPY'}
            </button>

          <button 
            className={`${btnClass} ${!password ? 'opacity-30 cursor-not-allowed' : ''}`}            
            onClick={onRegenerate}
            disabled={!password}
            >
              <RefreshCw size={14} /> REGEN
          </button>

        </div>

      </div>
    </div>
  )
}

export default OutputDisplay