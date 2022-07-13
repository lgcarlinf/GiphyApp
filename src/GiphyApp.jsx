import { useState } from "react";
import AddCategory from "./components/AddCategory";
import Gifgrid from "./components/Gifgrid";
import Navbar from "./components/Navbar";

const GiphyApp = () => {
  const [categories, setCategories] = useState(["one punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <div className=" bg-black">
      <Navbar />
      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <Gifgrid key={category} category={category} />
      ))}
    </div>
  );
};

export default GiphyApp;
