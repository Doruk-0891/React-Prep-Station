const FOLDER_DATA = {
    id: 1,
    name: 'root',
    isFolder: true,
    items: [
        {
            id: 2,
            name: 'components',
            isFolder: true,
            items: [
                {
                    id: 3,
                    name: 'App.jsx',
                    isFolder: false,
                    items: []
                },
                {
                    id: 4, 
                    name: 'main.jsx',
                    isFolder: false,
                    items: []
                }
            ]
        },
        {
            id: 5, 
            name: 'dependencies',
            isFolder: true,
            items: [
                {
                    id: 6,
                    name: 'package.json',
                    isFolder: false,
                    items: []
                }
            ]
        }
    ],

};

export default FOLDER_DATA;