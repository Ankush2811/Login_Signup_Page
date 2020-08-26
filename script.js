const users=[];

const login = document.querySelector(".login");
const signup = document.querySelector(".signup");
const personal = document.querySelector(".personal");
const professional = document.querySelector(".professional");
const education = document.querySelector(".education");
const personalTab = document.querySelector(".personalTab");
const professionalTab = document.querySelector(".professionalTab");
const educationTab = document.querySelector(".educationTab");
const signupForm = document.forms["signupForm"];

const showForm = (form) => {
    if (form === personal) {
      show(personal);
      selectTab(personalTab);
      hide(professional);
      hide(education);
    }
    if (form === professional) {
        if (signupForm["fname"].value == "") {
            alert("Please Enter First Name!");
            return false;
        }
        if (signupForm["lname"].value == "") {
            alert("Please Enter Last Name");
            return false;
        }
          if (signupForm["email"].value == "") {
            alert("Please Enter Email");
            return false;
        }
        const emailId = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]){1,5}$/;
        if (emailId.test(signupForm["email"].value) == false) {
            alert("Invalid Email Address");
            return false;
        }
        if (signupForm["phone"].value == "") {
            alert("Please Enter Phone Number");
            return false;
        }
        const phoneNo = /^\d{10}$/;
        if (phoneNo.test(signupForm["phone"].value) == false) {
            alert("Invalid Phone Number");
            return false;
        }
        if (signupForm["password"].value == "") {
            alert("Please Enter Your New Password");
            return false;
        }
        if (signupForm["confirm_password"].value == "") {
            alert("Please Confirm your Password");
            return false;
        }
      
        hide(personal);
        show(professional);
        selectTab(professionalTab);
        hide(education);
        personalTab.classList.add("active");
        
      
    }
    if (form === education) {
        if (signupForm["currentjob"].value == "") {
            alert("Please Enter Your Current Job");
            return false;
        }
        if (signupForm["jobtype"].value == "") {
            alert("Please Enter Your Job Type");
            return false;
        }
        if (signupForm["company"].value == "") {
            alert("Please Enter Your Company Name");
            return false;
        }
          
        hide(personal);
        hide(professional);
        show(education);
        selectTab(educationTab);
        professionalTab.classList.add("check");
      
    }
};

const submitButton = () => {
    if (signupForm["college"].value == "") {
        showAlert("Enter College Name");
        return false;
    }
    if (signupForm["percentage"].value == "") {
        alert("Enter Aggregate Percentage");
        return false;
    }
    if (signupForm["degree"].value == "") {
        alert("Enter Your Degree");
        return false;
    }
    if (signupForm["branch"].value == "") {
        alert("Enter Branch Name");
        return false;
    }
  
    alert("Your account has been created successfully", () => {
        toLogin();
        users.push(signupForm["username"].value);
        signupForm.reset();
       console.log("Users List: ", users);
  });
  return true;
};

const hide = (element) => element.classList.add("hide");
const show = (element) => element.classList.remove("hide");
const select = (element) => element.classList.add("select");
const unSelect = (element) => element.classList.remove("select");

const selectTab = (tab) => {
  if (tab === professionalTab) {
    select(professionalTab);
    unSelect(personalTab);
    unSelect(educationTab);
  }

  if (tab === personalTab) {
    select(personalTab);
    unSelect(professionalTab);
    unSelect(educationTab);
  }

  if (tab === educationTab) {
    select(educationTab);
    unSelect(professionalTab);
    unSelect(personalTab);
  }
};

const toLogin = (e) => {
    hide(signup);
    show(login);
    personalTab.classList.remove("check");
    professionalTab.classList.remove("check");
};

const toSignup = (e) => {
    show(signup);
    hide(login);
    showForm(personal);
};


