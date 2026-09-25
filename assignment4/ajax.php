<?php
header('Content-Type: application/json');

function helloPHP() {
    return ["message" => "Hello PHP"];
}

function gradeOfStudent($marks) {
    $marks = (float) $marks;

    if ($marks >= 90) {
        $grade = "A+";
    } elseif ($marks >= 80) {
        $grade = "A";
    } elseif ($marks >= 70) {
        $grade = "B";
    } elseif ($marks >= 60) {
        $grade = "C";
    } elseif ($marks >= 50) {
        $grade = "D";
    } else {
        $grade = "F";
    }

    return ["message" => "Grade: $grade"];
}

function oddNumbers($n) {
    $list = [];
    for ($i = 1; $i <= $n; $i++) {
        if ($i % 2 != 0) {
            $list[] = $i;
        }
    }

    return ["oddNumbers" => $list];
}



function sortNumbers($numbers) {
    $arr = array_map('floatval', preg_split('/\s*,\s*|\s+/', trim($numbers), -1, PREG_SPLIT_NO_EMPTY));
    sort($arr);

    return ["sortedNumbers" => $arr];
}

function animalNames($count) {
    $animals = ["Cat", "Dog", "Cow", "Lion", "Tiger", "Elephant", "Rabbit", "Monkey", "Horse", "Panda"];
    $n = (int) $count;
    $result = [];

    for ($i = 0; $i < $n; $i++) {
        if (isset($animals[$i])) {
            $result[] = $animals[$i];
        } else {
            $result[] = $animals[$i % count($animals)];
        }
    }

    return ["animalNames" => $result];
}

function feedbackForm($data) {
    $name = isset($data['name']) ? trim($data['name']) : '';
    $password = isset($data['password']) ? trim($data['password']) : '';
    $gender = isset($data['gender']) ? $data['gender'] : 'Not selected';
    $course = isset($data['course']) ? $data['course'] : 'Not selected';
    $hiddenValue = isset($data['hiddenValue']) ? $data['hiddenValue'] : 'No value';

    return [
        "message" => "Name: $name, Password: $password, Gender: $gender, Course: $course, Hidden: $hiddenValue"
    ];
}

function animalImages($count) {
    $animals = [
        "cat" => "https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=400&q=80",
        "dog" => "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=400&q=80",
        "lion" => "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=400&q=80",
        "elephant" => "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=400&q=80",
        "tiger" => "https://images.unsplash.com/photo-1540860761230-80a08c1870e3?auto=format&fit=crop&w=400&q=80",
        "rabbit" => "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=400&q=80",
        "monkey" => "https://images.unsplash.com/photo-1504006833117-8886a355efbf?auto=format&fit=crop&w=400&q=80",
        "panda" => "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=400&q=80"
    ];

    $list = [];
    $n = (int) $count;
    $keys = array_keys($animals);

    for ($i = 0; $i < $n; $i++) {
        $key = $keys[$i % count($keys)];
        $list[] = $animals[$key];
    }

    return ["images" => $list];
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_POST['action'] ?? '';

    switch ($action) {
        case 'hello':
            echo json_encode(helloPHP());
            break;

        case 'grade':
            echo json_encode(gradeOfStudent($_POST['marks'] ?? 0));
            break;

        case 'oddNumbers':
            echo json_encode(oddNumbers((int) ($_POST['n'] ?? 0)));
            break;

        case 'sortNumbers':
            echo json_encode(sortNumbers($_POST['numbers'] ?? ''));
            break;

        case 'animalNames':
            echo json_encode(animalNames($_POST['count'] ?? 0));
            break;

        case 'feedback':
            echo json_encode(feedbackForm($_POST));
            break;

        case 'animalImages':
            echo json_encode(animalImages($_POST['count'] ?? 0));
            break;

        default:
            echo json_encode(["message" => "No action found"]);
    }
} else {
    echo json_encode(["message" => "This page only accepts POST requests."]);
}
