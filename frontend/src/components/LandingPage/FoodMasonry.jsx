        import FoodCard from "./FoodCard";
const foods = [
  {
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    title: "Cheese Burst Pizza",
  },
  {
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    title: "Healthy Bowl",
  },
  {
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    title: "Salad",
  },
  {
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
    title: "Steak",
  },
  {
    img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187",
    title: "Dessert",
  },
];

export default function FoodMasonry() {
  return (
    <section className="max-w-7xl mx-auto py-20">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black">Explore Food Reels</h2>
      </div>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-6 px-4">

        {foods.map((food) => (
          <FoodCard key={food.title} food={food} />
        ))}
      </div>
    </section>
  );
}
