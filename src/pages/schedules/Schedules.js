import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../actions/usersAction";
import { getSchedule } from "../../actions/scheduleAction";
import Calendar from "../../components/calendar";
import Main from "../../components/main";

let Schedules = ({ getUsers, users, getSchedule, schedule }) => {
  useEffect(() => {
    getUsers();
    getSchedule();
  }, []);

  return (
    <Main>
      <Calendar title="This Weeks Calendar" users={users} schedule={schedule} />
    </Main>
  );
};

const mapDispatchToProps = {
  getUsers,
  getSchedule,
};

const mapStateToProps = ({ usersReducer, scheduleReducer }) => {
  return {
    users: usersReducer.users,
    schedule: scheduleReducer.schedule,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Schedules);
