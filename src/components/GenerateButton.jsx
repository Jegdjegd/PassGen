import { RefreshCw } from 'lucide-react'

function GenerateButton() {
  return (
    <div className="w-full max-w-2xl">
      <button className="w-full flex items-center justify-center gap-3 py-5 rounded-xl bg-linear-to-tl from-[#0e1012] to-[#343a43] border border-[#7eb8d4]/20 text-[#7eb8d4] tracking-widest text-sm font-bold cursor-pointer hover:from-[#114a5d] hover:to-[#343a43] hover:shadow-[0_0_10px_rgba(126,184,212,0.2)] transition-all duration-500">
        <RefreshCw size={18} />
        GENERATE PASSWORD
      </button>
    </div>
  )
}

export default GenerateButton