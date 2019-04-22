/**
 * 以下是关于寄生组合式继的相关代码
 * 感兴趣的可以去看高程3的第六章 面向对象程序设计
 */

/**
 * 
 * @param {prototype} o
 * 返回一个继承了传入对象的prototype并且是空属性的实例 （为了避免超类中无用的属性、造成的空间浪费）
 * 与es5 object.create()的功能一样
 */
function m_object(o) {
  function F() {};
  F.prototype = o;
  return new F();
}
/**
 * @param {function} sub 子类 
 * @param {function} sup 超类
 * 实现类方法的继承
 * 把constructor指向到子类
 * 给子类的prototype 重新赋值
 */
function inheritPrototype(sub, sup) {
  // 创建对象
  const prototype = m_object(sup.prototype);
  // 增强对象
  prototype.constructor = sub;
  // 指定对象
  sub.prototype = prototype;
}

/**
 * 
 * @param {string} name 
 * @param {number} age 
 * @param {string} sex 
 * @param {number} height 
 * @param {number} weight 
 * 超类
 */
function People(name, age, sex, height, weight) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.height = height;
  this.weight = weight;
}
/**
 * 超类的方法
 */
People.prototype.sayName = function () {
  console.log(`我的名字:${this.name}`);
}
People.prototype.run = function () {
  console.log(`我可以跑`);
}
/**
 * 
 * @param {string} name 
 * @param {number} age 
 * @param {string} sex 
 * @param {number} height 
 * @param {number} weight 
 * @param {string} nationality 
 * 子类
 */
function ChinesePeople(name, age, sex, height, weight, nationality) {
  // 继承属性
  People.call(this, name, age, sex, height, weight);
  // 子类自身的属性
  this.nationality = nationality;
}

// 实现继承超类的方法 要放在子类方法之前
inheritPrototype(ChinesePeople, People)

/**
 * 子类的方法
 */
ChinesePeople.prototype.sayHello = function () {
  console.log(`hello`)
}

let chinesePeople = new ChinesePeople('zbj', 18, 'boy', 180, 140, 'chine')
console.log(chinesePeople, 'ChinesePeople')
chinesePeople.run();
chinesePeople.sayName();
chinesePeople.sayHello();