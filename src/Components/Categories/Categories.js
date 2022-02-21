import React, { useState, useEffect } from "react";
import { Container} from "react-bootstrap";
import "./Categories.css";
import SingleCategory from "./SingleCategory";
import axios from "axios";
import sampleCategories from "../../Utilities/sampleCategories";
import {useAuth} from "../Contexts/AuthContext";
import CatCreate from "../Categories/CatCreate";


export default function Categories() {
  const [categories, setCategories] = useState(sampleCategories);

  const [showCreate, setShowCreate] = useState(false);
  const {currentUser} = useAuth();

  const getCategories = () => {
    axios.get("http://localhost:61594/api/categories").then((response) => {
      setCategories(response.data);
    });
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <section className="categories">
      <article className="bg-info p-5">
        <h1 className="text-center">Categories</h1>
      </article>
      {currentUser.email === 'jasoncolobong@outlook.com' &&
      <div className="bg-dark p-2 mb-3 text-center">
        {showCreate ?
        <>
        <button onClick={() => setShowCreate(false)} className="btn btn-warning">Cancel</button>
        <CatCreate getCategories={getCategories} setShowCreate={setShowCreate} />

        </> :

        <button onClick={() => setShowCreate(true)} className="btn btn-info">Create New Category</button>

      }
      </div>
      }
      <Container>
        <table className='table table-striped table-border table-light mt-3 mb-3'>

          <thead className='bg-info text-uppercase'>
            <tr>
            <th>Name</th>
            <th>Description</th>
            {currentUser.email === 'jasoncolobong@outlook.com' &&
            <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
          {categories.map((x) => (
            <SingleCategory 
            key={x.CategoryId} 
            category={x} 
            getCategories ={getCategories} />
          ))}
          </tbody>
        </table>
      </Container>
    </section>
  );
}
