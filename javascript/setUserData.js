// Funções para coletar dados de ENTRADA

function getName() {
    const input = document.getElementById("input_name")
    return input.value
}

function getTime() {
    const time = new Date()
    return [time.getHours(), time.getMinutes(), time.getSeconds()].join(":")
}

function getDate() {
    const time = new Date()
    return [time.getDate(), (time.getMonth() + 1), time.getFullYear()].join("/")
}

function isNameInputValid() {
    const input = document.getElementById("input_name")
    console.log(input.value)
    return (input.value != "")
}

// Construtor de objeto funcionário

function setNewEmployee() {
    return {
        "name": getName(),
        "date": getDate(),
        "time": getTime()
    }
}

// Array de objetos de funcionários

function getEmployeeArray() {
    if (localStorage.getItem("signTimeSheet") == null) {
        return new Array()
    } else {
        return JSON.parse(localStorage.getItem("signTimeSheet"))
    }
}

// Inserir objeto no array e salvar no LocalStorage

function setSheet() {
    let FolhaPonto = getEmployeeArray()
    let employee = setNewEmployee()

    resetAlerts()

    if(isNameInputValid()){
        FolhaPonto.push(employee)
        localStorage.setItem("signTimeSheet", JSON.stringify(FolhaPonto))
        
        showValidAlert(employee)
    } else {
        showErrorAlert("Campo nome não pode estar vazio")
    }
}

// Mostrar alerta de sucesso na tela

function showValidAlert(employeeData) {
    const validContainer = document.getElementById("user_data")
    validContainer.innerHTML = `<strong>Enviado com sucesso!</strong> ${employeeData.name.toUpperCase()} - ${employeeData.date} ${employeeData.time}`
    validContainer.style.display = "block"
}

// Mostra mensagem de erro

function showErrorAlert(error) {
    const errorContainer = document.getElementById("error_msg")
    errorContainer.innerHTML = `<strong>${error}</strong>`
    errorContainer.style.display = "block"
}

// Reseta mensagens

function resetAlerts() {
    const validContainer = document.getElementById("user_data")
    const errorContainer = document.getElementById("error_msg")

    validContainer.style.display = "none"
    errorContainer.style.display = "none"
}

// Transforma o array de objetos em um arquivo JSON

function saveToFile() {
    let FolhaPonto = getEmployeeArray()
    let jsonObjectAsString = JSON.stringify(FolhaPonto)
  
    let blob = new Blob([jsonObjectAsString], {
      type: 'octet/stream'
    })
  
    let anchor = document.createElement('a')
    anchor.download = "signTimeSheet.json";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.click();
}