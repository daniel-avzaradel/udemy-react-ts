import faker, { lorem } from 'faker';

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'black';

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
      <div style="padding: 0px">
        <h2>Company Name: ${this.companyName}</h2>
        <h3>Catch Phrase: ${this.catchPhrase}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum temporibus eos cumque natus voluptatum possimus fuga placeat, id excepturi dolores eaque minus, exercitationem sit. Illo nostrum officia, neque quasi expedita voluptatum fugit minus sunt praesentium, similique qui repudiandae nisi labore minima in ad. Minus vel tempora culpa obcaecati, nostrum eligendi.</p>
      </div>
      `;
  }
}
