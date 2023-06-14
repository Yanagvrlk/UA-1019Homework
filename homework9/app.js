

$(document).ready(function () {
    // Завдання 1

    $("h2.head").css("background-color", "green");
    $("h2.head .inner").css("font-size", "35px");

    // Завдання 2

    $("a[href^='http://']").attr("target", "_blank");

    // Завдання 3

    $("h3 + div").each(function () {
        const $div = $(this);
        const $h3 = $div.prev("h3");
        $div.insertBefore($h3);
    });


    // Завдання 4

    const checkboxes = $("input[type='checkbox']");
    let checkedCount = 0;

    checkboxes.on("change", function () {
        if ($(this).is(":checked")) {
            checkedCount++;
            if (checkedCount >= 3) {
                checkboxes.prop("disabled", true);
            }
        }
    });
});





