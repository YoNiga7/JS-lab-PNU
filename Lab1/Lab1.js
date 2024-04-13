function triangle(value1, type1, value2, type2) {
    console.log("Розв'язання прямокутного трикутника:");

    const validTypes = ['leg', 'hypotenuse', 'adjacent angle', 'opposite angle', 'angle'];
    if (!validTypes.includes(type1) || !validTypes.includes(type2)) {
        console.log("Помилка: Невірно вказані типи.");
        return "failed";
    }

    function checkValidValues(value, type) {
        if (value <= 0) {
            console.log("Помилка: Значення має бути додатнім числом.");
            return false;
        }
        if (type === 'leg' && value >= hypotenuse) {
            console.log("Помилка: Катет не може бути більшим або рівним гіпотенузі.");
            return false;
        }
        return true;
    }

    function checkValidAngles(angle1, angle2) {
        if (angle1 >= 90 || angle2 >= 90) {
            console.log("Помилка: Кути мають бути гострі.");
            return false;
        }
        return true;
    }

    let hypotenuse, leg, angle1, angle2;

    if (type1 === 'hypotenuse') {
        hypotenuse = value1;
        leg = value2;
    } else if (type2 === 'hypotenuse') {
        hypotenuse = value2;
        leg = value1;
    } else {
        console.log("Помилка: Не вказана гіпотенуза.");
        return "failed";
    }

    if (!checkValidValues(hypotenuse, 'hypotenuse') || !checkValidValues(leg, 'leg')) {
        return "failed";
    }

    angle1 = Math.asin(leg / hypotenuse) * (180 / Math.PI);
    angle2 = 90 - angle1;

    if (!checkValidAngles(angle1, angle2)) {
        return "failed";
    }

    console.log("c – гіпотенуза:", hypotenuse);
    console.log("a – катет:", leg);
    console.log("alpha – гострий кут, який лежить навпроти катета a:", angle1.toFixed(2), "градусів");
    console.log("beta – гострий кут, який лежить навпроти катета b:", angle2.toFixed(2), "градусів");

    return "success";
}

console.log(triangle(4, "leg", 8, "hypotenuse"));
console.log(triangle(8, "hypotenuse", 4, "leg"));
