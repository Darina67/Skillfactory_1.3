const conslog_command = document.querySelector("#consoleLog");
const alert_command = document.querySelector("#alert");
const prompt_command = document.querySelector("#prompt");

conslog_command.addEventListener('click',
(event)=>{
    alert("Пример использования команды console.log")
})

alert_command.addEventListener('click',
(event)=>{
    alert("Пример использования команды alert")
})

prompt_command.addEventListener('click',
(event)=>{
    prompt("Пример использования команды prompt")
})