// javascript does not have tuples
// we create tuples by using type definitions

const pepsi: [string, boolean, number] = ["brown", true, 40];

// type alias for DRY
type Drink = [string, boolean, number];

const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["brown", false, 0];
