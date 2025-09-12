import picture1 from "../assets/pic1.jpeg";
import picture2 from "../assets/pic2.jpeg";
import picture3 from "../assets/pic3.jpeg";

interface Card {
  title: string;
  content: string;
  image: string;
}

const ServicePage = () => {
  const cards: Card[] = [
    {
      title: "card 1",
      content: "hello card 1",
      image: picture1,
    },
    {
      title: "card 2",
      content: "hello card 2",
      image: picture2,
    },
    {
      title: "card 3",
      content: "hello card 3",
      image: picture3,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-3">
      {cards.map((card, index) => (
        <div
          key={index}
          className="overflow-hidden bg-white rounded-lg shadow-md"
        >
          <img src={card.image} alt={card.title} className="object-cover w-full h-48" />
          <div className="p-4">
            <h3 className="mb-2 text-xl font-semibold">{card.title}</h3>
            <p className="text-gray-600">{card.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicePage;