<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en « wp-config.php » et remplir les
 * valeurs.
 *
 * Ce fichier contient les réglages de configuration suivants :
 *
 * Réglages MySQL
 * Préfixe de table
 * Clés secrètes
 * Langue utilisée
 * ABSPATH
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'd0373f0f' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'd0373f0f' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', 'WLKhdwCXLSzZ3XzJ' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/**
 * Type de collation de la base de données.
 * N’y touchez que si vous savez ce que vous faites.
 */
define( 'DB_COLLATE', '' );

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '{  LlD4/,BG~9XIo?m~?EUwSnY#J.?ityX/W}(Yp1Wwz!!~=aI?tzS,c/ G!~E,f' );
define( 'SECURE_AUTH_KEY',  'Yz{*%96.YrX,Iw PGR.|KeYy,f?4qSKm.Ijfw+e.mvST5RH}-R(9,0tb%[=6o3j0' );
define( 'LOGGED_IN_KEY',    ',0T|X8gKQM#X-65/[b-(W*{so5V!iJwW5]ka@fXTkc2VcT#[^L/qp*0(P[M#~tV.' );
define( 'NONCE_KEY',        '}Dp#p-*TsphazmRS#?nfO3hc%[4GmvGqaJ9-Q_!Y@Z!@,t*_6aBPPtVy`gSGbb2 ' );
define( 'AUTH_SALT',        '$CY8-9;_O]7C}}=,)l/jBV9&)aQK^e?iO!o7(-:/DYVeXnT8PQ1cM0z0>Y_bdzQ2' );
define( 'SECURE_AUTH_SALT', '&#XF*{{U61q3RIqffok4P?~EhQO=&pe_`_}%Nq2dZP5bWZ<;9uIDVvv[PlAYw1#t' );
define( 'LOGGED_IN_SALT',   'k<M6&n$A6ru]9.m.K{461]-,v_:oT!,VzTC4;^,a3_p:G77#G_ZJ::jz~t:K;;=t' );
define( 'NONCE_SALT',       'C/%tbm68|H+qhRg^N@TWg~zm:f]Z]3S6g~3h`a%a;~?)ys}N-(sd9D}M<gf7)p :' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp1_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( ! defined( 'ABSPATH' ) )
  define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once( ABSPATH . 'wp-settings.php' );
