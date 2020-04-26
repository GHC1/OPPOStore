<?php
  header('content-type:text/html;charset="utf-8"');

 $link =  mysql_connect("localhost","root","123456");

 if(!$link){
      print("数据库连接失败");
      exit;
 }

 mysql_set_charset("utf8");

 mysql_select_db("opposhopping");

 $sql = "SELECT * FROM goodsInfo ";
 //发送sql语句
 $res = mysql_query($sql);

 $arr = array();

 while($row = mysql_fetch_assoc($res) ){
      array_push($arr,$row);
 }

 print(json_encode($arr));

mysql_close($link);


?>