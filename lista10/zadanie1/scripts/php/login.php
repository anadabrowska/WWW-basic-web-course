<?php
    $errors = array();
    $data = array();

    if(empty($_POST['login']))
        $errors['login'] = 'Login is required!';
    if(empty($_POST['pass']))
        $errors['pass'] = 'Password is required!';
    if(empty($_POST['pass2']))
        $errors['pass2'] = 'Confirmation is required!';
    if(empty($_POST['month']) || empty($_POST['day']) || empty($_POST['year']))
        $errors['date'] = 'Date is required!';

    if(!empty($errors)) {
        $data['success'] = false;
        $data['errors'] = $errors;
    } else {
        $data['success'] = true;

        // TUTAJ MOZNA JAKAS SESJE POSTAWIC CZY CUS
    }

    echo json_encode($data);
?>
