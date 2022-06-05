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

function getEmployeeArray() {
    if (localStorage.getItem("signTimeSheet") == null) {
        return new Array()
    } else {
        return JSON.parse(localStorage.getItem("signTimeSheet"))
    }
}

function setNewEmployee() {
    return {
        "name": getName(),
        "date": getDate(),
        "time": getTime()
    }
}

function showEmployeeData(employee) {
    const data = document.getElementById("user_data")
    data.innerHTML = `<strong>Enviado com sucesso!</strong> ${employee.name.toUpperCase()} - ${employee.date} ${employee.time}`
    data.style.display = "block";
}

function setSheet() {
    let FolhaPonto = getEmployeeArray()
    let employee = setNewEmployee()

    FolhaPonto.push(employee)
    localStorage.setItem("signTimeSheet", JSON.stringify(FolhaPonto))
    
    showEmployeeData(employee)
}