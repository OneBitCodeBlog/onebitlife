import db from "../Database";

db.transaction((tx) => {
  tx.executeSql(
    "CREATE TABLE IF NOT EXISTS change_navigation (id INTEGER PRIMARY KEY AUTOINCREMENT, showHome TEXT, appStartData TEXT);",
    [],
    (_, error) => {
      console.log(error);
    }
  );
});
