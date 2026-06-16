export default function App() {
  const tournaments = [
    {
      title: "Catan Championship",
      time: "7:00 PM",
      entry: "$15",
      description:
        "Battle for dominance on the island and compete for exclusive prizes.",
      image:
        "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Casual Chess Night",
      time: "6:00 PM",
      entry: "Free",
      description:
        "Open play for all levels with beginner coaching available.",
      image:
        "https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const menuItems = [
    {
      name: "Grandmaster's Espresso",
      price: "$4.50",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Meeple Muffins",
      price: "$3.75",
      image:
        "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Strategy Sliders",
      price: "$12.00",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <h1 className="text-2xl font-bold text-green-900">Checkmate</h1>

          <div className="hidden gap-8 md:flex">
            <a href="#" className="font-medium hover:text-green-700">
              Games
            </a>
            <a href="#" className="font-medium hover:text-green-700">
              Tournaments
            </a>
            <a href="#" className="font-medium hover:text-green-700">
              Menu
            </a>
            <a href="#reservations" className="font-medium hover:text-green-700">
              Reservations
            </a>
          </div>

          <button className="rounded-lg bg-green-700 px-5 py-2 text-white hover:bg-green-800">
            Book a Table
          </button>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero */}
        <section className="relative flex min-h-[85vh] items-center">
          <img
            src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1600&auto=format&fit=crop"
            alt="Board Game Cafe"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="relative mx-auto max-w-7xl px-6">
            <div className="max-w-2xl text-white">
              <h1 className="mb-6 text-5xl font-bold md:text-7xl">
                Your Next Move Starts Here
              </h1>

              <p className="mb-8 text-lg text-gray-200">
                The city's finest board game collection, craft coffee, and
                curated snacks. Rediscover face-to-face connection.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#reservations"
                  className="rounded-lg bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800"
                >
                  Book a Table
                </a>

                <button className="rounded-lg border border-white px-6 py-3 text-white hover:bg-white hover:text-black">
                  Explore Library
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Reservation */}
        <section id="reservations" className="bg-gray-100 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h2 className="mb-8 text-3xl font-bold">
                Reserve Your Table
              </h2>

              <div className="grid gap-6 md:grid-cols-4">
                <input
                  type="date"
                  className="rounded-lg border p-3"
                />

                <select className="rounded-lg border p-3">
                  <option>6:00 PM</option>
                  <option>7:00 PM</option>
                  <option>8:00 PM</option>
                  <option>9:00 PM</option>
                </select>

                <select className="rounded-lg border p-3">
                  <option>2 Players</option>
                  <option>4 Players</option>
                  <option>6 Players</option>
                  <option>8+ Players</option>
                </select>

                <button className="rounded-lg bg-green-700 px-4 py-3 text-white hover:bg-green-800">
                  Check Availability
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Tournaments */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-10 text-4xl font-bold text-green-900">
              Tonight's Tournaments
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              {tournaments.map((event) => (
                <div
                  key={event.title}
                  className="overflow-hidden rounded-2xl border shadow-sm transition hover:shadow-lg"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-64 w-full object-cover"
                  />

                  <div className="p-6">
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="text-2xl font-semibold">
                        {event.title}
                      </h3>

                      <span className="rounded bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                        {event.time}
                      </span>
                    </div>

                    <p className="mb-4 text-gray-600">
                      {event.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="font-semibold">
                        Entry: {event.entry}
                      </span>

                      <button className="font-semibold text-green-700 hover:text-green-900">
                        Register →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Menu */}
        <section className="bg-green-900 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-12 text-center text-5xl font-bold">
              Snack & Sip Menu
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              {menuItems.map((item) => (
                <div key={item.name}>
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="aspect-square w-full object-cover transition duration-500 hover:scale-105"
                    />
                  </div>

                  <div className="mt-4">
                    <h3 className="text-xl font-semibold">
                      {item.name}
                    </h3>
                    <p className="text-green-200">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
              alt="Game Library"
              className="rounded-2xl shadow-lg"
            />

            <div>
              <span className="font-semibold uppercase tracking-widest text-green-700">
                Our Story
              </span>

              <h2 className="mt-4 mb-6 text-5xl font-bold text-green-900">
                More Than Just A Café
              </h2>

              <p className="mb-6 text-lg text-gray-600">
                Checkmate was born from a desire to bring people back to the
                table. We provide a welcoming space for strategy, laughter,
                and unforgettable moments.
              </p>

              <ul className="space-y-4">
                <li>✅ Expert game guides</li>
                <li>✅ Weekly tournaments</li>
                <li>✅ 500+ board games</li>
                <li>✅ Fresh coffee & snacks</li>
              </ul>

              <button className="mt-8 rounded-lg bg-green-700 px-6 py-3 text-white hover:bg-green-800">
                Meet The Team
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-green-950 py-12 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-2xl font-bold">
                Checkmate
              </h3>
              <p className="text-gray-300">
                Your neighborhood sanctuary for board games,
                coffee, and great company.
              </p>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">
                Quick Links
              </h4>

              <div className="space-y-2">
                <a href="#" className="block hover:text-green-300">
                  Location
                </a>
                <a href="#" className="block hover:text-green-300">
                  Hours
                </a>
                <a href="#" className="block hover:text-green-300">
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">
                Newsletter
              </h4>

              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 rounded-lg px-4 py-2 text-black"
                />

                <button className="rounded-lg bg-green-700 px-4 py-2">
                  Join
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-gray-400">
            © 2026 Checkmate Board Game Café. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}