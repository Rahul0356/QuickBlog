import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
   <div className="mx-8 sm:mx-16 xl:mx-24 relative">
  <div className="text-center mt-20 mb-8">
    <div className="inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm">
      <p>New: AI feature integrated</p>
      <img src={assets.star_icon} alt="Star Icon" className="w-2.5" />
    </div>

    <h1 className="text-3xl sm:text-6xl font-semibold sm:leading-[4rem] text-gray-700">
      Your own <span className="text-primary">blogging</span>
      <br />
      platform.
    </h1>

    <p className="my-6 sm:my-8 max-w-2xl mx-auto text-gray-500 text-sm sm:text-base">
      This is your space to think out loud, to share what matters, and to write without filters.
      Whether it's one word or a thousand, your story starts right here.
    </p>

    <form className="flex justify-between items-center max-w-lg mx-auto border border-gray-300 bg-white rounded overflow-hidden max-sm:scale-90">
      <input
        type="text"
        placeholder="Search for blogs"
        required
        className="w-full pl-4 py-2 outline-none text-sm"
        aria-label="Search blogs"
      />
      <button
        type="submit"
        className="bg-primary text-white px-6 py-2 m-1.5 rounded hover:scale-105 transition-transform"
      >
        Search
      </button>
    </form>
  </div>

  <img
    src={assets.gradientBackground}
    alt="Decorative Background"
    className="absolute -top-12 left-0 w-full opacity-50 -z-10 pointer-events-none"
  />
</div>

  )
}

export default Header