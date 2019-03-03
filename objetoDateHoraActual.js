<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Hora Actual</title>
</head>
<body>
  <script>
  function printTime(){
    var d=new Date();
    var hours=d.getHours();
    var mins=d.getMinutes();
    var secs=d.getSeconds();
    document.body.innerHTML=hours+ ":"+mins+":"+secs;
  }
  setInterval(printTime,1000);

  </script>

</body>
</html>
