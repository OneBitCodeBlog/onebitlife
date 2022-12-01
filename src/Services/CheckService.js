import db from "../Database";

import HabitsService from "./HabitsService";

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

const checkStatus = (mindHabit, moneyHabit, bodyHabit, funHabit) => {
  const date = new Date();

  const mindLastCheck = date - new Date(mindHabit?.lastCheck);

  const mindDiff = parseInt(mindLastCheck / (1000 * 3600 * 24));

  // Verificação da mente
  if (mindHabit?.habitFrequency === "Diário") {
    if (mindDiff === 1) {
      HabitsService.changeProgress({
        progressBar: 0.5,
        habitArea: mindHabit?.habitArea,
      });
    } else if (mindDiff === 2) {
      HabitsService.changeProgress({
        progressBar: 0.25,
        habitArea: mindHabit?.habitArea,
      });
    } else if (mindDiff >= 3) {
      HabitsService.changeProgress({
        progressBar: 0,
        habitArea: mindHabit?.habitArea,
      });
    }
  }
  if (mindHabit?.habitFrequency === "Semanal") {
    if (mindDiff === 8) {
      HabitsService.changeProgress({
        progressBar: 0.5,
        habitArea: mindHabit?.habitArea,
      });
    } else if (mindDiff === 9) {
      HabitsService.changeProgress({
        progressBar: 0.25,
        habitArea: mindHabit?.habitArea,
      });
    } else if (mindDiff >= 10) {
      HabitsService.changeProgress({
        progressBar: 0,
        habitArea: mindHabit?.habitArea,
      });
    }
  }
  if (mindHabit?.habitFrequency === "Mensal") {
    if (mindDiff === 31) {
      HabitsService.changeProgress({
        progressBar: 0.5,
        habitArea: mindHabit?.habitArea,
      });
    } else if (mindDiff === 32) {
      HabitsService.changeProgress({
        progressBar: 0.25,
        habitArea: mindHabit?.habitArea,
      });
    } else if (mindDiff >= 33) {
      HabitsService.changeProgress({
        progressBar: 0,
        habitArea: mindHabit?.habitArea,
      });
    }
  }

  //Verificação do Financeiro

  const moneyLastCheck = date - new Date(moneyHabit?.lastCheck);

  const moneyDiff = parseInt(moneyLastCheck / (1000 * 3600 * 24));

  if (moneyHabit?.habitFrequency === "Diário") {
    if (moneyDiff === 1) {
      HabitsService.changeProgress({
        progressBar: 0.5,
        habitArea: moneyHabit?.habitArea,
      });
    } else if (moneyDiff === 2) {
      HabitsService.changeProgress({
        progressBar: 0.25,
        habitArea: moneyHabit?.habitArea,
      });
    } else if (moneyDiff >= 3) {
      HabitsService.changeProgress({
        progressBar: 0,
        habitArea: moneyHabit?.habitArea,
      });
    }
  }
  if (moneyHabit?.habitFrequency === "Semanal") {
    if (moneyDiff === 7) {
      HabitsService.changeProgress({
        progressBar: 0.5,
        habitArea: moneyHabit?.habitArea,
      });
    } else if (moneyDiff === 8) {
      HabitsService.changeProgress({
        progressBar: 0.25,
        habitArea: moneyHabit?.habitArea,
      });
    } else if (moneyDiff >= 9) {
      HabitsService.changeProgress({
        progressBar: 0,
        habitArea: moneyHabit?.habitArea,
      });
    }
  }
  if (moneyHabit?.habitFrequency === "Mensal") {
    if (moneyDiff === 31) {
      HabitsService.changeProgress({
        progressBar: 0.5,
        habitArea: moneyHabit?.habitArea,
      });
    } else if (moneyDiff === 32) {
      HabitsService.changeProgress({
        progressBar: 0.25,
        habitArea: moneyHabit?.habitArea,
      });
    } else if (moneyDiff >= 33) {
      HabitsService.changeProgress({
        progressBar: 0,
        habitArea: moneyHabit?.habitArea,
      });
    }
  }
  // Verificação do corpo
  const bodyLastCheck = date - new Date(bodyHabit?.lastCheck);

  const bodyDiff = parseInt(bodyLastCheck / (1000 * 3600 * 24));
  if (bodyHabit?.habitFrequency === "Diário") {
    if (bodyDiff === 1) {
      HabitsService.changeProgress({
        progressBar: 0.5,
        habitArea: bodyHabit?.habitArea,
      });
    } else if (bodyDiff === 2) {
      HabitsService.changeProgress({
        progressBar: 0.25,
        habitArea: bodyHabit?.habitArea,
      });
    } else if (bodyDiff >= 3) {
      HabitsService.changeProgress({
        progressBar: 0,
        habitArea: bodyHabit?.habitArea,
      });
    }
  }
  if (bodyHabit?.habitFrequency === "Semanal") {
    if (bodyDiff === 7) {
      HabitsService.changeProgress({
        progressBar: 0.5,
        habitArea: bodyHabit?.habitArea,
      });
    } else if (bodyDiff === 8) {
      HabitsService.changeProgress({
        progressBar: 0.25,
        habitArea: bodyHabit?.habitArea,
      });
    } else if (bodyDiff >= 9) {
      HabitsService.changeProgress({
        progressBar: 0,
        habitArea: bodyHabit?.habitArea,
      });
    }
  }

  if (bodyHabit?.habitFrequency === "Mensal") {
    if (bodyDiff === 31) {
      HabitsService.changeProgress({
        progressBar: 0.5,
        habitArea: bodyHabit?.habitArea,
      });
    } else if (bodyDiff === 32) {
      HabitsService.changeProgress({
        progressBar: 0.25,
        habitArea: bodyHabit?.habitArea,
      });
    } else if (bodyDiff >= 33) {
      HabitsService.changeProgress({
        progressBar: 0,
        habitArea: bodyHabit?.habitArea,
      });
    }
  }
  // Verificação da diversão
  const funLastCheck = date - new Date(funHabit?.lastCheck);

  const funDiff = parseInt(funLastCheck / (1000 * 3600 * 24));
  if (funHabit?.habitFrequency === "Diário") {
    if (funDiff === 1) {
      HabitsService.changeProgress({
        progressBar: 0.5,
        habitArea: funHabit?.habitArea,
      });
    } else if (funDiff === 2) {
      HabitsService.changeProgress({
        progressBar: 0.25,
        habitArea: funHabit?.habitArea,
      });
    } else if (funDiff >= 3) {
      HabitsService.changeProgress({
        progressBar: 0,
        habitArea: funHabit?.habitArea,
      });
    }
  }
  if (funHabit?.habitFrequency === "Semanal") {
    if (funDiff === 7) {
      HabitsService.changeProgress({
        progressBar: 0.5,
        habitArea: funHabit?.habitArea,
      });
    } else if (funDiff === 8) {
      HabitsService.changeProgress({
        progressBar: 0.25,
        habitArea: funHabit?.habitArea,
      });
    } else if (funDiff >= 9) {
      HabitsService.changeProgress({
        progressBar: 0,
        habitArea: funHabit?.habitArea,
      });
    }
  }
  if (funHabit?.habitFrequency === "Mensal") {
    if (funDiff === 31) {
      HabitsService.changeProgress({
        progressBar: 0.5,
        habitArea: funHabit?.habitArea,
      });
    } else if (funDiff === 32) {
      HabitsService.changeProgress({
        progressBar: 0.25,
        habitArea: funHabit?.habitArea,
      });
    } else if (funDiff >= 33) {
      HabitsService.changeProgress({
        progressBar: 0,
        habitArea: funHabit?.habitArea,
      });
    }
  }
};

export default {
  checkHabit,
  removeCheckHabit,
  removeCheck,
  checkStatus,
};
