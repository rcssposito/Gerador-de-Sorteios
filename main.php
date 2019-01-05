<!doctype html>
<html lang="pt-br">
    
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>
            Sorteio de Participantes
        </title>
        <link rel="shortcut icon" type="image/x-icon" href="img\sorteio.ico">
        <link rel="stylesheet" type="text/css" href="css\main.css">
    </head>

    <body>
        <!--criação do array-->
        <header id="title">
            <ul>
                <h1>
                    <li>
                        <a href="index.html">
                            Gerador de Sorteios
                        </a>
                    </li>
                    <li>
                        <p>
                            Para uma melhor experiência, utilize a versão desktop.
                        </p>
                </li>
                </h1>            
            </ul>
        </header>
        
        <?php
        $participantes = $_GET["p"];
        $c = array();
        
        for( $i = 1; $i <= $participantes; $i++ ){
            $c[] = $i;
        }

        //embaralhar
            shuffle($c);
        ?>

        <!--Seleção de rodadas-->
        <main id="results">
            <?php
            $r = $_GET["r"];
            for( $f = 1; $f <= $r ; $f++ ){
                $d = $f-1;

                echo "<div class='corpo' value='$f' draggable='true'
                title='Você pode arrastar as caixas ou apagá-las com dois cliques'>";
                echo "<header class='player'> Nº $f </header>";
                echo "<footer class='value'> $c[$d] </footer>";
                echo "</div>";
            }             
            ?>
        </main>

        <script src="js\main.js"></script>
    </body>
</html>