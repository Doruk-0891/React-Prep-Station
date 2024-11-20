const useFolderView = () => {
    const insert = (tree, folderId, name, isFolder) => {
        if (folderId === tree.id && tree.isFolder) {
            tree.items.unshift({
                id: new Date().getTime(),
                name,
                isFolder,
                items: []
            });
            return tree;
        }
        const updatedTreeChildren = tree.items.map((folder) => {
            return insert(folder, folderId, name, isFolder);
        });

        return {...tree, items: updatedTreeChildren};
    }

    return {insert};
}

export default useFolderView;