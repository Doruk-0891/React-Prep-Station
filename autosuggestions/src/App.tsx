
import './App.css'
import Autosuggestions from './Autosuggestions'

export interface PromiseResponse {
  data: UserResponse | null;
  error?: Error | null;
}

export interface UserResponse {
  users: UserDetails[];
  total: number;
  skip: number;
  limit: number;
}

export interface UserDetails {
  id: number;
  firstName: string;
  lastName: string;
}

function App() {
  const fetchDataList = async(query: string, signal: AbortSignal) => {
    const url: string = `https://dummyjson.com/users/search?q=${query}`;
    const promise = await fetch(url, {signal});
    return promise;
  }

  const getDataKey = (dataObject: UserResponse): UserDetails[] => {
    return dataObject['users'];  
  }

  return (
    <div>
      <h1>Auto Suggestions- Pills + Multiple Selection</h1>
      <Autosuggestions 
      id='search'
      name='user'
      placeholder='Search a user...'
      label='User:'
      fetchDataList={fetchDataList}
      getDataKey={getDataKey}
      noDataFoundMessage='No such user exists!!!'
      errorMessage='Oops!!!We got into error.'
      />
    </div>
  )
}

export default App
