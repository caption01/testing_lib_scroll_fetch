import { v4 as uuidv4 } from "uuid";

export const generateData = (size = 10) => {
  let data = [];
  for (let i = 0; i < 10; i++) {
    const item = {
      id: uuidv4(),
      name: uuidv4(),
    };
    data.push(item);
  }

  return data;
};
