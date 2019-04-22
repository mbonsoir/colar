/**
 * es6 基本数据类型 null、undefined、string、number、boolean、symbol(新增)
 * 在ES5中，对象属性名都是字符串容易造成属性名冲突。为了避免这种情况的发生，ES6引入了一种新的原始数据类型Symbol，表示独一无二的值。
 */
const s = Symbol();
const s1 = Symbol('z')
const s2 = Symbol('z')
console.log(s1 === s2, 'false');

const obj = {
  [s1]: 'today',
  [s2]: 'yestoday'
}
console.log(obj[s1], 'today');

/**
 * Symbol.for机制有点类似于单例模式，首先在全局中搜索有没有以该参数作为名称的Symbol值，如果有，就返回这个Symbol值，否则就新建并返回一个以该字符串为名称的Symbol值
 * 
 * Symbol.keyFor方法返回一个已登记的Symbol类型值的key。实质就是检测该Symbol是否已创建
 */
const sj = Symbol.for('sj')
const sk = Symbol.for('sj')
const s4 = Symbol('b')

console.log(sj === sk, 'true');
console.log(Symbol.keyFor(s4), 'undefined');
