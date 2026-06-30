export default function Stats() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          ["500K+", "Food Reels"],
          ["50K+", "Food Partners"],
          ["2M+", "Users"],
          ["95%", "AI Accuracy"],
        ].map((item) => (
          <div
            key={item[0]}
            className="bg-white p-10 rounded-3xl shadow-lg text-center"
          >
            <h2 className="text-5xl font-black">{item[0]}</h2>

            <p className="mt-3 text-gray-500">{item[1]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
