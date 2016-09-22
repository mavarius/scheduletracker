const Database = {
  retrieveData () {
     const serializedData = localStorage.savedState;

     try {
       let savedState = JSON.parse(serializedData);
       return savedState;
     } catch(err) {return {}}
   },
   setData (newState) {
     const serializedData = JSON.stringify(newState);

     localStorage.savedState = serializedData;
   }
}

module.exports = Database;
