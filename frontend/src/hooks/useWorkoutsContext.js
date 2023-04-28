import { useContext } from "react";
import { WorkoutsContext } from "../context/WorkoutsContext";

const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw Error(
      "useWorkoutsContext must be used inside an WorkoutsContextProvider"
    );
  }

  return context;
};

export default useWorkoutsContext;
