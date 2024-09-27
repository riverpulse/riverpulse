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
Object.defineProperty(exports, "__esModule", { value: true });
const xrpl_1 = require("xrpl");
const client = new xrpl_1.Client("wss://s.altnet.rippletest.net:51233");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("lets get started...");
    yield client.connect();
    // do something interesting here
    yield client.disconnect();
    console.log("all done!");
});
main();
