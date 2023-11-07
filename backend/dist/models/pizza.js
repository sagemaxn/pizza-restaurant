"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.__esModule = true;
exports.PizzaModel = exports.Pizza = exports.Sizes = void 0;
var typegoose_1 = require("@typegoose/typegoose");
var Sizes = /** @class */ (function () {
    function Sizes() {
    }
    return Sizes;
}());
exports.Sizes = Sizes;
var Pizza = /** @class */ (function () {
    function Pizza() {
    }
    __decorate([
        (0, typegoose_1.prop)(),
        __metadata("design:type", String)
    ], Pizza.prototype, "name");
    __decorate([
        (0, typegoose_1.prop)(),
        __metadata("design:type", Sizes)
    ], Pizza.prototype, "sizes");
    __decorate([
        (0, typegoose_1.prop)(),
        __metadata("design:type", String)
    ], Pizza.prototype, "image");
    return Pizza;
}());
exports.Pizza = Pizza;
exports.PizzaModel = (0, typegoose_1.getModelForClass)(Pizza);
