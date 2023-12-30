const TrackRobot = require('./trackRobot'); // Substitua por onde está a sua função

describe('TrackRobot', () => {
  test('Deve retornar a posição correta quando movimento é apenas para o norte', () => {
    expect(TrackRobot(15)).toEqual([0, 15]);
  });

  test('Deve retornar a posição correta quando movimento é para o norte, leste e sul', () => {
    expect(TrackRobot(20, 30, 10)).toEqual([30, 10]);
  });

  test('Deve retornar a posição correta quando movimento é em várias direções', () => {
    expect(TrackRobot(0, 1, 0, 2, 0, 3, 0, 4, 0, 5)).toEqual([3, 0]);
  });
 
  test('Deve lançar um erro se a array contém elementos não-numéricos', () => {
    expect(() => {
      TrackRobot(15, 10, 'a');
    }).toThrow("Array contém não números.");
  });
});
