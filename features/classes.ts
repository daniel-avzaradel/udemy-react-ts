class Vehicle {
  //   public drive(): void {
  //     console.log('test test');
  //   }
  color: string = 'red';
  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle();
console.log(vehicle.color);

class Car extends Vehicle {
  private drive(): void {
    console.log('vroooom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const newCar = new Car();

newCar.startDrivingProcess();
