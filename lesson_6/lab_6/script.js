const task = [
    {
        id: 1,
        text: "hoc jquery",
        completed: false,
    },
    {
        id: 2,
        text: "hoc java core",
        completed: true,
    },
    {
        id: 3,
        text: "hoc database",
        completed: true,
    },
];
function createTask(task) {
    //id, text, completed
    const $li = $(`<li>${task.text}</li>`);
    const $btn = $('<button>Done</button>');
    $btn.on('click', function () {
      //chuyển task có id tương ứng thành completed: true
      // kích hoạt lại sự kiện để render lại trang
    });

    $btn.appendTo($li);

    return $li;
}

function createList(task) {
    const list = [];

    for (let i = 0 )
}



$(function () {
    const $username = $('.username');

    $username.on('change', function (e) {
        const value = $username.val().trim();
        
        if (value.length < 6) {
            $username.addclass('invalid');
        }else {
            $username.removeclass('invalid');
        }
    });
});