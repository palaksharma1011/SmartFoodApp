export default function Navbar() {
  return (
<nav
className="
sticky
top-0
z-50
backdrop-blur-2xl
bg-white/60
border-b
border-white/20
shadow-lg
">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">

        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-pink-500 to-orange-400"/>
          <h1 className="font-black text-2xl">
            SmartFoodApp
          </h1>
        </div>

        <div className="hidden md:flex gap-8 font-semibold">
          <button>Explore</button>
          <button>AI Search</button>
          <button>Partners</button>
        </div>

        <div className="flex gap-3">
          <button className="px-5 py-2 rounded-full border">
            Login
          </button>

          <button className="px-5 py-2 rounded-full bg-black text-white">
            Get Started
          </button>
        </div>

      </div>
    </nav>
  );
}