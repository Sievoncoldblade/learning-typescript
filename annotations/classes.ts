class Vehicle {
  constructor(public color: string) {}
  // a shortcut for
  // color: string;
  // constructor (color: string) {this.color = color};

  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('sheesh');
  }
  startDriving(): void {
    this.drive(); 
    this.honk();
  }
}

const car = new Car(4, 'red');
car.startDriving();
