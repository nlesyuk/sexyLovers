<?php
function get_ip(){
    if (!empty($_SERVER['HTTP_CLIENT_IP']))    {
        $ip = $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))    {
        $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    } else {
        $ip = $_SERVER['REMOTE_ADDR'];
    }
    return $ip;
}

$is_bot = preg_match( "~(Google|Yahoo|Rambler|Bot|Yandex|Spider|Snoopy|Crawler|Finder|Mail|curl)~i", $_SERVER['HTTP_USER_AGENT'] );
if( !$is_bot ) {
    $IPs = get_ip();
    $ip  = explode(",", $IPs);
}

$get_location = "https://api.ipinfodb.com/v3/ip-city/?key=10376990a6c7e07567a8beeda379911a15af1bcc5e86e898820530ab5c79dc1c&ip=". trim($ip[0]);

$result = file_get_contents($get_location);
$resultArr = explode(";", $result);

$json = json_encode( $resultArr );
echo $json;
?>