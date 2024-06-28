function getData(id) {
  return document.getElementById(id).value;
}

function displayBlock(id) {
  return document.getElementById(id).style.display = "block";
}

function displayNone(id) {
  return document.getElementById(id).style.display = "none";
}

function changeBorderColor(id, color) {
  return document.getElementById(id).style.borderColor = color;
}

function showInput(inputId, pId) {
  if (inputId == "inputNumber") {
    inputValue = getData(inputId);
    text = ""
    for (i = 0; i < inputValue.length; i++) {
      t = inputValue[i];
      if ((i + 1) % 4 == 0) {
        text += (t + " ");
      } else {
        text += t;
      }
    }
  } else {
    text = getData(inputId);
  }
  document.getElementById(pId).textContent = text;
}

function select(start, end, dataName) {
  var select = getData(dataName);
  var option = "<option value=''></option>";

  for (i = start; i <= end; i++) {
    if (i <= 9) {
      var element = `<option value="0${i}">0${i}</option>`;
    } else {
      var element = `<option value="${i}">${i}</option>`;
    }
    option += element;
  }
  select.innerHTML = option;
}

function emptyData(idInput) {
  return getData(idInput).length == 0;
}

function showErrorMessage(idInput, idError) {
  displayBlock(idError);
  changeBorderColor(idInput, "red")
}

function hideErrorMessage(idInput, idError) {
  displayNone(idError)
  changeBorderColor(idInput, "var(--light-grayish-violet)")
}

function validateName(idInput, idError) {
  if (emptyData(idInput)) {
    showErrorMessage(idInput, idError);
    return false;
  } else {
    hideErrorMessage(idInput, idError);
    return true;
  }
}

function validateCardNumber(idInput, idError) {
  cardNumber = getData(idInput);
  if (emptyData(idInput) || cardNumber.length < 16 || isNaN(cardNumber)) {
    showErrorMessage(idInput, idError);
    return false;
  } else {
    hideErrorMessage(idInput, idError);
    return true;
  }
}

function validateDate(idMonth, idYear, idError) {
  if (emptyData(idMonth) || emptyData(idYear)) {
    showErrorMessage(idMonth, idError);
    showErrorMessage(idYear, idError);
    return false;
  } else {
    hideErrorMessage(idMonth, idError);
    hideErrorMessage(idYear, idError);
    return true;
  }
}

function validateCvc(idInput, idError) {
  cvc = getData(idInput);
  if (emptyData(idInput) || cvc.length < 3 || isNaN(cvc)) {
    showErrorMessage(idInput, idError);
    return false;
  } else {
    hideErrorMessage(idInput, idError);
    return true;
  }
}

function register() {
  validateName("inputName", "errorName");
  validateCardNumber("inputNumber", "errorNumber");
  validateDate("selectMonth", "selectYear", "errorDate");
  validateCvc("inputCvc", "errorCvc");
  if (validateName("inputName", "errorName") && validateCardNumber("inputNumber", "errorNumber") && validateDate("selectMonth", "selectYear", "errorDate") && validateCvc("inputCvc", "errorCvc")) {
    displayNone("cardForm");
    displayBlock("messageCardAdded");
  }
}

select(1, 12, "selectMonth");
select(1, 99, "selectYear");
