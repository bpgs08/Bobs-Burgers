import React from "react";

const BurgerItem = ({ name, day }) => (
  <div>
    <h3>{`${day}'s burger of the Day`}</h3>
    {name ? <p>{name}</p> : <div>No burger of the day</div>}
  </div>
);

export default BurgerItem;
