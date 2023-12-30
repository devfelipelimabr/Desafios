function TrackRobot(...data) {
 
  let north = true;
  let east = false;
  let south = false;
  let west = false;

  let h = 0;
  let v = 0;

  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] !== "number") {
      throw new Error("Array contém não números.");
    }
    if (north) {
      v += data[i];
      north = false;
      east = true;
    } else if (east) {
      h += data[i];
      east = false;
      south = true;
    } else if (south) {
      v -= data[i];
      south = false;
      west = true;
    } else {
      h -= data[i];
      west = false;
      north = true;
    }
  }

  let position = [h, v];

  return position;
}

module.exports = TrackRobot;
