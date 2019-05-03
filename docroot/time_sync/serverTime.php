<?php
date_default_timezone_set("Europe/Minsk");
$now = new DateTime();
echo $now->format("j M Y H:i:s") . "\n";
