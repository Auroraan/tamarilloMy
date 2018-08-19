<?php
  $con=mysqli_connect("localhost","root","201511an","blog");
  if (mysqli_connect_errno())
  {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
  $sql="
  select count(*) as num from user where nickname='$_POST[nickname]' and password='$_POST[password]'
  ";
  $data=array();
  class User{
  public $count;
  }
  $result = mysqli_query($con,$sql);
  while($row = mysqli_fetch_array($result))
  {
     $user=new User();
     $user->count=$row[num];
     $data[]=$user;
  }
  echo json_encode($data);
  mysqli_close($con);
?>