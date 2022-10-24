/** Bài 1
 * Xuất 3 số theo thứ tự tăng dần
 * - Đầu vào
 *      + Numb1
 *      + Numb2
 *      + Numb3 
 *      + Numb
 * - Xử lý
 *      + if (Numb1 >= Numb2) {
        if (Numb1 >= Numb3) {
            if (Numb2 >= Numb3) {
                Numb = "Numb1 " + "Numb2 " + "Numb3 ";
            } else {
                Numb = "Numb1 " + "Numb3 " + "Numb2 ";
            }
        } else {
            Numb = "Numb3 " + "Numb1 " + "Numb2 ";
        }
    } else {
        if (Numb2 >= Numb3) {
            if (Numb1 >= Numb3) {
                Numb = Numb2 +","+Numb1 +","+Numb3 ;
            } else {
                Numb =Numb2 +","+ Numb3 +","+  Numb1 ;
            }
        } else {
            Numb = Numb3 +","+ Numb2 +","+ Numb1 ;
        }
    }
 *
 * - Đầu ra
 *      + Show kết quả
 */
document.getElementById("btnsapXep").onclick = function () {
    //lấy thông tin từ user
    var Numb1 = document.getElementById("Numb1").value * 1;
    var Numb2 = document.getElementById("Numb2").value * 1;
    var Numb3 = document.getElementById("Numb3").value * 1;
    var Numb;


    //xu ly
    if (Numb1 >= Numb2) {
        if (Numb1 >= Numb3) {
            if (Numb2 >= Numb3) {
                Numb = "Numb1 " + "Numb2 " + "Numb3 ";
            } else {
                Numb = "Numb1 " + "Numb3 " + "Numb2 ";
            }
        } else {
            Numb = "Numb3 " + "Numb1 " + "Numb2 ";
        }
    } else {
        if (Numb2 >= Numb3) {
            if (Numb1 >= Numb3) {
                Numb = Numb2 +","+Numb1 +","+Numb3 ;
            } else {
                Numb =Numb2 +","+ Numb3 +","+  Numb1 ;
            }
        } else {
            Numb = Numb3 +","+ Numb2 +","+ Numb1 ;
        }
    }

    var result = Numb


    //Show kết quả
    document.getElementById("infosapXep").innerHTML = result;
};
    //style
    document.getElementById("infosapXep").classList.add("alert-success");


    /** Bài 2
 * chương trình chào hỏi
 * - Đầu vào
 *      + cauChao
 *      + thanhVien
 *
 * - Xử lý
 *      + 
    switch (thanhVien) {
        case 1:
            cauChao = "Xin chào Người lạ ơi!";
            break;
        case B:
            cauChao ="Xin chào Bố!";
            break;
        case M:
            cauChao ="Xin chào Mẹ!";
            break;
        case A:
            cauChao ="Xin chào Anh Trai!";
            break;

        default:
            cauChao ="Xin chào Em gái!";
            break;
    }

 *
 * - Đầu ra
 *      + Show kết quả
 */
document.getElementById("btnChao").onclick = function () {
    //lấy thông tin từ user
    var thanhVien = document.getElementById("thanhVien").value;
    var cauChao;


    //xu ly

    switch (thanhVien) {
        case 1:
            cauChao = "Xin chào Người lạ ơi!";
            break;
        case B:
            cauChao ="Xin chào Bố!";
            break;
        case M:
            cauChao ="Xin chào Mẹ!";
            break;
        case A:
            cauChao ="Xin chào Anh Trai!";
            break;

        default:
            cauChao ="Xin chào Em gái!";
            break;
    }

    var result = cauChao;


    //Show kết quả
    document.getElementById("infoChao").innerHTML = result;
};
//style
document.getElementById("infoChao").classList.add("alert-success");


/** Bài 3
 * Đếm Số Chẵn Lẻ
 * - Đầu vào
 *      + Number1
 *      + Number2
 *      + Number3
 *      + Numbl
 *      + Numbc
 * - Xử lý
 *      + if (Number1 /2 === 0) {
    Numbc ++ 
} else {
    Numbl ++
}
if (Number2 /2 === 0) {
    Numbc ++
} else {
    Numbl ++
}
if (Number3 / 2 === 0) {
    Numbc ++
} else {
    Numbl ++
}
 *
 * - Đầu ra
 *      + Show kết quả
 */
document.getElementById("btnDemSo").onclick = function () {
    //lấy thông tin từ user
    var Number1 = document.getElementById("Number1").value * 1;
    var Number2 = document.getElementById("Number2").value * 1;
    var Number3 = document.getElementById("Number3").value * 1;
    var Numbc=0;
    var Numbl=0;

    Number1 = parseInt (Number1);
    Number2 = parseInt (Number2);
    Number3 = parseInt (Number3);
    Numbc = parseInt (Numbc);
    Numbl = parseInt (Numbl);
    //xu ly
if (Number1 /2 == 0) {
    Numbc ++ 
} else {
    Numbl ++
}
if (Number2 /2 == 0) {
    Numbc ++
} else {
    Numbl ++
}
if (Number3 / 2 == 0) {
    Numbc ++
} else {
    Numbl ++
}
    var result = "<p>Có " + Numbc + "số chẵn, " + Numbl + "số lẻ </p>";


    //Show kết quả
    document.getElementById("infoDemSo").innerHTML = result;
};
    //style
    document.getElementById("infoDemSo").classList.add("alert-success");



/** Bài 4
 * Đoán Hình Tam Giác
 * - Đầu vào
 *      + Number_1
 *      + Number_2
*      + Number_3
*      + tamGiac
 * - Xử lý
 *      +     if (Number_1 == Number_2 == Number_3) {
        tamGiac = " Tam Giác Đều";
    } else {
        none
    }
    if (Number_1 == Number_2 !== Number_3) {
        tamGiac = " Tam Giác Cân";
    } else {
        none
    }

    if (Number_3 ^2 ==( Number_2 ^2 + Number_3 ^2)) {
        tamgiac = " Tam Giác Vuông"
    } else {
        none
    }


    
    if (Number_1 + Number_2 >= Number_3 && Number_1 + Number_3 >= Number_b && Number_3 + Number_2 >= Number_1 ) {
        var result
     } else {
         none
     }
    
 *
 * - Đầu ra
 *      + Show kết quả
 */
    document.getElementById("btnTim").onclick = function () {
        //lấy thông tin từ user
        var Number_1 = document.getElementById("Number_1").value * 1;
        var Number_2 = document.getElementById("Number_2").value * 1;
        var Number_3 = document.getElementById("Number_3").value * 1;
        var tamGiac;
        //xu ly
    
    if (Number_1 == Number_2 == Number_3) {
        tamGiac = " Tam Giác Đều";
    } else {
        none
    }
    if (Number_1 == Number_2 !== Number_3) {
        tamGiac = " Tam Giác Cân";
    } else {
        none
    }

    if (Number_3 ^2 ==( Number_2 ^2 + Number_3 ^2)) {
        tamgiac = " Tam Giác Vuông"
    } else {
        none
    }


    
    if (Number_1 + Number_2 >= Number_3 && Number_1 + Number_3 >= Number_b && Number_3 + Number_2 >= Number_1 ) {
        var result
     } else {
         none
     }
    
     var result = "<p> Hình </p>" + tamGiac;
      
        //Show kết quả
        document.getElementById("btnTim").innerHTML = result;
    };
        //style
        document.getElementById("infoTim").classList.add("alert-success");
     


