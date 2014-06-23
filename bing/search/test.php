<?php
$query = 'sushi';

$apikey = 'gcamEGaVB3wftgnI/ui8FhzkPPqnH8hTxJycaYWM2Xg';
$ServiceRootURL = 'https://api.datamarket.azure.com/Bing/Search/';

$context = stream_context_create(array(
    'http'=>array(
        'request_fulluri'=>TRUE,
        'header' =>'Authorization: Basic '.base64_encode( $apikey . ':' . $apikey )
    )));

$request = $ServiceRootURL . 'Web?$format=json&Query=' . urlencode( '\''.$query.'\'' );
$response = file_get_contents( $request, FALSE, $context );

header( 'Content-type: application/json' );
echo $response;