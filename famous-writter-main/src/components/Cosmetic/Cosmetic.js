import React from 'react';
import './Cosmetic.css'
const Cosmetic = (props) => {
    console.log(props.cosmetic);
      const {name, famousAs, birthDate, birthPlace, died, totalBooks} = props.cosmetic;
    return (
       

        <div className="card">
            <h1>Name: {name}</h1>
            <h3>FamousAs: {famousAs}</h3>
            <p>BirthDate: {birthDate}</p>
            <p>BirthPlace: {birthPlace}</p>
            <p>Died: {died}</p>
            <h5>TotalBooks: {totalBooks}</h5>
        </div>

    );
};

export default Cosmetic;