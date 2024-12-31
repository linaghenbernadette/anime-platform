import Link from 'next/link'
import { Bell, DiscIcon as Discord, User } from 'lucide-react'
import { Switch } from '@/components/ui/switch'

export function Header() {
  return (
    <header className="border-b border-gray-800 bg-[#1C1C1C] px-4 py-3">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold text-white">
            CAVEDUCK
          </Link>
          <nav className="flex gap-6">
            {['探索', '活动', '创作', '商店', '积分', '文档'].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-sm text-gray-300 hover:text-white"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-300">NSFW</span>
            <Switch />
          </div>
          <button className="text-gray-300 hover:text-white">
            <User size={20} />
          </button>
          <button className="text-gray-300 hover:text-white">
            <Bell size={20} />
          </button>
          <button className="text-gray-300 hover:text-white">
            <Discord size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}

