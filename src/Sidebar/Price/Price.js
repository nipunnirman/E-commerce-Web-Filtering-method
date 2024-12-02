import Input from "../../components/Input"
import "./Price.css"

function Price({handleChange}) {
  return (
   <div className="ml">
   <h2 className="sidebar-title price">Price</h2>
   <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
    </label>

    <Input
          handleChange={handleChange}
          value={25000}
          title="0- $25000"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={50000}
          title="$25000-$50000"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={75000}
          title="$50000-$75000"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={2000}
          title="Over $75000"
          name="test2"
        />
       
   </div>
    
  )   
}

export default Price
 