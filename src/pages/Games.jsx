
import { Search, User, Plus } from "lucide-react";

export default function App() {
  const games = [
    {
      id: 1,
      title: "Catan",
      category: "CLASSIC",
      players: "3-4 Players",
      time: "60m",
      difficulty: "Medium Difficulty",
      image:
        "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc6?w=600",
    },
    {
      id: 2,
      title: "Wingspan",
      category: "STRATEGY",
      players: "1-5 Players",
      time: "40-70m",
      difficulty: "Moderate",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600",
    },
    {
      id: 3,
      title: "Ticket to Ride",
      category: "FAMILY",
      players: "2-5 Players",
      time: "45m",
      difficulty: "Beginner Friendly",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600",
    },
  ];

  return (
    <div className="min-h-screen bg-stone-100">
      {/* Navbar */}
      <nav className="border-b bg-stone-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
          <div className="flex items-center gap-10">
            <h1 className="text-4xl font-serif font-bold text-[#2F4F3F]">
              The Gaming Den
            </h1>

            <div className="hidden md:flex gap-8 text-sm font-semibold text-stone-600">
              <a
                href="#"
                className="border-b-2 border-amber-700 pb-1 text-amber-700"
              >
                Games
              </a>
              <a href="#">Tournaments</a>
              <a href="#">Reservations</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-full bg-stone-200 px-4 py-2">
              <Search size={16} />
              <input
                placeholder="Search games..."
                className="bg-transparent outline-none"
              />
            </div>

            <User size={20} />
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-8 py-6">
        {/* Hero */}
        <section className="rounded-2xl bg-[#284D3D] p-10 text-white">
          <h2 className="mb-4 text-5xl font-serif font-bold">
            Explore Our Collection
          </h2>

          <p className="max-w-2xl text-lg text-green-100">
            From timeless classics to the latest Kickstarter sensations,
            our library boasts over 500 hand-picked titles. Whether you're
            a seasoned strategist or looking for a quick party laugh, your
            perfect game awaits.
          </p>
        </section>

        {/* Content */}
        <div className="mt-10 grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <aside className="col-span-12 rounded-2xl border bg-white p-6 shadow-sm md:col-span-3">
            <h3 className="mb-6 text-3xl font-serif font-bold text-[#2F4F3F]">
              Filters
            </h3>

            <div>
              <h4 className="mb-3 text-xs font-bold tracking-widest text-stone-500">
                CATEGORIES
              </h4>

              <div className="space-y-3 text-stone-700">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Strategy
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked />
                  Party
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Family
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Two-Player
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Cooperative
                </label>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="mb-3 text-xs font-bold tracking-widest text-stone-500">
                DIFFICULTY
              </h4>

              <input type="range" className="w-full" />
            </div>

            <div className="mt-8">
              <h4 className="mb-3 text-xs font-bold tracking-widest text-stone-500">
                PLAY TIME
              </h4>

              <div className="grid grid-cols-2 gap-2">
                <button className="rounded border p-2 text-sm">
                  &lt; 30m
                </button>
                <button className="rounded border p-2 text-sm">
                  30-60m
                </button>
                <button className="rounded border p-2 text-sm">
                  60-120m
                </button>
                <button className="rounded border p-2 text-sm">
                  2h+
                </button>
              </div>
            </div>
          </aside>

          {/* Main */}
          <section className="col-span-12 md:col-span-9">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-stone-600">
                Showing <span className="font-semibold">524</span> board games
              </p>

              <select className="rounded border bg-white px-3 py-2">
                <option>Popularity</option>
                <option>Name</option>
                <option>Newest</option>
              </select>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {games.map((game) => (
                <div
                  key={game.id}
                  className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-xl"
                >
                  <img
                    src={game.image}
                    alt={game.title}
                    className="h-64 w-full object-cover"
                  />

                  <div className="p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="text-3xl font-serif font-bold text-[#2F4F3F]">
                        {game.title}
                      </h3>

                      <span className="rounded bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700">
                        {game.category}
                      </span>
                    </div>

                    <div className="mb-4 flex gap-4 text-sm text-stone-500">
                      <span>👥 {game.players}</span>
                      <span>⏱ {game.time}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="rounded border px-3 py-1 text-xs">
                        {game.difficulty}
                      </span>

                      <button className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-700 text-white">
                        <Plus size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
