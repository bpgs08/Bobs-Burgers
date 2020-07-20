import React from "react";
import { connect } from "react-redux";
import Main from "../../components/main";
import {
  getBurgers,
  addBurger,
  deleteBurger,
  updateBurger,
} from "../../actions/burgersAction";
import { EditBurgerItem } from "./EditBurgerItem";

const EditBurgers = ({ getBurgers, burgers, deleteBurger, updateBurger }) => {
  if (!burgers) {
    getBurgers();
  }
  return (
    <Main>
      <h1>Edit Burgers</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>User Id</th>
            <th>Edit/Submit</th>
            <th>Delete/Cancel</th>
          </tr>
        </thead>
        <tbody>
          {burgers ? (
            <>
              {burgers?.map((el) => {
                return (
                  <EditBurgerItem
                    key={el.name}
                    name={el.name}
                    createdByUser={el.createdByUser}
                    id={el.id}
                    deleteBurger={deleteBurger}
                    updateBurger={updateBurger}
                  />
                );
              })}
            </>
          ) : (
            <div>Loading...</div>
          )}
        </tbody>
      </table>
    </Main>
  );
};

const mapDispatchToProps = {
  getBurgers,
  addBurger,
  deleteBurger,
  updateBurger,
};

const mapStateToProps = ({ burgersReducer }) => {
  return {
    burgers: burgersReducer.burgers,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditBurgers);
