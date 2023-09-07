import { useContext } from "react";
import ProgressContext from "../contexts/PercentageContext";

export default function useProgress() {
  return useContext(ProgressContext);
}