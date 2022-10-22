import { useState, useEffect,useCallback } from 'react';
import { Player } from 'utils/constant';

export type TApiResponse = {
    status: Number;
    statusText: String;
    data: Player[];
    error: any;
    loading: Boolean;
  };

export const useFetchApi = (url: string): TApiResponse  => {
    const [status, setStatus] = useState<Number>(0);
    const [statusText, setStatusText] = useState<String>('');
    const [data, setData] = useState<any>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);

    const getAPIData = useCallback(async () => {
        setLoading(true);
        try {
          const apiResponse = await fetch(url);
          const playerList = await apiResponse.json();
          setStatus(apiResponse.status);
          setStatusText(apiResponse.statusText);
          setData(playerList);
        } catch (error) {
          setError(error);
        }
        setLoading(false);
    }, [url]);

    useEffect(() => {
        const hanleApi = async () => await getAPIData();
        hanleApi();
        
      }, [url, getAPIData]);
    
      return { status, statusText, data, error, loading };
}

