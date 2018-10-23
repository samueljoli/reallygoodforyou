import { Group, ObjectLoader  } from 'three';
import MODEL from './land.json';

export default class Land extends Group {
  constructor() {
    const loader = new ObjectLoader();

    super();

    this.position.y = 2;
    this.name = 'land';

    loader.parse(MODEL, (mesh) => {
      this.add(mesh);
    });
  }
}
