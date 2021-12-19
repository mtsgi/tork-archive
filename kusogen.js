$(document).ready(Load);
function Load() {
  joutai();
  $("select").click(function () {
    joutai();
  });
  if (window.innerWidth >= 400) $("#forpc").show();
  $(".gen").click(function () {
    if ($("#mjs").val() == "dsc") $("#moj").removeClass("dsb");
    var tx = $("#tx").val();
    if (tx.length < 2 && !$("#qu").prop("checked")) {
      $("#area").append("<aside>2文字以上入力してください</aside>");
      return false;
    }
    var opt = $("#opt").val();
    url = "ks.html?" + opt + "=" + tx;
    if ($("#mjs").val() == "dsc") url += "&moj=" + $("#moj").val();
    if ($("#cut").val() == "dsc") url += "&cut=" + $("#split").val();
    if ($("#sn").prop("checked")) url += "&name=" + $("#sname").val();
    if ($("#sko").val() == "dsc") url += "&sko=" + $("#skosuu").val();
    if ($("#au").prop("checked")) url += "&author=" + $("#author").val();
    if ($("#before").val()) url += "&before=" + $("#before").val();
    if ($("#after").val()) url += "&after=" + $("#after").val();
    if ($("#qu").prop("checked")) url = "ks.html?" + $("#query").val();
    $("#area").append(
      "<aside>生成しました：<a href='" + url + "'>" + url + "</a></aside>"
    );
  });
  $("#mjs").change(function () {
    if ($("#mjs").val() == "dsc") $("#moj").removeClass("dsb");
    else $("#moj").addClass("dsb");
  });
  $("#q0").click(function () {
    alert(
      "クソ診断ジェネレータv2.0.3\n\n◆リリースノート\n[v2.0.3](2019/1/25)\n・名前表示機能の実装\n・説明文を色々わかりやすく\n[v2.0.2](2018/12/21)\n・ツイート時のURLを短縮\n[v2.0.1](2018/12/3)\n・ツイート画面を新しいタブで開くよう修正\n・ハッシュタグのスペースをアンダーバーに置換\n[v2.0.0](2018/12/3)\n・UIデザインを一新\n・selectオプションの選択状態による色付け\n・診断名指定オプションの位置を変更\n・入力した名前を保持(デバイスごと)\n・PC版を追加\n・スクリプトの動作設計を更新\n・先頭と末尾オプションを追加"
    );
  });
  $("#q1").click(function () {
    alert("入れ替える対象となる文字列を2文字以上入力します。");
  });
  $("#q2").click(function () {
    alert(
      "通常(固定の場合)は元の文の長さと同じ長さの分が生成されます。ランダムにすると、長さが1文字〜(元の文字列の文字数)文字の間でランダムに決定されます。"
    );
  });
  $("#q3").click(function () {
    alert("今のところ特に意味はないです。");
  });
  $("#q4").click(function () {
    alert(
      "文字数オプションを「指定する」にすると任意の文字数(1〜100の整数値)で出力結果の長さを固定できます。ran/fixは無視されます。"
    );
  });
  $("#q5").click(function () {
    alert(
      "文字列の区切り(スプリット)を任意の文字を使って指定することが可能になります。\n例えば文字列「ABC/123」に対して「/」でスプリットを行うと「ABC」「123」に分割されます（文字数の設定および文字数オプションは無視されます）。"
    );
  });
  $("#q6").click(function () {
    alert(
      "全ての設定項目を無視し、任意のパラメータクエリ文字列を送信するためのモードです（上級者向けだよ）。"
    );
  });
  $("#q7").click(function () {
    alert(
      "表示される診断名とツイート時のハッシュタグを指定したものに変更できます。"
    );
  });
  $("#q8").click(function () {
    alert(
      "オプションを「指定する」にすると、スプリットで区切った文字列を出力する「個数」を指定値に固定できます。\nスプリットオプションを指定している場合のみ有効です。"
    );
  });
  $("#q9").click(function () {
    alert(
      "診断の作者のTwitterアカウントを掲載するオプションです。スクリーンネーム(@〇〇の部分)をアットマーク抜きで記述してください。"
    );
  });
  $("#q10").click(function () {
    alert("診断結果の前と後ろに固定する文を指定できます。");
  });

  $("#namaemoji").click(function () {
    $("#before").val($("#before").val() + "");
    $("#after").val($("#after").val() + "");
  });
}
function joutai() {
  for (i in $("select")) {
    if ($("select")[i].value == "def") $("select")[i].style.color = "#ff7627";
    else if ($("select")[i].value == "dsc")
      $("select")[i].style.color = "#1ac21a";
  }
}
