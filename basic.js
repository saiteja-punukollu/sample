const form = document.getElementById("myForm");

const course = document.getElementById("course");

const courses = [
    { value: "cse", text: "CSE" },
    { value: "ece", text: "ECE" },
    { value: "eee", text: "EEE" },
    { value: "mech", text: "Mechanical" }
];

courses.forEach(item => {
    const option = document.createElement("option");

    option.value = item.value;
    option.textContent = item.text;

    if (item.value === "mech") {
        option.selected = true;
    }

    course.append(option);
});

const othersRadio = document.createElement("input")

othersRadio.type = "radio";
othersRadio.id = "others";
othersRadio.name = "gender";
othersRadio.value = "others";

const othersLabel = document.createElement("label");

othersLabel.htmlFor = "others";
othersLabel.textContent = "Others";

const genderLabel = document.querySelector('label[for="female"]');

genderLabel.after(othersRadio, othersLabel);

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const course = document.getElementById("course").value;

    const genderElement = document.querySelector(
        'input[name="gender"]:checked'
    );

    const gender = genderElement ? genderElement.value : "";

    //console.log(name);
    console.log(course);
    console.log(gender);
});