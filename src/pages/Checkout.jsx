function App() {
  const snacks = [
    {
      name: "Grandmaster's Espresso",
      desc: "Triple-shot fuel for long strategy sessions.",
      price: "$6.50",
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800",
    },
    {
      name: "Strategy Sliders",
      desc: "Trio of wagyu beef minis with house aioli.",
      price: "$14.00",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
    },
  ];

  return (
    <div className="min-h-screen bg-stone-100">
      {/* Navbar */}
      <nav className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-8 h-20 flex items-center justify-between">
          <h1 className="text-3xl font-serif font-bold text-green-950">
            Checkmate
          </h1>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#" className="text-gray-600">
              Home
            </a>
            <a href="#" className="text-gray-600">
              Library
            </a>
            <a
              href="#"
              className="text-amber-700 border-b-2 border-amber-700 pb-1"
            >
              Reservations
            </a>
            <a href="#" className="text-gray-600">
              Events
            </a>

            <button className="bg-green-950 text-white px-5 py-3 rounded-lg hover:bg-green-900">
              Book Table
            </button>
          </div>
        </div>
      </nav>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto p-8 grid lg:grid-cols-3 gap-6">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Reservation Card */}
          <div className="bg-white rounded-2xl p-8 border">
            <h2 className="text-3xl font-serif font-bold text-green-950 mb-8">
              Your Reservation
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <p className="text-xs uppercase text-gray-500 font-semibold">
                  Date
                </p>
                <h3 className="text-3xl font-serif font-bold mt-2">
                  Oct 25th
                </h3>
                <p className="text-amber-700 font-medium">Friday</p>
              </div>

              <div>
                <p className="text-xs uppercase text-gray-500 font-semibold">
                  Arrival
                </p>
                <h3 className="text-3xl font-serif font-bold mt-2">
                  7:00 PM
                </h3>
                <p className="text-amber-700 font-medium">2h duration</p>
              </div>

              <div>
                <p className="text-xs uppercase text-gray-500 font-semibold">
                  Guests
                </p>
                <h3 className="text-3xl font-serif font-bold mt-2">4</h3>
                <p className="text-amber-700 font-medium">People</p>
              </div>

              <div>
                <p className="text-xs uppercase text-gray-500 font-semibold">
                  Table
                </p>
                <h3 className="text-3xl font-serif font-bold mt-2">
                  Standard
                </h3>
                <p className="text-amber-700 font-medium">
                  Game Board Ready
                </p>
              </div>
            </div>
          </div>

          {/* Snacks Section */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-serif font-bold text-green-950">
                Pre-order Snacks
              </h2>

              <span className="bg-orange-100 text-orange-500 px-3 py-1 rounded-full text-sm font-medium">
                Optional
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {snacks.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden border"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-56 w-full object-cover"
                  />

                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-3xl font-serif font-bold text-green-950">
                          {item.name}
                        </h3>

                        <p className="text-gray-600 mt-2">{item.desc}</p>
                      </div>

                      <button className="w-11 h-11 rounded-full bg-green-950 text-white text-xl">
                        +
                      </button>
                    </div>

                    <p className="mt-6 text-3xl font-serif font-bold text-amber-700">
                      {item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Player Info */}
          <div className="bg-white rounded-2xl border p-8">
            <h2 className="text-3xl font-serif font-bold text-green-950 mb-6">
              Player Info
            </h2>

            <div className="space-y-5">
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Arthur Morgan"
                  className="w-full border px-4 py-3 rounded-lg"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="arthur@outlaw.com"
                  className="w-full border px-4 py-3 rounded-lg"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="+1 (555) 012-3456"
                  className="w-full border px-4 py-3 rounded-lg"
                />
              </div>

              <label className="flex items-start gap-3 pt-3">
                <input type="checkbox" className="mt-1" />
                <span className="text-gray-600">
                  Sign up for our monthly newsletter.
                </span>
              </label>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-green-950 text-white rounded-2xl p-8">
            <h3 className="uppercase tracking-widest text-xs text-green-300 mb-6">
              Order Summary
            </h3>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Table Reservation (4 Guests)</span>
                <span>Free</span>
              </div>

              <div className="flex justify-between">
                <span>Pre-order Snacks</span>
                <span>$0.00</span>
              </div>
            </div>

            <div className="border-t border-green-800 my-6"></div>

            <div className="flex justify-between text-3xl font-serif font-bold">
              <span>Total Due Now</span>
              <span>$0.00</span>
            </div>

            <div className="bg-green-900 mt-6 rounded-xl p-4 text-sm text-green-200">
              You will pay for games and snacks at the venue after your
              session.
            </div>

            <button className="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl text-xl font-semibold">
              Confirm Booking →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;