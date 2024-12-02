import Button from "../components/Buttons";
import "./Recommended.css"

function Recommended({handleClick}){
  return (
    <>
      <div>
       <h2 className="recommended-title"> Recommended</h2>
        <div className="recommended-flex">
        
        <Button onClickHandler={handleClick} value="" title="All Vehicles" />
          <Button onClickHandler={handleClick} value="Mercedes-Benz" title="Mercedes-Benz" />
          <Button onClickHandler={handleClick} value="Toyota" title="Toyota" />
          <Button onClickHandler={handleClick} value="Jeep" title="Jeep" />
          <Button onClickHandler={handleClick} value="BMW" title="BMW" />
          <Button onClickHandler={handleClick} value=" Hyundai" title="Hyundai" />
          <Button onClickHandler={handleClick} value="Land Rover" title="Land Rover" />

        </div>
      </div>
    </>
  );
};

export default Recommended;