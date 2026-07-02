import { Link, useSearchParams } from "react-router";
import NavBar from "../components/NavBar";

function ProductsPage() {
  const products = [
    { id: 1, name: "product 1" },
    { id: 2, name: "product 2" },
    { id: 3, name: "product 3" },
    { id: 4, name: "product 4" },
  ];

  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy");
  const order = searchParams.get("order");
  console.log(searchParams);
  console.log(searchParams.toString())
  console.log({ order, sortBy });

  const sortHandler = () => {
    setSearchParams({ order: "desc", sortBy: "sale" });
  };

  return (
    <div>
      <NavBar />
      <button onClick={sortHandler}>Sort</button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;
