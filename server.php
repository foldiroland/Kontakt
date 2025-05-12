<?php
header("Content-Type: text/plain");

// JSON adatok fogadása
$data = json_decode(file_get_contents("php://input"), true);

// Ellenőrzés, hogy vannak-e adatok
if(isset($data['name']) && isset($data['email']) && isset($data['message'])) {
    $name = htmlspecialchars($data['name']);
    $email = htmlspecialchars($data['email']);
    $message = htmlspecialchars($data['message']);

    // Itt történik a feldolgozás (pl. adatbázisba mentés, e-mail küldés, stb.)
    // Ideiglenesen csak visszaküldjük az adatokat
    echo "Név: $name\nE-mail: $email\nÜzenet: $message\nÜzenet sikeresen elküldve!";
} else {
    echo "Hiba: Hiányzó adatok.";
}
?>