import { useContext } from "react";
import ProgressContext from "../context/PercentageContext";

export default function useProgress() {
  return useContext(ProgressContext);
}