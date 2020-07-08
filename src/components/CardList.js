import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {robots.map(({ id, name, email }) => {
        return <Card id={id} name={name} email={email} key={id} />;
      })}
    </div>
  );
};

export default CardList;
