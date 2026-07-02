import { Link, useNavigate, useSearchParams } from "react-router";
import NavBar from "../components/NavBar";

const products = [
  { id: 1, name: "product 1" },
  { id: 2, name: "product 2" },
  { id: 3, name: "product 3" },
  { id: 4, name: "product 4" },
];

function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const sortBy = searchParams.get("sortBy");
  const order = searchParams.get("order");
  console.log(searchParams);
  console.log(searchParams.toString());
  console.log({ order, sortBy });

  const sortHandler = () => {
    setSearchParams({ order: "desc", sortBy: "sale" });
  };

  const homeHandler = () => {
    navigate("/");
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
      <button onClick={homeHandler}>Go home</button>
    </div>
  );
}

export default ProductsPage;
