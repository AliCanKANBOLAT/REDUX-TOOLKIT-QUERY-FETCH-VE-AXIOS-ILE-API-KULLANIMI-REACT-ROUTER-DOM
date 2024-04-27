import { useParams } from "react-router-dom";
import useCategoriesFetchApi from "../../customHooks/useCategoriesFetchApi";

export default function FetchCategory() {
  const { categoryName } = useParams();
  const [data, isLoading, isError, error] = useCategoriesFetchApi(categoryName)
    

  return (
    <div className="col-sm-12">
      <h1>Fetch Category: {categoryName}</h1>
    </div>
  );
}
