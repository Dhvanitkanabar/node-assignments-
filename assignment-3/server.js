const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("States API is running successfully 🚀");
});

let states = [
  { id: 1, name: "Andhra Pradesh", population: 49386799, literacyRate: 67.02, annualBudget: 279279, gdp: 14000000 },
  { id: 2, name: "Arunachal Pradesh", population: 1383727, literacyRate: 65.38, annualBudget: 28000, gdp: 300000 },
  { id: 3, name: "Assam", population: 31205576, literacyRate: 72.19, annualBudget: 122000, gdp: 4500000 },
  { id: 4, name: "Bihar", population: 104099452, literacyRate: 61.80, annualBudget: 261885, gdp: 6500000 },
  { id: 5, name: "Chhattisgarh", population: 25545198, literacyRate: 70.28, annualBudget: 121500, gdp: 4000000 },
  { id: 6, name: "Goa", population: 1458545, literacyRate: 88.70, annualBudget: 25000, gdp: 800000 },
  { id: 7, name: "Gujarat", population: 63872399, literacyRate: 78.03, annualBudget: 243965, gdp: 21000000 },
  { id: 8, name: "Haryana", population: 25351462, literacyRate: 75.55, annualBudget: 180000, gdp: 9000000 }
];

app.get("/states", (req, res) => {
  res.status(200).json(states);
});

app.get("/states/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const state = states.find(s => s.id === id);

  if (!state) {
    return res.status(404).json({ message: "State not found" });
  }

  res.status(200).json(state);
});

app.get("/states/highest-gdp", (req, res) => {
  let highest = states.reduce((max, state) => {
    return state.gdp > max.gdp ? state : max;
  }, states[0]);

  res.status(200).json(highest);
});

app.post("/states", (req, res) => {
  const { name, population, literacyRate, annualBudget, gdp } = req.body;

  const newState = {
    id: states.length > 0 ? states[states.length - 1].id + 1 : 1,
    name,
    population,
    literacyRate,
    annualBudget,
    gdp
  };

  states.push(newState);
  res.status(201).json(newState);
});

app.put("/states/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = states.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "State not found" });
  }

  states[index] = {
    id: id,
    name: req.body.name,
    population: req.body.population,
    literacyRate: req.body.literacyRate,
    annualBudget: req.body.annualBudget,
    gdp: req.body.gdp
  };

  res.status(200).json(states[index]);
});

app.put("/states/:id/budget", (req, res) => {
  const id = parseInt(req.params.id);
  const state = states.find(s => s.id === id);

  if (!state) {
    return res.status(404).json({ message: "State not found" });
  }

  state.annualBudget = req.body.annualBudget;
  res.status(200).json(state);
});

app.put("/states/:id/population", (req, res) => {
  const id = parseInt(req.params.id);
  const state = states.find(s => s.id === id);

  if (!state) {
    return res.status(404).json({ message: "State not found" });
  }

  state.population = req.body.population;
  res.status(200).json(state);
});

app.patch("/states/:id/literacy", (req, res) => {
  const id = parseInt(req.params.id);
  const state = states.find(s => s.id === id);

  if (!state) {
    return res.status(404).json({ message: "State not found" });
  }

  state.literacyRate = req.body.literacyRate;
  res.status(200).json(state);
});

app.patch("/states/:id/gdp", (req, res) => {
  const id = parseInt(req.params.id);
  const state = states.find(s => s.id === id);

  if (!state) {
    return res.status(404).json({ message: "State not found" });
  }

  state.gdp = req.body.gdp;
  res.status(200).json(state);
});

app.patch("/states/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const state = states.find(s => s.id === id);

  if (!state) {
    return res.status(404).json({ message: "State not found" });
  }

  if (req.body.name !== undefined) state.name = req.body.name;
  if (req.body.population !== undefined) state.population = req.body.population;
  if (req.body.literacyRate !== undefined) state.literacyRate = req.body.literacyRate;
  if (req.body.annualBudget !== undefined) state.annualBudget = req.body.annualBudget;
  if (req.body.gdp !== undefined) state.gdp = req.body.gdp;

  res.status(200).json(state);
});

app.delete("/states/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = states.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "State not found" });
  }

  states.splice(index, 1);
  res.status(204).send();
});

app.delete("/states/name/:stateName", (req, res) => {
  const name = req.params.stateName.toLowerCase();
  const index = states.findIndex(
    s => s.name.toLowerCase() === name
  );

  if (index === -1) {
    return res.status(404).json({ message: "State not found" });
  }

  states.splice(index, 1);
  res.status(204).send();
});

app.delete("/states/low-literacy/:percentage", (req, res) => {
  const percentage = parseFloat(req.params.percentage);

  const originalLength = states.length;
  states = states.filter(s => s.literacyRate >= percentage);

  const deletedCount = originalLength - states.length;

  res.status(200).json({ deletedCount });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});