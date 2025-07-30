import { Cardo, Play } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

const cardo = Cardo({ subsets: ["latin"], weight: ["400", "700"] })
const play = Play({ subsets: ["latin"], weight: ["400", "700"] })

export default function FavouritesPage() {
  return (
    <div className="flex h-screen bg-black text-white font-sans">
      {/* Sidebar - This will be a separate component in a real app, but for now, it's duplicated for clarity */}
      <aside className="w-60 bg-zinc-900 p-6 flex flex-col gap-6">
        <h1 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <Image src="/watch.svg" alt="Watch Icon" width={20} height={20} />
          WATCH
        </h1>

        <nav className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2 hover:text-purple-400">
            <Image src="/home.svg" alt="Home Icon" width={20} height={20} />
            <Link href="/homescreen" className="text-white font-medium hover:underline transition-all">
             Home
             </Link>
          </Link>
          <Link href="/favourites" className="flex items-center gap-2 text-purple-400">
            {" "}
            {/* Active state for Favourites */}
            <Image src="/favourites.svg" alt="Favourites Icon" width={20} height={20} />
            Favourites
          </Link>
          <Link href="#" className="flex items-center gap-2 hover:text-purple-400">
             <img
            src="/trending.svg"
            alt="Watch Icon"
            className="w-5 h-5" />
          <Link href="/trendingscreen" className="text-white font-medium hover:underline transition-all">
                Trending 
              </Link>
           </Link>
          <Link href="#" className="flex items-center gap-2 hover:text-purple-400">
            <Image src="/comingsoon.svg" alt="Coming Soon Icon" width={20} height={20} />
            Coming soon
          </Link>
          <Link href="#" className="flex items-center gap-2 hover:text-purple-400">
            <Image src="/community.svg" alt="Community Icon" width={20} height={20} />
            Community
          </Link>
          <Link href="#" className="flex items-center gap-2 hover:text-purple-400">
            <Image src="/social.svg" alt="Social Icon" width={20} height={20} />
            Social
          </Link>
        </nav>

        <div className="mt-auto flex flex-col gap-2">
          <Link href="#" className="flex items-center gap-2 hover:text-purple-400">
            <Image src="/settings.svg" alt="Settings Icon" width={20} height={20} />
            Settings
          </Link>
          <Link href="#" className="flex items-center gap-2 hover:text-purple-400">
           <img
            src="/logout.svg"
            alt="Watch Icon"
            className="w-5 h-5"
            />
            <Link href="/pagee" className="text-white font-medium hover:underline transition-all">
                Log out
              </Link> 
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-auto">
        {/* Top navigation and user info */}
        <div className="flex justify-between items-center mb-8">
          <nav className="flex gap-6 text-lg font-medium">
            <Link href="#" className="hover:text-purple-400">
              Movies
            </Link>
            <Link href="#" className="hover:text-purple-400">
              Series
            </Link>
            <Link href="#" className="hover:text-purple-400">
              Documentaries
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <button className="text-white">🔍</button>
            <button className="text-white">🔔</button>
            <span className="text-white font-medium">Tetiana</span>
          </div>
        </div>

        <h2 className={`text-3xl font-bold mb-6 ${play.className}`}>Favourites</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Bullet science",
              year: "2022",
              genre: "Action comedy",
              imageQuery: "neon lit city street",
            },
            {
              title: "House of Gucci",
              year: "2022",
              genre: "Drama",
              imageSrc: "/House.svg",
            },
          ].map((movie, idx) => (
            <div key={idx} className="bg-zinc-800 rounded-lg overflow-hidden relative">
              <div className="w-full h-48 bg-zinc-700 flex items-center justify-center relative">
                <Image
                    src={movie.imageSrc || "/bullet.svg"}
                    alt={movie.title}                                width={348}
                    height={259}
                    className="object-cover" />
                
                <div className="absolute top-2 right-2 bg-white/20 rounded-full p-1">
                  <svg
                    viewBox="0 0 24 24"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
              </div>
              <div className="mt-2">
                <h4 className={`text-lg font-semibold ${play.className}`}>{movie.title}</h4>
                <p className="text-sm text-gray-400">
                  {movie.year} | {movie.genre}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
