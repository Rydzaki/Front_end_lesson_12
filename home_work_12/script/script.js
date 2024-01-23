const elem = document.querySelector("p");
console.log(elem.innerText);
elem.innerText = "Привет, JavaScript!";

// Задача: Добавление нового элемента в DOM
// Условие: Создайте массив из строк. Напишите функцию, которая получает этот массив и создает нумерованный список из этих строк в html документе.

let stringArray = ["Hello", "World", "Programming", "JavaScript", "Array"];

function numberList(lists) {
  //   const container = document.createElement("ol");
  const container = document.createElement("div");
  const list = document.createElement("li");

  list.innerText = lists;
  container.append(list);
  return container;
}
const list = document.querySelector("#list");
stringArray.forEach((n) => list.append(numberList(n)));

// Задача: Создание ссылок

// Условие: Подготовьте массив из объектов со свойствами label и link. Создайте функцию, которая проходится циклом по этмоу массиву и создает ссылки, ведущие на link с содержимым label.

let arrayOfObjects = [
  { label: "Главная", link: "/home" },
  { label: "О нас", link: "/about" },
  { label: "Услуги", link: "/services" },
  { label: "Контакты", link: "/contact" },
  { label: "Блог", link: "/blog" },
];

function getLink(label, link) {
  const container = document.createElement("div");
  const linkNode = document.createElement("a");

  linkNode.innerText = label;
  linkNode.href = link;

  container.append(linkNode);
  return container;
}
const hello = document.querySelector("#link");
arrayOfObjects.forEach((o) => hello.append(getLink(o.label, o.link)));
