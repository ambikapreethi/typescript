"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchStoreData() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://fakestoreapi.com/products");
        const data = yield response.json(); //data is array of objects
        const filteredData = data.map(item => {
            return (`Id -  ${item.id} ---- Title - ${item.title}---  Price - ${item.price} --- Count - ${item.rating.count}<br/>`);
        }).join(""); //join("") used to remove commas
        const para2 = document.getElementById("para2");
        if (para2 != null) {
            para2.innerHTML = filteredData.toString();
        }
    });
}
