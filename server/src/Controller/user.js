import Users from "../Models/usersModel.js";

//Get All Users

export const getAllUsers = async (req, res) => {
  try {
    const users = await Users.find({});
    res.send(users);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

//User get by id

export const getUsersById = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);

    res.send(user);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

//Add User
export const createAddUser =async (req, res) => {
  const user = new Users({
    name: req.body.name,
    surname: req.body.surname,
    age: req.body.age,
    image: req.body.image,
  });
  await user.save();
  res.send({ message: "User Created" });
};

//User Update
export const updateUser = async (req, res) => {
  try {
    const user = await Users.findByIdAndUpdate(req.params.id);

    if (user) {
      (user.name = req.body.name),
        (user.surname = req.body.surname),
        (user.age = req.body.age),
        (user.image = req.body.image);

      await user.save();
      res.json(user);
    } else {
      res.status(404).json({ message: "Not Found" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

//Delete User

export const deleteUser = async (req, res) => {
  try {
    await Users.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User Deleted" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};