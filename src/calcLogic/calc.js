const orderList = [];

function startTest(width, height, description, count, material) {
  class OrderItem {
    constructor(width, height, description, count, material) {
      this.width = width;
      this.height = height;
      this.description = description;
      this.count = count;
      // this.type = "Интерьерная печать";
      this.material = material;
      this.random = (Math.random() * 10000).toFixed();
    }
  }

  let order = new OrderItem(width, height, description, count, material);

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
