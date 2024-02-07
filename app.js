function calculateAge() {
    let birthday = document.getElementById("birthday").value;
    if (birthday === "") {
        document.getElementById("result").innerText = "لطفاً تاریخ تولد را وارد کنید.";
        return;
    }
    // when field not null be date converted
    birthday = new Date(birthday);
    // date emroz saved
    let today = new Date();
// 2. mohasebe age
    let age = today.getFullYear() - birthday.getFullYear();
    let months = today.getMonth() - birthday.getMonth();
    let days = today.getDate() - birthday.getDate();
// Correction of negative dates:
    if (months < 0 || (months === 0 && today.getDate() < birthday.getDate())) {
        age--;
        months += 12;
    }

    if (days < 0) {
        var lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, birthday.getDate());
        var daysInMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days = daysInMonth - lastMonth.getDate() + today.getDate();
        months--;
    }
// when be donya nayamde error bde:
    if (age < 0) {
        document.getElementById("result").innerText = "هنوز به دنیا نیامده‌اید!";
        // else display result:
    } else {
        document.getElementById("result").innerText = "شما " + age + " سال و " + months + " ماه و " + days + " روز سن دارید.";
    }
}
