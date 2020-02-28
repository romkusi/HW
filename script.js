let money = prompt("Ваш бюджет на месяц?","");
    time = prompt("Введите дату в формате YYYY-MM-DD","");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let que1 = prompt("Введите обязательную статью расходов в этом месяце","");
    que2 = prompt("Во сколько обойдется?","");
    que3 = prompt("Введите обязательную статью расходов в этом месяце","");
    que4 = prompt("Во сколько обойдется?","");

    appData.expenses[que1] = que2;
    appData.expenses[que3] = [que4];

alert(appData.budget / 30);
