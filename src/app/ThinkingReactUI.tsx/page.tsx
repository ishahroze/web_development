import React from "react";
import RenderTable from "@/RenderTable/page";

const data = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];
function ThinkingReactUI() {
  const fruits = data.filter((product) => product.category == "Fruits");
  const vegetables = data.filter((item) => item.category == "Vegetables");
  return (
    <div>
      ThinkingReactUI
      <div>
        <RenderTable data={fruits} categoryName="Fruits" />
        
       

        {/* <p className="font-bold">Fruits</p>
        {fruits.map((fruit, index) => (
          <div key={index} className="flex -gap-5">
            {fruit.name} {fruit.price}
          </div>
        ))}
        <p className="font-bold">Vegetables</p>
        {vegetables.map((fruit, index) => (
          <div key={index} className="flex -gap-5">
            {fruit.name} {fruit.price}
          </div>
        ))} */}
      </div>
    </div>
  );
}