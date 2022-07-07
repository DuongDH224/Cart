var listProduct = document.querySelector("#list-product");
var btnAdd = document.querySelectorAll("button");


for (let item of btnAdd) {
    item.onclick = function () {
        var parentBtnAdd = item.parentElement;
        var imgProduct = parentBtnAdd.querySelector("img");
        var titleProduct = parentBtnAdd.querySelector("p");
        var priceProduct = parentBtnAdd.querySelector("span");
        var trProduct = document.createElement("tr");
        var tdProduct = `
            <td>
                <img src='${imgProduct.src}'>
                <p class="tenSp">${titleProduct.innerText}</p>
            </td>
            <td>
                <span class="gia">${priceProduct.innerText}</span>
            </td>
            <td>
                <input type="number" class="amountSp" value="1" onchange="check()" onchange="sum2">
                <button onclick='deleteProduct(this)'>Xóa</button>
            </td>
        `
        var checkName = listProduct.getElementsByClassName("tenSp");
        for (let i = 0; i < checkName.length; i++) {
            if (checkName[i].innerText == titleProduct.innerText) {
                alert("Đã tồn tại sản phẩm trong giỏ hàng");
                return;
            }
        }
        trProduct.innerHTML = tdProduct;
        listProduct.append(trProduct);
        check();
        sum();
    }
}

function deleteProduct(button) {
    var deleteBtn = button.parentElement.parentElement;
    document.getElementById("list-product").removeChild(deleteBtn);
    sum();
}

function sum() {
    var product = document.querySelector("#list-product")
    var rows = product.getElementsByTagName("tr");
    var tong = 0;
    var amountProduct = listProduct.querySelectorAll(".amountSp");

    for (let i = 0; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");
        var price = cells[1].innerText.substring(0, 6);
        var sl = amountProduct[i].value;
        tong += Number(price) * sl;
    }
    document.getElementById("tong").innerText = `${tong} đ`;

}

function check() {
    var amountProduct = listProduct.querySelectorAll(".amountSp");
    for (let i = 0; i < amountProduct.length; i++) {
        if (amountProduct[i].value < 1) {
            alert("Sản phẩm trong giỏ hàng phải lớn hơn 1");
            amountProduct[i].value = 1;
            break;
        }
    }
    sum();
}   
function printBill() {
    var amountProduct = listProduct.querySelectorAll(".amountSp");
    if (amountProduct.length == 0) {
        alert("Không có sản phẩm nào trong giỏ hàng");
    } else {
        alert("Đã in hóa đơn");
    }
}

const btnBuy = document.querySelector('#btn-buy')
btnBuy.addEventListener('click', printBill)

