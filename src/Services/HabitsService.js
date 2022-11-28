import db from "../Database";

db.transaction((tx) => {
  tx.executeSql(
    "CREATE TABLE IF NOT EXISTS habits (id INTEGER PRIMARY KEY AUTOINCREMENT, habitArea TEXT, habitName TEXT, habitFrequency TEXT, habitHasNotification BOOLEAN, habitNotificationFrequency TEXT, habitNotificationTime TEXT, lastCheck TEXT, daysWithoutChecks INTEGER, progressBar INTEGER, habitIsChecked BOOLEAN, habitChecks INTEGER);",
    [],
    (_, error) => {
      console.log(error);
    }
  );
});

const createHabit = (obj) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO habits (habitArea, habitName, habitFrequency, habitHasNotification, habitNotificationFrequency, habitNotificationTime, lastCheck, daysWithoutChecks, progressBar, habitIsChecked, habitChecks) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);",
        [
          obj.habitArea,
          obj.habitName,
          obj.habitFrequency,
          obj.habitHasNotification,
          obj.habitNotificationFrequency,
          obj.habitNotificationTime,
          obj.lastCheck,
          obj.daysWithoutChecks,
          obj.progressBar,
          obj.habitIsChecked,
          obj.habitChecks,
        ],
        (_, { rowsAffected, insertId }) => {
          if (rowsAffected > 0) resolve(insertId);
          else reject("Error inserting obj: " + JSON.stringify(obj));
        },
        (_, error) => reject(error)
      );
    });
  });
};

const findByArea = (habitArea) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM habits WHERE habitArea LIKE ?;",
        [habitArea],
        (_, { rows }) => {
          if (rows.length > 0) resolve(rows._array);
        },
        (_, error) => reject(error)
      );
    });
  });
};

const updateHabit = (obj) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "UPDATE habits SET habitName=?, habitFrequency=?, habitHasNotification=?, habitNotificationFrequency=?, habitNotificationTime=? WHERE habitArea=?;",
        [
          obj.habitName,
          obj.habitFrequency,
          obj.habitHasNotification,
          obj.habitNotificationFrequency,
          obj.habitNotificationTime,
          obj.habitArea,
        ],
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) resolve(rowsAffected);
          else reject("Error updating obj");
        },
        (_, error) => reject(error)
      );
    });
  });
};

const deleteByName = (habitArea) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM habits WHERE habitArea=?;",
        [habitArea],
        (_, { rowsAffected }) => {
          resolve(rowsAffected);
        },
        (_, error) => reject(error)
      );
    });
  });
};

export default {
  createHabit,
  findByArea,
  updateHabit,
  deleteByName,
};
