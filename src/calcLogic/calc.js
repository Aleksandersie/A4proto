const orderList = [];

function startTest(width, height, description, count) {
  class OrderItem {
    constructor(width, height, description, count) {
      this.width = width;
      this.height = height;
      this.description = description;
      this.count = count;
      this.type = "Интерьерная печать";
      this.material = "Плёнка";
      this.random = (Math.random() * 10000).toFixed();
    }
  }
  let order = new OrderItem(width, height, description, count);

  orderList.push(order);
  return orderList;
}
export default startTest;

//let obj = {
//   width: null,
//   height: null,
//   getSize() {
//     this.width = width
//     this.height = height
//   }
//
// }
// obj.getSize()
// return obj
