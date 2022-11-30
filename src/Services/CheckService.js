import db from "../Database";

const checkHabit = (obj) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "UPDATE habits SET lastCheck=?, habitIsChecked=?, habitChecks=? WHERE habitArea=?;",
        [obj.lastCheck, obj.habitIsChecked, obj.habitChecks, obj.habitArea],
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) resolve(rowsAffected);
          else reject("Error updating obj");
        },
        (_, error) => reject(error)
      );
    });
  });
};

const removeCheckHabit = (obj) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "UPDATE habits SET habitIsChecked=? WHERE habitArea=?;",
        [obj.habitIsChecked, obj.habitArea],
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) resolve(rowsAffected);
          else reject("Error updating obj");
        },
        (_, error) => reject(error)
      );
    });
  });
};
const removeCheck = (mindHabit, moneyHabit, bodyHabit, funHabit) => {
  const date = new Date();

  const mindLastCheck =
    date.getDate() - (new Date(mindHabit?.lastCheck).getDate() + 1);

  if (mindHabit?.habitFrequency === "Diário" && mindLastCheck > 0) {
    removeCheckHabit({
      habitIsChecked: 0,
      habitArea: mindHabit?.habitArea,
    });
  }
  if (mindHabit?.habitFrequency === "Semanal" && mindLastCheck > 7) {
    removeCheckHabit({
      habitIsChecked: 0,
      habitArea: mindHabit?.habitArea,
    });
  }
  if (mindHabit?.habitFrequency === "Mensal" && mindLastCheck > 30) {
    removeCheckHabit({
      habitIsChecked: 0,
      habitArea: mindHabit?.habitArea,
    });
  }

  const moneyLastCheck =
    date.getDate() - (new Date(moneyHabit?.lastCheck).getDate() + 1);

  if (moneyHabit?.habitFrequency === "Diário" && moneyLastCheck > 0) {
    removeCheckHabit({
      habitIsChecked: 0,
      habitArea: moneyHabit?.habitArea,
    });
  }
  if (moneyHabit?.habitFrequency === "Semanal" && moneyLastCheck > 7) {
    removeCheckHabit({
      habitIsChecked: 0,
      habitArea: moneyHabit?.habitArea,
    });
  }
  if (moneyHabit?.habitFrequency === "Mensal" && moneyLastCheck > 30) {
    removeCheckHabit({
      habitIsChecked: 0,
      habitArea: moneyHabit?.habitArea,
    });
  }
  const BodyLastCheck =
    date.getDate() - (new Date(bodyHabit?.lastCheck).getDate() + 1);

  if (bodyHabit?.habitFrequency === "Diário" && BodyLastCheck > 0) {
    removeCheckHabit({
      habitIsChecked: 0,
      habitArea: bodyHabit?.habitArea,
    });
  }
  if (bodyHabit?.habitFrequency === "Semanal" && BodyLastCheck > 7) {
    removeCheckHabit({
      habitIsChecked: 0,
      habitArea: bodyHabit?.habitArea,
    });
  }
  if (bodyHabit?.habitFrequency === "Mensal" && BodyLastCheck > 30) {
    removeCheckHabit({
      habitIsChecked: 0,
      habitArea: bodyHabit?.habitArea,
    });
  }
  const FunLastCheck =
    date.getDate() - (new Date(funHabit?.lastCheck).getDate() + 1);
  if (funHabit?.habitFrequency === "Diário" && FunLastCheck > 0) {
    removeCheckHabit({
      habitIsChecked: 0,
      habitArea: funHabit?.habitArea,
    });
  }
  if (funHabit?.habitFrequency === "Semanal" && FunLastCheck > 7) {
    removeCheckHabit({
      habitIsChecked: 0,
      habitArea: funHabit?.habitArea,
    });
  }
  if (funHabit?.habitFrequency === "Mensal" && FunLastCheck > 30) {
    removeCheckHabit({
      habitIsChecked: 0,
      habitArea: funHabit?.habitArea,
    });
  }
};

export default {
  checkHabit,
  removeCheckHabit,
  removeCheck,
};
