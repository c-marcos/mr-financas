import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {toggleAlert} from '../redux/slices/aletSlice';


export const useAlert = () => {

  const {show} = useAppSelector(state => state.alert);
  const dispatch = useAppDispatch();

  const handleToggleAlert = ()=>{
    dispatch(toggleAlert())
  }

  return {
    show,
    handleToggleAlert
  }
}

