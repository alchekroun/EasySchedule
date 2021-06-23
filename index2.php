<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <!-- Font Awesome -->
    <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
            rel="stylesheet"
    />
    <!-- Google Fonts -->
    <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            rel="stylesheet"
    />
    <!-- MDB -->
    <link
            href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.6.0/mdb.min.css"
            rel="stylesheet"
    />
    <!-- MDB -->
    <script
            type="text/javascript"
            src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.6.0/mdb.min.js"
    ></script>

</head>
<body>
    <input name="tableauProf" id="tableauProf" value="<?php echo (isset($_POST['tableauProf']))?$variable:'';?>" style="display:none;">
    <input name="tableauMatiere" id="tableauMatiere" value="<?php echo (isset($_POST['tableauMatiere']))?$variable:'';?>" style="display:none;">

    <script language="javascript">
    alert(document.getElementById('tableauProf').value)
    </script>


    <script src="tableFunction.js"></script>
    <script src="FD.js/fd.js"></script>
    <script src="models/Course.js"></script>
    <script src="models/Slot.js"></script>
    <script src="models/Teacher.js"></script>
    <script src="models/Lecture.js"></script>
    <script src="models/AmphiTeacher.js"></script>
    <script src="models/Competence.js"></script>
    <script src="models/Room.js"></script>
    <script src="models/PhysicalRoom.js"></script>
    <script src="models/TdTeacher.js"></script>
    <script src="models/Timetable.js"></script>
    <script src="models/ZoomRoom.js"></script>
    <script src="testPart1.js"></script>
    <script src="testConstraint.js"></script>
    <script src="testPart3.js"></script>
</body>
</html>
