import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/AuthSlice";
import patientsReducer from "../slices/PatientsSlice";
import recordsReducer from "../slices/recordsSlice";
import patientFormReducer from "../slices/patientFormSlice";
import recordFormReducer from "../slices/recordFormSlice";
import schemaReducer from "../slices/schema/schemaReducer";
import templateReducer from "../slices/templates/templateReducer";
import errorReducer from "../slices/errorSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  patients: patientsReducer,
  records: recordsReducer,
  patientForm: patientFormReducer,
  recordForm: recordFormReducer,
  schema: schemaReducer,
  template: templateReducer,
  error: errorReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: {
    serialize: {
      replacer: (key, value) => {
        if (key === "fileInput") return undefined;
        else return value;
      },
    },
  },
});

export default store;
