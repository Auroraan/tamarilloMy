<?php
  $con=mysqli_connect("localhost","root","201511an","blog");
  if (mysqli_connect_errno())
  {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
  $sql="insert into user(nickname,tel,email,sex,password,face)
  values
  ('$_POST[nickname]','$_POST[tel]','$_POST[email]',$_POST[sex],'$_POST[password]','$_POST[face]')";
  if(!mysqli_query($con,$sql))
  {
      echo "error";
  }
  else{
  echo '{"msg":"success","status":"2"}';
  }
  mysqli_close($con);
?>