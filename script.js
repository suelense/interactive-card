function getData(id) {
  //Extrai o valor dos elementos Htlm
  return document.getElementById(id).value;
}

function displayBlock(id) {
  //Altera a propriedade display para que o item apareça na tela
  return document.getElementById(id).style.display = "block";
}

function displayNone(id) {
  //Altera a propriedade display para que o item não apareça na tela
  return document.getElementById(id).style.display = "none";
}

function changeBorderColor(id, color) {
  //altera cor da borda
  return document.getElementById(id).style.borderColor = color;
}

function showInput(inputId, pId) {
  //Mostra automaticamente o que o usuário digita no input
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
  //Cria opções na tag select
  var select = document.querySelector(`[data-name="${dataName}"]`);
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
  //Verifica se o campo está vazio
  return getData(idInput).length == 0;
}

function showErrorMessage(idInput, idError) {
  //Mostra mensagens de erro e altera a borda para vermelho
  displayBlock(idError);
  changeBorderColor(idInput, "red")
}

function hideErrorMessage(idInput, idError) {
  //Oculta mensagens de erro e altera a borda para a cor original
  displayNone(idError)
  changeBorderColor(idInput, "var(--light-grayish-violet)")
}

function validateName(idInput, idError) {
  //Valida o campo Nome
  if (emptyData(idInput)) {
    showErrorMessage(idInput, idError);
    return false;
  } else {
    hideErrorMessage(idInput, idError);
    return true;
  }
}

function validateCardNumber(idInput, idError) {
  //Valida o campo Número do cartão
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
  //Valida o campo Data
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
  //valida o campo Cvc
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
  //Execulta todas as validações e se estiver Ok, mostra a mensagem de sucesso
  validateName("inputName", "errorName");
  validateCardNumber("inputNumber", "errorNumber");
  validateDate("selectMonth", "selectYear", "errorDate");
  validateCvc("inputCvc", "errorCvc");
  if (validateName("inputName", "errorName") && validateCardNumber("inputNumber", "errorNumber") && validateDate("selectMonth", "selectYear", "errorDate") && validateCvc("inputCvc", "errorCvc")) {
    displayNone("cardForm");
    displayBlock("messageCardAdded");
    localStorage.setItem("cardName", getData("inputName"));
    localStorage.setItem("cardNumber", getData("inputNumber"))
    localStorage.setItem("cardDate", `${getData("selectMonth")}/${getData("selectYear")}`)
    localStorage.setItem("cardCvc", getData("inputCvc"));
  }
}

function showSelect() {
  //Exibe as opções dentro da tag select
  select(1, 12, "selectMonth");
  select(1, 99, "selectYear");
}
