<?php
/**
 * Created by PhpStorm.
 * User: ishi
 * Date: 2014/05/10
 * Time: 21:03
 */

$ayu = array();
$ayu['last-name'] = 'ishiwari';
$ayu['first-name'] = 'ayumi';

$json = json_encode($ayu);
header('Content-Type: application/json');
//echo '<h1>' . $json . '</h1>';
echo $json;
