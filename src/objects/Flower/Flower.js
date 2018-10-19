import { Group, ObjectLoader  } from 'three';
import MODEL from './flower.json';

export default class Flower extends Group {
  constructor() {
    const loader = new ObjectLoader();

    super();

    this.position.y = 3;
    this.position.z = -.1;
    this.scale.y = .5;
    this.scale.x = .5;
    this.scale.z = .5;
    this.name = 'flower';

    loader.parse(MODEL, (mesh) => {
      this.add(mesh);
    });
  }
}
