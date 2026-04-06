import { Lock, Key, ClipboardList, Settings } from 'lucide-react'

function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-60 min-h-screen bg-[#111111] border-r border-white/5 px-4 py-6 gap-8">
      
      <div>
        <p className="text-[#7eb8d4] font-bold tracking-widest text-sm">OPERATOR_01</p>
        <p className="text-[#7eb8d4]/50 text-xs tracking-widest">MIL-SPEC ENCRYPTION</p>
      </div>

      <nav className="flex flex-col gap-2">
        <button className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/10 text-[#7eb8d4] text-sm tracking-wider">
          <Lock size={16} /> Generator
        </button>
        <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#7eb8d4]/40 text-sm tracking-wider hover:text-[#7eb8d4]/70">
          <Key size={16} /> Vault
        </button>
        <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#7eb8d4]/40 text-sm tracking-wider hover:text-[#7eb8d4]/70">
          <ClipboardList size={16} /> Audit
        </button>
        <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#7eb8d4]/40 text-sm tracking-wider hover:text-[#7eb8d4]/70">
          <Settings size={16} /> Settings
        </button>
      </nav>

    </aside>
  )
}

export default Sidebar