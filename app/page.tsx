import { Header } from '@/components/header'
import { SearchSection } from '@/components/search-section'
import { CharacterCard } from '@/components/character-card'

const characters = [
  {
    name: '月博士',
    image: '/placeholder.svg?height=400&width=300',
    stars: 249,
    views: '119k',
    comments: 1,
    description: '你已经被 SCP 基金会抓获，审讯你的研究员是...'
  },
  {
    name: 'Misa',
    image: '/placeholder.svg?height=400&width=300',
    stars: 62,
    views: '7.7k',
    comments: 1,
    description: 'The relationship between you and your GF is no longer like it...'
  },
  // Add more characters as needed
]

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1C1C1C]">
      <Header />
      <SearchSection />
      <main className="mx-auto max-w-7xl px-4 py-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl text-white">2,290个搜索结果</h2>
          <select className="rounded-lg bg-[#2A2A2A] px-3 py-1 text-sm text-gray-300">
            <option>受欢迎 (1周)</option>
          </select>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {characters.map((character) => (
            <CharacterCard key={character.name} {...character} />
          ))}
        </div>
      </main>
    </div>
  )
}

