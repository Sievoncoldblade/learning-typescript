// ts will infer a type when returned
const add = (a: number, b: number) => {
  return a + b;
};

// should always annotate return type
// will infer a void type when there is no return statement
const subtract = (a: number, b: number): number => {
  return a - b;
};

// anonymous function
function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

// void and never type
const logger = (message: string): void => {
  console.log(message);
};

// function should never return something
// use cases will be for throwing errors
// very unlikely
const throwError = (message: string): never => {
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date.toString());
  console.log(weather);
};

logWeather(todaysWeather);
