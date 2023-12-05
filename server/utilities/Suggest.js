const Suggest = (data) => {
  if (data) {
    if (data.financialGoals.length > 0) {
      if (data.monthlyExpenses > data.monthlyIncome) {
        return {
          msg: "Increaes the Income or Decrease the Expense as the Income is less than Expense",
        };
      }
      const savingsGoal = 10000; // Example savings goal
      if (data.totalSaving >= savingsGoal) {
        console.log(`Congratulations! You've reached your savings goal.`);
      } else {
        const remainingAmount = savingsGoal - data.totalSavings;
        console.log(
          `You're ${remainingAmount} away from reaching your savings goal.`
        );
      }
    } else
      return {
        msg: "No Financial Goal",
      };
  } else return res.status(404).json({ error: "Financial Record Missing" });
};

module.exports = Suggest;
