import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../actions/usersAction";
import { getBurgers, addBurger } from "../../actions/burgersAction";
import { getScheduleById } from "../../actions/scheduleAction";
import BurgerList from "../../components/burgerList";

import Main from "../../components/main";
let Home = ({
  history,
  match,
  getBurgers,
  addBurger,
  burgers,
  getUsers,
  users,
  getScheduleById,
  scheduleOfToday,
}) => {
  useEffect(() => {
    getBurgers();
    getScheduleById({ todayId: new Date().getDay() + 1 });
  }, []);

  return (
    <Main>
      <h1>Welcome to Bob's Burgers</h1>
      <BurgerList burgers={burgers} burgerOfDayId={scheduleOfToday?.burgerId} />
    </Main>
  );
};

const mapDispatchToProps = {
  getUsers,
  getBurgers,
  addBurger,
  getScheduleById,
};

const mapStateToProps = ({ burgersReducer, scheduleReducer }) => {
  return {
    burgers: burgersReducer.burgers,
    scheduleOfToday: scheduleReducer.scheduleOfToday,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
