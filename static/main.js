(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\replay-web\player-and-video\src\main.ts */"zUnb");


/***/ }),

/***/ "99qh":
/*!**********************************************!*\
  !*** ./src/app/players/players.component.ts ***!
  \**********************************************/
/*! exports provided: PlayersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersComponent", function() { return PlayersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _videolist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../videolist.service */ "hThw");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _player_video_list_player_video_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../player-video-list/player-video-list.component */ "mK0b");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");














function PlayersComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayersComponent_td_19_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const element_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onSelect(element_r2); })("keyup.enter", function PlayersComponent_td_19_Template_button_keyup_enter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const element_r2 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onSelect(element_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", element_r2 === ctx_r0.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r2.name, " ");
} }
function PlayersComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 18);
} }
const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
    'accept': 'application/json'
});
class PlayersComponent {
    constructor(VideolistService, http) {
        this.VideolistService = VideolistService;
        this.http = http;
        this.displayedColumns = ['name'];
    }
    ngOnInit() {
        this.getPlayers();
    }
    onSelect(players) {
        this.selected = players;
    }
    getPlayers() {
        this.VideolistService.getPlayers()
            .subscribe(players => {
            this.players = players;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.players);
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
PlayersComponent.ɵfac = function PlayersComponent_Factory(t) { return new (t || PlayersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videolist_service__WEBPACK_IMPORTED_MODULE_3__["VideolistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PlayersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayersComponent, selectors: [["app-players"]], decls: 23, vars: 3, consts: [[1, "container"], [1, "sidenavbar"], [1, "navbar"], ["routerLink", "/", 1, "title"], ["routerLink", "/"], [1, "item"], ["routerLink", "/player"], [1, "example-container"], [1, "filter"], ["matInput", "", "placeholder", "Filter", 3, "keyup"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "name"], ["class", "tableitem", "mat-cell", "", 4, "matCellDef"], ["style", "padding: 0%;", "mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "main"], [3, "player"], ["mat-cell", "", 1, "tableitem"], ["mat-flat-button", "", 2, "width", "100%", "height", "100%", "padding", "0", "margin", "0%", "font-size", "20px", "justify-content", "left", 3, "click", "keyup.enter"], ["mat-row", "", 2, "padding", "0%"]], template: function PlayersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "FTBA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u5F55\u50CF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u767E\u79D1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function PlayersComponent_Template_input_keyup_16_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PlayersComponent_td_19_Template, 3, 3, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PlayersComponent_tr_20_Template, 1, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-player-video-list", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", ctx.selected);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDivider"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _player_video_list_player_video_list_component__WEBPACK_IMPORTED_MODULE_9__["PlayerVideoListComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: [".container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin: auto;\r\n    height: 100vh;\r\n    border-bottom: 2px solid rgba( 55, 55, 233, 0.2);\r\n    \r\n}\r\n\r\n.sidenavbar[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n    min-width: 300px;\r\n    height: 100%;\r\n    float: left;\r\n    border-right: 1px solid whitesmoke;\r\n    padding-left: 1rem;\r\n\r\n}\r\n\r\n.main[_ngcontent-%COMP%]{\r\n    width: 70%;\r\n    height: 100%;\r\n    float: left;\r\n    margin: 0px;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]{\r\n    justify-content: space-between;\r\n    background-color: white;\r\n    height: 10%;\r\n    \r\n}\r\n\r\n.item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    padding: 0 1rem;\r\n}\r\n\r\n.title[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n}\r\n\r\n.listOption[_ngcontent-%COMP%]{\r\n    line-height: 25px;\r\n    font-size: 20px;\r\n}\r\n\r\n\r\n\r\ncdk-virtual-scroll-viewport[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n}\r\n\r\n.example-container[_ngcontent-%COMP%] {\r\n    height: 90%;\r\n    width: 100%;\r\n    overflow: auto;\r\n    box-shadow: none;\r\n    padding-left: 1rem;\r\n  }\r\n\r\ntable[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\r\n\r\nng-container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\r\n\r\n.tableitem[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    border-bottom-color: rgba(0, 0, 0, 0);\r\n    font-size: 18px;\r\n    padding: 0px;\r\n}\r\n\r\ntd.mat-cell[_ngcontent-%COMP%]:last-of-type{\r\n    padding: 0px;\r\n    width: 100%;\r\n}\r\n\r\n.filter[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    font-size: 20px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLGdEQUFnRDs7QUFFcEQ7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0NBQWtDO0lBQ2xDLGtCQUFrQjs7QUFFdEI7O0FBQ0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUNBOzs7R0FHRzs7QUFFSDtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOztBQUNGO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUNBO0lBQ0ksV0FBVztJQUNYLHFDQUFxQztJQUNyQyxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJwbGF5ZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoIDU1LCA1NSwgMjMzLCAwLjIpO1xyXG4gICAgXHJcbn1cclxuXHJcbi5zaWRlbmF2YmFye1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHdoaXRlc21va2U7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcblxyXG59XHJcbi5tYWlue1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLm5hdmJhcntcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiAxMCU7XHJcbiAgICAvKiBwYWRkaW5nOiAwcHggMXJlbTsgKi9cclxufVxyXG4uaXRlbSBzcGFue1xyXG4gICAgcGFkZGluZzogMCAxcmVtO1xyXG59XHJcbi50aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLmxpc3RPcHRpb257XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4vKiBtYXQtc2VsZWN0aW9uLWxpc3R7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxufSAqL1xyXG5cclxuY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICB9XHJcbnRhYmxle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbm5nLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi50YWJsZWl0ZW17XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxudGQubWF0LWNlbGw6bGFzdC1vZi10eXBle1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5maWx0ZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5idXR0b257XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-players',
                templateUrl: './players.component.html',
                styleUrls: ['./players.component.css']
            }]
    }], function () { return [{ type: _videolist_service__WEBPACK_IMPORTED_MODULE_3__["VideolistService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'player-and-video';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], li[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], code[_ngcontent-%COMP%], form[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {margin:0;padding:0}    fieldset[_ngcontent-%COMP%], img[_ngcontent-%COMP%] {border:0 none}    dl[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {list-style:none}    blockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {quotes: none}    blockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {content:'';content:none}    input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {vertical-align:middle}    button[_ngcontent-%COMP%] {border:0 none;background-color:transparent;cursor:pointer}    body[_ngcontent-%COMP%] {background:#fff}    body[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {font-size:16px;line-height:1 ;font-family:\"\u5FAE\u8F6F\u96C5\u9ED1\", \"\u9ED1\u4F53\",\"\u5B8B\u4F53\";color:#666}    a[_ngcontent-%COMP%] {color:#666;text-decoration:none}    a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:hover {text-decoration:none}    address[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], var[_ngcontent-%COMP%] {font-style:normal;font-weight:normal}    caption[_ngcontent-%COMP%] {display:none;}    table[_ngcontent-%COMP%] {width:100%;border-collapse:collapse;border-spacing:0;table-layout:fixed;}    img[_ngcontent-%COMP%]{vertical-align:top}    *[_ngcontent-%COMP%]{\r\n    font-family: \"Arial\",\"Microsoft YaHei\",\"\u9ED1\u4F53\",\"\u5B8B\u4F53\",sans-serif;\r\n}      a[_ngcontent-%COMP%] {outline: none;}        .clear[_ngcontent-%COMP%]{clear: both;}    .clearfix[_ngcontent-%COMP%]:before, .clearfix[_ngcontent-%COMP%]:after{content: '';display: table;}  .clearfix[_ngcontent-%COMP%]:after{clear: both;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzBEQUMwRCxRQUFRLENBQUMsU0FBUyxHQUFHLGlDQUFpQyxHQUNoSCxjQUFjLGFBQWEsR0FBRyw0QkFBNEIsR0FDMUQsa0JBQWtCLGVBQWUsR0FBSSxnQ0FBZ0MsR0FDckUsZUFBZSxZQUFZLEdBQUksZ0JBQWdCLEdBQy9DLHVEQUF1RCxVQUFVLENBQUMsWUFBWSxHQUFHLFVBQVUsR0FDM0YsOEJBQThCLHFCQUFxQixHQUFHLGNBQWMsR0FDcEUsUUFBUSxhQUFhLENBQUMsNEJBQTRCLENBQUMsY0FBYyxHQUFHLG1CQUFtQixHQUN2RixNQUFNLGVBQWUsR0FBSSxtQkFBbUIsR0FDNUMseUNBQXlDLGNBQWMsQ0FBQyxjQUFjLENBQUMsNkJBQTZCLENBQUMsVUFBVSxHQUFFLGFBQWEsR0FDOUgsR0FBRyxVQUFVLENBQUMsb0JBQW9CLEdBQUcsWUFBWSxHQUNqRCxtQkFBbUIsb0JBQW9CLEdBQUksbUJBQW1CLEdBQzlELHNDQUFzQyxpQkFBaUIsQ0FBQyxrQkFBa0IsR0FBRyxjQUFjLEdBQzNGLFNBQVMsWUFBWSxDQUFDLEdBQUssY0FBYyxHQUN6QyxPQUFPLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFLLGNBQWMsR0FDbEcsSUFBSSxrQkFBa0IsR0FBRyxpQkFBaUIsR0FDMUM7SUFDSSwyREFBMkQ7QUFDL0QsR0FDQSxTQUFTLEdBRVAsaUJBQWlCLEdBQ25CLEdBQUcsYUFBYSxDQUFDLEdBRWhCLCtCQUErQixHQUNoQzs7O0NBR0MsR0FFRCxPQUFPLEdBQ1AsT0FBTyxXQUFXLENBQUMsR0FFbkIsYUFBYSxHQUNiLGlDQUFpQyxXQUFXLENBQUMsY0FBYyxDQUFDLEdBQzVELGdCQUFnQixXQUFXLENBQUMiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5LGRpdixkbCxkdCxkZCx1bCxvbCxsaSxoMSxoMixoMyxoNCxoNSxoNixwcmUsY29kZSxmb3JtLGZpZWxkc2V0LGxlZ2VuZCxcclxudGV4dGFyZWEscCxibG9ja3F1b3RlLHRoLHRkLGlucHV0LHNlbGVjdCx0ZXh0YXJlYSxidXR0b24ge21hcmdpbjowO3BhZGRpbmc6MH0gIC8qIOWIneWni+WMluagh+etvuWcqOaJgOaciea1j+iniOWZqOS4reeahG1hcmdpbuOAgXBhZGRpbmflgLwgKi9cclxuZmllbGRzZXQsaW1nIHtib3JkZXI6MCBub25lfSAgLyog6YeN572uZmllbGRzZXTvvIjooajljZXliIbnu4TvvInjgIHlm77niYfnmoTovrnmoYbkuLowKi9cclxuZGwsdWwsb2wsbWVudSxsaSB7bGlzdC1zdHlsZTpub25lfSAgIC8qIOmHjee9ruexu+ihqOWJjeWvvOespuWPt+S4um9ubmUsbWVudeWcqEhUTUw15Lit5pyJ5pWIICovXHJcbmJsb2NrcXVvdGUsIHEge3F1b3Rlczogbm9uZX0gICAvKiDph43nva7ltYzlpZflvJXnlKjnmoTlvJXlj7fnsbvlnosgKi9cclxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIscTpiZWZvcmUsIHE6YWZ0ZXIge2NvbnRlbnQ6Jyc7Y29udGVudDpub25lfSAgLyog6YeN572u5bWM5aWX5byV55SoKi9cclxuaW5wdXQsc2VsZWN0LHRleHRhcmVhLGJ1dHRvbiB7dmVydGljYWwtYWxpZ246bWlkZGxlfSAgLyog6YeN572u6KGo5Y2V5o6n5Lu25Z6C55u05bGF5LitKi9cclxuYnV0dG9uIHtib3JkZXI6MCBub25lO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Y3Vyc29yOnBvaW50ZXJ9ICAvKiDph43nva7ooajljZVidXR0b27mjInpkq7mlYjmnpwgKi9cclxuYm9keSB7YmFja2dyb3VuZDojZmZmfSAgIC8qIOmHjee9rmJvZHkg6aG16Z2i6IOM5pmv5Li655m96ImyICovXHJcbmJvZHksdGgsdGQsaW5wdXQsc2VsZWN0LHRleHRhcmVhLGJ1dHRvbiB7Zm9udC1zaXplOjE2cHg7bGluZS1oZWlnaHQ6MSA7Zm9udC1mYW1pbHk6XCLlvq7ova/pm4Xpu5FcIiwgXCLpu5HkvZNcIixcIuWui+S9k1wiO2NvbG9yOiM2NjZ9IC8qIOmHjee9rumhtemdouaWh+Wtl+WxnuaApyAqL1xyXG5hIHtjb2xvcjojNjY2O3RleHQtZGVjb3JhdGlvbjpub25lfSAgLyog6YeN572u6ZO+5o6lYeagh+etviAqL1xyXG5hOmFjdGl2ZSwgYTpob3ZlciB7dGV4dC1kZWNvcmF0aW9uOm5vbmV9ICAgLyog6YeN572u6ZO+5o6lYeagh+etvueahOm8oOagh+a7keWKqOaViOaenCAqL1xyXG5hZGRyZXNzLGNhcHRpb24sY2l0ZSxjb2RlLGRmbixlbSx2YXIge2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbH0gIC8qIOmHjee9ruagt+W8j+agh+etvueahOagt+W8jyAqL1xyXG5jYXB0aW9uIHtkaXNwbGF5Om5vbmU7fSAgICAvKiDph43nva7ooajmoLzmoIfpopjkuLrpmpDol48gKi9cclxudGFibGUge3dpZHRoOjEwMCU7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO2JvcmRlci1zcGFjaW5nOjA7dGFibGUtbGF5b3V0OmZpeGVkO30gICAgLyog6YeN572udGFibGXlsZ7mgKcgKi9cclxuaW1ne3ZlcnRpY2FsLWFsaWduOnRvcH0gIC8qIOWbvueJh+WcqOW9k+WJjeihjOWGheeahOWeguebtOS9jee9riAqL1xyXG4qe1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIixcIk1pY3Jvc29mdCBZYUhlaVwiLFwi6buR5L2TXCIsXCLlrovkvZNcIixzYW5zLXNlcmlmO1xyXG59XHJcbi8qIOmhtemdouiuvue9riAqL1xyXG4gXHJcbiAgLyog5Y+W5raIYeagh+etvueCueWHu+WQjueahOiZmue6v+ahhiAqL1xyXG5hIHtvdXRsaW5lOiBub25lO30gIFxyXG4gXHJcbiAvKiDorr7nva7pobXpnaLmloflrZfnrYnlnKjmi5bliqjpvKDmoIfpgInkuK3mg4XlhrXkuIvnmoTog4zmma/oibLkuI7mloflrZfpopzoibIgKi9cclxuLyogXHJcbjo6c2VsZWN0aW9uIHtjb2xvcjogI2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiAjNEM2RTc4O30gICAgXHJcbjo6LW1vei1zZWxlY3Rpb24ge2NvbG9yOiAjZmZmO2JhY2tncm91bmQtY29sb3I6ICM0QzZFNzg7fSBcclxuKi9cclxuIFxyXG4vKua4hemZpOa1ruWKqCovXHJcbi5jbGVhcntjbGVhcjogYm90aDt9XHJcbiBcclxuLyrmuIXpmaTmta7liqgtLeaOqOiNkOS9v+eUqCovXHJcbi5jbGVhcmZpeDpiZWZvcmUsLmNsZWFyZml4OmFmdGVye2NvbnRlbnQ6ICcnO2Rpc3BsYXk6IHRhYmxlO31cclxuLmNsZWFyZml4OmFmdGVye2NsZWFyOiBib3RoO30iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _players_players_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./players/players.component */ "99qh");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _player_video_list_player_video_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player-video-list/player-video-list.component */ "mK0b");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material/material.module */ "hctd");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rm4T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/locales/zh */ "Kd/A");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./index/index.component */ "aUdj");
















Object(_angular_common__WEBPACK_IMPORTED_MODULE_11__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_12___default.a);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__["zh_CN"] }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_9__["Material"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _players_players_component__WEBPACK_IMPORTED_MODULE_4__["PlayersComponent"],
        _player_video_list_player_video_list_component__WEBPACK_IMPORTED_MODULE_6__["PlayerVideoListComponent"],
        _index_index_component__WEBPACK_IMPORTED_MODULE_13__["IndexComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_9__["Material"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _players_players_component__WEBPACK_IMPORTED_MODULE_4__["PlayersComponent"],
                    _player_video_list_player_video_list_component__WEBPACK_IMPORTED_MODULE_6__["PlayerVideoListComponent"],
                    _index_index_component__WEBPACK_IMPORTED_MODULE_13__["IndexComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    _material_material_module__WEBPACK_IMPORTED_MODULE_9__["Material"]
                ],
                providers: [{ provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__["zh_CN"] }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aUdj":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _videolist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../videolist.service */ "hThw");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngmodule/material-carousel */ "XZNO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");











function IndexComponent_mat_carousel_slide_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-carousel-slide", 27, 28);
} if (rf & 2) {
    const slide_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", slide_r1.image)("hideOverlay", false);
} }
class IndexComponent {
    constructor(VideolistService, http) {
        this.VideolistService = VideolistService;
        this.http = http;
        // slides = [{ 'image': '../assets/image/sc2.png' },
        // { 'image': '../assets/image/sc2INno.png' },
        // { 'image': '../assets/image/sc2yamato.png' }];
        this.slides = [{ 'image': `assets/image/sc2.png` },
            { 'image': `assets/image/sc2INno.png` },
            { 'image': `assets/image/sc2yamato.png` }];
    }
    ngOnInit() {
        this.getWinprobability();
    }
    getWinprobability() {
        this.VideolistService.getWinprobability()
            .subscribe(Object => {
            this.winprobability = Object;
        });
    }
}
IndexComponent.ɵfac = function IndexComponent_Factory(t) { return new (t || IndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videolist_service__WEBPACK_IMPORTED_MODULE_1__["VideolistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
IndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndexComponent, selectors: [["app-index"]], decls: 57, vars: 16, consts: [[1, "container"], [1, "sidenavbar"], [1, "navbar"], ["routerLink", "/", 1, "title"], ["routerLink", "/"], [1, "item"], ["routerLink", "/player"], [1, "subnewsbox"], [1, "subnewsinnerbox"], [1, "innerboxtitle"], [2, "font-size", "30px"], ["src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("../assets/icon/video-camera.svg"), "width", "32", "height", "32"], [1, "innerboxmain"], [2, "width", "100%", "word-wrap", "break-word", "height", "1em"], [1, "statistics"], ["href", "http://aligulac.com/"], [1, "innerbutton"], ["mat-stroked-button", ""], [2, "padding-left", "1rem"], [1, "main"], [1, "headline"], ["timings", "500ms ease-in", "color", "primary", "orientation", "ltr", 1, "maincarousel", 3, "autoplay", "interval", "maintainAspectRatio", "slides", "loop", "hideArrows", "hideIndicators", "useKeyboard", "useMouseWheel"], ["class", "maincarousel", "overlayColor", "#00000040", 3, "image", "hideOverlay", 4, "ngFor", "ngForOf"], [1, "subitem"], [1, "card1", "subitemcard"], [1, "card2", "subitemcard"], [1, "card3", "subitemcard"], ["overlayColor", "#00000040", 1, "maincarousel", 3, "image", "hideOverlay"], ["matCarouselSlide", ""]], template: function IndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "FTBA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u5F55\u50CF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u767E\u79D1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u770B\u770B\u5F55\u50CF\u5427");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "iframe", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u53C2\u8003\u7ECF\u9A8C\u548C\u4EB2\u8EAB\u5B9E\u6218\u4E00\u6837\u91CD\u8981");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "P");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u6570\u636E\u6765\u6E90");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Aligulac");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u767B\u5F55");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u6CE8\u518C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-carousel", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, IndexComponent_mat_carousel_slide_49_Template, 2, 2, "mat-carousel-slide", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-card", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Simple card1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-card", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Simple card2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-card", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Simple card3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u7EDF\u8BA1\u573A\u6570\uFF1A", ctx.winprobability.number, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u66F4\u65B0\u65E5\u671F\uFF1A", ctx.winprobability.date, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("PvT ", ctx.winprobability.PVT, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("PvZ ", ctx.winprobability.PVZ, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("TvZ ", ctx.winprobability.TVZ, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoplay", true)("interval", 5000)("maintainAspectRatio", false)("slides", 5)("loop", false)("hideArrows", false)("hideIndicators", false)("useKeyboard", true)("useMouseWheel", false)("hideIndicators", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_7__["MatCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_7__["MatCarouselSlideComponent"]], styles: [".container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin: auto;\r\n    height: 100vh;\r\n    border-bottom: 2px solid rgba( 55, 55, 233, 0.2);\r\n    \r\n}\r\n\r\n.sidenavbar[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n    min-width: 300px;\r\n    height: 100%;\r\n    float: left;\r\n    border-right: 1px solid whitesmoke;\r\n    padding-left: 1rem;\r\n\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]{\r\n    justify-content: space-between;\r\n    background-color: white;\r\n    height: 10%;\r\n    \r\n}\r\n\r\n.item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    padding: 0 1rem;\r\n}\r\n\r\n.title[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]{\r\n    width: 70%;\r\n    height: 100%;\r\n    float: left;\r\n}\r\n\r\n.headline[_ngcontent-%COMP%]{\r\n    width: auto;\r\n    height: 70%;\r\n    padding: 1rem;\r\n}\r\n\r\n.subitem[_ngcontent-%COMP%]{\r\n    width: auto;\r\n    height: 30%;\r\n    background-color: azure;\r\n    flex-direction:row;\r\n    justify-content:space-around;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.subnewsbox[_ngcontent-%COMP%]{\r\n    height: 90%;\r\n    width: 60%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: auto;\r\n}\r\n\r\n.innerboxtitle[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    width: 100%;    \r\n}\r\n\r\n.innerboxmain[_ngcontent-%COMP%]{\r\n    padding: 1rem 0;\r\n    font-size: 16px;\r\n\r\n}\r\n\r\n.innerboxmain[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n}\r\n\r\n.subnewsinnerbox[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{\r\n    margin-left: .5rem;\r\n\r\n}\r\n\r\n.subnewsinnerbox[_ngcontent-%COMP%]{\r\n    height: 50%;\r\n    width: 100%;\r\n    \r\n    padding: 1rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    \r\n}\r\n\r\n.maincarousel[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.subitemcard[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n    height: 80%;\r\n}\r\n\r\n.card1[_ngcontent-%COMP%]:hover{\r\n    box-shadow: -6px 6px 3px #888888;\r\n    background-color: rgba( 55, 55, 233, 0.1);\r\n}\r\n\r\n.card2[_ngcontent-%COMP%]:hover{\r\n    box-shadow: 0 6px 3px #888888;\r\n    background-color: rgba( 55, 55, 233, 0.1);\r\n}\r\n\r\n.card3[_ngcontent-%COMP%]:hover{\r\n    box-shadow: 6px 6px 3px #888888;\r\n    background-color: rgba( 55, 55, 233, 0.1);\r\n}\r\n\r\n.statistics[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    word-wrap:break-word;\r\n    font-size: 14px;\r\n    color:#666;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixnREFBZ0Q7O0FBRXBEOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osV0FBVztJQUNYLGtDQUFrQztJQUNsQyxrQkFBa0I7O0FBRXRCOztBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCOztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFHQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUNBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7O0FBRW5COztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7O0FBRWxDOztBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHlDQUF5QztBQUM3Qzs7QUFDQTtJQUNJLDZCQUE2QjtJQUM3Qix5Q0FBeUM7QUFDN0M7O0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IseUNBQXlDO0FBQzdDOztBQUNBO0lBQ0ksV0FBVztJQUNYLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsVUFBVTtBQUNkIiwiZmlsZSI6ImluZGV4LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoIDU1LCA1NSwgMjMzLCAwLjIpO1xyXG4gICAgXHJcbn1cclxuXHJcbi5zaWRlbmF2YmFye1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHdoaXRlc21va2U7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcblxyXG59XHJcbi5uYXZiYXJ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogMTAlO1xyXG4gICAgLyogcGFkZGluZzogMHB4IDFyZW07ICovXHJcbn1cclxuLml0ZW0gc3BhbntcclxuICAgIHBhZGRpbmc6IDAgMXJlbTtcclxufVxyXG4udGl0bGV7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbi5tYWlue1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG5cclxuLmhlYWRsaW5le1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbi5zdWJpdGVte1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246cm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc3VibmV3c2JveHtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuLmlubmVyYm94dGl0bGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlOyAgICBcclxufVxyXG4uaW5uZXJib3htYWlue1xyXG4gICAgcGFkZGluZzogMXJlbSAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxufVxyXG4uaW5uZXJib3htYWluIHB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5zdWJuZXdzaW5uZXJib3ggaWZyYW1le1xyXG4gICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xyXG5cclxufVxyXG5cclxuLnN1Ym5ld3Npbm5lcmJveHtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBibHVlOyAqL1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgXHJcbn1cclxuLm1haW5jYXJvdXNlbHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5zdWJpdGVtY2FyZHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxufVxyXG4uY2FyZDE6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OiAtNnB4IDZweCAzcHggIzg4ODg4ODtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIDU1LCA1NSwgMjMzLCAwLjEpO1xyXG59XHJcbi5jYXJkMjpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IDAgNnB4IDNweCAjODg4ODg4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSggNTUsIDU1LCAyMzMsIDAuMSk7XHJcbn1cclxuLmNhcmQzOmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogNnB4IDZweCAzcHggIzg4ODg4ODtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIDU1LCA1NSwgMjMzLCAwLjEpO1xyXG59XHJcbi5zdGF0aXN0aWNzIHB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHdvcmQtd3JhcDpicmVhay13b3JkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6IzY2NjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-index',
                templateUrl: './index.component.html',
                styleUrls: ['./index.component.css']
            }]
    }], function () { return [{ type: _videolist_service__WEBPACK_IMPORTED_MODULE_1__["VideolistService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "hThw":
/*!**************************************!*\
  !*** ./src/app/videolist.service.ts ***!
  \**************************************/
/*! exports provided: VideolistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideolistService", function() { return VideolistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class VideolistService {
    constructor(http) {
        this.http = http;
        // private playersUrl = 'http://127.0.0.1:8000/getPlayers';  // URL to web api
        // private playerVideosUrl = 'http://127.0.0.1:8000/getPlayersVideo';  // URL to web api
        // private newVideosUrl = 'http://127.0.0.1:8000/getNewReport';  // URL to web api
        // private winprobability = 'http://127.0.0.1:8000/getWinprobability1';  // URL to web api
        // 服务器版本
        this.playersUrl = '/getPlayers'; // URL to web api
        this.playerVideosUrl = '/getPlayersVideo'; // URL to web api
        this.newVideosUrl = '/getNewReport'; // URL to web api
        this.winprobability = '/getWinprobability1'; // URL to web api
    }
    // getHeroes(): Observable<Player[]> {
    //   return of(PLAYERS);
    //   const testexp = this.http.get(this.heroesUrl,{headers: headers})
    //   testexp.subscribe((val: any) => console.log(val))
    //   return this.http.get<Player[]>(this.heroesUrl)
    //   console.log(testexp)
    //   return this.http.get<Player[]>(this.heroesUrl)
    //   return of(PLAYERS);
    // }
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);
            console.log(`${operation} failed: ${error.headers}`);
            console.log(`${operation} failed: ${result}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    }
    getPlayers() {
        return this.http.get(this.playersUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getPlayers', [])));
    }
    getPlayerVideos(player) {
        return this.http.get(this.playerVideosUrl, { params: { player: player } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getPlayerVideos', [])));
    }
    getNewVideos() {
        return this.http.get(this.newVideosUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getNewVideos', [])));
    }
    getWinprobability() {
        return this.http.get(this.winprobability)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getWinprobability')));
    }
}
VideolistService.ɵfac = function VideolistService_Factory(t) { return new (t || VideolistService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
VideolistService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VideolistService, factory: VideolistService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideolistService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "hctd":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: Material */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Material", function() { return Material; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngmodule/material-carousel */ "XZNO");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");















const MaterialComponents = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
    _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_11__["MatCarouselModule"].forRoot(),
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
];
class Material {
}
Material.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Material });
Material.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Material_Factory(t) { return new (t || Material)(); }, imports: [[MaterialComponents], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_11__["MatCarouselModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Material, { imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_11__["MatCarouselModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"]], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_11__["MatCarouselModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Material, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [MaterialComponents],
                exports: [MaterialComponents]
            }]
    }], null, null); })();


/***/ }),

/***/ "mK0b":
/*!******************************************************************!*\
  !*** ./src/app/player-video-list/player-video-list.component.ts ***!
  \******************************************************************/
/*! exports provided: PlayerVideoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerVideoListComponent", function() { return PlayerVideoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _videolist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../videolist.service */ "hThw");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");

// import { DatePipe } from '@angular/common';










function PlayerVideoListComponent_div_0_mat_header_cell_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u6807\u9898");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlayerVideoListComponent_div_0_mat_cell_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r13.title, " ");
} }
function PlayerVideoListComponent_div_0_mat_header_cell_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u53D1\u5E03\u65F6\u95F4 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlayerVideoListComponent_div_0_mat_cell_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r14.created * 1000, "YYYY-MM-dd HH:mm"), " ");
} }
function PlayerVideoListComponent_div_0_mat_cell_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r15.created * 1000, "YYYY-MM-dd HH:mm"), " ");
} }
function PlayerVideoListComponent_div_0_mat_header_cell_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u65F6\u957F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlayerVideoListComponent_div_0_mat_cell_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r16.length, " ");
} }
function PlayerVideoListComponent_div_0_mat_header_cell_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-cell");
} }
function PlayerVideoListComponent_div_0_mat_cell_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u8DF3\u8F6C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.bilibili.com/video/", element_r17.bvid, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PlayerVideoListComponent_div_0_mat_header_row_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row", 21);
} }
function PlayerVideoListComponent_div_0_mat_row_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
} }
const _c0 = function () { return [10]; };
function PlayerVideoListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u79CD\u65CF:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u59D3\u540D:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u522B\u79F0:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u6218\u961F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u56FD\u5BB6:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](22, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, PlayerVideoListComponent_div_0_mat_header_cell_23_Template, 2, 0, "mat-header-cell", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, PlayerVideoListComponent_div_0_mat_cell_24_Template, 2, 1, "mat-cell", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](25, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, PlayerVideoListComponent_div_0_mat_header_cell_26_Template, 2, 0, "mat-header-cell", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, PlayerVideoListComponent_div_0_mat_cell_27_Template, 3, 4, "mat-cell", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, PlayerVideoListComponent_div_0_mat_cell_28_Template, 3, 4, "mat-cell", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](29, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, PlayerVideoListComponent_div_0_mat_header_cell_30_Template, 2, 0, "mat-header-cell", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, PlayerVideoListComponent_div_0_mat_cell_31_Template, 2, 1, "mat-cell", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](32, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, PlayerVideoListComponent_div_0_mat_header_cell_33_Template, 1, 0, "mat-header-cell", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, PlayerVideoListComponent_div_0_mat_cell_34_Template, 3, 1, "mat-cell", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, PlayerVideoListComponent_div_0_mat_header_row_35_Template, 1, 0, "mat-header-row", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, PlayerVideoListComponent_div_0_mat_row_36_Template, 1, 0, "mat-row", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "mat-paginator", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0._player.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.pictureSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r0.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
} }
function PlayerVideoListComponent_div_1_mat_header_cell_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u6807\u9898");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlayerVideoListComponent_div_1_mat_cell_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r29.title, " ");
} }
function PlayerVideoListComponent_div_1_mat_header_cell_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u53D1\u5E03\u65F6\u95F4 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlayerVideoListComponent_div_1_mat_cell_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r30.created * 1000, "YYYY-MM-dd HH:mm"), " ");
} }
function PlayerVideoListComponent_div_1_mat_header_cell_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u65F6\u957F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlayerVideoListComponent_div_1_mat_cell_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r31.length, " ");
} }
function PlayerVideoListComponent_div_1_mat_header_cell_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-cell");
} }
function PlayerVideoListComponent_div_1_mat_cell_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u8DF3\u8F6C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.bilibili.com/video/", element_r32.bvid, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PlayerVideoListComponent_div_1_mat_header_row_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row", 21);
} }
function PlayerVideoListComponent_div_1_mat_row_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
} }
function PlayerVideoListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u6700\u65B0\u66F4\u65B0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PlayerVideoListComponent_div_1_mat_header_cell_6_Template, 2, 0, "mat-header-cell", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PlayerVideoListComponent_div_1_mat_cell_7_Template, 2, 1, "mat-cell", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PlayerVideoListComponent_div_1_mat_header_cell_9_Template, 2, 0, "mat-header-cell", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PlayerVideoListComponent_div_1_mat_cell_10_Template, 3, 4, "mat-cell", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PlayerVideoListComponent_div_1_mat_header_cell_12_Template, 2, 0, "mat-header-cell", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PlayerVideoListComponent_div_1_mat_cell_13_Template, 2, 1, "mat-cell", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PlayerVideoListComponent_div_1_mat_header_cell_15_Template, 1, 0, "mat-header-cell", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PlayerVideoListComponent_div_1_mat_cell_16_Template, 3, 1, "mat-cell", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PlayerVideoListComponent_div_1_mat_header_row_17_Template, 1, 0, "mat-header-row", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PlayerVideoListComponent_div_1_mat_row_18_Template, 1, 0, "mat-row", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r1.newvideolist);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumns);
} }
class PlayerVideoListComponent {
    constructor(VideolistService, http) {
        this.VideolistService = VideolistService;
        this.http = http;
        this.rawdata = [];
        this.newvideolist = [];
        this.displayedColumns = ['title', 'created', 'length', 'bvid'];
    }
    ngOnInit() {
    }
    set player(data) {
        this._player = data;
        this.pictureSrc = `assets/image/${data === null || data === void 0 ? void 0 : data.name}.png`;
        this.getnewVideo();
        this.getPlayerVideos();
    }
    getnewVideo() {
        this.VideolistService.getNewVideos()
            .subscribe(newVideo => {
            this.newvideolist = newVideo;
            // this.newvideolistdata = new MatTableDataSource(this.newvideolist);
            // this.newvideolistdata.paginator2 = this.paginator2;
        });
    }
    getPlayerVideos() {
        var _a;
        this.VideolistService.getPlayerVideos((_a = this._player) === null || _a === void 0 ? void 0 : _a.name)
            .subscribe(rawdata => {
            this.rawdata = rawdata;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.rawdata);
            this.dataSource.paginator = this.paginator;
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
PlayerVideoListComponent.ɵfac = function PlayerVideoListComponent_Factory(t) { return new (t || PlayerVideoListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videolist_service__WEBPACK_IMPORTED_MODULE_3__["VideolistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
PlayerVideoListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayerVideoListComponent, selectors: [["app-player-video-list"]], viewQuery: function PlayerVideoListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, inputs: { player: "player" }, decls: 2, vars: 2, consts: [["class", "container", 4, "ngIf"], ["class", "containernone", 4, "ngIf"], [1, "container"], [1, "top"], [1, "topleft"], [1, "title"], [1, "pargraph"], [1, "picturediv"], ["alt", "", 2, "height", "100%", "width", "auto", 3, "src"], [1, "main"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "title", 2, "width", "10px"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "created"], ["matColumnDef", "length"], ["matColumnDef", "bvid"], ["style", "font-size: 50px;", 4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], [3, "href"], [2, "font-size", "50px"], [1, "containernone"], [1, "mainnone"]], template: function PlayerVideoListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PlayerVideoListComponent_div_0_Template, 38, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlayerVideoListComponent_div_1_Template, 19, 3, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._player);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._player == null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDivider"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".top[_ngcontent-%COMP%]{\r\n    \r\n    height: 25%;\r\n    min-height: 200px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    min-width: 400px;;\r\n}\r\n.main[_ngcontent-%COMP%]{\r\n    \r\n    height:65%;\r\n    \r\n    \r\n}\r\n.mat-cell[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n}\r\n.containernone[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 90%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction:column;\r\n    padding: 2rem;\r\n}\r\n.mainnone[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n}\r\n.container[_ngcontent-%COMP%]{\r\n    height: 100vh;\r\n    padding-right: 1rem;\r\n}\r\n.picturediv[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    width: auto;\r\n    right: 0;\r\n    background-color: aqua;\r\n    opacity: 0.8;\r\n    border: 2px solid whitesmoke;\r\n    border-radius: 5px;\r\n}\r\n.topleft[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    width: auto;\r\n\r\n}\r\n.title[_ngcontent-%COMP%]{\r\n    height: 50%;\r\n    width: auto;\r\n    \r\n    font-size: 50px;\r\n    line-height: 100px;\r\n    padding: 0 1rem;\r\n}\r\n.pargraph[_ngcontent-%COMP%]{\r\n    height: 50%;\r\n    width: auto;\r\n    padding: 0 1rem;\r\n    display: flex;\r\n    flex-wrap:wrap;\r\n    align-items: center;\r\n}\r\n.pargraph[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    width: 15rem;\r\n    font-size: 16px;\r\n}\r\n.mat-elevation-z8[_ngcontent-%COMP%]{\r\n    box-shadow: none;\r\n    height: 100%;\r\n}\r\n\r\n.mat-column-title[_ngcontent-%COMP%]{\r\n    flex: 0 0 60%;\r\n}\r\n.mat-column-created[_ngcontent-%COMP%] {\r\n    flex: 0 0 20%;\r\n}\r\n.mat-column-length[_ngcontent-%COMP%] {\r\n    flex: 0 0 10%;\r\n}\r\n.mat-column-bvid[_ngcontent-%COMP%] {\r\n    flex: 0 0 10%;\r\n}\r\n.mat-header-cell[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllci12aWRlby1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQ0FBaUM7SUFDakMsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLFVBQVU7SUFDViw0QkFBNEI7SUFDNUIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsUUFBUTtJQUNSLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7O0FBRWY7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2YsYUFBYTtJQUNiLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjtBQUVBOztHQUVHO0FBRUg7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InBsYXllci12aWRlby1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9we1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcm9zeWJyb3duOyAqL1xyXG4gICAgaGVpZ2h0OiAyNSU7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtaW4td2lkdGg6IDQwMHB4OztcclxufVxyXG4ubWFpbntcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6eWVsbG93OyAqL1xyXG4gICAgaGVpZ2h0OjY1JTtcclxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7ICovXHJcbiAgICAvKiBvdmVyZmxvdzphdXRvOyAqL1xyXG59XHJcbi5tYXQtY2VsbHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uY29udGFpbmVybm9uZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxufVxyXG4ubWFpbm5vbmV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcclxufVxyXG4ucGljdHVyZWRpdntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGVzbW9rZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4udG9wbGVmdHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG5cclxufVxyXG5cclxuLnRpdGxle1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsdWU7ICovXHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTAwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDFyZW07XHJcbn1cclxuLnBhcmdyYXBoe1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6d3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wYXJncmFwaCBwe1xyXG4gICAgd2lkdGg6IDE1cmVtO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4ubWF0LWVsZXZhdGlvbi16OHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi8qIG56LXRhYmxle1xyXG4gICAgXHJcbn0gKi9cclxuXHJcbi5tYXQtY29sdW1uLXRpdGxle1xyXG4gICAgZmxleDogMCAwIDYwJTtcclxufVxyXG4ubWF0LWNvbHVtbi1jcmVhdGVkIHtcclxuICAgIGZsZXg6IDAgMCAyMCU7XHJcbn1cclxuLm1hdC1jb2x1bW4tbGVuZ3RoIHtcclxuICAgIGZsZXg6IDAgMCAxMCU7XHJcbn1cclxuLm1hdC1jb2x1bW4tYnZpZCB7XHJcbiAgICBmbGV4OiAwIDAgMTAlO1xyXG59XHJcbi5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbiJdfQ== */", "body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], li[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], code[_ngcontent-%COMP%], form[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {margin:0;padding:0}    fieldset[_ngcontent-%COMP%], img[_ngcontent-%COMP%] {border:0 none}    dl[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {list-style:none}    blockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {quotes: none}    blockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {content:'';content:none}    input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {vertical-align:middle}    button[_ngcontent-%COMP%] {border:0 none;background-color:transparent;cursor:pointer}    body[_ngcontent-%COMP%] {background:#fff}    body[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {font-size:16px;line-height:1 ;font-family:\"\u5FAE\u8F6F\u96C5\u9ED1\", \"\u9ED1\u4F53\",\"\u5B8B\u4F53\";color:#666}    a[_ngcontent-%COMP%] {color:#666;text-decoration:none}    a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:hover {text-decoration:none}    address[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], var[_ngcontent-%COMP%] {font-style:normal;font-weight:normal}    caption[_ngcontent-%COMP%] {display:none;}    table[_ngcontent-%COMP%] {width:100%;border-collapse:collapse;border-spacing:0;table-layout:fixed;}    img[_ngcontent-%COMP%]{vertical-align:top}    *[_ngcontent-%COMP%]{\r\n    font-family: \"Arial\",\"Microsoft YaHei\",\"\u9ED1\u4F53\",\"\u5B8B\u4F53\",sans-serif;\r\n}      a[_ngcontent-%COMP%] {outline: none;}        .clear[_ngcontent-%COMP%]{clear: both;}    .clearfix[_ngcontent-%COMP%]:before, .clearfix[_ngcontent-%COMP%]:after{content: '';display: table;}  .clearfix[_ngcontent-%COMP%]:after{clear: both;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzBEQUMwRCxRQUFRLENBQUMsU0FBUyxHQUFHLGlDQUFpQyxHQUNoSCxjQUFjLGFBQWEsR0FBRyw0QkFBNEIsR0FDMUQsa0JBQWtCLGVBQWUsR0FBSSxnQ0FBZ0MsR0FDckUsZUFBZSxZQUFZLEdBQUksZ0JBQWdCLEdBQy9DLHVEQUF1RCxVQUFVLENBQUMsWUFBWSxHQUFHLFVBQVUsR0FDM0YsOEJBQThCLHFCQUFxQixHQUFHLGNBQWMsR0FDcEUsUUFBUSxhQUFhLENBQUMsNEJBQTRCLENBQUMsY0FBYyxHQUFHLG1CQUFtQixHQUN2RixNQUFNLGVBQWUsR0FBSSxtQkFBbUIsR0FDNUMseUNBQXlDLGNBQWMsQ0FBQyxjQUFjLENBQUMsNkJBQTZCLENBQUMsVUFBVSxHQUFFLGFBQWEsR0FDOUgsR0FBRyxVQUFVLENBQUMsb0JBQW9CLEdBQUcsWUFBWSxHQUNqRCxtQkFBbUIsb0JBQW9CLEdBQUksbUJBQW1CLEdBQzlELHNDQUFzQyxpQkFBaUIsQ0FBQyxrQkFBa0IsR0FBRyxjQUFjLEdBQzNGLFNBQVMsWUFBWSxDQUFDLEdBQUssY0FBYyxHQUN6QyxPQUFPLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFLLGNBQWMsR0FDbEcsSUFBSSxrQkFBa0IsR0FBRyxpQkFBaUIsR0FDMUM7SUFDSSwyREFBMkQ7QUFDL0QsR0FDQSxTQUFTLEdBRVAsaUJBQWlCLEdBQ25CLEdBQUcsYUFBYSxDQUFDLEdBRWhCLCtCQUErQixHQUNoQzs7O0NBR0MsR0FFRCxPQUFPLEdBQ1AsT0FBTyxXQUFXLENBQUMsR0FFbkIsYUFBYSxHQUNiLGlDQUFpQyxXQUFXLENBQUMsY0FBYyxDQUFDLEdBQzVELGdCQUFnQixXQUFXLENBQUMiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5LGRpdixkbCxkdCxkZCx1bCxvbCxsaSxoMSxoMixoMyxoNCxoNSxoNixwcmUsY29kZSxmb3JtLGZpZWxkc2V0LGxlZ2VuZCxcclxudGV4dGFyZWEscCxibG9ja3F1b3RlLHRoLHRkLGlucHV0LHNlbGVjdCx0ZXh0YXJlYSxidXR0b24ge21hcmdpbjowO3BhZGRpbmc6MH0gIC8qIOWIneWni+WMluagh+etvuWcqOaJgOaciea1j+iniOWZqOS4reeahG1hcmdpbuOAgXBhZGRpbmflgLwgKi9cclxuZmllbGRzZXQsaW1nIHtib3JkZXI6MCBub25lfSAgLyog6YeN572uZmllbGRzZXTvvIjooajljZXliIbnu4TvvInjgIHlm77niYfnmoTovrnmoYbkuLowKi9cclxuZGwsdWwsb2wsbWVudSxsaSB7bGlzdC1zdHlsZTpub25lfSAgIC8qIOmHjee9ruexu+ihqOWJjeWvvOespuWPt+S4um9ubmUsbWVudeWcqEhUTUw15Lit5pyJ5pWIICovXHJcbmJsb2NrcXVvdGUsIHEge3F1b3Rlczogbm9uZX0gICAvKiDph43nva7ltYzlpZflvJXnlKjnmoTlvJXlj7fnsbvlnosgKi9cclxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIscTpiZWZvcmUsIHE6YWZ0ZXIge2NvbnRlbnQ6Jyc7Y29udGVudDpub25lfSAgLyog6YeN572u5bWM5aWX5byV55SoKi9cclxuaW5wdXQsc2VsZWN0LHRleHRhcmVhLGJ1dHRvbiB7dmVydGljYWwtYWxpZ246bWlkZGxlfSAgLyog6YeN572u6KGo5Y2V5o6n5Lu25Z6C55u05bGF5LitKi9cclxuYnV0dG9uIHtib3JkZXI6MCBub25lO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Y3Vyc29yOnBvaW50ZXJ9ICAvKiDph43nva7ooajljZVidXR0b27mjInpkq7mlYjmnpwgKi9cclxuYm9keSB7YmFja2dyb3VuZDojZmZmfSAgIC8qIOmHjee9rmJvZHkg6aG16Z2i6IOM5pmv5Li655m96ImyICovXHJcbmJvZHksdGgsdGQsaW5wdXQsc2VsZWN0LHRleHRhcmVhLGJ1dHRvbiB7Zm9udC1zaXplOjE2cHg7bGluZS1oZWlnaHQ6MSA7Zm9udC1mYW1pbHk6XCLlvq7ova/pm4Xpu5FcIiwgXCLpu5HkvZNcIixcIuWui+S9k1wiO2NvbG9yOiM2NjZ9IC8qIOmHjee9rumhtemdouaWh+Wtl+WxnuaApyAqL1xyXG5hIHtjb2xvcjojNjY2O3RleHQtZGVjb3JhdGlvbjpub25lfSAgLyog6YeN572u6ZO+5o6lYeagh+etviAqL1xyXG5hOmFjdGl2ZSwgYTpob3ZlciB7dGV4dC1kZWNvcmF0aW9uOm5vbmV9ICAgLyog6YeN572u6ZO+5o6lYeagh+etvueahOm8oOagh+a7keWKqOaViOaenCAqL1xyXG5hZGRyZXNzLGNhcHRpb24sY2l0ZSxjb2RlLGRmbixlbSx2YXIge2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbH0gIC8qIOmHjee9ruagt+W8j+agh+etvueahOagt+W8jyAqL1xyXG5jYXB0aW9uIHtkaXNwbGF5Om5vbmU7fSAgICAvKiDph43nva7ooajmoLzmoIfpopjkuLrpmpDol48gKi9cclxudGFibGUge3dpZHRoOjEwMCU7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO2JvcmRlci1zcGFjaW5nOjA7dGFibGUtbGF5b3V0OmZpeGVkO30gICAgLyog6YeN572udGFibGXlsZ7mgKcgKi9cclxuaW1ne3ZlcnRpY2FsLWFsaWduOnRvcH0gIC8qIOWbvueJh+WcqOW9k+WJjeihjOWGheeahOWeguebtOS9jee9riAqL1xyXG4qe1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIixcIk1pY3Jvc29mdCBZYUhlaVwiLFwi6buR5L2TXCIsXCLlrovkvZNcIixzYW5zLXNlcmlmO1xyXG59XHJcbi8qIOmhtemdouiuvue9riAqL1xyXG4gXHJcbiAgLyog5Y+W5raIYeagh+etvueCueWHu+WQjueahOiZmue6v+ahhiAqL1xyXG5hIHtvdXRsaW5lOiBub25lO30gIFxyXG4gXHJcbiAvKiDorr7nva7pobXpnaLmloflrZfnrYnlnKjmi5bliqjpvKDmoIfpgInkuK3mg4XlhrXkuIvnmoTog4zmma/oibLkuI7mloflrZfpopzoibIgKi9cclxuLyogXHJcbjo6c2VsZWN0aW9uIHtjb2xvcjogI2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiAjNEM2RTc4O30gICAgXHJcbjo6LW1vei1zZWxlY3Rpb24ge2NvbG9yOiAjZmZmO2JhY2tncm91bmQtY29sb3I6ICM0QzZFNzg7fSBcclxuKi9cclxuIFxyXG4vKua4hemZpOa1ruWKqCovXHJcbi5jbGVhcntjbGVhcjogYm90aDt9XHJcbiBcclxuLyrmuIXpmaTmta7liqgtLeaOqOiNkOS9v+eUqCovXHJcbi5jbGVhcmZpeDpiZWZvcmUsLmNsZWFyZml4OmFmdGVye2NvbnRlbnQ6ICcnO2Rpc3BsYXk6IHRhYmxlO31cclxuLmNsZWFyZml4OmFmdGVye2NsZWFyOiBib3RoO30iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerVideoListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-player-video-list',
                templateUrl: './player-video-list.component.html',
                styleUrls: ['./player-video-list.component.css', '../app.component.css']
            }]
    }], function () { return [{ type: _videolist_service__WEBPACK_IMPORTED_MODULE_3__["VideolistService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]]
        }], player: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _players_players_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./players/players.component */ "99qh");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index/index.component */ "aUdj");






const routes = [
    { path: 'player', component: _players_players_component__WEBPACK_IMPORTED_MODULE_2__["PlayersComponent"] },
    { path: '', component: _index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map