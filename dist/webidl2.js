!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.WebIDL2=t():e.WebIDL2=t()}(this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t,n,r,s,{level:i="error",autofix:o,ruleName:a}={}){function c(n){return n>0?e.slice(t,t+n):e.slice(Math.max(t+n,0),t)}function u(n,{precedes:r}={}){const s=n.map(e=>e.trivia+e.value).join(""),i=e[t];return"eof"===i.type?s:r?s+i.trivia:s.slice(i.trivia.length)}const l="eof"!==e[t].type?e[t].line:e.length>1?e[t-1].line:1,p=function(e){const t=e.split("\n");return t[t.length-1]}(u(c(-5),{precedes:!0})),d=c(5),m=u(d),f=p+m.split("\n")[0]+"\n"+(" ".repeat(p.length)+"^"),y="Syntax"===s?"since":"inside",b=`${s} error at line ${l}${e.name?` in ${e.name}`:""}${n&&n.name?`, ${y} \`${n.partial?"partial ":""}${n.type} ${n.name}\``:""}:\n${f}`;return{message:`${b} ${r}`,bareMessage:r,context:b,line:l,sourceName:e.name,level:i,ruleName:a,autofix:o,input:m,tokens:d}}function s(e,t,n,s){return r(e,t,n,s,"Syntax")}function i(e,t,n,s,i={}){return i.ruleName=n,r(t.source,e.index,t,s,"Validation",i)}n.r(t);class Base{constructor({source:e,tokens:t}){Object.defineProperties(this,{source:{value:e},tokens:{value:t},parent:{value:null,writable:!0},this:{value:this}})}toJSON(){const e={type:void 0,name:void 0,inheritance:void 0};let t=this;for(;t!==Object.prototype;){const n=Object.getOwnPropertyDescriptors(t);for(const[t,r]of Object.entries(n))(r.enumerable||r.get)&&(e[t]=this[t]);t=Object.getPrototypeOf(t)}return e}}function o(e,t,{useNullableInner:n}={}){if(!e.union){const r=t.unique.get(e.idlType);if(!r)return;if("typedef"===r.type){const{typedefIncludesDictionary:n}=t.cache;if(n.has(r))return n.get(r);t.cache.typedefIncludesDictionary.set(r,void 0);const s=o(r.idlType,t);if(t.cache.typedefIncludesDictionary.set(r,s),s)return{reference:e,dictionary:s.dictionary}}if("dictionary"===r.type&&(n||!e.nullable))return{reference:e,dictionary:r}}for(const n of e.subtype){const e=o(n,t);if(e)return n.union?e:{reference:n,dictionary:e.dictionary}}}function a(e,t){const n=e.consume("?");n&&(t.tokens.nullable=n),e.probe("?")&&e.error("Can't nullable more than once")}function c(e,t){let n=function(e,t){const n=e.consume("FrozenArray","Promise","sequence","record");if(!n)return;const r=w(new type_Type({source:e.source,tokens:{base:n}}));switch(r.tokens.open=e.consume("<")||e.error(`No opening bracket after ${n.type}`),n.type){case"Promise":{e.probe("[")&&e.error("Promise type cannot have extended attribute");const n=k(e,t)||e.error("Missing Promise subtype");r.subtype.push(n);break}case"sequence":case"FrozenArray":{const s=h(e,t)||e.error(`Missing ${n.type} subtype`);r.subtype.push(s);break}case"record":{e.probe("[")&&e.error("Record key cannot have extended attribute");const n=e.consume(...I)||e.error(`Record key must be one of: ${I.join(", ")}`),s=new type_Type({source:e.source,tokens:{base:n}});s.tokens.separator=e.consume(",")||e.error("Missing comma after record key type"),s.type=t;const i=h(e,t)||e.error("Error parsing generic type record");r.subtype.push(s,i);break}}return r.idlType||e.error(`Error parsing generic type ${n.type}`),r.tokens.close=e.consume(">")||e.error(`Missing closing bracket after ${n.type}`),r.this}(e,t)||y(e);if(!n){const t=e.consume("identifier",...I,...T);if(!t)return;n=new type_Type({source:e.source,tokens:{base:t}}),e.probe("<")&&e.error(`Unsupported generic type ${t.value}`)}return"Promise"===n.generic&&e.probe("?")&&e.error("Promise type cannot be nullable"),n.type=t||null,a(e,n),n.nullable&&"any"===n.idlType&&e.error("Type `any` cannot be made nullable"),n}class type_Type extends Base{static parse(e,t){return c(e,t)||function(e,t){const n={};if(n.open=e.consume("("),!n.open)return;const r=w(new type_Type({source:e.source,tokens:n}));for(r.type=t||null;;){const t=h(e)||e.error("No type after open parenthesis or 'or' in union type");"any"===t.idlType&&e.error("Type `any` cannot be included in a union type"),"Promise"===t.generic&&e.error("Type `Promise` cannot be included in a union type"),r.subtype.push(t);const n=e.consume("or");if(!n)break;t.tokens.separator=n}return r.idlType.length<2&&e.error("At least two types are expected in a union type but found less"),n.close=e.consume(")")||e.error("Unterminated union type"),a(e,r),r.this}(e,t)}constructor({source:e,tokens:t}){super({source:e,tokens:t}),Object.defineProperty(this,"subtype",{value:[],writable:!0}),this.extAttrs=[]}get generic(){return this.subtype.length&&this.tokens.base?this.tokens.base.value:""}get nullable(){return Boolean(this.tokens.nullable)}get union(){return Boolean(this.subtype.length)&&!this.tokens.base}get idlType(){if(this.subtype.length)return this.subtype;return p([this.tokens.prefix,this.tokens.base,this.tokens.postfix].filter(e=>e).map(e=>e.value).join(" "))}*validate(e){const t=!this.union&&e.unique.get(this.idlType),n=this.union?this:t&&"typedef"===t.type?t.idlType:void 0;if(n&&this.nullable){const{reference:t}=o(n,e)||{};if(t){const e=(this.union?t:this).tokens.base,n="Nullable union cannot include a dictionary type";yield i(e,this,"no-nullable-union-dict",n)}}else for(const t of this.subtype)yield*t.validate(e)}}class default_Default extends Base{static parse(e){const t=e.consume("=");if(!t)return null;const n=m(e)||e.consume("string","null","[","{")||e.error("No value for default"),r=[n];if("["===n.type){const t=e.consume("]")||e.error("Default sequence value must be empty");r.push(t)}else if("{"===n.type){const t=e.consume("}")||e.error("Default dictionary value must be empty");r.push(t)}return new default_Default({source:e.source,tokens:{assign:t},expression:r})}constructor({source:e,tokens:t,expression:n}){super({source:e,tokens:t}),n.parent=this,Object.defineProperty(this,"expression",{value:n})}get type(){return f(this.expression[0]).type}get value(){return f(this.expression[0]).value}get negative(){return f(this.expression[0]).negative}}class ArrayBase extends Array{constructor({source:e,tokens:t}){super(),Object.defineProperties(this,{source:{value:e},tokens:{value:t},parent:{value:null,writable:!0}})}}class token_Token extends Base{static parser(e,t){return()=>{const n=e.consume(t);if(n)return new token_Token({source:e.source,tokens:{value:n}})}}get value(){return p(this.tokens.value.value)}}function u(e,t){return d(e,{parser:token_Token.parser(e,t),listName:t+" list"})}class extended_attributes_ExtendedAttributeParameters extends Base{static parse(e){const t={assign:e.consume("=")},n=w(new extended_attributes_ExtendedAttributeParameters({source:e.source,tokens:t}));return t.assign&&(t.secondaryName=e.consume("identifier","decimal","integer","string")),t.open=e.consume("("),t.open?(n.list=n.rhsIsList?function(e){let t=u(e,"identifier");return t.length?t:(t=u(e,"string")).length?t:void e.error("Expected identifiers or strings but none found")}(e):b(e),t.close=e.consume(")")||e.error("Unexpected token in extended attribute argument list")):n.hasRhs&&!t.secondaryName&&e.error("No right hand side to extended attribute assignment"),n.this}get rhsIsList(){return this.tokens.assign&&!this.tokens.secondaryName}get rhsType(){return this.rhsIsList?this.list[0].tokens.value.type+"-list":this.tokens.secondaryName?this.tokens.secondaryName.type:null}}class extended_attributes_SimpleExtendedAttribute extends Base{static parse(e){const t=e.consume("identifier");if(t)return new extended_attributes_SimpleExtendedAttribute({source:e.source,tokens:{name:t},params:extended_attributes_ExtendedAttributeParameters.parse(e)})}constructor({source:e,tokens:t,params:n}){super({source:e,tokens:t}),n.parent=this,Object.defineProperty(this,"params",{value:n})}get type(){return"extended-attribute"}get name(){return this.tokens.name.value}get rhs(){const{rhsType:e,tokens:t,list:n}=this.params;return e?{type:e,value:this.params.rhsIsList?n:p(t.secondaryName.value)}:null}get arguments(){const{rhsIsList:e,list:t}=this.params;return!t||e?[]:t}*validate(e){if("NoInterfaceObject"===this.name){const e="`[NoInterfaceObject]` extended attribute is an undesirable feature that may be removed from Web IDL in the future. Refer to the [relevant upstream PR](https://github.com/heycam/webidl/pull/609) for more information.";yield i(this.tokens.name,this,"no-nointerfaceobject",e,{level:"warning"})}for(const t of this.arguments)yield*t.validate(e)}}class extended_attributes_ExtendedAttributes extends ArrayBase{static parse(e){const t={};if(t.open=e.consume("["),!t.open)return new extended_attributes_ExtendedAttributes({});const n=new extended_attributes_ExtendedAttributes({source:e.source,tokens:t});return n.push(...d(e,{parser:extended_attributes_SimpleExtendedAttribute.parse,listName:"extended attribute"})),t.close=e.consume("]")||e.error("Unexpected closing token of extended attribute"),n.length||e.error("Found an empty extended attribute"),e.probe("[")&&e.error("Illegal double extended attribute lists, consider merging them"),n}*validate(e){for(const t of this)yield*t.validate(e)}}class argument_Argument extends Base{static parse(e){const t=e.position,n={},r=w(new argument_Argument({source:e.source,tokens:n}));return r.extAttrs=extended_attributes_ExtendedAttributes.parse(e),n.optional=e.consume("optional"),r.idlType=h(e,"argument-type"),r.idlType?(n.optional||(n.variadic=e.consume("...")),n.name=e.consume("identifier",...E),n.name?(r.default=n.optional?default_Default.parse(e):null,r.this):e.unconsume(t)):e.unconsume(t)}get type(){return"argument"}get optional(){return!!this.tokens.optional}get variadic(){return!!this.tokens.variadic}get name(){return p(this.tokens.name.value)}*validate(e){yield*this.idlType.validate(e);const t=o(this.idlType,e,{useNullableInner:!0});if(t)if(this.idlType.nullable){const e="Dictionary arguments cannot be nullable.";yield i(this.tokens.name,this,"no-nullable-dict-arg",e)}else if(this.optional){if(!this.default){const e="Optional dictionary arguments must have a default value of `{}`.";yield i(this.tokens.name,this,"dict-arg-default",e,{autofix:l(this)})}}else if(this.parent&&!function e(t,n){if(n.cache.dictionaryIncludesRequiredField.has(t))return n.cache.dictionaryIncludesRequiredField.get(t);if(n.cache.dictionaryIncludesRequiredField.set(t,void 0),t.inheritance){const r=n.unique.get(t.inheritance);if(!r)return!0;if(e(r,n))return!0}const r=t.members.some(e=>e.required);return n.cache.dictionaryIncludesRequiredField.set(t,r),r}(t.dictionary,e)&&function(e){const t=e.parent.arguments||e.parent.list,n=t.indexOf(e);return!t.slice(n+1).some(e=>!e.optional)}(this)){const e="Dictionary argument must be optional if it has no required fields";yield i(this.tokens.name,this,"dict-arg-optional",e,{autofix:(n=this,()=>{const e=_(n.idlType);n.tokens.optional={type:"optional",value:"optional",trivia:e.trivia},e.trivia=" ",l(n)()})})}var n}}function l(e){return()=>{e.default=default_Default.parse(new tokeniser_Tokeniser(" = {}"))}}class operation_Operation extends Base{static parse(e,{special:t,regular:n}={}){const r={special:t},s=w(new operation_Operation({source:e.source,tokens:r}));return t&&"stringifier"===t.value&&(r.termination=e.consume(";"),r.termination)?(s.arguments=[],s):(t||n||(r.special=e.consume("getter","setter","deleter")),s.idlType=k(e)||e.error("Missing return type"),r.name=e.consume("identifier","includes"),r.open=e.consume("(")||e.error("Invalid operation"),s.arguments=b(e),r.close=e.consume(")")||e.error("Unterminated operation"),r.termination=e.consume(";")||e.error("Unterminated operation, expected `;`"),s.this)}get type(){return"operation"}get name(){const{name:e}=this.tokens;return e?p(e.value):""}get special(){return this.tokens.special?this.tokens.special.value:""}*validate(e){if(!this.name&&["","static"].includes(this.special)){const e="Regular or static operations must have both a return type and an identifier.";yield i(this.tokens.open,this,"incomplete-op",e)}this.idlType&&(yield*this.idlType.validate(e));for(const t of this.arguments)yield*t.validate(e)}}class attribute_Attribute extends Base{static parse(e,{special:t,noInherit:n=!1,readonly:r=!1}={}){const s=e.position,i={special:t},o=w(new attribute_Attribute({source:e.source,tokens:i}));if(t||n||(i.special=e.consume("inherit")),"inherit"===o.special&&e.probe("readonly")&&e.error("Inherited attributes cannot be read-only"),i.readonly=e.consume("readonly"),r&&!i.readonly&&e.probe("attribute")&&e.error("Attributes must be readonly in this context"),i.base=e.consume("attribute"),i.base){switch(o.idlType=h(e,"attribute-type")||e.error("Attribute lacks a type"),o.idlType.generic){case"sequence":case"record":e.error(`Attributes cannot accept ${o.idlType.generic} types`)}return i.name=e.consume("identifier","async","required")||e.error("Attribute lacks a name"),i.termination=e.consume(";")||e.error("Unterminated attribute, expected `;`"),o.this}e.unconsume(s)}get type(){return"attribute"}get special(){return this.tokens.special?this.tokens.special.value:""}get readonly(){return!!this.tokens.readonly}get name(){return p(this.tokens.name.value)}*validate(e){yield*this.idlType.validate(e)}}function p(e){return e.startsWith("_")?e.slice(1):e}function d(e,{parser:t,allowDangler:n,listName:r="list"}){const s=t(e);if(!s)return[];s.tokens.separator=e.consume(",");const i=[s];for(;s.tokens.separator;){const s=t(e);if(!s){n||e.error(`Trailing comma in ${r}`);break}if(s.tokens.separator=e.consume(","),i.push(s),!s.tokens.separator)break}return i}function m(e){return e.consume("true","false","Infinity","-Infinity","NaN","decimal","integer")}function f({type:e,value:t}){switch(e){case"true":case"false":return{type:"boolean",value:"true"===e};case"Infinity":case"-Infinity":return{type:"Infinity",negative:e.startsWith("-")};case"[":return{type:"sequence",value:[]};case"{":return{type:"dictionary"};case"decimal":case"integer":return{type:"number",value:t};case"string":return{type:"string",value:t.slice(1,-1)};default:return{type:e}}}function y(e){const{source:t}=e,n=function(){const n=e.consume("unsigned"),r=e.consume("short","long");if(r){const s=e.consume("long");return new type_Type({source:t,tokens:{prefix:n,base:r,postfix:s}})}n&&e.error("Failed to parse integer type")}()||function(){const n=e.consume("unrestricted"),r=e.consume("float","double");if(r)return new type_Type({source:t,tokens:{prefix:n,base:r}});n&&e.error("Failed to parse float type")}();if(n)return n;const r=e.consume("boolean","byte","octet");return r?new type_Type({source:t,tokens:{base:r}}):void 0}function b(e){return d(e,{parser:argument_Argument.parse,listName:"arguments list"})}function h(e,t){const n=extended_attributes_ExtendedAttributes.parse(e),r=type_Type.parse(e,t);return r&&(w(r).extAttrs=n),r}function k(e,t){const n=type_Type.parse(e,t||"return-type");if(n)return n;const r=e.consume("void");if(r){const t=new type_Type({source:e.source,tokens:{base:r}});return t.type="return-type",t}}function g(e){const t=e.consume("stringifier");if(t)return attribute_Attribute.parse(e,{special:t})||operation_Operation.parse(e,{special:t})||e.error("Unterminated stringifier")}function x(e){const t=e.split("\n");if(t.length){const e=t[t.length-1].match(/^\s+/);if(e)return e[0]}return""}function v(e){return()=>{if(e.extAttrs.length){const t=new tokeniser_Tokeniser("Exposed=Window,"),n=extended_attributes_SimpleExtendedAttribute.parse(t);n.tokens.separator=t.consume(",");const r=e.extAttrs[0];/^\s/.test(r.tokens.name.trivia)||(r.tokens.name.trivia=` ${r.tokens.name.trivia}`),e.extAttrs.unshift(n)}else{w(e).extAttrs=extended_attributes_ExtendedAttributes.parse(new tokeniser_Tokeniser("[Exposed=Window]"));const t=e.tokens.base.trivia;e.extAttrs.tokens.open.trivia=t,e.tokens.base.trivia=`\n${x(t)}`}}}function _(e){if(e.extAttrs.length)return e.extAttrs.tokens.open;if("operation"===e.type&&!e.special)return _(e.idlType);return Object.values(e.tokens).sort((e,t)=>e.index-t.index)[0]}function w(e,t){return t||(t=e),e?new Proxy(e,{get(e,t){const n=e[t];return Array.isArray(n)?w(n,e):n},set(e,n,r){if(e[n]=r,!r)return!0;if(Array.isArray(r))for(const e of r)void 0!==e.parent&&(e.parent=t);else void 0!==r.parent&&(r.parent=t);return!0}}):e}const A={decimal:/-?(?=[0-9]*\.|[0-9]+[eE])(([0-9]+\.[0-9]*|[0-9]*\.[0-9]+)([Ee][-+]?[0-9]+)?|[0-9]+[Ee][-+]?[0-9]+)/y,integer:/-?(0([Xx][0-9A-Fa-f]+|[0-7]*)|[1-9][0-9]*)/y,identifier:/[_-]?[A-Za-z][0-9A-Z_a-z-]*/y,string:/"[^"]*"/y,whitespace:/[\t\n\r ]+/y,comment:/((\/(\/.*|\*([^*]|\*[^/])*\*\/)[\t\n\r ]*)+)/y,other:/[^\t\n\r 0-9A-Za-z]/y},T=["ArrayBuffer","DataView","Int8Array","Int16Array","Int32Array","Uint8Array","Uint16Array","Uint32Array","Uint8ClampedArray","Float32Array","Float64Array","any","object","symbol"],I=["ByteString","DOMString","USVString"],E=["async","attribute","callback","const","constructor","deleter","dictionary","enum","getter","includes","inherit","interface","iterable","maplike","namespace","partial","required","setlike","setter","static","stringifier","typedef","unrestricted"],N=["-Infinity","FrozenArray","Infinity","NaN","Promise","boolean","byte","double","false","float","long","mixin","null","octet","optional","or","readonly","record","sequence","short","true","unsigned","void"].concat(E,I,T),C=["(",")",",","...",":",";","<","=",">","?","[","]","{","}"],$=["_constructor","toString","_toString"];class tokeniser_Tokeniser{constructor(e){this.source=function(e){const t=[];let n=0,r="",i=1,o=0;for(;n<e.length;){const c=e.charAt(n);let u=-1;if(/[\t\n\r ]/.test(c)?u=a("whitespace",{noFlushTrivia:!0}):"/"===c&&(u=a("comment",{noFlushTrivia:!0})),-1!==u){const e=t.pop().value;i+=(e.match(/\n/g)||[]).length,r+=e,o-=1}else if(/[-0-9.A-Z_a-z]/.test(c)){if(-1===(u=a("decimal"))&&(u=a("integer")),-1===u){u=a("identifier");const e=t.length-1,n=t[e];if(-1!==u){if($.includes(n.value)){const r=`${p(n.value)} is a reserved identifier and must not be used.`;throw new WebIDLParseError(s(t,e,null,r))}N.includes(n.value)&&(n.type=n.value)}}}else'"'===c&&(u=a("string"));for(const s of C)if(e.startsWith(s,n)){t.push({type:s,value:s,trivia:r,line:i,index:o}),r="",u=n+=s.length;break}if(-1===u&&(u=a("other")),-1===u)throw new Error("Token stream not progressing");n=u,o+=1}return t.push({type:"eof",value:"",trivia:r}),t;function a(s,{noFlushTrivia:a}={}){const c=A[s];c.lastIndex=n;const u=c.exec(e);return u?(t.push({type:s,value:u[0],trivia:r,line:i,index:o}),a||(r=""),c.lastIndex):-1}}(e),this.position=0}error(e){throw new WebIDLParseError(s(this.source,this.position,this.current,e))}probe(e){return this.source.length>this.position&&this.source[this.position].type===e}consume(...e){for(const t of e){if(!this.probe(t))continue;const e=this.source[this.position];return this.position++,e}}unconsume(e){this.position=e}}class WebIDLParseError extends Error{constructor({message:e,bareMessage:t,context:n,line:r,sourceName:s,input:i,tokens:o}){super(e),this.name="WebIDLParseError",this.bareMessage=t,this.context=n,this.line=r,this.sourceName=s,this.input=i,this.tokens=o}}class enum_EnumValue extends token_Token{static parse(e){const t=e.consume("string");if(t)return new enum_EnumValue({source:e.source,tokens:{value:t}})}get type(){return"enum-value"}get value(){return super.value.slice(1,-1)}}class enum_Enum extends Base{static parse(e){const t={};if(t.base=e.consume("enum"),!t.base)return;t.name=e.consume("identifier")||e.error("No name for enum");const n=w(new enum_Enum({source:e.source,tokens:t}));return e.current=n.this,t.open=e.consume("{")||e.error("Bodyless enum"),n.values=d(e,{parser:enum_EnumValue.parse,allowDangler:!0,listName:"enumeration"}),e.probe("string")&&e.error("No comma between enum values"),t.close=e.consume("}")||e.error("Unexpected value in enum"),n.values.length||e.error("No value in enum"),t.termination=e.consume(";")||e.error("No semicolon after enum"),n.this}get type(){return"enum"}get name(){return p(this.tokens.name.value)}}class includes_Includes extends Base{static parse(e){const t=e.consume("identifier");if(!t)return;const n={target:t};if(n.includes=e.consume("includes"),n.includes)return n.mixin=e.consume("identifier")||e.error("Incomplete includes statement"),n.termination=e.consume(";")||e.error("No terminating ; for includes statement"),new includes_Includes({source:e.source,tokens:n});e.unconsume(t.index)}get type(){return"includes"}get target(){return p(this.tokens.target.value)}get includes(){return p(this.tokens.mixin.value)}}class typedef_Typedef extends Base{static parse(e){const t={},n=w(new typedef_Typedef({source:e.source,tokens:t}));if(t.base=e.consume("typedef"),t.base)return n.idlType=h(e,"typedef-type")||e.error("Typedef lacks a type"),t.name=e.consume("identifier")||e.error("Typedef lacks a name"),e.current=n.this,t.termination=e.consume(";")||e.error("Unterminated typedef, expected `;`"),n.this}get type(){return"typedef"}get name(){return p(this.tokens.name.value)}*validate(e){yield*this.idlType.validate(e)}}class callback_CallbackFunction extends Base{static parse(e,t){const n={base:t},r=w(new callback_CallbackFunction({source:e.source,tokens:n}));return n.name=e.consume("identifier")||e.error("Callback lacks a name"),e.current=r.this,n.assign=e.consume("=")||e.error("Callback lacks an assignment"),r.idlType=k(e)||e.error("Callback lacks a return type"),n.open=e.consume("(")||e.error("Callback lacks parentheses for arguments"),r.arguments=b(e),n.close=e.consume(")")||e.error("Unterminated callback"),n.termination=e.consume(";")||e.error("Unterminated callback, expected `;`"),r.this}get type(){return"callback"}get name(){return p(this.tokens.name.value)}*validate(e){yield*this.idlType.validate(e)}}class container_Container extends Base{static parse(e,t,{type:n,inheritable:r,allowedMembers:s}){const{tokens:i}=t;for(i.name=e.consume("identifier")||e.error(`Missing name in ${t.type}`),e.current=t,t=w(t),r&&Object.assign(i,function(e){const t=e.consume(":");return t?{colon:t,inheritance:e.consume("identifier")||e.error("Inheritance lacks a type")}:{}}(e)),i.open=e.consume("{")||e.error(`Bodyless ${n}`),t.members=[];;){if(i.close=e.consume("}"),i.close)return i.termination=e.consume(";")||e.error(`Missing semicolon after ${n}`),t.this;const r=extended_attributes_ExtendedAttributes.parse(e);let o;for(const[t,...n]of s)if(o=w(t(e,...n)))break;o||e.error("Unknown member"),o.extAttrs=r,t.members.push(o.this)}}get partial(){return!!this.tokens.partial}get name(){return p(this.tokens.name.value)}get inheritance(){return this.tokens.inheritance?p(this.tokens.inheritance.value):null}*validate(e){for(const t of this.members)t.validate&&(yield*t.validate(e))}}class constant_Constant extends Base{static parse(e){const t={};if(t.base=e.consume("const"),!t.base)return;let n=y(e);if(!n){const t=e.consume("identifier")||e.error("Const lacks a type");n=new type_Type({source:e.source,tokens:{base:t}})}e.probe("?")&&e.error("Unexpected nullable constant type"),n.type="const-type",t.name=e.consume("identifier")||e.error("Const lacks a name"),t.assign=e.consume("=")||e.error("Const lacks value assignment"),t.value=m(e)||e.error("Const lacks a value"),t.termination=e.consume(";")||e.error("Unterminated const, expected `;`");const r=new constant_Constant({source:e.source,tokens:t});return w(r).idlType=n,r}get type(){return"const"}get name(){return unescape(this.tokens.name.value)}get value(){return f(this.tokens.value)}}class iterable_IterableLike extends Base{static parse(e){const t=e.position,n={},r=w(new iterable_IterableLike({source:e.source,tokens:n}));if(n.readonly=e.consume("readonly"),n.readonly||(n.async=e.consume("async")),n.base=n.readonly?e.consume("maplike","setlike"):n.async?e.consume("iterable"):e.consume("iterable","maplike","setlike"),!n.base)return void e.unconsume(t);const{type:s}=r,i="maplike"===s||r.async,o=i||"iterable"===s;n.open=e.consume("<")||e.error(`Missing less-than sign \`<\` in ${s} declaration`);const a=h(e)||e.error(`Missing a type argument in ${s} declaration`);return r.idlType=[a],o&&(a.tokens.separator=e.consume(","),a.tokens.separator?r.idlType.push(h(e)):i&&e.error(`Missing second type argument in ${s} declaration`)),n.close=e.consume(">")||e.error(`Missing greater-than sign \`>\` in ${s} declaration`),n.termination=e.consume(";")||e.error(`Missing semicolon after ${s} declaration`),r.this}get type(){return this.tokens.base.value}get readonly(){return!!this.tokens.readonly}get async(){return!!this.tokens.async}}class constructor_Constructor extends Base{static parse(e){const t=e.consume("constructor");if(!t)return;const n={base:t};n.open=e.consume("(")||e.error("No argument list in constructor");const r=b(e);n.close=e.consume(")")||e.error("Unterminated constructor"),n.termination=e.consume(";")||e.error("No semicolon after constructor");const s=new constructor_Constructor({source:e.source,tokens:n});return w(s).arguments=r,s}get type(){return"constructor"}*validate(e){this.idlType&&(yield*this.idlType.validate(e));for(const t of this.arguments)yield*t.validate(e)}}function M(e){const t=e.consume("static");if(t)return attribute_Attribute.parse(e,{special:t})||operation_Operation.parse(e,{special:t})||e.error("No body in static member")}class interface_Interface extends container_Container{static parse(e,t,{partial:n=null}={}){const r={partial:n,base:t};return container_Container.parse(e,new interface_Interface({source:e.source,tokens:r}),{type:"interface",inheritable:!n,allowedMembers:[[constant_Constant.parse],[constructor_Constructor.parse],[M],[g],[iterable_IterableLike.parse],[attribute_Attribute.parse],[operation_Operation.parse]]})}get type(){return"interface"}*validate(e){if(yield*this.extAttrs.validate(e),!this.partial&&this.extAttrs.every(e=>"Exposed"!==e.name)&&this.extAttrs.every(e=>"NoInterfaceObject"!==e.name)){const e="Interfaces must have `[Exposed]` extended attribute. To fix, add, for example, `[Exposed=Window]`. Please also consider carefully if your interface should also be exposed in a Worker scope. Refer to the [WebIDL spec section on Exposed](https://heycam.github.io/webidl/#Exposed) for more information.";yield i(this.tokens.name,this,"require-exposed",e,{autofix:v(this)})}const t=this.extAttrs.filter(e=>"Constructor"===e.name);for(const e of t){const t="Constructors should now be represented as a `constructor()` operation on the interface instead of `[Constructor]` extended attribute. Refer to the [WebIDL spec section on constructor operations](https://heycam.github.io/webidl/#idl-constructors) for more information.";yield i(e.tokens.name,this,"constructor-member",t,{autofix:O(this,e)})}if(this.extAttrs.some(e=>"Global"===e.name)){const e=this.extAttrs.filter(e=>"NamedConstructor"===e.name);for(const t of e){const e="Interfaces marked as `[Global]` cannot have named constructors.";yield i(t.tokens.name,this,"no-constructible-global",e)}const t=this.members.filter(e=>"constructor"===e.type);for(const e of t){const t="Interfaces marked as `[Global]` cannot have constructors.";yield i(e.tokens.base,this,"no-constructible-global",t)}}yield*super.validate(e),this.partial||(yield*function*(e,t){const n=new Set(a(t).map(e=>e.name)),r=e.partials.get(t.name)||[],s=e.mixinMap.get(t.name)||[];for(const e of[...r,...s]){const r=a(e);yield*o(r,n,e,t);for(const e of r)n.add(e.name)}function*o(e,t,n,r){for(const s of e){const{name:e}=s;if(e&&t.has(e)){const t=`The operation "${e}" has already been defined for the base interface "${r.name}" either in itself or in a mixin`;yield i(s.tokens.name,n,"no-cross-overload",t)}}}function a(e){return e.members.filter(({type:e})=>"operation"===e)}}(e,this))}}function O(e,t){return e=w(e),()=>{const n=x(e.extAttrs.tokens.open.trivia),r=e.members.length?x(_(e.members[0]).trivia):function(e){const t=x(e),n=t.includes("\t")?"\t":"  ";return t+n}(n),s=constructor_Constructor.parse(new tokeniser_Tokeniser(`\n${r}constructor();`));s.extAttrs=[],w(s).arguments=t.arguments;const i=function(e,t){const n=e.slice().reverse().findIndex(t);return-1===n?n:e.length-n-1}(e.members,e=>"constructor"===e.type);e.members.splice(i+1,0,s);const{close:o}=e.tokens;o.trivia.includes("\n")||(o.trivia+=`\n${n}`);const{extAttrs:a}=e,c=a.indexOf(t),u=a.splice(c,1);a.length?a.length===c?a[c-1].tokens.separator=void 0:a[c].tokens.name.trivia.trim()||(a[c].tokens.name.trivia=u[0].tokens.name.trivia):a.tokens.open=a.tokens.close=void 0}}class mixin_Mixin extends container_Container{static parse(e,t,{partial:n}={}){const r={partial:n,base:t};if(r.mixin=e.consume("mixin"),r.mixin)return container_Container.parse(e,new mixin_Mixin({source:e.source,tokens:r}),{type:"interface mixin",allowedMembers:[[constant_Constant.parse],[g],[attribute_Attribute.parse,{noInherit:!0}],[operation_Operation.parse,{regular:!0}]]})}get type(){return"interface mixin"}}class field_Field extends Base{static parse(e){const t={},n=w(new field_Field({source:e.source,tokens:t}));return n.extAttrs=extended_attributes_ExtendedAttributes.parse(e),t.required=e.consume("required"),n.idlType=h(e,"dictionary-type")||e.error("Dictionary member lacks a type"),t.name=e.consume("identifier")||e.error("Dictionary member lacks a name"),n.default=default_Default.parse(e),t.required&&n.default&&e.error("Required member must not have a default"),t.termination=e.consume(";")||e.error("Unterminated dictionary member, expected `;`"),n.this}get type(){return"field"}get name(){return p(this.tokens.name.value)}get required(){return!!this.tokens.required}*validate(e){yield*this.idlType.validate(e)}}class dictionary_Dictionary extends container_Container{static parse(e,{partial:t}={}){const n={partial:t};if(n.base=e.consume("dictionary"),n.base)return container_Container.parse(e,new dictionary_Dictionary({source:e.source,tokens:n}),{type:"dictionary",inheritable:!t,allowedMembers:[[field_Field.parse]]})}get type(){return"dictionary"}}class namespace_Namespace extends container_Container{static parse(e,{partial:t}={}){const n={partial:t};if(n.base=e.consume("namespace"),n.base)return container_Container.parse(e,new namespace_Namespace({source:e.source,tokens:n}),{type:"namespace",allowedMembers:[[attribute_Attribute.parse,{noInherit:!0,readonly:!0}],[operation_Operation.parse,{regular:!0}]]})}get type(){return"namespace"}*validate(e){if(!this.partial&&this.extAttrs.every(e=>"Exposed"!==e.name)){const e="Namespaces must have [Exposed] extended attribute. To fix, add, for example, [Exposed=Window]. Please also consider carefully if your namespace should also be exposed in a Worker scope. Refer to the [WebIDL spec section on Exposed](https://heycam.github.io/webidl/#Exposed) for more information.";yield i(this.tokens.name,this,"require-exposed",e,{autofix:v(this)})}yield*super.validate(e)}}class callback_interface_CallbackInterface extends container_Container{static parse(e,t,{partial:n=null}={}){const r={callback:t};if(r.base=e.consume("interface"),r.base)return container_Container.parse(e,new callback_interface_CallbackInterface({source:e.source,tokens:r}),{type:"callback interface",inheritable:!n,allowedMembers:[[constant_Constant.parse],[operation_Operation.parse,{regular:!0}]]})}get type(){return"callback interface"}}function D(e,t){const n=e.source;function r(t){e.error(t)}function s(...t){return e.consume(...t)}function i(t){const n=s("interface");if(n)return mixin_Mixin.parse(e,n,t)||interface_Interface.parse(e,n,t)||r("Interface has no proper body")}function o(){return function(){const t=s("callback");if(t)return e.probe("interface")?callback_interface_CallbackInterface.parse(e,t):callback_CallbackFunction.parse(e,t)}()||i()||function(){const t=s("partial");if(t)return dictionary_Dictionary.parse(e,{partial:t})||i({partial:t})||namespace_Namespace.parse(e,{partial:t})||r("Partial doesn't apply to anything")}()||dictionary_Dictionary.parse(e)||enum_Enum.parse(e)||typedef_Typedef.parse(e)||includes_Includes.parse(e)||namespace_Namespace.parse(e)}const a=function(){if(!n.length)return[];const i=[];for(;;){const t=extended_attributes_ExtendedAttributes.parse(e),n=o();if(!n){t.length&&r("Stray extended attributes");break}w(n).extAttrs=t,i.push(n)}const a=s("eof");return t.concrete&&i.push(a),i}();return e.position<n.length&&r("Unrecognised tokens"),a}function P(e,t={}){const n=new tokeniser_Tokeniser(e);return void 0!==t.sourceName&&(n.source.name=t.sourceName),D(n,t)}function j(e){return e}const q={wrap:e=>e.join(""),trivia:j,name:j,reference:j,type:j,generic:j,nameless:j,inheritance:j,definition:j,extendedAttribute:j,extendedAttributeReference:j};function B(e,{templates:t=q}={}){function n(e,{unescaped:n,context:r}){return n||(n=e.startsWith("_")?e.slice(1):e),t.reference(e,n,r)}function r(e,n=j,...r){if(!e)return"";const s=n(e.value,...r);return t.wrap([t.trivia(e.trivia),s])}function s(e,t){return r(e,n,{context:t})}function i(e,n){return r(e,t.name,n)}function o(e){if(e.union||e.generic)return t.wrap([r(e.tokens.base,t.generic),r(e.tokens.open),...e.subtype.map(a),r(e.tokens.close)]);const s=e.tokens.prefix||e.tokens.base,i=e.tokens.prefix?[e.tokens.prefix.value,t.trivia(e.tokens.base.trivia)]:[],o=n(t.wrap([...i,e.tokens.base.value,r(e.tokens.postfix)]),{unescaped:e.idlType,context:e});return t.wrap([t.trivia(s.trivia),o])}function a(e){return t.wrap([d(e.extAttrs),o(e),r(e.tokens.nullable),r(e.tokens.separator)])}function c(e){return e?t.wrap([r(e.tokens.assign),...e.expression.map(e=>r(e))]):""}function u(e){return t.wrap([d(e.extAttrs),r(e.tokens.optional),t.type(a(e.idlType)),r(e.tokens.variadic),i(e.tokens.name,{data:e}),c(e.default),r(e.tokens.separator)])}function l(e){return t.wrap([r(e.tokens.value),r(e.tokens.separator)])}function p(e){const{rhsType:n}=e.params;return t.wrap([t.trivia(e.tokens.name.trivia),t.extendedAttribute(t.wrap([t.extendedAttributeReference(e.name),r(e.params.tokens.assign),s(e.params.tokens.secondaryName,e),r(e.params.tokens.open),...e.params.list?e.params.list.map("identifier-list"===n?n=>(function(e,n){return t.wrap([s(e.tokens.value,n),r(e.tokens.separator)])})(n,e):"string-list"===n?l:u):[],r(e.params.tokens.close)])),r(e.tokens.separator)])}function d(e){return e.length?t.wrap([r(e.tokens.open),...e.map(p),r(e.tokens.close)]):""}function m(e){return t.definition(t.wrap([d(e.extAttrs),r(e.tokens.callback),r(e.tokens.partial),r(e.tokens.base),r(e.tokens.mixin),i(e.tokens.name,{data:e}),(s=e,s.tokens.inheritance?t.wrap([r(s.tokens.colon),t.trivia(s.tokens.inheritance.trivia),t.inheritance(n(s.tokens.inheritance.value,{context:s}))]):""),r(e.tokens.open),b(e.members,e),r(e.tokens.close),r(e.tokens.termination)]),{data:e});var s}function f(e,n){return t.definition(t.wrap([d(e.extAttrs),r(e.tokens.readonly),r(e.tokens.async),r(e.tokens.base,t.generic),r(e.tokens.open),t.wrap(e.idlType.map(a)),r(e.tokens.close),r(e.tokens.termination)]),{data:e,parent:n})}t=Object.assign({},q,t);const y={interface:m,"interface mixin":m,namespace:m,operation:function(e,n){const s=e.idlType?[t.type(a(e.idlType)),i(e.tokens.name,{data:e,parent:n}),r(e.tokens.open),t.wrap(e.arguments.map(u)),r(e.tokens.close)]:[];return t.definition(t.wrap([d(e.extAttrs),e.tokens.name?r(e.tokens.special):r(e.tokens.special,t.nameless,{data:e,parent:n}),...s,r(e.tokens.termination)]),{data:e,parent:n})},attribute:function(e,n){return t.definition(t.wrap([d(e.extAttrs),r(e.tokens.special),r(e.tokens.readonly),r(e.tokens.base),t.type(a(e.idlType)),i(e.tokens.name,{data:e,parent:n}),r(e.tokens.termination)]),{data:e,parent:n})},constructor:function(e,n){return t.definition(t.wrap([d(e.extAttrs),r(e.tokens.base,t.nameless,{data:e,parent:n}),r(e.tokens.open),t.wrap(e.arguments.map(u)),r(e.tokens.close),r(e.tokens.termination)]),{data:e,parent:n})},dictionary:m,field:function(e,n){return t.definition(t.wrap([d(e.extAttrs),r(e.tokens.required),t.type(a(e.idlType)),i(e.tokens.name,{data:e,parent:n}),c(e.default),r(e.tokens.termination)]),{data:e,parent:n})},const:function(e,n){return t.definition(t.wrap([d(e.extAttrs),r(e.tokens.base),t.type(a(e.idlType)),i(e.tokens.name,{data:e,parent:n}),r(e.tokens.assign),r(e.tokens.value),r(e.tokens.termination)]),{data:e,parent:n})},typedef:function(e){return t.definition(t.wrap([d(e.extAttrs),r(e.tokens.base),t.type(a(e.idlType)),i(e.tokens.name,{data:e}),r(e.tokens.termination)]),{data:e})},includes:function(e){return t.definition(t.wrap([d(e.extAttrs),s(e.tokens.target,e),r(e.tokens.includes),s(e.tokens.mixin,e),r(e.tokens.termination)]),{data:e})},callback:function(e){return t.definition(t.wrap([d(e.extAttrs),r(e.tokens.base),i(e.tokens.name,{data:e}),r(e.tokens.assign),t.type(a(e.idlType)),r(e.tokens.open),...e.arguments.map(u),r(e.tokens.close),r(e.tokens.termination)]),{data:e})},enum:function(e){return t.definition(t.wrap([d(e.extAttrs),r(e.tokens.base),i(e.tokens.name,{data:e}),r(e.tokens.open),b(e.values,e),r(e.tokens.close),r(e.tokens.termination)]),{data:e})},"enum-value":function(e,n){return t.wrap([t.trivia(e.tokens.value.trivia),t.definition(t.wrap(['"',t.name(e.value,{data:e,parent:n}),'"']),{data:e,parent:n}),r(e.tokens.separator)])},iterable:f,maplike:f,setlike:f,"callback interface":m,eof:function(e){return t.trivia(e.trivia)}};function b(e,n){if(!e)return;const r=e.map(e=>(function(e,t){if(!y[e.type])throw new Error(`Type "${e.type}" is unsupported`);return y[e.type](e,t)})(e,n));return t.wrap(r)}return b(e)}function W(e,t){const n=new Map,r=e.filter(e=>"includes"===e.type);for(const e of r){const r=t.get(e.includes);if(!r)continue;const s=n.get(e.target);s?s.push(r):n.set(e.target,[r])}return n}function*F(e){const t=function(e){const t=new Map,n=new Set,r=new Map;for(const s of e)if(s.partial){const e=r.get(s.name);e?e.push(s):r.set(s.name,[s])}else s.name&&(t.has(s.name)?n.add(s):t.set(s.name,s));return{all:e,unique:t,partials:r,duplicates:n,mixinMap:W(e,t),cache:{typedefIncludesDictionary:new WeakMap,dictionaryIncludesRequiredField:new WeakMap}}}(e);for(const e of t.all)e.validate&&(yield*e.validate(t));yield*function*({unique:e,duplicates:t}){for(const n of t){const{name:t}=n,r=`The name "${t}" of type "${e.get(t).type}" was already seen`;yield i(n.tokens.name,n,"no-duplicate",r)}}(t)}function U(e){return[...F((t=e,t.flat?t.flat():[].concat(...t)))];var t}n.d(t,"parse",(function(){return P})),n.d(t,"write",(function(){return B})),n.d(t,"validate",(function(){return U})),n.d(t,"WebIDLParseError",(function(){return WebIDLParseError}))}])}));
//# sourceMappingURL=webidl2.js.map