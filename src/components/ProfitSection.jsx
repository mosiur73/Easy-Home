export default function Profit() {
  return (
    <section className="relative bg-gradient-to-b from-[#1b0b1e] to-[#2a1230] text-white min-h-screen flex flex-col items-center justify-center px-6">
      {/* Small decorative dots/stars */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-white/40 rounded-full"></div>
      <div className="absolute top-32 right-20 w-1.5 h-1.5 bg-white/40 rounded-full"></div>
      <div className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-white/30 rounded-full"></div>

      {/* Content */}
      <div className="max-w-3xl text-center mt-20">
        <p className="text-sm uppercase tracking-widest text-gray-300 mb-3 ">
          Build For You
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Built for <span className="text-cyan-300">Creators</span> -<br />
          Powered for <span className="text-purple-400">Profit</span>
        </h1>
        <p className="mt-6 text-gray-300 text-lg">
          Create and sell courses, consulting services, and communities – with
          Zero <br /> marketing cost and a built-in sales network.
        </p>

        {/* Email Form */}
        <div className="mt-8 flex justify-center">
  <div className="relative w-full sm:w-96">
    <input
      type="email"
      placeholder="Enter Your Email Here"
      className="px-5 py-3 pr-32 w-full rounded-full bg-[#2f1b34] text-gray-200 placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
    />
    <button className="absolute right-2 top-1/2 -translate-y-1/2 px-5 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full font-medium text-white hover:from-pink-600 hover:to-purple-700 transition">
      Start for Free
    </button>
  </div>
</div>

        <p className="mt-3 text-xs text-gray-400">
          By proceeding you agree to our Platform Terms & Privacy Notice
        </p>
      </div>

      {/* Stats Section */}
      <div className="mt-16 max-w-5xl w-full bg-[#2b1731] border border-gray-700 rounded-2xl shadow-xl py-8 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 px-8 ">
          <h2 className="text-lg md:text-xl font-semibold">
            Sell from day one – even with zero audience
          </h2>
          <button className="mt-4 md:mt-0 border border-gray-500 px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition">
            Open calculator
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center px-8 ">
          <div className="border border-gray-600 rounded-2xl py-4 shadow-2xl">
            <p className="text-sm text-gray-400">CO-SELLING IN NETWORK</p>
            <h3 className="text-2xl font-bold text-white">21,500+</h3>
            <p className="text-sm text-gray-400">People who can co-promote</p>
          </div>
          <div className="border border-gray-600 rounded-2xl py-4 shadow-2xl">
            <p className="text-sm text-gray-400">EXPECTED BUYERS / MONTH</p>
            <h3 className="text-2xl font-bold text-white">86</h3>
            <p className="text-sm text-gray-400">With zero personal audience</p>
          </div>
          <div className="border border-gray-600 rounded-2xl py-4 shadow-2xl">
            <p className="text-sm text-gray-400">EST. MRR AT US$9/MO</p>
            <h3 className="text-2xl font-bold text-white">US$774</h3>
            <p className="text-sm text-gray-400">From membership sales</p>
          </div>
          <div className="border border-gray-600 rounded-2xl py-4 shadow-2xl">
            <p className="text-sm text-gray-400">EARN W/O A PRODUCT</p>
            <h3 className="text-2xl font-bold text-white">US$300</h3>
            <p className="text-sm text-gray-400">Just by co-selling</p>
          </div>
        </div>
        <div className="mt-6   w-full bg-[#fdf6e3] text-black px-6 py-3  text-center text-sm md:text-base">
        Unlike Kajabi, Teachable, or Skool, Growhubs helps you find and convert
        clients inside the platform so you can sell from day one.
      </div>
      </div>

      {/* Bottom Highlight Section */}
      {/* <div className="mt-6 max-w-5xl w-full bg-[#fdf6e3] text-black px-6 py-3 rounded-b-2xl text-center text-sm md:text-base">
        Unlike Kajabi, Teachable, or Skool, Growhubs helps you find and convert
        clients inside the platform so you can sell from day one.
      </div> */}
    </section>
  )
}
