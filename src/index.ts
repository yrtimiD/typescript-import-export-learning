console.log("start");
// ------------------------------------interface exports
import {A} from "./modules/interfaceExport";

export class C implements A {

    public getA(): string {
        return "A";
    }
}
let c = new C();
console.log(c.getA());

// ------------------------------------class exports
import {B} from "./modules/classExport";
let b = new B();
b.pub();

// ------------------------------------namedExport
// import {D} from "./modules/namedExport"; //will not work
import {ddd} from "./modules/namedExport";

// ------------------------------------manyExports
import * as bigModule from "./modules/manyExports";
let e = new bigModule.E();
let f = new bigModule.F();
let g = bigModule.g;

// ------------------------------------default export
import h from "./modules/defaultExport";
let hh = new h();
console.log(hh);

// ------------------------------------node module
import lodash = require("lodash");
console.log(lodash.toLower("HELLO"));

import * as _ from "lodash";
console.log(_.toUpper("hello"));
