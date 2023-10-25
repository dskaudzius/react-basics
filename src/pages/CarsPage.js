import React, { useState } from "react";
import CarItem from "../components/CarItem/CarItem";

const CarsPage = () => {
  let carsList = [
    {
      brand: "BMW",
      model: "e60",
      engine: "disiel",
      basePrice: 5000,
      mileage: 300000,
      color: "Black",
      fotoUrl:
        "https://i.pinimg.com/originals/73/ee/a0/73eea0f3f5402177fafdb1145039cce3.jpg",
    },
    {
      brand: "Honda",
      model: "Civic",
      engine: "petrol",
      basePrice: 1000,
      mileage: 400000,
      color: "Red",
      fotoUrl:
        "https://i.pinimg.com/736x/6e/e3/39/6ee339a1ebbd2d6c27cafb21f8d283a1--grill-lips.jpg",
    },
    {
      brand: "Mitsubishi",
      model: "Lancer EVO",
      engine: "petrol",
      basePrice: 10000,
      mileage: 250000,
      color: "White",
      fotoUrl:
        "https://i.pinimg.com/originals/96/69/7e/96697ef35d09ed8c9855e82bd77e460b.jpg",
    },
  ];

  const [cars, setCars] = useState(carsList);
  const [enteredBrand, setEnteredBrand] = useState("");
  const [enteredModel, setEnteredModel] = useState("");
  const [enteredImage, setEnteredImage] = useState("");
  const [enteredMileage, setEnteredMileage] = useState("");
  const [enteredBasePrice, setEnteredBasePrice] = useState("");
  const [enteredColor, setEnteredColor] = useState("");
  const [enteredEngine, setEnteredEngine] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const newCar = {
      brand: enteredBrand,
      model: enteredModel,
      fotoUrl: enteredImage,
      mileage: enteredMileage,
      basePrice: enteredBasePrice,
      color: enteredColor,
      engine: enteredEngine
    }

    setCars(prevState => [ newCar, ...prevState ]);
    setEnteredBrand('')
    setEnteredModel('')
    setEnteredImage('')
    setEnteredMileage('')
    setEnteredBasePrice('')
    setEnteredColor('')
    setEnteredEngine('')
  }

  return (
    <div className="page-content">
      <form className="create-car-form" onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="brand">Brand:</label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={enteredBrand}
            onChange={(e) => setEnteredBrand(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="model">Model:</label>
          <input
            type="text"
            id="model"
            name="model"
            value={enteredModel}
            onChange={(e) => setEnteredModel(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="image">Photo:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={enteredImage}
            onChange={(e) => setEnteredImage(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="mileage">Mileage:</label>
          <input
            type="number"
            id="mileage"
            placeholder="Enter your car's mileage"
            name="mileage"
            value={enteredMileage}
            onChange={(e) => setEnteredMileage(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="base-price">Base price:</label>
          <input
            type="number"
            id="base-price"
            name="basePrice"
            value={enteredBasePrice}
            onChange={(e) => setEnteredBasePrice(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="color">Color:</label>
          <select
            id="color"
            name="color"
            value={enteredColor}
            onChange={(e) => setEnteredColor(e.target.value)}
          >
            <option value="white">White</option>
            <option value="black">Black</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="engine">Engine:</label>
          <select
            id="engine"
            name="engine"
            value={enteredEngine}
            onChange={(e) => setEnteredEngine(e.target.value)}
          >
            <option value="electric">Electric</option>
            <option value="hybrid">Hybrid</option>
            <option value="diesel">Diesel</option>
            <option value="petrol">Petrol</option>
          </select>
        </div>

        <div className="form-action">
          <button type="submit">Create Car</button>
        </div>
      </form>

      <h2 className="page-title">{cars.length > 0 ? "Cars:" : "No cars :("}</h2>

      {cars.length > 0 && (
        <div className="cars-list">
          {cars.map((car, index) => (
            <CarItem key={index} data={car} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CarsPage;