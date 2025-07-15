import { redirect } from "react-router";
import { deleteAuthToken } from "../utils/auth";
import { toast } from "sonner";
const logoutAction = () => {
  deleteAuthToken();
  toast.success("Successfully logged out!");
  return redirect("/");
};
export default logoutAction;
