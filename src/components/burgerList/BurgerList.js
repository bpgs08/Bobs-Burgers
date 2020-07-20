import React from "react";
import {
  getDayByNumber,
  getDayByAbbreviation,
  getIndexedUserList,
} from "../../utils/helpers";
import BurgerItem from "./BurgerItem";

const BurgerList = ({ burgers, todayId, schedule }) => {
  const indexedBurgersObj = getIndexedUserList(burgers);
  return (
    <div>
      {burgers && getDayByNumber(todayId) ? (
        <>
          <BurgerItem
            name={indexedBurgersObj[todayId]?.name}
            day={getDayByNumber(todayId)}
          />
          <div>---</div>
          {schedule?.map((el) => {
            const indexed = indexedBurgersObj[el?.burgerId];
            return (
              el.id !== todayId && (
                <BurgerItem
                  key={indexed.id}
                  name={indexed["name"]}
                  day={getDayByAbbreviation(el.day)}
                />
              )
            );
          })}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default BurgerList;
