import Item from "../Models/ItemsModel.js";

//---------------- GET requests ------------------//
const getRoot = (req, res) => {
  res.send("Welcome to task server");
};

const getAllItems = async (req, res) => {
  try {
    const items = await Item.find({});
    items.length > 0
      ? res.status(200).json(items)
      : res.status(203).json({ message: "No items created yet" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
//---------------- GET requests ------------------//

//---------------- POST requests ------------------//
const postAddItem = async (req, res) => {
  const { name, price } = req.body;

  try {
    const newItem = await Item.create({ name, price });
    res
      .status(201)
      .json({ message: "New item created successfully", item: newItem });
  } catch (error) {
    res.status(203).json({ message: error.message });
  }
};
//---------------- POST requests ------------------//

// --------------------- PUT Requests -----------------------//
const putUpdateItem = async (req, res) => {
  const { name, qty } = req.body;
  const item = await Item.findOne({ name });

  const billObj = {
    billID: `BILL${item._id}`,
    billDate: new Date(),
    billAmt: qty * item.price,
  };

  try {
    await Item.findOneAndUpdate({ name }, { sold: qty, bill: billObj });
    res
      .status(203)
      .json({ message: "One item added to the cart successfully" });
  } catch (error) {
    res.status(203).json({ errorMessage: error.message });
  }
};
// --------------------- PUT Requests -----------------------//

export { getRoot, getAllItems, postAddItem, putUpdateItem };
