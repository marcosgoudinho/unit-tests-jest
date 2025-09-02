const Utilitarios = require('./utilitarios');
const util = new Utilitarios();

describe('Testes da classe Utilitarios', () => {
  test('inverterString deve inverter corretamente', () => {
    expect(util.inverterString('abc')).toBe('cba');
  });

  test('contarCaracteres deve contar corretamente', () => {
    expect(util.contarCaracteres('abc')).toBe(3);
  });

  test('paraMaiusculas deve retornar string em maiúsculas', () => {
    expect(util.paraMaiusculas('abc')).toBe('ABC');
  });

  test('paraMinusculas deve retornar string em minúsculas', () => {
    expect(util.paraMinusculas('ABC')).toBe('abc');
  });

  test('primeiraLetraMaiuscula deve capitalizar primeira letra', () => {
    expect(util.primeiraLetraMaiuscula('teste')).toBe('Teste');
  });

  test('somar deve retornar a soma correta', () => {
    expect(util.somar(2, 3)).toBe(5);
  });

  test('subtrair deve retornar a subtração correta', () => {
    expect(util.subtrair(5, 3)).toBe(2);
  });

  test('multiplicar deve retornar a multiplicação correta', () => {
    expect(util.multiplicar(4, 5)).toBe(20);
  });

  test('dividir deve retornar a divisão correta', () => {
    expect(util.dividir(10, 2)).toBe(5);
  });

  test('dividir por zero deve lançar erro', () => {
    expect(() => util.dividir(10, 0)).toThrow('Divisão por zero');
  });

  test('ehPar deve verificar se número é par', () => {
    expect(util.ehPar(4)).toBe(true);
    expect(util.ehPar(5)).toBe(false);
  });

  test('primeiroElemento deve retornar o primeiro item', () => {
    expect(util.primeiroElemento([1, 2, 3])).toBe(1);
  });

  test('ultimoElemento deve retornar o último item', () => {
    expect(util.ultimoElemento([1, 2, 3])).toBe(3);
  });

  test('tamanhoArray deve retornar o tamanho correto', () => {
    expect(util.tamanhoArray([1, 2, 3])).toBe(3);
  });

  test('ordenarArray deve retornar array ordenado', () => {
    expect(util.ordenarArray(['c', 'a', 'b'])).toEqual(['a', 'b', 'c']);
  });

  test('inverterArray deve inverter corretamente', () => {
    expect(util.inverterArray([1, 2, 3])).toEqual([3, 2, 1]);
  });

  test('gerarNumeroAleatorio deve estar dentro do intervalo', () => {
    const num = util.gerarNumeroAleatorio(10);
    expect(num).toBeGreaterThanOrEqual(0);
    expect(num).toBeLessThan(10);
  });

  test('ehNumero deve verificar se é um número válido', () => {
    expect(util.ehNumero(123)).toBe(true);
    expect(util.ehNumero('abc')).toBe(false);
    expect(util.ehNumero(NaN)).toBe(false);
  });

  test('removerEspacos deve remover espaços antes e depois', () => {
    expect(util.removerEspacos('  texto  ')).toBe('texto');
  });

  test('repetirTexto deve repetir corretamente', () => {
    expect(util.repetirTexto('a', 3)).toBe('aaa');
  });

  test('juntarArray deve juntar com separador', () => {
    expect(util.juntarArray(['a', 'b', 'c'], '-')).toBe('a-b-c');
  });

  test('contarPalavras deve contar palavras corretamente', () => {
    expect(util.contarPalavras('uma frase com quatro palavras')).toBe(5);
  });

  test('mediaArray deve retornar média correta', () => {
    expect(util.mediaArray([1, 2, 3, 4])).toBe(2.5);
    expect(util.mediaArray([])).toBe(0);
  });

  test('removerDuplicados deve remover elementos duplicados', () => {
    expect(util.removerDuplicados([1, 1, 2, 3, 3])).toEqual([1, 2, 3]);
  });

  test('ehPalindromo deve identificar palíndromos', () => {
    expect(util.ehPalindromo('ovo')).toBe(true);
    expect(util.ehPalindromo('Ame a ema')).toBe(true);
    expect(util.ehPalindromo('banana')).toBe(false);
  });

  test('mesclarObjetos deve mesclar corretamente', () => {
    expect(util.mesclarObjetos({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
  });
});
