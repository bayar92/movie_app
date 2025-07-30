import { Cardo, Noto_Sans_Rejang, Play } from "next/font/google"
import Image from "next/image"
import Link from "next/link"


export default function Home() {
  return (
   <div className="relative h-screen w-full overflow-hidden bg-white-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Rectangle 240.svg"
          alt="Cinematic background"
          fill
          priority
          quality={100}
          className="object-cover opacity-70"
          style={{
            background: "linear-gradient(180deg, rgba(56, 22, 109, 0.8) 0%, rgba(49, 24, 93, 0.6) 100%)"
          }}
        />
      </div>
      

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center space-y-8 max-w-sm w-full">
          {/* Logo and brand */}
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="bg-white rounded-full p-2">
                
              </div>
              <h1 className="text-white text-2xl font-bold tracking-wider">WATCH</h1>
            </div>
            <p className="text-gray-300 text-lg">Enjoy the newest movies</p>
          </div>

          {/* Login form */}
          <div className="space-y-6">
            <button
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
              
            >
                <Link href="/homescreen" className="text-white font-medium hover:underline transition-all">
                Log in
              </Link>
            </button>

            <p className="text-gray-300">
              No account?{" "}
              <Link href="/homescreen" className="text-white font-medium hover:underline transition-all">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
