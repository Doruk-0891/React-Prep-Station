import React, { ChangeEvent, useState } from 'react'
import { UserDetails, UserResponse } from './App';
import useFetchPromise from './useFetchPromise';
import ListBox from './ListBox';

export interface AutosuggestionsProps {
  id: string;
  name: string;
  placeholder: string;
  label: string;
  fetchDataList: (query: string, signal: AbortSignal) => Promise<Response>;
  getDataKey: (dataObject: UserResponse) => UserDetails[];
  noDataFoundMessage: string;
  errorMessage: string;
}

const Autosuggestions:React.FC<AutosuggestionsProps> = (props) => {

  const {
    id,
    name,
    placeholder,
    label,
    fetchDataList,
    getDataKey,
    noDataFoundMessage,
    errorMessage
  } = props;

  const [query, setQuery] = useState('');

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }

  const {data, error} = useFetchPromise(query, getDataKey, fetchDataList);

  const handleKeyUp = (e:KeyboardEvent) => {
    if (!data || data.length <= 0) {
      return;
    }
    if (e.keyCode === 13) {
      setQuery(data[activeIndex].firstName);
      setActiveIndex(0);
    }
    if (e.keyCode === 40) {
      // move down
      if (activeIndex === null || activeIndex === data.length - 1) {
        setActiveIndex(0);
      } else {
        setActiveIndex((prevIndex) => prevIndex + 1);
      }
    } else if (e.keyCode === 38) {
      // move up
      if (activeIndex === 0) setActiveIndex(data.length - 1);
      else setActiveIndex((prevIndex) => prevIndex - 1);
    }
  }

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type='text' id={id} name={name} placeholder={placeholder} value={query} onChange={handleChange} onKeyUp={handleKeyUp} />
      {
        data && data.length > 0 && <ListBox items={data} activeIndex={activeIndex} />
      }
      {
        query && !data && <div>{noDataFoundMessage}</div>
      }
      {
        error && <div>{errorMessage}</div>
      }
    </div>
  )
}

export default Autosuggestions