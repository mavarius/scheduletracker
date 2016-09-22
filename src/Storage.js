const Database = {
  retrieveData () {
     const serializedData = localStorage.savedState;

     try {
       let savedState = JSON.parse(serializedData);
       console.log('savedState: ', savedState);
       return savedState;
     } catch(err) {return {}}
   },
   setData (newState) {
     console.log('newState: ', newState);
     const serializedData = JSON.stringify(newState);

     localStorage.savedState = serializedData;
   }
}

module.exports = Database;
