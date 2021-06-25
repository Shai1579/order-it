const UserModel = {

  async addUserToRealTime(id, userData) {
    await fetch(
      `https://order-it-6fb76-default-rtdb.europe-west1.firebasedatabase.app/users/${id}.json`,
      {
        method: "PUT",
        body: JSON.stringify(userData),
      }
    );
  },
  async updateUserToRealTime(id, userData) {
    await fetch(
      `https://order-it-6fb76-default-rtdb.europe-west1.firebasedatabase.app/users/${id}.json`,
      {
        method: "PATCH",
        body: JSON.stringify(userData),
      }
    );
  },
  async getUserfromRealTime(id) {
    return await fetch(
      `https://order-it-6fb76-default-rtdb.europe-west1.firebasedatabase.app/users/${id}.json`
    );
  },
};
export default UserModel;
