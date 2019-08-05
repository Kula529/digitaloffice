<?php
/**
 * Template Name: Kyselyt
 *
 * @package dude
 */

the_post();
?>
<!doctype html>
<html <?php language_attributes(); ?>><script>
/**
 *
 * 👋 Moi!
 *
 * Onpa mahtavaa, että sivustomme koodi on saanut sinut kiinnostumaan. Tuotannossa suurin osa on minifoituna,
 * mutta meidän kaikki tekeminen löytyy myös GitHubistamme: https://github.com/digitoimistodude
 *
 * Tämän sivuston anti löytyy osoitteesta https://github.com/digitoimistodude/dude - tutki rauhassa!
 *
 * Haluaisitko meille töihin? Lähetä sähköpostia osoitteeseen moro@dude.fi.
 * Avoimiin työpaikkoihimme voit tutustua osoitteessa https://www.dude.fi/tyopaikat
 *
 * Toivottavasti palaillaan!
 *
 *
 *                    `/shhyyyhhyy+:`
 *                 `+hh+.        `-+yds:
 *         :`  ./+omo`                -sdo`
 *         hd`dh/--.                    `+ms`
 *        ydsMN                           `om:
 *       +m` +m.                            -ms
 *       /N:`                                `dy
 *        -dNh+-..  :hyy+.                 -syyMs
 *       `dy.   sNhsN/ `/hh:                /M.-+.
 *       +N     mo -/     .sdo`             /M`
 *       om    +N`          `+dy:           `M:
 *       +m   -N:              -sds:`        +m.
 *       om  :N/````              -ohyo:`     om-
 *       ds +dhyysyyyyyyso/-.-:+oyyyyymNNmhs+:-/ms.
 *     .hd``.          `.-/oys+:.`     ``..:/ohNymNy:
 *     :/N+sN             :Nom+             /M.M: `.:/.
 *      `M/sM+           `ms /N`           `mM.yd
 *      /N`+MN:         -ms   sd-         -mdN .M-
 *      hy -M/dy/-..-:ohy-     :yhs+/::/ohh-yh  hy
 *     `M:  mo .:+ooo/-`         `.::///-` `N/  /N`
 *     +N   :N.    .:+sssso/-`-+syyyyyso:` yd   `M:
 *     mo    +m/-ohy+-.``.-/sho:.`    `-oddd`    mo
 *    -M.     .+y/`                       :      yh
 *    om                                         :M.
 *    hy                                          sm`
 *    N/.+                                       yyNd
 *   :MdMs                                       -Msys
 *   /-/N`                                        om-`
 *     mo `                                      dhdy:
 *    +Myhm                                      hy
 *    `.`/N                                 :s+:`/N`
 *       :M`-h                               +MoyhNo
 *       .MdNd  -h`                      :o` `M:  `.
 *       `y.my+hMo                        hNs:ds
 *         -so/:M./s              --     --hNyys
 *             -MdyM.   /:       ` ho`  .Mysyo.
 *              s- dy-odM- .    yh /Mmo./N
 *                 :Md::M+hM-  omsdyMs/ymy
 *                  y  sh+.om`+N.  .:/:  `
 *                          smN-
 *                           y:
 *
 */
</script>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="profile" href="http://gmpg.org/xfn/11">
  <?php wp_head(); ?>
</head>

<body class="template-surveys">

  <div id="page" class="site">
   <a class="skip-link screen-reader-text" href="#main"><?php esc_html_e( 'Skip to content', 'dude' ); ?></a>

   <div class="site-content">

      <main role="main" id="main" class="site-main">

        <div class="splash">
          <header class="survey-header">
            <img src="<?php echo get_template_directory_uri(); ?>/images/survey-logo.png" alt="Nyt voi antaa palautetta" />
            <h1>Miten projekti sujui? Menikö reisille vai tuliko timanttista jälkeä?</h1>

            <p>Keskinkertaista yritetään, mutta niin vaan priimaa tulee! Vai tuleeko?</p>
            <p>Olisi ihan mahtavaa, jos käyttäisit pari minuuttia aikaa ja kertoisit miten hoidimme hommamme. Vastauksesi ovat meille elintärkeitä ja auttavat kehittymään entistä paremmiksi.</p>

            <p><strong>Kiitos jo etukäteen!</strong></p>
          </header>

          <div class="survey-start-wrapper">
            <button class="survey-start-button">Aloita vastaaminen</button>
          </div>
        </div>

        <?php
        $id_or_title = 4;
        $display_title = false;
        $display_description = false;
        $display_inactive = false;
        $field_values = null;
        $ajax = false;
        $tabindex = 1;
        $echo = true;

        gravity_form( $id_or_title, $display_title, $display_description, $display_inactive, $field_values, $ajax, $tabindex, $echo );
        ?>

      </main><!-- #main -->
    </div><!-- #primary -->

  </div><!-- #page -->

<script src="//instant.page/1.2.2" type="module" integrity="sha384-2xV8M5griQmzyiY3CDqh1dn4z3llDVqZDqzjzcY+jCBCk/a5fXJmuZ/40JJAPeoU"></script>

<!-- Hotjar Tracking Code for www.dude.fi -->
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:8741,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>

<script>
  ( function( $ ) {
    $(function() {
      $('body').addClass('not-started');

      if ( $('.gform_validation_error').length ) {
        $('.splash').fadeOut();
        $('body').removeClass('not-started');
        $('.gform_wrapper').css('visibility', 'visible').hide().fadeIn('slow');
      }

      $('.survey-start-button').click(function() {
        $('.splash').fadeOut();
        $('body').removeClass('not-started');
        $('.gform_wrapper').css('visibility', 'visible').hide().fadeIn('slow');
      });
    });
  } )( jQuery );
</script>

</body>
</html>
