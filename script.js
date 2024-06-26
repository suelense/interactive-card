function getData(id) {
  return document.getElementById(id).value;
}

function displayBlock(id) {
  return document.getElementById(id).style.display = "block";
}

function displayNone(id) {
  return document.getElementById(id).style.display = "none";
}

function showInput(inputId, pId) {
  if (inputId == "inputNumber") {
    inputValue = document.getElementById(inputId).value;
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

    text = document.getElementById(inputId).value;
  }
  document.getElementById(pId).textContent = text;
}

function select(start, end, dataName) {
  selectMonth = document.querySelector('[data-name="selectMonth"]');
  selectYear = document.querySelector('[data-name="selectYear"]');
  option = "<option value=''></option>";

  for (i = 1; i <= 12; i++) {
    if (i <= 9) {
      element = `<option value="0${i}">0${i}</option>`;
    } else {
      element = `<option value="${i}">${i}</option>`;
    }
    option += element;
    selectMonth.innerHTML = option;
  }

  for (i = 1; i <= 99; i++) {
    if (i <= 9) {
      element = `<option value="0${i}">0${i}</option>`;
    } else {
      element = `<option value="${i}">${i}</option>`;
    }
    option += element;
    selectYear.innerHTML = option;
  }
}

function emptyData(id, idError) {
  data = getData(id);
  if (data.length == 0) {
    displayBlock(idError);
  } else {
    displayNone(idError)
  }
}

function register() {
  emptyData("inputName", "errorName");
  emptyData("inputNumber", "errorNumber");
  emptyData("inputCvc", "errorCvc");
  emptyData("selectMonth", "errorDate");
  emptyData("selectYear", "errorDate");
}
select();


/*Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page 

Your users should be able to: 

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page


- Update the details on the card as the user fills in the fields
- Validate the form fields when the form is submitted
- If there are no errors, display the completed state
- Reset the form when the user clicks "Continue" on the completed state
*/
