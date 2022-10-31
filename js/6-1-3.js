var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
  if (windowwidth > 768){
    var responsiveImage = [//PC用の画像
      { src: 'images/rule1.jpg'},
      { src: 'images/rule1.jpg'},
      { src: 'images/rule1.jpg'}
    ];
  } else {
    var responsiveImage = [//タブレットサイズ（768px）以下用の画像
      { src: 'images/rule1_sp.jpg'},
      { src: 'images/rule1_sp.jpg'},
      { src: 'images/rule1_sp.jpg'}
    ];
  }

var windowwidth2 = window.innerWidth || document.documentElement.clientWidth || 0;
  if (windowwidth2 > 768){
    var responsiveImage2 = [//PC用の画像
      { src: 'images/rule2.jpg'},
      { src: 'images/rule2.jpg'},
      { src: 'images/rule2.jpg'}
    ];
  } else {
    var responsiveImage2 = [//タブレットサイズ（768px）以下用の画像
      { src: 'images/rule2.jpg'},
      { src: 'images/rule2.jpg'},
      { src: 'images/rule2.jpg'}
    ];
  }

var windowwidth3 = window.innerWidth || document.documentElement.clientWidth || 0;
  if (windowwidth3 > 768){
    var responsiveImage3 = [//PC用の画像
      { src: 'images/rule3.jpg'},
      { src: 'images/rule3.jpg'},
      { src: 'images/rule3.jpg'}
    ];
  } else {
    var responsiveImage3 = [//タブレットサイズ（768px）以下用の画像
      { src: 'images/rule3.jpg'},
      { src: 'images/rule3.jpg'},
      { src: 'images/rule3.jpg'}
    ];
  }

var windowwidth4 = window.innerWidth || document.documentElement.clientWidth || 0;
  if (windowwidth4 > 768){
    var responsiveImage4 = [//PC用の画像
      { src: 'images/rule4.jpg'},
      { src: 'images/rule4.jpg'},
      { src: 'images/rule4.jpg'}
    ];
  } else {
    var responsiveImage4 = [//タブレットサイズ（768px）以下用の画像
      { src: 'images/rule4.jpg'},
      { src: 'images/rule4.jpg'},
      { src: 'images/rule4.jpg'}
    ];
  }

var windowwidth5 = window.innerWidth || document.documentElement.clientWidth || 0;
  if (windowwidth5 > 768){
    var responsiveImage5 = [//PC用の画像
      { src: 'images/rule5.jpg'},
      { src: 'images/rule5.jpg'},
      { src: 'images/rule5.jpg'}
    ];
  } else {
    var responsiveImage5 = [//タブレットサイズ（768px）以下用の画像
      { src: 'images/rule5.jpg'},
      { src: 'images/rule5.jpg'},
      { src: 'images/rule5.jpg'}
    ];
  }

  var windowwidth6 = window.innerWidth || document.documentElement.clientWidth || 0;
  if (windowwidth6 > 768){
    var responsiveImage6 = [//PC用の画像
      { src: 'images/rule6.jpg'},
      { src: 'images/rule6.jpg'},
      { src: 'images/rule6.jpg'}
    ];
  } else {
    var responsiveImage6 = [//タブレットサイズ（768px）以下用の画像
      { src: 'images/rule6.jpg'},
      { src: 'images/rule6.jpg'},
      { src: 'images/rule6.jpg'}
    ];
  }

var windowwidth7 = window.innerWidth || document.documentElement.clientWidth || 0;
  if (windowwidth7 > 768){
    var responsiveImage7 = [//PC用の画像
      { src: 'images/rule7.jpg'},
      { src: 'images/rule7.jpg'},
      { src: 'images/rule7.jpg'}
    ];
  } else {
    var responsiveImage7 = [//タブレットサイズ（768px）以下用の画像
      { src: 'images/rule7.jpg'},
      { src: 'images/rule7.jpg'},
      { src: 'images/rule7.jpg'}
    ];
  }

var windowwidth8 = window.innerWidth || document.documentElement.clientWidth || 0;
  if (windowwidth8 > 768){
    var responsiveImage8 = [//PC用の画像
      { src: 'images/rule8.jpg'},
      { src: 'images/rule8.jpg'},
      { src: 'images/rule8.jpg'}
    ];
  } else {
    var responsiveImage8 = [//タブレットサイズ（768px）以下用の画像
      { src: 'images/rule8.jpg'},
      { src: 'images/rule8.jpg'},
      { src: 'images/rule8.jpg'}
    ];
  }

var windowwidth9 = window.innerWidth || document.documentElement.clientWidth || 0;
  if (windowwidth9 > 768){
    var responsiveImage9 = [//PC用の画像
      { src: 'images/rule9.jpg'},
      { src: 'images/rule9.jpg'},
      { src: 'images/rule9.jpg'}
    ];
  } else {
    var responsiveImage9 = [//タブレットサイズ（768px）以下用の画像
    { src: 'images/rule9.jpg'},
      { src: 'images/rule9.jpg'},
      { src: 'images/rule9.jpg'}
    ];
  }


var windowwidth0 = window.innerWidth || document.documentElement.clientWidth || 0;
  if (windowwidth0 > 768){
    var responsiveImage0 = [//PC用の画像
      { src: 'images/tetsuo.jpg'},
      { src: 'images/tetsuo2.png'}
    ];
  } else {
    var responsiveImage0 = [//タブレットサイズ（768px）以下用の画像
      { src: 'images/tetsuo.jpg'},
      { src: 'images/tetsuo2.png'}
    ];
  }


$('#slider').vegas({
  overlay: true,//画像の上に網線やドットのオーバーレイパターン画像を指定。
  transition: 'blur',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
  transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
  delay: 10000,//スライド間の遅延をミリ秒単位で。
  animationDuration: 20000,//スライドアニメーション時間をミリ秒単位で設定
  animation: 'kenburns',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
  slides: responsiveImage,//画像設定を読む
  timer:false,// プログレスバーを非表示したい場合はこのコメントアウトを外してください
});

$('#slider2').vegas({
  overlay: true,//画像の上に網線やドットのオーバーレイパターン画像を指定。
  transition: 'blur',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
  transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
  delay: 10000,//スライド間の遅延をミリ秒単位で。
  animationDuration: 20000,//スライドアニメーション時間をミリ秒単位で設定
  animation: 'kenburns',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
  slides: responsiveImage2,//画像設定を読む
  timer:false,// プログレスバーを非表示したい場合はこのコメントアウトを外してください
});

$('#slider3').vegas({
  overlay: true,//画像の上に網線やドットのオーバーレイパターン画像を指定。
  transition: 'blur',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
  transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
  delay: 10000,//スライド間の遅延をミリ秒単位で。
  animationDuration: 20000,//スライドアニメーション時間をミリ秒単位で設定
  animation: 'kenburns',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
  slides: responsiveImage3,//画像設定を読む
  timer:false,// プログレスバーを非表示したい場合はこのコメントアウトを外してください
});

$('#slider4').vegas({
  overlay: true,//画像の上に網線やドットのオーバーレイパターン画像を指定。
  transition: 'blur',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
  transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
  delay: 10000,//スライド間の遅延をミリ秒単位で。
  animationDuration: 20000,//スライドアニメーション時間をミリ秒単位で設定
  animation: 'kenburns',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
  slides: responsiveImage4,//画像設定を読む
  timer:false,// プログレスバーを非表示したい場合はこのコメントアウトを外してください
});

$('#slider5').vegas({
  overlay: true,//画像の上に網線やドットのオーバーレイパターン画像を指定。
  transition: 'blur',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
  transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
  delay: 10000,//スライド間の遅延をミリ秒単位で。
  animationDuration: 20000,//スライドアニメーション時間をミリ秒単位で設定
  animation: 'kenburns',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
  slides: responsiveImage5,//画像設定を読む
  timer:false,// プログレスバーを非表示したい場合はこのコメントアウトを外してください
});

$('#slider6').vegas({
  overlay: true,//画像の上に網線やドットのオーバーレイパターン画像を指定。
  transition: 'blur',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
  transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
  delay: 10000,//スライド間の遅延をミリ秒単位で。
  animationDuration: 20000,//スライドアニメーション時間をミリ秒単位で設定
  animation: 'kenburns',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
  slides: responsiveImage6,//画像設定を読む
  timer:false,// プログレスバーを非表示したい場合はこのコメントアウトを外してください
});

$('#slider7').vegas({
  overlay: true,//画像の上に網線やドットのオーバーレイパターン画像を指定。
  transition: 'blur',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
  transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
  delay: 10000,//スライド間の遅延をミリ秒単位で。
  animationDuration: 20000,//スライドアニメーション時間をミリ秒単位で設定
  animation: 'kenburns',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
  slides: responsiveImage7,//画像設定を読む
  timer:false,// プログレスバーを非表示したい場合はこのコメントアウトを外してください
});

$('#slider8').vegas({
  overlay: true,//画像の上に網線やドットのオーバーレイパターン画像を指定。
  transition: 'blur',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
  transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
  delay: 10000,//スライド間の遅延をミリ秒単位で。
  animationDuration: 20000,//スライドアニメーション時間をミリ秒単位で設定
  animation: 'kenburns',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
  slides: responsiveImage8,//画像設定を読む
  timer:false,// プログレスバーを非表示したい場合はこのコメントアウトを外してください
});

$('#slider9').vegas({
  overlay: true,//画像の上に網線やドットのオーバーレイパターン画像を指定。
  transition: 'blur',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
  transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
  delay: 10000,//スライド間の遅延をミリ秒単位で。
  animationDuration: 20000,//スライドアニメーション時間をミリ秒単位で設定
  animation: 'kenburns',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
  slides: responsiveImage9,//画像設定を読む
  timer:false,// プログレスバーを非表示したい場合はこのコメントアウトを外してください
});

$('#slider0').vegas({
  overlay: true,//画像の上に網線やドットのオーバーレイパターン画像を指定。
  transition: 'blur',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
  transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
  delay: 10000,//スライド間の遅延をミリ秒単位で。
  animationDuration: 20000,//スライドアニメーション時間をミリ秒単位で設定
  animation: 'kenburns',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
  slides: responsiveImage0,//画像設定を読む
  timer:false,// プログレスバーを非表示したい場合はこのコメントアウトを外してください
});