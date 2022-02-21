import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useAuth } from "../Contexts/AuthContext"
import CatEdit from "./CatEdit";

library.add(fas);

export default function SingleCategory(props) {
  const { currentUser } = useAuth();
  const [showEdit, setShowEdit] = useState(false);

  const deleteCategory = (id) => {
    if (
      window.confirm(
        `Are you sure you wish to delete ${props.category.CategoryName}?`
      )
    ) {
      axios.delete("http://localhost:61594/api/categories").then(() => {
        props.getCategories();
      });
    }
  };

  return (
    <tr>
      <td>{props.category.CategoryName}</td>
      <td>{props.category.CategoryDescription}</td>
      {currentUser.email === "jasoncolobong@outlook.com" && (
        <td>
          <button
            className="m-1 rounded"
            id="editLink"
            onClick={() => setShowEdit(true)}
          >
            <FontAwesomeIcon icon={["fas", "edit"]} />
          </button>
          <button
            className="m-1 rounded"
            id="deleteLink"
            onClick={() => deleteCategory(props.category.CategoryId)}
          >
            <FontAwesomeIcon icon={["fas", "trash-alt"]} />
          </button>
          {showEdit && (
            <CatEdit
              category={props.category}
              setShowEdit={setShowEdit}
              showEdit={showEdit}
              getCategories={props.getCategories}
            />
          )}
        </td>
      )}
    </tr>
  );
}
