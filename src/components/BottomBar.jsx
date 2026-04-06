import { Key, History, Cpu, Settings } from 'lucide-react'

const items = [
  { id: 'keys', icon: Key, label: 'KEYS' },
  { id: 'logs', icon: History, label: 'LOGS' },
  { id: 'nodes', icon: Cpu, label: 'NODES' },
  { id: 'config', icon: Settings, label: 'CONFIG' },
]

function BottomBar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-[#111111] border-t border-white/10 px-6 py-3 flex justify-around items-center">
      {items.map((item) => (
        <button
          key={item.id}
          className="flex flex-col items-center gap-1 text-[#7eb8d4]/40 hover:text-[#7eb8d4] cursor-pointer transition-colors duration-300"
        >
          <item.icon size={20} />
          <p className="text-xs tracking-widest">{item.label}</p>
        </button>
      ))}
    </nav>
  )
}

export default BottomBar