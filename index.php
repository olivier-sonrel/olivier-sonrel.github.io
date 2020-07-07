<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
        <meta charset="utf-8" name="viewport" content="width=device-width">
        <link rel="icon" href="favicon.ico" />
        <link rel="stylesheet" media="screen and (min-width: 641px)" href="css/screen-style.css" type="text/css" />
        <link rel="stylesheet" media="screen and (max-width: 640px)" href="css/mobile-style.css" type="text/css" />
        <title>Porfolio Olivier Sonrel</title>
</head>
<body class="flexFull">

    <section id="accueil" class="flex">
        <?php require ('templates/accueil.php'); ?>
    </section>
    <header class="flex">
        <?php require ('templates/header.php'); ?>
    </header>

<main>

    <section id="presentation" class="flexCol">
        <?php require ('templates/presentation.php'); ?>
    </section>

    <section id="realisation" class="flexCol">
        <?php require ('templates/realisation.php'); ?>   
    </section>

    <section id="activite" class="flexCol">
        <?php require ('templates/activite.php'); ?>
    </section>

    <section id="competence" class="flexCol">
        <?php require ('templates/competence.php'); ?>
    </section>
    <section id="contact" class="flexCol">
        <?php require ('templates/contact.php'); ?>
    </section>


</main>

<footer>
    <?php require ('templates/footer.php'); ?>
</footer>

<script src="scripts/jquery.js"></script>
<script src="scripts/suivi.js"></script>
<script src="https://d3js.org/d3.v4.min.js"></script>
<script src="competence/scale.js"></script>
<script src="competence/d31.js" charset="utf-8"></script>
<script src="competence/d32.js" charset="utf-8"></script>
<script src="scripts/carousel.js"></script>
</body>
</html>
