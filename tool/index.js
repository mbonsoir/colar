const base = {
  /**
   * @param obj Object/Array
   * 对数组/对象进行深拷贝
   */
  deepCopy: function (obj) {
    // 判断obj类型
    if(typeof obj === 'object' && obj !== null){
      // 初始化容器
      let box =Object.prototype.call.toString(obj) === '[object Array]'? []:{};
      // 遍历
      for(let key in obj){
        // 子元素如果也是数组或者对象的话、对子元素也进行深拷贝
        if(typeof obj[key] === 'object' && obj[key] !== null){
          box[key] = arguments.callee(obj[key])
        }else{
          box[key] = obj[key]
        }
      }
      return box;
    }
  }
};
export{
  base
};