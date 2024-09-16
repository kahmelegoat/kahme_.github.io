<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $subject = "Réinitialisation de votre mot de passe";
    $message = "Bonjour,\n\nNous avons reçu une demande de réinitialisation de mot de passe pour votre compte. Si vous n'avez pas fait cette demande, vous pouvez ignorer cet e-mail.\n\nPour réinitialiser votre mot de passe, veuillez cliquer sur le lien suivant:\n\n[Insérez ici le lien de réinitialisation]\n\nCordialement,\nL'équipe de support.";
    $headers = "From: support@example.com";

    if (filter_var($to, FILTER_VALIDATE_EMAIL)) {
        if (mail($to, $subject, $message, $headers)) {
            echo "Un e-mail de réinitialisation a été envoyé à $to";
        } else {
            echo "L'envoi de l'e-mail a échoué.";
        }
    } else {
        echo "Adresse e-mail invalide.";
    }
}
?>
