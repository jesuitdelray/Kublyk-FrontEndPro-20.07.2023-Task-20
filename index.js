function power(num, degree) {
    if (typeof num !== "number" || typeof degree !== "number") {
        throw new Error("Обидва аргументи повинні бути числами")
    }

    if (degree === 0) {
        return 1
    } else if (degree > 0) {
        return num * power(num, degree - 1)
    } else {
        return 1 / power(num, -degree)
    }
}
