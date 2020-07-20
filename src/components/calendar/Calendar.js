import React from "react";
import styled from "styled-components";
import { colors } from "../../utils/theme";
import { getDayByAbbreviation, getIndexedUserList } from "../../utils/helpers";

const Calendar = ({ title, users, schedule, scheduleOfToday }) => {
  const indexedObj = getIndexedUserList(users);

  const printContent = (mapList, id, obj) => (
    <>
      {mapList?.userIds?.map((el) => (
        <div key={`${obj[el]["name"]}-${id}`}>{obj[el]["name"]}</div>
      ))}
    </>
  );

  return (
    <div>
      <h1>{title}</h1>
      {users && (schedule || scheduleOfToday) ? (
        <>
          {users && (
            <>
              {scheduleOfToday && (
                <div>
                  {printContent(
                    scheduleOfToday,
                    scheduleOfToday["day"],
                    indexedObj
                  )}
                </div>
              )}
              {schedule &&
                schedule?.map((first) => {
                  return (
                    <div key={first.day}>
                      <DayContainer>
                        {getDayByAbbreviation(first.day)}
                      </DayContainer>
                      {printContent(first, first.day, indexedObj)}
                    </div>
                  );
                })}
            </>
          )}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

const DayContainer = styled.div`
  background-color: ${colors.red};
  text-align: center;
`;

export default Calendar;
