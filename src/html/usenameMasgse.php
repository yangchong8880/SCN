<?php
       	session_start();

       	if(isset($_SESSION['login_email'])){
       	       $res = "'".(string)$_SESSION['login_email']."'";
       		 echo "{'state':true,'clientName':".$res."}";
       	}else {
       		echo "{'state':false}";
       		exit;
       	}
?>
