Pager
=====
//params
//mypager :控件ID，实例名 采用同一个名字（不知道怎么获取该实例的名字 - -！）
//12：总页数
//page_sele：选中时的样式
//回调函数 处理数据
 var mypage1 = new YoutxPager("mypage1", 12, "page_sele", function (index) {
        alert(index);
    })
Pager
