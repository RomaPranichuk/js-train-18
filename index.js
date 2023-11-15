// Завдання 1
/**
 * Функція `checkData` перевіряє наявність даних.
 * У випадку помилки, викликається помилка з причиною (cause).
 *
 *  data - вхідні дані.
 */
function checkData(data) {
  if (Object.keys(data).length === 0) {
    throw new Error("Об'єкт пустий");
  }
  return data;
}

console.log("Завдання: 1 ==============================");

try {
  console.log(checkData({}));
} catch (error) {
  console.log(error.message);
}
// Виведе Об'єкт пустий

try {
  console.log(checkData({ name: "John", age: 30, city: "New York" }));
} catch (error) {
  console.log(error.message);
}
// Виведе { name: 'John', age: 30, city: 'New York' }

// Завдання 2
/**
 * Функція `parseJson` намагається аналізувати вхідний JSON-рядок.
 * Якщо рядок має невірний формат, генерується помилка з відповідним текстом.
 *
 *  jsonStr - JSON-рядок для аналізу.
 */
function parseJson(jsonStr) {
  try {
    return JSON.parse(jsonStr);
  } catch (error) {
    return error.message;
  }
}
console.log("Завдання: 2 ==============================");

// Вхідний JSON-рядок з правильним форматом.
let validJson = '{"name":"John","age":30,"city":"New York"}';
// Вхідний JSON-рядок з неправильним форматом.
let invalidJson = '{"name":"John,"age":30,"city":"New York"}'; // Пропущена закриваюча лапка після "John".

// Спробуємо аналізувати JSON-рядки.
console.log(parseJson(validJson));
// Виведе { name: 'John', age: 30, city: 'New York' }
console.log(parseJson(invalidJson));
// Виведе Unexpected token a in JSON at position 15

// Завдання 3

/**
 * Функція `getAge` отримує вік користувача.
 * Якщо вік користувача менше 0, генерується помилка з відповідним текстом.
 *
 *  age - вік користувача.
 */
function getAge(age) {
  try {
    if (age < 0) {
      throw {
        error: "Вік не може бути менше 0!",
        name: "AgeError",
      };
    }
    return `Вік користувача: ${age}`;
  } catch (error) {
    return error;
  }
}
console.log("Завдання: 3 ==============================");

// Виклик функції з від'ємним віком.
console.log(getAge(-1));
// Виведе { error: 'Вік не може бути менше 0!', name: 'AgeError' }
// Виклик функції з віком 20.
console.log(getAge(20));
// Виведе Вік користувача: 20

// Завдання 4
/**
 * Функція `getBookById` отримує книгу за її ID.
 * Якщо книги з таким ID не існує, генерується TypeError.
 *
 *  books - масив книг.
 *  id - ID книги.
 */
function getBookById(books, id) {
  const book = books.find((item) => item.id === id);
  if (!book) {
    throw new TypeError(`TypeError: Книга з ID ${id} не знайдена!`);
  }
  return book;
}
console.log("Завдання: 4 ==============================");

// Виклик функції з неіснуючим ID.

try {
  console.log(
    getBookById(
      [
        { id: 1, title: "Книга 1" },
        { id: 2, title: "Книга 2" },
      ],
      3
    )
  );
} catch (error) {
  console.error(error.message);
}
// Виведе TypeError: Книга з ID 3 не знайдена!
try {
  console.log(
    getBookById(
      [
        { id: 1, title: "Книга 1" },
        { id: 2, title: "Книга 2" },
      ],
      2
    )
  );
} catch (error) {
  console.error(error.message);
}
// Виведе Книга: Книга 2

// Завдання 5

/**
 * Функція `decodeURIComponentWrapper` виконує декодування рядка `encodedString`
 * з використанням функції `decodeURIComponent`. Якщо сталася помилка URIError,
 * вона перехоплюється та виводиться повідомлення про помилку.
 *
 *  encodedString - Рядок для декодування.
 */
function decodeURIComponentWrapper(encodedString) {
  try {
    return decodeURIComponent(encodedString);
  } catch (error) {
    if (error instanceof URIError) {
      return "Помилка декодування URI: " + error.message;
    } else {
      return "Помилка: " + error.toString();
    }
  }
}

console.log("Завдання: 5 ==============================");

console.log(decodeURIComponentWrapper("Hello%20World")); // виведе 'Hello World'
console.log(decodeURIComponentWrapper("%E0%A4%A")); // виведе інформацію про помилку URIError

// Завдання 6
/**
 * Функція `findEvenNumber` знаходить перше число, що ділиться на 2 без остачі в масиві.
 * Якщо такого числа немає, вона кидає помилку.
 *
 *  numbers - Масив чисел для пошуку.
 */
function findEvenNumber(numbers) {
  let evenNumber;

  for (let number of numbers) {
    if (number % 2 === 0) {
      evenNumber = number;
      break;
    }
  }

  if (evenNumber === undefined) {
    throw new Error("У масиві немає чисел, що діляться на 2 без остачі!");
  }

  return evenNumber;
}

console.log("Завдання: 6 ==============================");
// Виклик функції з масивом чисел.

console.log([1, 3, 5]);

try {
  console.log(findEvenNumber([1, 3, 5]));
} catch (error) {
  console.error(error.toString());
}
// Виведе
// [ 1, 3, 5 ]

// Error: У масиві немає чисел, що діляться на 2 без остачі!;
console.log([1, 4, 5]);

try {
  console.log(findEvenNumber([1, 4, 5]));
} catch (error) {
  console.error(error.toString());
}
// Виведе
// [ 1, 4, 5 ]
// 4

// Завдання 7
/**
 * Функція `validateUser` перевіряє об'єкт користувача на відповідність заданим вимогам.
 * Якщо об'єкт користувача не відповідає вимогам, вона кидає помилку з причиною (cause).
 *
 *  user - Об'єкт користувача для перевірки.
 */
function validateUser(user) {
  if (!user) {
    console.error("Об'єкт користувача не вказано!");
  }

  if (!user.name) {
    console.error("Ім'я користувача не вказано!", user);
  }

  if (!user.email) {
    console.error("Email користувача не вказано!", user);
  }
}

console.log("Завдання: 7 ==============================");

// Виклик функції з неповним об'єктом користувача.
validateUser({ name: "John Doe" });
// Виведе
// Email користувача не вказано! { name: 'John Doe' }

// Завдання 8
/**
 * Функція `calculateSquareRoot` обчислює квадратний корінь з числа.
 * Якщо аргумент не є числом, вона кидає TypeError.
 * Якщо число від'ємне, вона кидає RangeError.
 *
 *  number - Число для обчислення квадратного кореня.
 */
function calculateSquareRoot(number) {
  if (typeof number !== "number") {
    throw new TypeError("Аргумент має бути числом!");
  }

  if (number < 0) {
    throw new RangeError("Число не повинно бути від'ємним!");
  }

  return Math.sqrt(number);
}

console.log("Завдання: 8 ==============================");

try {
  console.log(calculateSquareRoot(9));
  // Виведе 3
  console.log(calculateSquareRoot(-9));
  // Виведе Число не повинно бути від'ємним!
  console.log(calculateSquareRoot("abc"));
  // Виведе Аргумент має бути числом!
} catch (error) {
  // Повертаємо повідомлення про помилку.
  console.log(error.message);
}

// Завдання 9

/**
 * Функція `processData` обробляє масив чисел.
 * Якщо в масиві є не число, вона кидає TypeError.
 *
 *  data - Масив чисел для обробки.
 */
function processData(data) {
  for (const element of data) {
    if (typeof element !== "number") {
      throw new TypeError(
        `Елемент з індексом ${data.indexOf(element)} має бути числом!`
      );
    }
  }

  return "Дані успішно оброблені";
}

console.log("Завдання: 9 ==============================");

// Викликаємо функцію з правильними даними
try {
  console.log(processData([1, 2, 3]));
  // Виведе Дані успішно оброблені
} catch (error) {
  console.error(error.stack);
  // Повертаємо повідомлення помилки
  console.log(error.message);
}

// Викликаємо функцію з неправильними даними
try {
  console.log(processData([1, "two", 3]));
} catch (error) {
  console.error(error.stack);
  // Повертаємо повідомлення помилки
  console.log(error.message);
  // Виведе Елемент з індексом 1 має бути числом!
}

// Завдання 10
/**
 * Функція `evaluateExpression` обчислює результат математичного виразу, переданого у вигляді рядка.
 * Використовується функція `eval` для обчислення виразу. Якщо виникає помилка EvalError,
 * вона перехоплюється та виводиться повідомлення про помилку.
 *
 *  expression - Математичний вираз у вигляді рядка.
 */
function evaluateExpression(expression) {
  try {
    const result = eval(expression);
    return result;
  } catch (error) {
    return `EvalError: ${error.message}`;
  }
}

console.log("Завдання: 10 ==============================");

console.log(evaluateExpression("2 + 2")); // виведе 4
console.log(evaluateExpression("10 / hello")); // виведе EvalError: hello is not defined та інформацію про помилку
