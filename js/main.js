$(function () {
    // ハンバーガーメニューをクリックした時
    $(".toggle-btn").on("click", function () {
        $("header").toggleClass("open");
    });
    // ヘッダーに対してopenクラスを付与
    // openクラスがついているときはopenクラスを削除
    // toggleClassメソッドはその両方を行う

    let toggle = $(".toggle-btn");
    // 最初に画面が表示された時は、トップに戻るボタンを非表示に設定
    toggle.hide();

    // スクロールイベント（スクロールされた際に実行）
    $(window).scroll(function () {
        // スクロール位置が700pxを超えた場合
        if ($(this).scrollTop() > 700) {
            // トップに戻るボタンを表示する
            toggle.fadeIn();

            // スクロール位置が700px未満の場合
        } else {
            // トップに戻るボタンを非表示にする
            toggle.fadeOut();
        }
    });
    /*=================================================
    スムーススクロール
    ===================================================*/
    // ページ内のリンクをクリックした時に動作する
    $('a[href^="#"]').click(function () {
        // クリックしたaタグのリンクを取得
        let href = $(this).attr("href");
        // ジャンプ先のid名をセット hrefの中身が#もしくは空欄なら,htmlタグをセット
        let target = $(href == "#" || href == "" ? "html" : href);
        // ページトップからジャンプ先の要素までの距離を取得
        let position = target.offset().top;
        // animateでスムーススクロールを行う   ページトップからpositionだけスクロールする
        // 600はスクロール速度で単位はミリ秒  swingはイージングのひとつ
        $("html, body").animate({ scrollTop: position }, 600, "swing");
        // urlが変化しないようにfalseを返す
        return false;
    });


    /*=================================================
     トップに戻る
     ===================================================*/
    let pagetop = $(".to-top");
    // 最初に画面が表示された時は、トップに戻るボタンを非表示に設定
    pagetop.hide();

    // スクロールイベント（スクロールされた際に実行）
    $(window).scroll(function () {
        // スクロール位置が700pxを超えた場合
        if ($(this).scrollTop() > 700) {
            // トップに戻るボタンを表示する
            pagetop.fadeIn();

            // スクロール位置が700px未満の場合
        } else {
            // トップに戻るボタンを非表示にする
            pagetop.fadeOut();
        }
    });

    // クリックイベント（ボタンがクリックされた際に実行）
    pagetop.click(function () {
        // 0.5秒かけてページトップへ移動
        $("body,html").animate({ scrollTop: 0 }, 500);

        // イベントが親要素へ伝播しないための記述
        // ※詳しく知りたい方は「イベント　バブリング」または「jQuery バブリング」で調べてみてください
        return false;
    });


    $(".party-list-img").slick({
        arrows: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    centerPadding: "0",
                    slidesToShow: 1,
                },
            },
        ],
    });
    $(".party-left-img").slick({
        rtl: true,
        arrows: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: "50px",
                    slidesToShow: 1,
                },
            },
        ],
    });

});




