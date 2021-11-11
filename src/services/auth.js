import axios from "axios";

export const resetPasswordService = async ({
  resetPasswordLink,
  newPassword,
}) => {
  const res = await axios.put(`http://localhost:8005/reset`, {
    resetPasswordLink,
    newPassword,
  });

  return res;
};
