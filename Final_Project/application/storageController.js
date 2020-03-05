import CourseClass from './Classess/CourseClass';
import NewsClass from './Classess/NewsClass';
import MenuClass from './Classess/MenuAndLogo';
const StorageController = {
    storage: {
        course: [],
        news: []
    },

    reinitialization: () => {

        let storage = localStorage.getItem('MyProject');
        if( storage ){
            storage = JSON.parse( storage );
        }

        Object.keys(storage).forEach( key => {
            storage[ key ].map( item => {
                let reinitedItem = null;
                if( item.type === 'course'){
                    const rootNode = document.getElementById('CoursesBlock');
                    reinitedItem = new CourseClass( item );
                    reinitedItem.render(rootNode);
                    reinitedItem.renderOptions();
                }
            });
        });
        Object.keys(storage).forEach( key => {
            storage[ key ].map( item => {
                let reinitedItem = null;
                if( item.type === 'news'){
                    const rootNode = document.getElementById('NewsBlock');
                    reinitedItem = new NewsClass( item );
                    reinitedItem.render(rootNode);
                    reinitedItem.renderOptions();
                }
            });
        });
         Object.keys(storage).forEach( key => {
            storage[ key ].map( item => {
                let reinitedItem = null;
                if( item.type === 'menu'){
                    const rootNode = document.getElementById('navigation-block');
                    reinitedItem = new MenuClass( item );
                    reinitedItem.render(rootNode);
                    reinitedItem.renderOptions();
                }
            });
        });

    },

    createItem: ( obj ) => {
        if( obj.type ){
            if( StorageController.storage[ obj.type ] ){
            } else {
                StorageController.storage[ obj.type ] = [];
            }
            StorageController.storage[ obj.type ].push( obj );

            console.log( StorageController.storage[ obj.type ] );
        }
    },

    saveData: ( obj ) => {
        // Find our obj
        const itemInStorage = StorageController.storage[ obj.type ].find( item => item.id === obj.id );
        console.log(itemInStorage);
        localStorage.setItem('MyProject', JSON.stringify( StorageController.storage ) );
    },

    deleteData: (obj) => {
        let storage = localStorage.getItem('MyProject');
        if( storage ){
            storage = JSON.parse( storage );
        }
        for (var i = 0; i<storage[obj.type].length; i++){
            console.log(storage[obj.type][i].id);
            if (storage[obj.type][i].id == obj.id){
                storage[obj.type].splice(i, 1);
                 localStorage.setItem('MyProject', JSON.stringify( storage ) );
            }
        }

    }


}


export default StorageController;
