import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getBurgers, addBurger } from "../../actions/burgersAction";
import { getSchedule } from "../../actions/scheduleAction";
import BurgerList from "../../components/burgerList";

import Main from "../../components/main";
const Home = ({ getBurgers, burgers, getSchedule, schedule }) => {
  const todayId = new Date().getDay() + 1;
  useEffect(() => {
    if (!schedule) {
      getSchedule();
    }
    if (!burgers) {
      getBurgers();
    }
  }, []);

  return (
    <Main>
      <h1>Welcome to Bob's Burgers</h1>
      <BurgerList burgers={burgers} schedule={schedule} todayId={todayId} />
    </Main>
  );
};

const mapDispatchToProps = {
  getBurgers,
  addBurger,
  getSchedule,
};

const mapStateToProps = ({ burgersReducer, scheduleReducer }) => {
  return {
    burgers: burgersReducer.burgers,
    schedule: scheduleReducer.schedule,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
