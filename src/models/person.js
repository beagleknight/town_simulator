import { randomElement } from '../utils/random';
import { composeName } from '../utils/name_generator'

const GENDERS = ["male", "female"];

export class Person {
  constructor(age = 20) {
    this.age = age;
    this.gender = randomElement(GENDERS);
    this.name = composeName();
    this.isDead = false
  }

  turn() {
    this.getOlder();

    if (this.age >= 65 || Math.random() < 0.01) {
      this.isDead = true
    }
  }

  getOlder() {
    this.age += 1;
  }

  isMale() {
    return this.gender === 'male';
  }

  isFemale() {
    return this.gender === 'female';
  }

  inspect() {
    return `${this.name}: ${this.age}${this.gender[0]}`;
  }
}
