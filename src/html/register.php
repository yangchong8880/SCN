<?php
	include 'DBHelper.php';
	include 'format.php';

	//判断当前 email 是否已存在数据表中
	$emailCheck = format("select * from scn where usename='{0}'", $_POST["usename"]);
	$result = query($emailCheck);
	//当前 email 不存在，执行插入操作
	if(count($result) < 1){
		$sql = format("insert into scn(usename, password, conpassword) values('{0}', '{1}', '{2}')", $_POST["usename"], $_POST["password"], $_POST["conpassword"]);
		// echo $sql;
		$excute = excute($sql);
		if($excute){
			echo "{state: true}";
		} else {
			echo "{state: false, message: '插入失败！！！'}";
		}
	} else {
		echo "{state: false, message: '该用户名已被注册！！！'}";
	}
?>