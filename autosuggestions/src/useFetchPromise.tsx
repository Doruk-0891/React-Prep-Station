import { useCallback, useEffect, useState } from "react";
import { UserDetails, UserResponse } from "./App";
import {debounce} from 'lodash';

const DEBOUNCE_DELAY: number = 400;


const useFetchPromise = (query: string, getDataKey: (dataObject: UserResponse) => UserDetails[], fetchDataList: (query: string, signal: AbortSignal) => Promise<Response>): {data: UserDetails[] | null, error: string} => {

    const [data, setData] = useState<UserDetails[] | null>(null);
    const [error, setError] = useState<string>('');

    const handleFetchData = useCallback(
        debounce( async(
            query: string, 
            getDataKey: (dataObject: UserResponse) => UserDetails[], fetchDataList: (query: string, signal: AbortSignal) => Promise<Response>, 
            signal: AbortSignal) => {
        try {
            const promiseResponse = await fetchDataList(query, signal);
    
            if (!promiseResponse.ok) {
                throw new Error(promiseResponse.statusText);
            }
    
            const jsonData = await promiseResponse.json();
            setData(getDataKey(jsonData));
        } catch (error: unknown) {
            if (typeof error === 'string') {
                setError(error);
            } else if (error instanceof Error) {
                setError(error.message);
              } else {
                console.error('Unknown error type'); // other types of errors
              }
        }
    }, DEBOUNCE_DELAY), 
    []);


    useEffect(() => {
        if (!query) {
            setError('');
            setData(null);
            return;
        }

        const abortController: AbortController = new AbortController();
        const signal: AbortSignal = abortController.signal;

        handleFetchData(query, getDataKey, fetchDataList, signal);
        return () => {
            abortController.abort();
        }

    }, [query, getDataKey, fetchDataList]);

    return {data, error};
}

export default useFetchPromise;