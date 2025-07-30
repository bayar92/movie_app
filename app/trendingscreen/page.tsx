import { Cardo, Play } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

const cardo = Cardo({ subsets: ["latin"], weight: ["400", "700"] })
const play = Play({ subsets: ["latin"], weight: ["400", "700"] })

export default function TrendingPage() {
  return (
    <div className="flex h-screen bg-black text-white font-sans">
      {/* Sidebar */}
      <aside className="w-60 bg-zinc-900 p-6 flex flex-col gap-6">
        <h1 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <Image src="/watch.svg" alt="Watch Icon" width={20} height={20} />
          WATCH
        </h1>

        <nav className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2 hover:text-purple-400">
            <img
            src="/home.svg"
            alt="Home Icon"
            className="w-5 h-5"
            />
            
           <Link href="/homescreen" className="text-white font-medium hover:underline transition-all">
             Home
          </Link> 
          </Link>
          <Link href="/favourites" className="flex items-center gap-2 hover:text-purple-400">
            <Image src="/favourites.svg" alt="Favourites Icon" width={20} height={20} />
            <Link href="/favouritescreen" className="text-white font-medium hover:underline transition-all">
             Favourites 
             </Link>
          </Link>
          <Link href="/trending" className="flex items-center gap-2 text-purple-400">
            {" "}
            {/* Active state for tre  nding */}
            <Image src="/trending.svg" alt="Trending Icon" width={20} height={20} />
            Trending
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

        <h2 className={`text-3xl font-bold mb-6 ${play.className}`}>Trending at this moment</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            {
              title: "Tokyo Train",
              year: "2022",
              genre: "Action comedy",
              imageSrc: "/tokyo.svg",
            },
            {
              title: "Moonfall Again",
              year: "2022",
              genre: "Sci-fi",
              imageSrc: "/moonfall.svg",
            },
            {
              title: "Life in Paris",
              year: "2020",
              genre: "Comedy drama",
              imageSrc: "/paris.svg",
            },
            {
              title: "House of Gucci",
              year: "2021",
              genre: "Drama",
              imageSrc: "/gucci.svg",
            },
          ].map((movie, idx) => (
            <div key={idx} className="bg-zinc-800 rounded-lg overflow-hidden p-2 relative">
              <div className="w-full h-40 bg-zinc-700 flex items-center justify-center relative">
                <Image
                  src={movie.imageSrc || "/tokyo.svg"}
                  alt={movie.title}
                  width={255}
                  height={301 }
                  className="object-cover"
                />
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
                <h4 className={`text-md font-semibold ${play.className}`}>{movie.title}</h4>
                <p className="text-sm text-gray-400">
                  {movie.year} | {movie.genre}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Trending Movie */}
        <div className="bg-zinc-800 rounded-lg overflow-hidden flex flex-col md:flex-row p-4 gap-6">
          <div className="relative w-full md:w-1/3 h-64 md:h-auto rounded-lg overflow-hidden">
            <Image src="wealth.svg" alt="House of Wealth" fill className="object-cover" />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <h3 className={`text-3xl font-bold ${cardo.className}`}>House of Wealth</h3>
            <p className="text-sm text-gray-400 mt-1">
              2023 | Drama | 2h 38m{" "}
              <span className="ml-4 text-yellow-400 flex items-center gap-1">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                7.8/10
              </span>
            </p>
            <p className="text-gray-300 mt-4 text-sm">
              The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion,
              luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle,
              there are deep-seated tensions and secrets that threaten to tear the family apart.
            </p>
            <div className="mt-6 flex gap-4">
              <button className="bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-500">
                <Link href="/watch.tsx" className="text-white font-medium hover:underline transition-all">
             Watch now
             </Link>
              </button>
              <button className="border border-white px-6 py-3 rounded-lg">
                <svg
                  viewBox="0 0 24 24"
                  fill="white"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
