const orderList = [];

function startTest(
  width,
  height,
  description,
  count,
  material,
  lamination,
  glossy,
  matt,
  transparent,
  white,
  borderCut
) {
  class OrderItem {
    constructor(
      width,
      height,
      description,
      count,
      material,
      lamination,
      glossy,
      matt,
      transparent,
      white,
      borderCut
    ) {
      this.width = width;
      this.height = height;
      this.description = description;
      this.count = count;
      this.material = material;
      this.lamination = lamination;
      this.glossy = glossy;
      this.matt = matt;
      this.transparent = transparent;
      this.white = white;
      this.borderCut = borderCut;
      this.random = (Math.random() * 10000).toFixed();
    }
  }

  let order = new OrderItem(
    width,
    height,
    description,
    count,
    material,
    lamination,
    glossy,
    matt,
    transparent,
    white,
    borderCut
  );

  orderList.push(order);
  return orderList;
}
export default startTest;
