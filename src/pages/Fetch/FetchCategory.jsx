import { useParams } from "react-router-dom";
import useCategoriesFetchApi from "../../customHooks/useCategoriesFetchApi";
import Row from "../../components/Row";
import CatCard from "../../components/CatCard";

export default function FetchCategory() {
  const { categoryName } = useParams();
  const [data, isLoading, isError, error] = useCategoriesFetchApi(categoryName)
  console.log(data)
    

  return (
    <div className="col-sm-12">
      <h1>Fetch Category: {categoryName}</h1>
      <Row className="row-cols-sm-3">
      {data.map(item => <CatCard key={item.id} imgSrc={item.url} />)}
      </Row>
    </div>
  );
}
