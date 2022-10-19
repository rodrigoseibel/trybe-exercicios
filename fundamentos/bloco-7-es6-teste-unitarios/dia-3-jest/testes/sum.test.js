// Exercicio 1

  const sum = require('./sum');

  describe('Requisito 1', () => {
      it('A funcao recebe a + b [4,5] e retorna 9', () => {
          expect(sum(4,5)).toBe(9);
      });   
  })

  describe('Requisito 2', () => {
     it('A funcao recebe a + b [0,0] e retorna 0', () => {
          expect(sum(0,0)).toBe(0);
      });   
  })

//   Exercicio 2


const myRemove = require('./myRemove');

describe('Requisito 3', () => {
    it('A funcao retorna os valores ([1, 2, 4]) ', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });   
})

describe('Requisito 4', () => {
    it('A funcao retorna os valores ([1, 2, 3, 4]) ', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });   
})

describe('Requisito 5', () => {
    it('A funcao retorna os valores ([1, 2, 3, 4]) ', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });   
})


 










