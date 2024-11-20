import { useState } from 'react'
import FOLDER_DATA from './mockFolderData'
import FolderView from './components/FolderView/FolderView';
import useFolderView from './hooks/useFolderView';

function App() {
  const [folderList, setFolderList] = useState(FOLDER_DATA);

  const {insert} = useFolderView();

  const handleInsert = (folderId, name, isFolder) => {
    console.log(folderId, name, isFolder);
    const updatedFolder = insert(folderList, folderId, name, isFolder);
    setFolderList(updatedFolder);
  }

  return (
    <div>
      <FolderView folderList={folderList} handleInsert={handleInsert} />
    </div>
  )
}

export default App
