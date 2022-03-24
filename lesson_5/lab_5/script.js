$(function () {
  const $tr = $("tr");

  for (let i = 0; i < $tr.length; i++) {
    const tr = $tr[i];

    const $tr = $(tr).children().eq(i);
    $td.css({ backgroundColor: "red" });
  }
});
