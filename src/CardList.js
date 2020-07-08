import React from "react";
import Card from "./Card";

export const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map(({ id, name, email }) => {
        return <Card id={id} name={name} email={email} key={id} />;
      })}
    </div>
  );
};
