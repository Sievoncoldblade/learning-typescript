interface Vehicle {
  name: string;
  year: number;
  isBroken: boolean;
  summary(): string;
}

interface Reportable {
  summary(): string;
}

// INTERFACE is used for GATEKEEPING
// checks if the object is THE object the function needs

const oldCivic = {
  name: "civic",
  year: 2000,
  isBroken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `This drink has ${this.sugar} grams of sugar`;
  },
};

// problem: parameter typing is long, tedious to repeat

const printVehicle = (vehicle: {
  name: string;
  year: number;
  isBroken: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.isBroken}`);
};

// better

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
