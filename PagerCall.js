function YoutxPager(name, count, select,fun) {
    this.Name = name;//实例名字
    this.ID = name;//控件ID
    this.Count = count;//总页数
    this.Select = select;//选中样式
    this.CallBack = fun;//取数据的回调函数
    this.Init(1,this.CallBack);//初始化第一页
}
YoutxPager.prototype = {
    Init: function (index, callback) {
                if (callback && (callback instanceof Function)) {
                    callback(index);
                }
        var content = "";
        if (index > 1) {
            content += "<a  href=\"javascript:void(0);\" onclick=\"" + this.Name + ".SelectFront(" + index + ");\">&lt;</a>";
        }
        if (this.Count < 13) {
            for (var i = 1; i < this.Count; i++) {
                if (i == index) {
                    content += "<span class=\"" + this.Select + "\">" + i + "</span>";
                }
                else {
                    content += "<a  href=\"javascript:void(0);\" onclick=\"" + this.Name + ".SelectThis(" + i + ");\">" + i + "</a>";
                }
            }
        }
        else {
            if (index > 6) {
                content += "<a  href=\"javascript:void(0);\" onclick=\"" + this.Name + ".SelectThis(1);\">1</a>";
                content += "<span class=\"" + this.Select + "\">...</span>";
            }
            else {
                if (index < 5) {
                    for (var i = 1; i < 8; i++) {
                        if (i == index) {
                            content += "<span class=\"" + this.Select + "\">" + i + "</span>";
                        }
                        else {
                            content += "<a  href=\"javascript:void(0);\" onclick=\"" + this.Name + ".SelectThis(" + i + ");\">" + i + "</a>";
                        }
                    }
                }
                else {
                    for (var i = 1; i < index + 4; i++) {
                        if (i == index) {
                            content += "<span class=\"" + this.Select + "\">" + i + "</span>";
                        }
                        else {
                            if (i < this.Count) {
                                content += "<a  href=\"javascript:void(0);\" onclick=\"" + this.Name + ".SelectThis(" + i + ");\">" + i + "</a>";
                            }
                        }
                    }
                }
            }
            if (index > 6 && index + 5 < this.Count) {
                for (var i = index - 3; i < index + 4; i++) {
                    if (i == index) {
                        content += "<span class=\"" + this.Select + "\">" + i + "</span>";
                    }
                    else {
                        if (i < this.Count) {
                            content += "<a  href=\"javascript:void(0);\" onclick=\"" + this.Name + ".SelectThis(" + i + ");\">" + i + "</a>";
                        }
                    }
                }
            }
            if (index + 5 < this.Count) {
                content += "<span class=\"" + this.Select + "\">...</span>";
            }
            else {
                if (index + 3 >= this.Count) {
                    for (var i = this.Count - 6; i < this.Count; i++) {
                        if (i == index) {
                            content += "<span class=\"" + this.Select + "\">" + i + "</span>";
                        }
                        else {
                            content += "<a  href=\"javascript:void(0);\" onclick=\"" + this.Name + ".SelectThis(" + i + ");\">" + i + "</a>";
                        }
                    }
                }
                else {
                    for (var i = index - 3; i < this.Count; i++) {
                        if (i == index) {
                            content += "<span class=\"" + this.Select + "\">" + i + "</span>";
                        }
                        else {
                            content += "<a  href=\"javascript:void(0);\" onclick=\"" + this.Name + ".SelectThis(" + i + ");\">" + i + "</a>";
                        }
                    }

                }

            }
        }

        if (index < this.Count) {
            content += "<a  href=\"javascript:void(0);\" onclick=\"" + this.Name + ".SelectThis(" + this.Count + ");\">" + this.Count + "</a>";
        }
        else {
            content += "<span class=\"" + this.Select + "\">" + this.Count + "</span>";
        }
        if (this.Count > 1 && index != this.Count) {
            content += "<a  href=\"javascript:void(0);\" onclick=\"" + this.Name + ".SelectNext(" + index + ");\">&gt;</a>";
        }
        document.getElementById(this.ID).innerHTML = content;
    },
    SelectThis: function (index) {
        this.Init(index, this.CallBack);
    },
    SelectNext: function (index) {
        this.Init(index + 1, this.CallBack);
    },
    SelectFront: function (index) {
        this.Init(index - 1, this.CallBack);
    }
}
