// Решить следующие задачи:
// Создать в html форму с тремя инпутами (имя, фамилия, возраст). Написать скрипт, который при отправке формы выводит собранные данные в консоль.
// Доработать процесс таким образом, чтобы при отправке формы данные из нее добавлялись в массив users в виде объекта.
// Реализовать функцию rerender. Эта функция очищает контейнер с карточками и создает множество карточек с пользователями из массива. Настроить rerender при добавлении нового пользователя.
// Доработать rerender таким образом, чтобы при двойном клике по карточке из массива удалялся пользователь по id и вызывался rerender.


    // let myform = document.querySelector("#myform");
    // let nameInput = document.querySelector('.name_input');
    // let lastNameInput = document.querySelector('.lastname_input') 
    // let ageInput = document.querySelector('.age'); 

    // myform.addEventListener ('submit', function (event) {
    //     event.preventDefault ()
    //     console.log (nameInput.value)
    //     console.log (lastNameInput.value)
    //     console.log (ageInput.value)
    // })

    const array = []

        let myform = document.querySelector("#myform");
            let nameInput = document.querySelector('.name_input');
            let lastNameInput = document.querySelector('.lastname_input') 
            let ageInput = document.querySelector('.age'); 

myform.addEventListener("submit", function(event) {
  event.preventDefault()

  const users = {
    name: nameInput.value,
    lastname: lastNameInput.value,
    age: ageInput.value,
  };

  array.push(users)
  console.log(array)
  myform.reset() 
})   


function createDataCard({name,lastname,age}) {

  const pNameInput = document.createElement('p')
  pNameInput.innerText = firstname
  const pLastName = document.createElement('p')
  pLastName.innerText = lastname
  const pAge = document.createElement('p')
  pAge.innerText= age
  const dataCard= document.createElement ('div')
  
  dataCard.classList.add("data_card")

  dataCard.append(pNameInput,pLastName,pAge)

  return dataCard
}

const dataListDiv = document.querySelector(".data_list_container")
function rerender() {
  dataListDiv.innerHTML = "" 
  for(let i = 0; i < array.length; i++) {
    const dataCardElem = createDataCard(array[i])
    dataCardElem.addEventListener ("dbclick", function () {

array.splice (i, 1)
rerender()
})
dataListDiv.append(dataCardElem)
}
}