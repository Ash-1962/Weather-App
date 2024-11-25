import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forcast, homefun } from "../action";


const useWeather = () => {
    const dispatch = useDispatch();
    const list = useSelector((state) => state.list)

    const handlehomefun = useCallback((payload) => {
        dispatch(homefun(payload));
    }, [])
    const handleForcast = useCallback((payload) => {
        dispatch(forcast(payload));
    }, [])



    return {
        list,
        homefun: handlehomefun,
        forcast: handleForcast
    }
}

export default useWeather;