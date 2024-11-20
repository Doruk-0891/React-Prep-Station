import { useState } from 'react'
import FOLDER_DATA from './mockFolderData'
import FolderView from './components/FolderView/FolderView';

function App() {
  const [folderList, setFolderList] = useState(FOLDER_DATA);

  return (
    <div>
      <FolderView folderList={folderList} />
    </div>
  )
}

export default App
