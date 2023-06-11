import Navbar from "../../components/navbar/Navbar";

const products = [
  {
    name: "Serviciul A",
    price: 19.99,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Serviciul B",
    price: 29.99,
    description: "Praesent varius velit eu metus scelerisque faucibus.",
  },
  {
    name: "Serviciul C",
    price: 9.99,
    description: "Nullam consectetur nisl vel est vulputate, et consequat massa tristique.",
  },
  {
    name: "Serviciul D",
    price: 39.99,
    description: "Fusce cursus elit at nisi ullamcorper feugiat.",
  },
  {
    name: "Serviciul E",
    price: 14.99,
    description: "Sed eu velit consequat, convallis mi in, dignissim nisi.",
  },
  {
    name: "Serviciul F",
    price: 24.99,
    description: "Proin finibus est in lectus condimentum, vitae ultrices elit pharetra.",
  },
];

export default function Prices() {
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-white py-4 px-8">
        <Navbar page="prices" />
      </div>
      <div className="bg-black w-full h-[2px]"></div>
      <div className="flex bg-custom-purple text-custom-purple flex-col items-center justify-center h-screen">
        <div className="grid grid-cols-3 gap-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded shadow-md"
            >
              <h1 className="text-xl font-bold mb-2"> {product.name} </h1>
              <p className="text-md mb-2"> {product.description} </p>
              <p className="text-custom-purple font-bold">{product.price.toFixed(2)} RON</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
