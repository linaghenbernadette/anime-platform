import { Search } from 'lucide-react'

export function SearchSection() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-4">
      <div className="relative">
        <input
          type="text"
          placeholder="搜索角色"
          className="w-full rounded-lg bg-[#2A2A2A] px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-pink-600 px-4 py-1 text-sm text-white hover:bg-pink-700">
          搜索
        </button>
      </div>
      <div className="mt-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400"># 选择标签</span>
          <button className="text-gray-400 hover:text-white">⚙️</button>
          <button className="text-gray-400 hover:text-white">🔄</button>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {['男性', '女性', '男朋友', '女朋友', '浪漫', '香草', '游戏', '电影和电视', '当代幻想', '异世界', '淑情', '名人', '幻想', '历史', 'VTuber', '吸血鬼', '老师', '治愈'].map((tag) => (
            <button
              key={tag}
              className="rounded-full bg-[#2A2A2A] px-3 py-1 text-sm text-gray-300 hover:bg-gray-700"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

