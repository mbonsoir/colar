/**
 * 
 * @param {原型} o
 * 继承方法 
 * 与es5 object.create(o)的功能一样
 */
function m_object(o) {
  function F() {};
  F.prototype = o;
  return new F();
}
/**
 * @param {function} sub 子类 
 * @param {function} sup 超类
 * 实现继承方法
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
  // 自己的属性
  this.nationality = nationality;
}

// 实现继承超类的方法
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