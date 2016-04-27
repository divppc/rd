<?php

    function complete_mail() {        
        $mess = ' 
            <b>Name: </b>'.$_POST['form-name'].'<br />
            <b>Email: </b>'.$_POST['form-email'].'<br />
            <b>Type of service: </b>'.$_POST['form-type'].'<br />
            <b>Budjet: </b>'.$_POST['form-budjet'].'<br />
            <b>Message: </b>'.$_POST['form-text'].'<br />
        '; 

        // подключаем файл класса для отправки почты 
        require 'class.phpmailer.php'; 
        //iconv_set_encoding("internal_encoding", "UTF-8");
        
        $mail = new PHPMailer(); 
        $mail->From = 'roma_d@mail.ru';      // от кого 
        $mail->FromName = 'Заявка с сайта RD';   // от кого 
        $mail->AddAddress('okal.ihor@gmail.com', 'Игорь'); // кому - адрес, Имя 
        $mail->IsHTML(true);        // выставляем формат письма HTML 
        $mail->CharSet = "utf-8";
        $mail->Subject = 'Заявка с сайта';  // тема письма
        $mail->setLanguage('ru');

        if (!empty($_FILES['attachfile']['name'][0])) {
            foreach ($_FILES['attachfile']['name'] as $key => $value) {
                $out_files[] = array("name"=>$_FILES['attachfile']['name'][$key], "tmp_name" => $_FILES['attachfile']['tmp_name'][$key]);
            }
            $filesSend = true;
        } else {
            $filesSend = false;    
        }
        if ($filesSend) {
            foreach ($out_files as $k=>$v) {
                $mail->AddAttachment($out_files[$k]['tmp_name'], $out_files[$k]['name']);
            }
        }


        $mail->Body = $mess; 
        //$mess = iconv("UTF-8", "WINDOWS-1251", $mess);
        // отправляем наше письмо 
        if (!$mail->Send()) die ('Mailer Error: '.$mail->ErrorInfo); 
        //echo 'Спасибо! Ваше письмо отправлено, через несколько секунд вы будете перемещены на главную страницу.';
        //header("Refresh:3;./index.html");
        //echo true;

        header("Location: ./");
}

function output_err($num) 
{ 
    $err[0] = 'ОШИБКА! Не введено имя.'; 
    $err[1] = 'ОШИБКА! Неверно введен e-mail.'; 
    $err[2] = 'ОШИБКА! Не введен телефон.'; 
    echo '<p>'.$err[$num].'</p>';   
    exit(); 
}

if (!empty($_POST['submit'])) complete_mail(); 
//else echo 'Что-то не так';

?> 