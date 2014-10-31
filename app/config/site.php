<?php

return array(

    'paginate_limit' => 30,

    ## Disable functionality of changing url "on-the-fly" for generating
    ## seo-friendly url (via URL::route('page', '...')) with right various url-segments for multilingual pages.
    'disable_url_modification' => 0,

    ## Directory for module UPLOADS
    'uploads_dir' => public_path('uploads/files'),

    'uploads_photo_dir' => public_path('uploads'),
    'uploads_thumb_dir' => public_path('uploads/thumbs'),
    'uploads_photo_public_dir' => '/uploads',
    'uploads_thumb_public_dir' => '/uploads/thumbs',

    'galleries_photo_dir' => public_path('uploads/galleries'),
    'galleries_thumb_dir' => public_path('uploads/galleries/thumbs'),
    'galleries_photo_public_dir' => '/uploads/galleries',
    'galleries_thumb_public_dir' => '/uploads/galleries/thumbs',

    'dengionline' => array(
        #'url' => 'https://www.onlinedengi.ru/wmpaycheck.php',
        'url' => 'https://paymentgateway.ru/pgw/',
        'project' => '7803',
        'secret' => 'nhTB7hb67ihn^&Ij^*(niJfhT&H@QECQ',
        'amount' => '100',
        'return_url_success' => URL::route('dengionline.return_url_success'),
        'return_url_fail' => URL::route('dengionline.return_url_fail'),
        'notification_url' => URL::route('dengionline.notification_url'),
    ),
);

/**
 * IP: 81.23.121.50
 * l: root
 * p: splqndlr54
 *
 * /data/www/default/quest
 */