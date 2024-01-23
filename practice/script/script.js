// методы для получения элементов (ноды) Node

const elem = document.querySelector("p"); //ноде (элемент параграфа) взаимодействуем с документом (DOM)
console.log(elem.innerText); // считали текст с полученой Ноды

elem.innerText = "Новый текс параграфа"; // изменили содержимое параграфа

elem.innerText = elem.innerText.toUpperCase() + "!!!"; // перевели в верхний регистр

function coreateTopic(title, text, link) {
  // создание div
  const container = document.createElement("div");
  const titleNode = document.createElement("h2"); // создание заголовка
  const textNode = document.createElement("p"); // сощдание текста(параграфа)
  const linkNode = document.createElement("a");

  titleNode.innerText = title; // заполнение параграфа и заголовка
  textNode.innerText = text; //
  linkNode.innerText = "подробнее...";
  //указание атрибута 2 способа
  // 1 универсальный
  //linkNode.setAttribute("href", link);

  // 2 способ
  linkNode.href = link;

  container.append(titleNode, textNode, linkNode); // добавление h2 и p в нутрь div

  return container;
}

//добавление контейнера в рут
const root = document.querySelector("#root"); // находит элемент в документе по селекту
const result = coreateTopic(
  "статья о велосипедах",
  "велосипеды очень полезны и повышают настроение",
  "https://google.com"
);

root.append(result);

const object = [
  {
    title: "Заголовок 1",
    text: "Текст 1",
    link: "http://www.example1.com",
  },
  {
    title: "Заголовок 2",
    text: "Текст 2",
    link: "http://www.example2.com",
  },
  {
    title: "Заголовок 3",
    text: "Текст 3",
    link: "http://www.example3.com",
  },
];

//   function render(topiks){
//     const root = document.querySelector("#root")
//     topiks.forEach(({title, text, link}) => root.append(coreateTopic(title, text, link)))
//   }
// render(object)

function getTask(taskNumber, task) {
  const container = document.createElement("div");
  const textNode1 = document.createElement("p");
  const textNode2 = document.createElement("p");

  textNode1.innerText = "Номер задачи: " + taskNumber;
  textNode2.innerText = "Задача: " + task;
  container.append(textNode1, textNode2);
  return container;
}
const root2 = document.querySelector("#root")
const result5 = getTask(12, 'Сходить в бассейн ')
root2.append(result5)

const tasks = [
    { title: "Заголовок 1", number: 42, show: true },
    { title: "Заголовок 2", number: 17, show: false },
    { title: "Заголовок 3", number: 99, show: true },
    { title: "Заголовок 4", number: 23,  show: false },
    { title: "Заголовок 5", number: 7,  show: true}
  ]

//   function render2(task){
//     const root = document.querySelector("#root") // находим нужный див в который положим элементы
//     task
//     .filter(({show}) => show)
//     .forEach(({title, number}) => root.append(getTask(number, title)));
//   }
//   render2(tasks)

  const root3 = document.querySelector("#root") // находим нужный див в который положим элементы
    tasks
    .filter(({show}) => show)
    .forEach(({title, number}) => root3.append(getTask(number, title)));