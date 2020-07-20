import React, { useState } from "react";
import styled from "styled-components";

export const EditBurgerItem = ({
  name,
  createdByUser,
  id,
  deleteBurger,
  updateBurger,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [burgerObj, setBurgerObj] = useState({ name, createdByUser });
  const [editedBurgerObj, setEditedBurgerObj] = useState({});

  return (
    <tr>
      {isEdit ? (
        <>
          <td>
            <input
              onChange={(e) => {
                setEditedBurgerObj({
                  ...burgerObj,
                  name: e.target.value,
                });
              }}
              value={editedBurgerObj.name || burgerObj.name}
            />
          </td>
          <td>
            <input
              onChange={(e) => {
                setEditedBurgerObj({
                  ...burgerObj,
                  createdByUser: parseInt(e.target.value, 10),
                });
              }}
              value={editedBurgerObj.createdByUser || burgerObj.createdByUser}
            />
          </td>
          <td>
            <button
              onClick={() => {
                if (editedBurgerObj.name || editedBurgerObj.createdByUser) {
                  setBurgerObj({
                    ...burgerObj,
                    name: editedBurgerObj.name,
                    createdByUser: editedBurgerObj.createdByUser,
                  });
                  setEditedBurgerObj({});
                  updateBurger({
                    updatedBurger: id,
                    newInfo: editedBurgerObj,
                  });
                }
                setIsEdit(false);
              }}
            >
              Submit
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                setEditedBurgerObj({});
                setIsEdit(false);
              }}
            >
              Cancel
            </button>
          </td>
        </>
      ) : (
        <>
          <td>{name}</td>
          <td>{createdByUser}</td>
          <td>
            <button onClick={() => setIsEdit(true)}>Edit</button>
          </td>
          <td>
            <button onClick={() => deleteBurger({ deletedBurger: id })}>
              Delete
            </button>
          </td>
        </>
      )}
    </tr>
  );
};
