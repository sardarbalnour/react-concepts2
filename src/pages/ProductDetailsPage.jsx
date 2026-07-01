import { useParams } from "react-router";

import NavBar from "../components/NavBar";

function ProductDetailsPage() {
  const { id } = useParams();

  return (
    <div>
      <NavBar />
      <p>detail page #{id}</p>
    </div>
  );
}

export default ProductDetailsPage;
