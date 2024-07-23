<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'theme-01' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1:4307' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '(ZD%;1bryAeecQCCbm_EU{.31RoyZCL]+Pg*WZ8ahlB_3zvh/btHINc,eNFR2%vM' );
define( 'SECURE_AUTH_KEY',  ';.[5I_R%Ufb6:8u`cz)z{Ohhx3v_X#P>gel![z!Z);tvKzb tBZ]2tph![+S*TdP' );
define( 'LOGGED_IN_KEY',    ']@iv3z08unH]pOhgf(!T5kdtu/A+V/~S^&$C:(5::fec^uVVIr~Kz#pEUfRpkir<' );
define( 'NONCE_KEY',        'x3MU}->bw>w]G&@wWv$SX:je^3<tr!j |Jt;<)+t<Lq0kLX2}6qF;)K{,p4VaECO' );
define( 'AUTH_SALT',        'L~~6g=`phlb9-;H<[N=`}Wf5Us=zLo<QyP[>`-Q :X;VrwV|skg3k2f| 2Ab<75}' );
define( 'SECURE_AUTH_SALT', 'XpygN&k}FqYBYw+cEJY1dvP:OVv|/gqD/_?njPM8E>A{rr5mpX^>J1*)!6l5ts%1' );
define( 'LOGGED_IN_SALT',   'fTr53/ueK>ok2M(ZFIm_<7zw&#ZKt@#,JC/5yI8gK%Q?2qoA4~iEA<DSPKisaSs0' );
define( 'NONCE_SALT',       '3!u||+gral*gg2jGr#NIgh3<z}fz~#y_`( j0F((#H#AhZ@_*7IB3v=+1!n-py$|' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
