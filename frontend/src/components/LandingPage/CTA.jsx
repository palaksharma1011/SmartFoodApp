export default function CTA() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-5">

      <div className="bg-black rounded-[40px] p-20 text-center text-white">

        <h1 className="text-6xl font-black">
          Ready To Discover
          Delicious Food?
        </h1>

        <p className="mt-6 text-xl text-gray-300">
          Join thousands of food lovers and food creators.
        </p>

        <div className="flex justify-center gap-5 mt-10">

          <button className="bg-pink-500 px-8 py-4 rounded-2xl font-bold">
            I'm Hungry
          </button>

          <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold">
            I'm Selling
          </button>

        </div>

      </div>
    </section>
  );
}