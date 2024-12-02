import Input from "../../components/Input";
import "./Category.css";


function Category({handleChange}) {
  return (
   <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
      <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
       
        <Input
          handleChange={handleChange}
          value="SUV"
          title="SUV"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sport"
          title="sport"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sedan"
          title="sedan"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Pickup Truck"
          title="Pickup Truck"
          name="test"
        />

      </div>
     
   
   </div>
  );
}

export default Category;