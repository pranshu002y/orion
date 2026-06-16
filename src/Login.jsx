function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center p-6 md:p-12"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=2000')",
      }}
    >
      <div className="min-h-[90vh] border-4 border-white/80 rounded-[40px] backdrop-blur-[2px] relative overflow-hidden">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-8 md:px-12 py-8">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-yellow-300"></div>
            <h1 className="font-bold text-xl">Harmont</h1>
          </div>

          <div className="hidden md:flex gap-10 text-gray-700">
            <a href="/" className="text-yellow-300 font-medium">
              Locations
            </a>
            <a href="/">Rooms</a>
            <a href="/">Experiences</a>
            <a href="/">Contact</a>
          </div>

          <button className="bg-yellow-200 px-8 py-3 rounded-full font-semibold">
            Book Now
          </button>
        </nav>

        {/* Hero */}
        <div className="flex flex-col items-center text-center mt-10 px-4">
          <h1 className="text-6xl md:text-8xl font-bold leading-none">
            Find Your
            <br />
            Perfect <span className="text-yellow-200">Space</span>
          </h1>

          <p className="max-w-2xl mt-6 text-lg text-gray-700">
            Discover handpicked luxury cabins in breathtaking locations.
            Unplug, unwind, and reconnect with what matters most.
          </p>
        </div>

        {/* Cabin Image */}
        <div className="flex justify-center mt-12">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200"
            alt="cabin"
            className="w-[700px] max-w-full object-contain"
          />
        </div>

        {/* Floating Badges */}
        <div className="absolute top-[48%] left-[25%]">
          <div className="bg-white/20 backdrop-blur-md border border-white/30 px-5 py-3 rounded-full text-white">
            Wi-Fi 100 Mbps
          </div>
        </div>

        <div className="absolute top-[42%] right-[33%]">
          <div className="bg-white/20 backdrop-blur-md border border-white/30 px-5 py-3 rounded-full text-white">
            Self Check-in
          </div>
        </div>

        <div className="absolute top-[55%] right-[20%]">
          <div className="bg-white/20 backdrop-blur-md border border-white/30 px-5 py-3 rounded-full text-white">
            Pet Friendly
          </div>
        </div>

        {/* Map */}
        <div className="absolute bottom-40 left-10">
          <div className="w-32 h-32 rounded-full bg-white p-2 shadow-xl">
            <img
              src="https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png"
              alt=""
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Rating */}
        <div className="absolute bottom-40 right-12 text-white text-right">
          <div className="text-6xl font-bold">★ 4.9</div>
          <p className="text-xl">from 2,400+ stays</p>
        </div>

        {/* Bottom Text */}
        <div className="absolute bottom-36 left-1/2 -translate-x-1/2 text-center max-w-xl">
          <p className="font-medium text-lg">
            Experience The Perfect Blend Of Comfort And Nature,
            Crafted For Your Ultimate Escape.
          </p>
        </div>

        {/* Booking Bar */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[95%] md:w-[85%] bg-white rounded-full shadow-2xl">
          <div className="grid md:grid-cols-5 gap-4 items-center p-3">
            <div className="px-4">
              <p className="text-gray-400 text-sm">Room</p>
              <p className="font-semibold">Pine Log</p>
            </div>

            <div className="px-4 border-l">
              <p className="text-gray-400 text-sm">Check-in</p>
              <p className="font-semibold">15 Mar 2025</p>
            </div>

            <div className="px-4 border-l">
              <p className="text-gray-400 text-sm">Check-out</p>
              <p className="font-semibold">30 Mar 2025</p>
            </div>

            <div className="px-4 border-l">
              <p className="text-gray-400 text-sm">Guests</p>
              <p className="font-semibold">4 Adults</p>
            </div>

            <button className="bg-yellow-200 h-14 rounded-full font-semibold">
              Book Your Stay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;