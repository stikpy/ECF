import React from 'react';

const CarsFilter = ({ setFiltres }) => {
const handleChange = (e) => {
    const { name, value } = e.target;
    setFiltres((prevFiltres) => ({
      ...prevFiltres,
      [name]: value,
    }));
  };

  return (
    <div>
      <label>Prix :</label>
      <input
        name="prix"
        type="number"
        onChange={handleChange}
      />
      <label>Année :</label>
      <input
        name="annee"
        type="number"
        onChange={handleChange}
      />
      <label>Marque :</label>
      <input
        name="marque"
        type="text"
        onChange={handleChange}
      />
    </div>
  );
};

export default CarsFilter;
