import { useState } from "react";
import './style.css';

const FolderView = (props) => {
    const {folderList} = props;
    const [isExpand, setIsExpand] = useState(false);
    const [showInput, setShowInput] = useState(null);

    const handleExpand = () => {
        setIsExpand(!isExpand);
    }

    const handleShowInput = (e, isFolder) => {
        e.stopPropagation();
        setIsExpand(true);
        setShowInput({
            isVisible: true,
            isFolder
        });
    }

  return (
    folderList.isFolder ? 
    <div>
        <div className="folder-header">
            <div onClick={handleExpand}>📁 {folderList.name}</div>
            <div className="folder-btn">
                <button onClick={(e) => handleShowInput(e, true)}>+ Folder</button>
                <button onClick={(e) => handleShowInput(e, false)}>+ File</button>
            </div>
        </div>
        {
            isExpand ? 
            <>
                <div className="folder-body">
                    {
                        showInput && 
                        <div>
                            <span>{showInput.isFolder ? '📁' : '📄'}</span>
                            <input onBlur={() =>setShowInput(null)} autoFocus />
                        </div>
                    }
                    {
                        folderList.items.map((folder) => {
                            return (
                                <FolderView key={folder.id} folderList={folder} />
                            );
                        })
                    }
                </div> 
            </>
            : ''
        }
    </div>
    :
    <div id={folderList.id}>📄 {folderList.name}</div>
  )
}

export default FolderView