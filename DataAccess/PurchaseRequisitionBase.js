var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Record", "./Sublist", "./InventoryDetailBase", "N/record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PurchaseRequisitionBase = exports.ExpenseSublist = exports.ItemSublist = void 0;
    var Record_1 = require("./Record");
    var Sublist_1 = require("./Sublist");
    var InventoryDetailBase_1 = require("./InventoryDetailBase");
    var record = require("N/record");
    /**
     * Purchase Requisition Item Sublist
     */
    var ItemSublist = /** @class */ (function (_super) {
        __extends(ItemSublist, _super);
        function ItemSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], ItemSublist.prototype, "amount", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "class", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ItemSublist.prototype, "createpo", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "customer", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "department", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ItemSublist.prototype, "description", void 0);
        __decorate([
            Sublist_1.SublistFieldType.subrecord(InventoryDetailBase_1.InventoryDetailBase)
        ], ItemSublist.prototype, "inventorydetail", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], ItemSublist.prototype, "isbillable", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], ItemSublist.prototype, "isclosed", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "item", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ItemSublist.prototype, "line", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "linkedorder", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ItemSublist.prototype, "linkedorderstatus", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "povendor", void 0);
        __decorate([
            Sublist_1.SublistFieldType.decimalnumber
        ], ItemSublist.prototype, "quantity", void 0);
        __decorate([
            Sublist_1.SublistFieldType.decimalnumber
        ], ItemSublist.prototype, "quantityreceived", void 0);
        __decorate([
            Sublist_1.SublistFieldType.decimalnumber
        ], ItemSublist.prototype, "rate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.textarea
        ], ItemSublist.prototype, "serialnumbers", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "units", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ItemSublist.prototype, "vendorname", void 0);
        return ItemSublist;
    }(Sublist_1.SublistLine));
    exports.ItemSublist = ItemSublist;
    /**
     * Purchase Requisition Expense Sublist
     */
    var ExpenseSublist = /** @class */ (function (_super) {
        __extends(ExpenseSublist, _super);
        function ExpenseSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ExpenseSublist.prototype, "account", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], ExpenseSublist.prototype, "amount", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ExpenseSublist.prototype, "category", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ExpenseSublist.prototype, "class", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ExpenseSublist.prototype, "customer", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ExpenseSublist.prototype, "department", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], ExpenseSublist.prototype, "isbillable", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], ExpenseSublist.prototype, "isclosed", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ExpenseSublist.prototype, "line", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ExpenseSublist.prototype, "linkedorder", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ExpenseSublist.prototype, "linkedorderstatus", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ExpenseSublist.prototype, "location", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ExpenseSublist.prototype, "memo", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ExpenseSublist.prototype, "povendor", void 0);
        return ExpenseSublist;
    }(Sublist_1.SublistLine));
    exports.ExpenseSublist = ExpenseSublist;
    /**
     * NetSuite Purchase Requisition record type
     * (known as "Requisition" in record browser)
     */
    var PurchaseRequisitionBase = /** @class */ (function (_super) {
        __extends(PurchaseRequisitionBase, _super);
        function PurchaseRequisitionBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PurchaseRequisitionBase.recordType = function () { return record.Type.PURCHASE_REQUISITION; };
        __decorate([
            Record_1.FieldType.select
        ], PurchaseRequisitionBase.prototype, "approvalstatus", void 0);
        __decorate([
            Record_1.FieldType.select
        ], PurchaseRequisitionBase.prototype, "class", void 0);
        __decorate([
            Record_1.FieldType.datetime
        ], PurchaseRequisitionBase.prototype, "createddate", void 0);
        __decorate([
            Record_1.FieldType.select
        ], PurchaseRequisitionBase.prototype, "createdfrom", void 0);
        __decorate([
            Record_1.FieldType.select
        ], PurchaseRequisitionBase.prototype, "currency", void 0);
        __decorate([
            Record_1.FieldType.select
        ], PurchaseRequisitionBase.prototype, "customform", void 0);
        __decorate([
            Record_1.FieldType.select
        ], PurchaseRequisitionBase.prototype, "department", void 0);
        __decorate([
            Record_1.FieldType.date
        ], PurchaseRequisitionBase.prototype, "duedate", void 0);
        __decorate([
            Record_1.FieldType.select
        ], PurchaseRequisitionBase.prototype, "entity", void 0);
        __decorate([
            Record_1.FieldType.select
        ], PurchaseRequisitionBase.prototype, "entitynexus", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], PurchaseRequisitionBase.prototype, "estimatedtotal", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], PurchaseRequisitionBase.prototype, "externalid", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], PurchaseRequisitionBase.prototype, "linkedtrackingnumber", void 0);
        __decorate([
            Record_1.FieldType.select
        ], PurchaseRequisitionBase.prototype, "location", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], PurchaseRequisitionBase.prototype, "memo", void 0);
        __decorate([
            Record_1.FieldType.textarea
        ], PurchaseRequisitionBase.prototype, "message", void 0);
        __decorate([
            Record_1.FieldType.select
        ], PurchaseRequisitionBase.prototype, "nextapprover", void 0);
        __decorate([
            Record_1.FieldType.select
        ], PurchaseRequisitionBase.prototype, "nexus", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], PurchaseRequisitionBase.prototype, "returntrackingnumbers", void 0);
        __decorate([
            Record_1.FieldType.date
        ], PurchaseRequisitionBase.prototype, "shipdate", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], PurchaseRequisitionBase.prototype, "source", void 0);
        __decorate([
            Record_1.FieldType.select
        ], PurchaseRequisitionBase.prototype, "status", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], PurchaseRequisitionBase.prototype, "statusRef", void 0);
        __decorate([
            Record_1.FieldType.select
        ], PurchaseRequisitionBase.prototype, "subsidiary", void 0);
        __decorate([
            Record_1.FieldType.select
        ], PurchaseRequisitionBase.prototype, "terms", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], PurchaseRequisitionBase.prototype, "total", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], PurchaseRequisitionBase.prototype, "trackingnumbers", void 0);
        __decorate([
            Record_1.FieldType.date
        ], PurchaseRequisitionBase.prototype, "trandate", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], PurchaseRequisitionBase.prototype, "tranid", void 0);
        __decorate([
            Record_1.FieldType.sublist(ItemSublist)
        ], PurchaseRequisitionBase.prototype, "item", void 0);
        __decorate([
            Record_1.FieldType.sublist(ExpenseSublist)
        ], PurchaseRequisitionBase.prototype, "expense", void 0);
        return PurchaseRequisitionBase;
    }(Record_1.NetsuiteRecord));
    exports.PurchaseRequisitionBase = PurchaseRequisitionBase;
});
