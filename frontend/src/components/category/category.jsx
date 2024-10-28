import "./category.css";
import { useNavigate } from "react-router-dom";

const Category = ({ category }) => {
  const navigate = useNavigate();
  return (
    <div className="category">
      <div className="h1">Categories</div>
      <div className="row gx-0 py-4">
        {category?.map((item) => (
          <div key={item.id} className="col 6 col-md-2" onClick={()=>{navigate(`/category/${item.id}`)}}>
            <div className="category_content border-end">
              <img
                className="img-fluid category_image"
                src={`http://localhost:1337${item.attributes.Category_img.data.attributes.url}`}
                alt={item.attributes.Title}
              />
              <p className="h5">{item.attributes.Title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
