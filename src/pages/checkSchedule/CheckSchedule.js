import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../actions/usersAction";
import { getScheduleById } from "../../actions/scheduleAction";
import Main from "../../components/main";
import Calendar from "../../components/calendar";

const CheckSchedule = ({
  getUsers,
  users,
  getScheduleById,
  scheduleOfToday,
}) => {
  useEffect(() => {
    if (!users) {
      getUsers();
    }
    if (!scheduleOfToday) {
      getScheduleById({ todayId: new Date().getDay() + 1 });
    }
  }, []);

  return (
    <Main>
      <Calendar
        title="List of People Working Today"
        users={users}
        scheduleOfToday={scheduleOfToday}
      />
    </Main>
  );
};

const mapDispatchToProps = {
  getUsers,
  getScheduleById,
};

const mapStateToProps = ({ usersReducer, scheduleReducer }) => {
  return {
    users: usersReducer.users,
    scheduleOfToday: scheduleReducer.scheduleOfToday,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckSchedule);
