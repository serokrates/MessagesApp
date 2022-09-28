import axios from "axios";

const API_URL = "/api/messages";

// Create new goal
const createMessage = async (messageData, token) => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };
  const data = {
    text: messageData.text,
    recipent: messageData.userName,
    title: messageData.title,
  };
  console.log(messageData);
  console.log(data);
  const response = await axios.post(API_URL, data);
  // const response = await axios.post(API_URL, data, config);

  return response.data;
};

// Get user goals
const getMessages = async (datan, token) => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer `,
  //   },
  // };
  const namee = datan.name;
  const config = {
    headers: { Authorization: "toke" },
    data: { name: datan.name },
  };
  const data = {
    name: namee,
  };
  const response = await axios.get(API_URL, { params: { name: namee } });
  console.log(
    "data z message service tuz przed wyslaniem do messagecontrollera: ",
    data
  );
  console.log(response);
  // const response = await axios.get(API_URL, config);

  return response.data;
};

// Delete user goal
// const deleteGoal = async (goalId, token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   const response = await axios.delete(API_URL + goalId, config);

//   return response.data;
// };

const messageService = {
  createMessage,
  getMessages,
};

export default messageService;
