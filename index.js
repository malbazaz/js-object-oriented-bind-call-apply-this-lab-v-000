//Your code here
const justInvoke = function(fn){
  fn(){
    return this;
  };
}
