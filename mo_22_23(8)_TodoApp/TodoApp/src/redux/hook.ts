
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";

//for type safety
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();