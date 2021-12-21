class Vehicle {
  constructor(public color: string) {}
  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('sky blue');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('vroooom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const newCar = new Car(4, 'orange');

newCar.startDrivingProcess();
console.log(newCar);
