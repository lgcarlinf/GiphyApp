import React, { useState } from "react";

const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length >= 1) {
      console.log(inputValue);
      onNewCategory(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <div className="search w-full my-4 flex justify-center">
      <form onSubmit={handleSubmit} className="w-10/12  ">
        <input
          className="w-11/12 p-3 outline-none"
          type="text"
          placeholder="Buscar Gifs"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit" className="btn text-white w-1/12">
          <img
            src="../../assets/search-icon.svg"
            alt="search"
            className="btn2 p-[9px] "
          />
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
