<?php
    $db = ["Błękitny anioł",
            "Światła wielkiego miasta",
            "Kacza zupa",
            "Panowie w cylindrach",
            "Towarzysze broni",
            "Ludzie za mgłą",
            "Przeminęło z wiatrem",
            "Reguły gry",
            "Grona gniewu",
            "Obywatel Kane",
            "Iwan Groźny",
            "Komedianci",
            "Paisà",
            "Złodzieje rowerów",
            "Trzeci człowiek",
            "Asfaltowa dżungla",
            "Rashōmon",
            "Bulwar Zachodzącego Słońca",
            "Deszczowa piosenka",
            "Zakazane zabawy",
            "Cena strachu",
            "Wieczór kuglarzy",
            "Okno na podwórze",
            "La strada",
            "Siedmiu samurajów",
            "Buntownik bez powodu",
            "Uśmiech nocy",
            "Siódma pieczęć",
            "Ucieczka skazańca",
            "Tam, gdzie rosną poziomki",
            "Dwunastu gniewnych ludzi",
            "Pół żartem, pół serio",
            "Przygoda",
            "Zeszłego roku w Marienbadzie",
            "Viridiana",
            "Samotność długodystansowca",
            "Milczenie",
            "Osiem i pół",
            "Lampart",
            "Przygody Toma Jonesa",
            "Grek Zorba",
            "Powiększenie",
            "Pociągi pod specjalnym nadzorem",
            "Piękność dnia",
            "Spotkałem nawet szczęśliwych Cyganów",
            "Bonnie i Clyde",
            "Absolwent",
            "2001: Odyseja kosmiczna",
            "Dziecko Rosemary",
            "Andriej Rublow",
            "Nocny kowboj",
            "MASH",
            "Był sobie drozd",
            "Konformista",
            "Posłaniec",
            "Amarcord",
            "Śmierć w Wenecji",
            "Francuski łącznik",
            "Kabaret",
            "Szepty i krzyki",
            "Ojciec chrzestny",
            "Chinatown",
            "Rozmowa",
            "Strach na wróble",
            "Szczęśliwy człowiek",
            "Kalina czerwona",
            "Dyskretny urok burżuazji",
            "Portret rodzinny we wnętrzu",
            "Piknik pod Wiszącą Skałą",
            "Nakarmić kruki",
            "Wniebowstąpienie",
            "Annie Hall",
            "Trzy kobiety",
            "Mroczny przedmiot pożądania",
            "Gospodarz stadniny",
            "Łowca jeleni",
            "Czas apokalipsy",
            "Manhattan",
            "Blaszany bębenek",
            "Wściekły Byk",
            "Mefisto",
            "Rydwany ognia",
            "Łowca androidów",
            "Fanny i Aleksander",
            "Ran",
            "Piwo",
            "Misja",
            "Ofiarowanie",
            "Droga węża",
            "Imię róży",
            "Nietykalni",
            "Uczta Babette",
            "Pejzaż we mgle",
            "Dzikość serca",
            "Barton Fink",
            "Królewska faworyta",
            "Złodziej dzieci"];

    if(!empty($_POST['query'])){
        $query = $_POST['query'];
        $result = array();
        $counter = 0;
        foreach($db as $value) {
            if(strtolower($query) == strtolower(substr($value, 0, strlen($query)))) {
                $result[] = $value;
                $counter++;
                if($counter >= 10)
                    break;
            }
        }
        echo json_encode($result);
    }
?>