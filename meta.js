function createOutCuteLittleKeyValueStorage() {
    return {
        __database: {},
        set(key, value) {
            this.__database[key] = value;
            return true;
        }
        ,
        get(key) {
            return this.__database[key];
        }
    }
}

const dbA = createOutCuteLittleKeyValueStorage(),
      dbB = createOutCuteLittleKeyValueStorage();

const store = createStore();

const allTheStore = store.getState();

// писать в "базу":
const action = { type: 'CREATE_SOME_SHIT', payload: {id: 1, name: 'Шаурмичная', income: "over 300.000.000/sec"} }
const action = { type: 'DELETE_SOME_SHIT', payload: {id: 1} }
store.dispatch(action);

//
db.createRecord() 
db.updateRecord()
db.deleteRecord()

db.select()///
// get(key) => value
// set(key, value) => boolean