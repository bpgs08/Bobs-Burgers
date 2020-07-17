import React from "react";
import styled from "styled-components";
import { colors } from "../../utils/theme";
import { getDayByAbbreviation, getIndexedUserList } from "../../utils/helpers";

const Calendar = ({ title, users, schedule, scheduleOfToday }) => {
  const indexedUsersObj = getIndexedUserList(users);
  console.log(schedule);
  debugger;

  const printUsers = (listOfUsers, day) => {
    return (
      <>
        {listOfUsers?.userIds?.map((el) => {
          return (
            <div key={`${indexedUsersObj[el]["name"]}-${day}`}>
              {indexedUsersObj[el]["name"]}
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <h1>{title}</h1>
      {users && (schedule || scheduleOfToday) ? (
        <>
          {scheduleOfToday && (
            <div>{printUsers(scheduleOfToday, scheduleOfToday["day"])}</div>
          )}
          {schedule &&
            schedule?.map((first) => {
              return (
                <div key={first.day}>
                  <DayContainer>{getDayByAbbreviation(first.day)}</DayContainer>
                  {printUsers(first, first.day)}
                </div>
              );
            })}
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
