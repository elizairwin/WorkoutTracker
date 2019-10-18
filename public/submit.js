// workout info that will be entered by the user
const $weight = $('#weight');
const $reps = $('#reps');
const $minutes = $('#minutes');
const $seconds = $('#seconds');
const $distance = $('#distance');

// submit buttons for workouts
const $submitRun = $('#submit-run');
const $submitLift = $('#submit-lift');

function postIt(route, object) {
    $.post(`/api/${route}`, object)
        .then((data) => {
            window.location.reload(true);
        })
        .catch((err) => {
            console.log(err);
        });
}

// var for errors
const $error = $('#error');

function postRun() {
    const distance = $distance.val().trim();
    const minutes = $minutes.val().trim();
    const seconds = $seconds.val().trim();

    if (isNaN(distance) || distance < 0) {
        $error.text('Please enter a valid distance.');
    } else if (isNaN(minutes) || minutes < 0) {
        $error.text('Please enter valid minutes.');
    } else if (isNaN(seconds) || seconds < 0) {
        $error.text('Please enter valid seconds.');

    } else {
        const runObject = {
            distance,
            minutes,
            seconds,
        };

    postIt('run', runObject);
    }
}

function postLift() {
    const weight = $weight.val().trim();
    const reps = $reps.val().trim();
    const minutes = $minutes.val().trim();
    const seconds = $seconds.val().trim();

    if (isNaN(weight) || weight < 1) {
        $error.text('Please enter a valid weight.');
    } else if (isNaN(reps) || reps < 1) {
        $error.text('Please enter valid reps.');
    } else if (isNaN(minutes) || minutes < 0) {
        $error.text('Please enter valid minutes.');
    } else if (isNaN(seconds) || seconds < 0) {
        $error.text('Please enter valid seconds.');

    } else {
        const liftObject = {
            weight,
            reps,
            minutes,
            seconds,s
        };

        postIt('lift', liftObject);
    }
}

$submitRun.on('click', postRun);
$submitLift.on('click', postLift);