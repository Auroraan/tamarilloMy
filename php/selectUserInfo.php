<?php
  $con=mysqli_connect("localhost","root","201511an","blog");
  if (mysqli_connect_errno())
  {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
  $sql="
  select * from user where nickname='$_POST[name]'
  ";
  $data=array();
  class User{
  public $id;
  public $nickname;
  public $tel;
  public $email;
  public $sex;
  public $password;
  public $face;
  }
  $result = mysqli_query($con,$sql);
  while($row = mysqli_fetch_array($result))
  {
     $user=new User();
     $user->id=$row[id];
     $user->nickname=$row[nickname];
     $user->tel=$row[tel];
     $user->email=$row[email];
     $user->sex=$row[sex];
     $user->password=$row[password];
     $user->face=$row[face];
     $data[]=$user;
  }
  echo json_encode($data);
  mysqli_close($con);
?>