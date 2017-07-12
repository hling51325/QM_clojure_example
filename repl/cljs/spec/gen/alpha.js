// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__8249__auto__,writer__8250__auto__,opt__8251__auto__){
return cljs.core._write.call(null,writer__8250__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__8770__auto__ = [];
var len__8763__auto___12565 = arguments.length;
var i__8764__auto___12566 = (0);
while(true){
if((i__8764__auto___12566 < len__8763__auto___12565)){
args__8770__auto__.push((arguments[i__8764__auto___12566]));

var G__12567 = (i__8764__auto___12566 + (1));
i__8764__auto___12566 = G__12567;
continue;
} else {
}
break;
}

var argseq__8771__auto__ = ((((0) < args__8770__auto__.length))?(new cljs.core.IndexedSeq(args__8770__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__8771__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq12564){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12564));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__8770__auto__ = [];
var len__8763__auto___12569 = arguments.length;
var i__8764__auto___12570 = (0);
while(true){
if((i__8764__auto___12570 < len__8763__auto___12569)){
args__8770__auto__.push((arguments[i__8764__auto___12570]));

var G__12571 = (i__8764__auto___12570 + (1));
i__8764__auto___12570 = G__12571;
continue;
} else {
}
break;
}

var argseq__8771__auto__ = ((((0) < args__8770__auto__.length))?(new cljs.core.IndexedSeq(args__8770__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8771__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq12568){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12568));
});

var g_QMARK__12572 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_12573 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__12572){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__12572))
,null));
var mkg_12574 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__12572,g_12573){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__12572,g_12573))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__12572,g_12573,mkg_12574){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__12572).call(null,x);
});})(g_QMARK__12572,g_12573,mkg_12574))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__12572,g_12573,mkg_12574){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_12574).call(null,gfn);
});})(g_QMARK__12572,g_12573,mkg_12574))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__12572,g_12573,mkg_12574){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_12573).call(null,generator);
});})(g_QMARK__12572,g_12573,mkg_12574))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__8857__auto___12594 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__8857__auto___12594){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__8770__auto__ = [];
var len__8763__auto___12595 = arguments.length;
var i__8764__auto___12596 = (0);
while(true){
if((i__8764__auto___12596 < len__8763__auto___12595)){
args__8770__auto__.push((arguments[i__8764__auto___12596]));

var G__12597 = (i__8764__auto___12596 + (1));
i__8764__auto___12596 = G__12597;
continue;
} else {
}
break;
}

var argseq__8771__auto__ = ((((0) < args__8770__auto__.length))?(new cljs.core.IndexedSeq(args__8770__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__8771__auto__);
});})(g__8857__auto___12594))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8857__auto___12594){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8857__auto___12594),args);
});})(g__8857__auto___12594))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__8857__auto___12594){
return (function (seq12575){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12575));
});})(g__8857__auto___12594))
;


var g__8857__auto___12598 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__8857__auto___12598){
return (function cljs$spec$gen$alpha$list(var_args){
var args__8770__auto__ = [];
var len__8763__auto___12599 = arguments.length;
var i__8764__auto___12600 = (0);
while(true){
if((i__8764__auto___12600 < len__8763__auto___12599)){
args__8770__auto__.push((arguments[i__8764__auto___12600]));

var G__12601 = (i__8764__auto___12600 + (1));
i__8764__auto___12600 = G__12601;
continue;
} else {
}
break;
}

var argseq__8771__auto__ = ((((0) < args__8770__auto__.length))?(new cljs.core.IndexedSeq(args__8770__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__8771__auto__);
});})(g__8857__auto___12598))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8857__auto___12598){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8857__auto___12598),args);
});})(g__8857__auto___12598))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__8857__auto___12598){
return (function (seq12576){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12576));
});})(g__8857__auto___12598))
;


var g__8857__auto___12602 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__8857__auto___12602){
return (function cljs$spec$gen$alpha$map(var_args){
var args__8770__auto__ = [];
var len__8763__auto___12603 = arguments.length;
var i__8764__auto___12604 = (0);
while(true){
if((i__8764__auto___12604 < len__8763__auto___12603)){
args__8770__auto__.push((arguments[i__8764__auto___12604]));

var G__12605 = (i__8764__auto___12604 + (1));
i__8764__auto___12604 = G__12605;
continue;
} else {
}
break;
}

var argseq__8771__auto__ = ((((0) < args__8770__auto__.length))?(new cljs.core.IndexedSeq(args__8770__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__8771__auto__);
});})(g__8857__auto___12602))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8857__auto___12602){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8857__auto___12602),args);
});})(g__8857__auto___12602))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__8857__auto___12602){
return (function (seq12577){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12577));
});})(g__8857__auto___12602))
;


var g__8857__auto___12606 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__8857__auto___12606){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__8770__auto__ = [];
var len__8763__auto___12607 = arguments.length;
var i__8764__auto___12608 = (0);
while(true){
if((i__8764__auto___12608 < len__8763__auto___12607)){
args__8770__auto__.push((arguments[i__8764__auto___12608]));

var G__12609 = (i__8764__auto___12608 + (1));
i__8764__auto___12608 = G__12609;
continue;
} else {
}
break;
}

var argseq__8771__auto__ = ((((0) < args__8770__auto__.length))?(new cljs.core.IndexedSeq(args__8770__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__8771__auto__);
});})(g__8857__auto___12606))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8857__auto___12606){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8857__auto___12606),args);
});})(g__8857__auto___12606))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__8857__auto___12606){
return (function (seq12578){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12578));
});})(g__8857__auto___12606))
;


var g__8857__auto___12610 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__8857__auto___12610){
return (function cljs$spec$gen$alpha$set(var_args){
var args__8770__auto__ = [];
var len__8763__auto___12611 = arguments.length;
var i__8764__auto___12612 = (0);
while(true){
if((i__8764__auto___12612 < len__8763__auto___12611)){
args__8770__auto__.push((arguments[i__8764__auto___12612]));

var G__12613 = (i__8764__auto___12612 + (1));
i__8764__auto___12612 = G__12613;
continue;
} else {
}
break;
}

var argseq__8771__auto__ = ((((0) < args__8770__auto__.length))?(new cljs.core.IndexedSeq(args__8770__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__8771__auto__);
});})(g__8857__auto___12610))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8857__auto___12610){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8857__auto___12610),args);
});})(g__8857__auto___12610))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__8857__auto___12610){
return (function (seq12579){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12579));
});})(g__8857__auto___12610))
;


var g__8857__auto___12614 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__8857__auto___12614){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__8770__auto__ = [];
var len__8763__auto___12615 = arguments.length;
var i__8764__auto___12616 = (0);
while(true){
if((i__8764__auto___12616 < len__8763__auto___12615)){
args__8770__auto__.push((arguments[i__8764__auto___12616]));

var G__12617 = (i__8764__auto___12616 + (1));
i__8764__auto___12616 = G__12617;
continue;
} else {
}
break;
}

var argseq__8771__auto__ = ((((0) < args__8770__auto__.length))?(new cljs.core.IndexedSeq(args__8770__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__8771__auto__);
});})(g__8857__auto___12614))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8857__auto___12614){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8857__auto___12614),args);
});})(g__8857__auto___12614))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__8857__auto___12614){
return (function (seq12580){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12580));
});})(g__8857__auto___12614))
;


var g__8857__auto___12618 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__8857__auto___12618){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__8770__auto__ = [];
var len__8763__auto___12619 = arguments.length;
var i__8764__auto___12620 = (0);
while(true){
if((i__8764__auto___12620 < len__8763__auto___12619)){
args__8770__auto__.push((arguments[i__8764__auto___12620]));

var G__12621 = (i__8764__auto___12620 + (1));
i__8764__auto___12620 = G__12621;
continue;
} else {
}
break;
}

var argseq__8771__auto__ = ((((0) < args__8770__auto__.length))?(new cljs.core.IndexedSeq(args__8770__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__8771__auto__);
});})(g__8857__auto___12618))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8857__auto___12618){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8857__auto___12618),args);
});})(g__8857__auto___12618))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__8857__auto___12618){
return (function (seq12581){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12581));
});})(g__8857__auto___12618))
;


var g__8857__auto___12622 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__8857__auto___12622){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__8770__auto__ = [];
var len__8763__auto___12623 = arguments.length;
var i__8764__auto___12624 = (0);
while(true){
if((i__8764__auto___12624 < len__8763__auto___12623)){
args__8770__auto__.push((arguments[i__8764__auto___12624]));

var G__12625 = (i__8764__auto___12624 + (1));
i__8764__auto___12624 = G__12625;
continue;
} else {
}
break;
}

var argseq__8771__auto__ = ((((0) < args__8770__auto__.length))?(new cljs.core.IndexedSeq(args__8770__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__8771__auto__);
});})(g__8857__auto___12622))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8857__auto___12622){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8857__auto___12622),args);
});})(g__8857__auto___12622))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__8857__auto___12622){
return (function (seq12582){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12582));
});})(g__8857__auto___12622))
;


var g__8857__auto___12626 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__8857__auto___12626){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__8770__auto__ = [];
var len__8763__auto___12627 = arguments.length;
var i__8764__auto___12628 = (0);
while(true){
if((i__8764__auto___12628 < len__8763__auto___12627)){
args__8770__auto__.push((arguments[i__8764__auto___12628]));

var G__12629 = (i__8764__auto___12628 + (1));
i__8764__auto___12628 = G__12629;
continue;
} else {
}
break;
}

var argseq__8771__auto__ = ((((0) < args__8770__auto__.length))?(new cljs.core.IndexedSeq(args__8770__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__8771__auto__);
});})(g__8857__auto___12626))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8857__auto___12626){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8857__auto___12626),args);
});})(g__8857__auto___12626))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__8857__auto___12626){
return (function (seq12583){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12583));
});})(g__8857__auto___12626))
;


var g__8857__auto___12630 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__8857__auto___12630){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__8770__auto__ = [];
var len__8763__auto___12631 = arguments.length;
var i__8764__auto___12632 = (0);
while(true){
if((i__8764__auto___12632 < len__8763__auto___12631)){
args__8770__auto__.push((arguments[i__8764__auto___12632]));

var G__12633 = (i__8764__auto___12632 + (1));
i__8764__auto___12632 = G__12633;
continue;
} else {
}
break;
}

var argseq__8771__auto__ = ((((0) < args__8770__auto__.length))?(new cljs.core.IndexedSeq(args__8770__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__8771__auto__);
});})(g__8857__auto___12630))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8857__auto___12630){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8857__auto___12630),args);
});})(g__8857__auto___12630))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__8857__auto___12630){
return (function (seq12584){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12584));
});})(g__8857__auto___12630))
;


var g__8857__auto___12634 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__8857__auto___12634){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__8770__auto__ = [];
var len__8763__auto___12635 = arguments.length;
var i__8764__auto___12636 = (0);
while(true){
if((i__8764__auto___12636 < len__8763__auto___12635)){
args__8770__auto__.push((arguments[i__8764__auto___12636]));

var G__12637 = (i__8764__auto___12636 + (1));
i__8764__auto___12636 = G__12637;
continue;
} else {
}
break;
}

var argseq__8771__auto__ = ((((0) < args__8770__auto__.length))?(new cljs.core.IndexedSeq(args__8770__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__8771__auto__);
});})(g__8857__auto___12634))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8857__auto___12634){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8857__auto___12634),args);
});})(g__8857__auto___12634))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__8857__auto___12634){
return (function (seq12585){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12585));
});})(g__8857__auto___12634))
;


var g__8857__auto___12638 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__8857__auto___12638){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__8770__auto__ = [];
var len__8763__auto___12639 = arguments.length;
var i__8764__auto___12640 = (0);
while(true){
if((i__8764__auto___12640 < len__8763__auto___12639)){
args__8770__auto__.push((arguments[i__8764__auto___12640]));

var G__12641 = (i__8764__auto___12640 + (1));
i__8764__auto___12640 = G__12641;
continue;
} else {
}
break;
}

var argseq__8771__auto__ = ((((0) < args__8770__auto__.length))?(new cljs.core.IndexedSeq(args__8770__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__8771__auto__);
});})(g__8857__auto___12638))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8857__auto___12638){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8857__auto___12638),args);
});})(g__8857__auto___12638))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__8857__auto___12638){
return (function (seq12586){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12586));
});})(g__8857__auto___12638))
;


var g__8857__auto___12642 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__8857__auto___12642){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__8770__auto__ = [];
var len__8763__auto___12643 = arguments.length;
var i__8764__auto___12644 = (0);
while(true){
if((i__8764__auto___12644 < len__8763__auto___12643)){
args__8770__auto__.push((arguments[i__8764__auto___12644]));

var G__12645 = (i__8764__auto___12644 + (1));
i__8764__auto___12644 = G__12645;
continue;
} else {
}
break;
}

var argseq__8771__auto__ = ((((0) < args__8770__auto__.length))?(new cljs.core.IndexedSeq(args__8770__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__8771__auto__);
});})(g__8857__auto___12642))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8857__auto___12642){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8857__auto___12642),args);
});})(g__8857__auto___12642))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__8857__auto___12642){
return (function (seq12587){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12587));
});})(g__8857__auto___12642))
;


var g__8857__auto___12646 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__8857__auto___12646){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__8770__auto__ = [];
var len__8763__auto___12647 = arguments.length;
var i__8764__auto___12648 = (0);
while(true){
if((i__8764__auto___12648 < len__8763__auto___12647)){
args__8770__auto__.push((arguments[i__8764__auto___12648]));

var G__12649 = (i__8764__auto___12648 + (1));
i__8764__auto___12648 = G__12649;
continue;
} else {
}
break;
}

var argseq__8771__auto__ = ((((0) < args__8770__auto__.length))?(new cljs.core.IndexedSeq(args__8770__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__8771__auto__);
});})(g__8857__auto___12646))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8857__auto___12646){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8857__auto___12646),args);
});})(g__8857__auto___12646))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__8857__auto___12646){
return (function (seq12588){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12588));
});})(g__8857__auto___12646))
;


var g__8857__auto___12650 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__8857__auto___12650){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__8770__auto__ = [];
var len__8763__auto___12651 = arguments.length;
var i__8764__auto___12652 = (0);
while(true){
if((i__8764__auto___12652 < len__8763__auto___12651)){
args__8770__auto__.push((arguments[i__8764__auto___12652]));

var G__12653 = (i__8764__auto___12652 + (1));
i__8764__auto___12652 = G__12653;
continue;
} else {
}
break;
}

var argseq__8771__auto__ = ((((0) < args__8770__auto__.length))?(new cljs.core.IndexedSeq(args__8770__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__8771__auto__);
});})(g__8857__auto___12650))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8857__auto___12650){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8857__auto___12650),args);
});})(g__8857__auto___12650))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__8857__auto___12650){
return (function (seq12589){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12589));
});})(g__8857__auto___12650))
;


var g__8857__auto___12654 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__8857__auto___12654){
return (function cljs$spec$gen$alpha$return(var_args){
var args__8770__auto__ = [];
var len__8763__auto___12655 = arguments.length;
var i__8764__auto___12656 = (0);
while(true){
if((i__8764__auto___12656 < len__8763__auto___12655)){
args__8770__auto__.push((arguments[i__8764__auto___12656]));

var G__12657 = (i__8764__auto___12656 + (1));
i__8764__auto___12656 = G__12657;
continue;
} else {
}
break;
}

var argseq__8771__auto__ = ((((0) < args__8770__auto__.length))?(new cljs.core.IndexedSeq(args__8770__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__8771__auto__);
});})(g__8857__auto___12654))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8857__auto___12654){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8857__auto___12654),args);
});})(g__8857__auto___12654))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__8857__auto___12654){
return (function (seq12590){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12590));
});})(g__8857__auto___12654))
;


var g__8857__auto___12658 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__8857__auto___12658){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__8770__auto__ = [];
var len__8763__auto___12659 = arguments.length;
var i__8764__auto___12660 = (0);
while(true){
if((i__8764__auto___12660 < len__8763__auto___12659)){
args__8770__auto__.push((arguments[i__8764__auto___12660]));

var G__12661 = (i__8764__auto___12660 + (1));
i__8764__auto___12660 = G__12661;
continue;
} else {
}
break;
}

var argseq__8771__auto__ = ((((0) < args__8770__auto__.length))?(new cljs.core.IndexedSeq(args__8770__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8771__auto__);
});})(g__8857__auto___12658))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8857__auto___12658){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8857__auto___12658),args);
});})(g__8857__auto___12658))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__8857__auto___12658){
return (function (seq12591){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12591));
});})(g__8857__auto___12658))
;


var g__8857__auto___12662 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__8857__auto___12662){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__8770__auto__ = [];
var len__8763__auto___12663 = arguments.length;
var i__8764__auto___12664 = (0);
while(true){
if((i__8764__auto___12664 < len__8763__auto___12663)){
args__8770__auto__.push((arguments[i__8764__auto___12664]));

var G__12665 = (i__8764__auto___12664 + (1));
i__8764__auto___12664 = G__12665;
continue;
} else {
}
break;
}

var argseq__8771__auto__ = ((((0) < args__8770__auto__.length))?(new cljs.core.IndexedSeq(args__8770__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8771__auto__);
});})(g__8857__auto___12662))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8857__auto___12662){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8857__auto___12662),args);
});})(g__8857__auto___12662))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__8857__auto___12662){
return (function (seq12592){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12592));
});})(g__8857__auto___12662))
;


var g__8857__auto___12666 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__8857__auto___12666){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__8770__auto__ = [];
var len__8763__auto___12667 = arguments.length;
var i__8764__auto___12668 = (0);
while(true){
if((i__8764__auto___12668 < len__8763__auto___12667)){
args__8770__auto__.push((arguments[i__8764__auto___12668]));

var G__12669 = (i__8764__auto___12668 + (1));
i__8764__auto___12668 = G__12669;
continue;
} else {
}
break;
}

var argseq__8771__auto__ = ((((0) < args__8770__auto__.length))?(new cljs.core.IndexedSeq(args__8770__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__8771__auto__);
});})(g__8857__auto___12666))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8857__auto___12666){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8857__auto___12666),args);
});})(g__8857__auto___12666))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__8857__auto___12666){
return (function (seq12593){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12593));
});})(g__8857__auto___12666))
;

var g__8870__auto___12691 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__8870__auto___12691){
return (function cljs$spec$gen$alpha$any(var_args){
var args__8770__auto__ = [];
var len__8763__auto___12692 = arguments.length;
var i__8764__auto___12693 = (0);
while(true){
if((i__8764__auto___12693 < len__8763__auto___12692)){
args__8770__auto__.push((arguments[i__8764__auto___12693]));

var G__12694 = (i__8764__auto___12693 + (1));
i__8764__auto___12693 = G__12694;
continue;
} else {
}
break;
}

var argseq__8771__auto__ = ((((0) < args__8770__auto__.length))?(new cljs.core.IndexedSeq(args__8770__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__8771__auto__);
});})(g__8870__auto___12691))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8870__auto___12691){
return (function (args){
return cljs.core.deref.call(null,g__8870__auto___12691);
});})(g__8870__auto___12691))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__8870__auto___12691){
return (function (seq12670){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12670));
});})(g__8870__auto___12691))
;


var g__8870__auto___12695 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__8870__auto___12695){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__8770__auto__ = [];
var len__8763__auto___12696 = arguments.length;
var i__8764__auto___12697 = (0);
while(true){
if((i__8764__auto___12697 < len__8763__auto___12696)){
args__8770__auto__.push((arguments[i__8764__auto___12697]));

var G__12698 = (i__8764__auto___12697 + (1));
i__8764__auto___12697 = G__12698;
continue;
} else {
}
break;
}

var argseq__8771__auto__ = ((((0) < args__8770__auto__.length))?(new cljs.core.IndexedSeq(args__8770__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8771__auto__);
});})(g__8870__auto___12695))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8870__auto___12695){
return (function (args){
return cljs.core.deref.call(null,g__8870__auto___12695);
});})(g__8870__auto___12695))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__8870__auto___12695){
return (function (seq12671){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12671));
});})(g__8870__auto___12695))
;


var g__8870__auto___12699 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__8870__auto___12699){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__8770__auto__ = [];
var len__8763__auto___12700 = arguments.length;
var i__8764__auto___12701 = (0);
while(true){
if((i__8764__auto___12701 < len__8763__auto___12700)){
args__8770__auto__.push((arguments[i__8764__auto___12701]));

var G__12702 = (i__8764__auto___12701 + (1));
i__8764__auto___12701 = G__12702;
continue;
} else {
}
break;
}

var argseq__8771__auto__ = ((((0) < args__8770__auto__.length))?(new cljs.core.IndexedSeq(args__8770__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__8771__auto__);
});})(g__8870__auto___12699))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8870__auto___12699){
return (function (args){
return cljs.core.deref.call(null,g__8870__auto___12699);
});})(g__8870__auto___12699))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__8870__auto___12699){
return (function (seq12672){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12672));
});})(g__8870__auto___12699))
;


var g__8870__auto___12703 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__8870__auto___12703){
return (function cljs$spec$gen$alpha$char(var_args){
var args__8770__auto__ = [];
var len__8763__auto___12704 = arguments.length;
var i__8764__auto___12705 = (0);
while(true){
if((i__8764__auto___12705 < len__8763__auto___12704)){
args__8770__auto__.push((arguments[i__8764__auto___12705]));

var G__12706 = (i__8764__auto___12705 + (1));
i__8764__auto___12705 = G__12706;
continue;
} else {
}
break;
}

var argseq__8771__auto__ = ((((0) < args__8770__auto__.length))?(new cljs.core.IndexedSeq(args__8770__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__8771__auto__);
});})(g__8870__auto___12703))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8870__auto___12703){
return (function (args){
return cljs.core.deref.call(null,g__8870__auto___12703);
});})(g__8870__auto___12703))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__8870__auto___12703){
return (function (seq12673){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12673));
});})(g__8870__auto___12703))
;


var g__8870__auto___12707 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__8870__auto___12707){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__8770__auto__ = [];
var len__8763__auto___12708 = arguments.length;
var i__8764__auto___12709 = (0);
while(true){
if((i__8764__auto___12709 < len__8763__auto___12708)){
args__8770__auto__.push((arguments[i__8764__auto___12709]));

var G__12710 = (i__8764__auto___12709 + (1));
i__8764__auto___12709 = G__12710;
continue;
} else {
}
break;
}

var argseq__8771__auto__ = ((((0) < args__8770__auto__.length))?(new cljs.core.IndexedSeq(args__8770__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__8771__auto__);
});})(g__8870__auto___12707))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8870__auto___12707){
return (function (args){
return cljs.core.deref.call(null,g__8870__auto___12707);
});})(g__8870__auto___12707))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__8870__auto___12707){
return (function (seq12674){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12674));
});})(g__8870__auto___12707))
;


var g__8870__auto___12711 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__8870__auto___12711){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__8770__auto__ = [];
var len__8763__auto___12712 = arguments.length;
var i__8764__auto___12713 = (0);
while(true){
if((i__8764__auto___12713 < len__8763__auto___12712)){
args__8770__auto__.push((arguments[i__8764__auto___12713]));

var G__12714 = (i__8764__auto___12713 + (1));
i__8764__auto___12713 = G__12714;
continue;
} else {
}
break;
}

var argseq__8771__auto__ = ((((0) < args__8770__auto__.length))?(new cljs.core.IndexedSeq(args__8770__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8771__auto__);
});})(g__8870__auto___12711))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8870__auto___12711){
return (function (args){
return cljs.core.deref.call(null,g__8870__auto___12711);
});})(g__8870__auto___12711))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__8870__auto___12711){
return (function (seq12675){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12675));
});})(g__8870__auto___12711))
;


var g__8870__auto___12715 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__8870__auto___12715){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__8770__auto__ = [];
var len__8763__auto___12716 = arguments.length;
var i__8764__auto___12717 = (0);
while(true){
if((i__8764__auto___12717 < len__8763__auto___12716)){
args__8770__auto__.push((arguments[i__8764__auto___12717]));

var G__12718 = (i__8764__auto___12717 + (1));
i__8764__auto___12717 = G__12718;
continue;
} else {
}
break;
}

var argseq__8771__auto__ = ((((0) < args__8770__auto__.length))?(new cljs.core.IndexedSeq(args__8770__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8771__auto__);
});})(g__8870__auto___12715))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8870__auto___12715){
return (function (args){
return cljs.core.deref.call(null,g__8870__auto___12715);
});})(g__8870__auto___12715))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__8870__auto___12715){
return (function (seq12676){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12676));
});})(g__8870__auto___12715))
;


var g__8870__auto___12719 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__8870__auto___12719){
return (function cljs$spec$gen$alpha$double(var_args){
var args__8770__auto__ = [];
var len__8763__auto___12720 = arguments.length;
var i__8764__auto___12721 = (0);
while(true){
if((i__8764__auto___12721 < len__8763__auto___12720)){
args__8770__auto__.push((arguments[i__8764__auto___12721]));

var G__12722 = (i__8764__auto___12721 + (1));
i__8764__auto___12721 = G__12722;
continue;
} else {
}
break;
}

var argseq__8771__auto__ = ((((0) < args__8770__auto__.length))?(new cljs.core.IndexedSeq(args__8770__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__8771__auto__);
});})(g__8870__auto___12719))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8870__auto___12719){
return (function (args){
return cljs.core.deref.call(null,g__8870__auto___12719);
});})(g__8870__auto___12719))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__8870__auto___12719){
return (function (seq12677){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12677));
});})(g__8870__auto___12719))
;


var g__8870__auto___12723 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__8870__auto___12723){
return (function cljs$spec$gen$alpha$int(var_args){
var args__8770__auto__ = [];
var len__8763__auto___12724 = arguments.length;
var i__8764__auto___12725 = (0);
while(true){
if((i__8764__auto___12725 < len__8763__auto___12724)){
args__8770__auto__.push((arguments[i__8764__auto___12725]));

var G__12726 = (i__8764__auto___12725 + (1));
i__8764__auto___12725 = G__12726;
continue;
} else {
}
break;
}

var argseq__8771__auto__ = ((((0) < args__8770__auto__.length))?(new cljs.core.IndexedSeq(args__8770__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__8771__auto__);
});})(g__8870__auto___12723))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8870__auto___12723){
return (function (args){
return cljs.core.deref.call(null,g__8870__auto___12723);
});})(g__8870__auto___12723))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__8870__auto___12723){
return (function (seq12678){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12678));
});})(g__8870__auto___12723))
;


var g__8870__auto___12727 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__8870__auto___12727){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__8770__auto__ = [];
var len__8763__auto___12728 = arguments.length;
var i__8764__auto___12729 = (0);
while(true){
if((i__8764__auto___12729 < len__8763__auto___12728)){
args__8770__auto__.push((arguments[i__8764__auto___12729]));

var G__12730 = (i__8764__auto___12729 + (1));
i__8764__auto___12729 = G__12730;
continue;
} else {
}
break;
}

var argseq__8771__auto__ = ((((0) < args__8770__auto__.length))?(new cljs.core.IndexedSeq(args__8770__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__8771__auto__);
});})(g__8870__auto___12727))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8870__auto___12727){
return (function (args){
return cljs.core.deref.call(null,g__8870__auto___12727);
});})(g__8870__auto___12727))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__8870__auto___12727){
return (function (seq12679){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12679));
});})(g__8870__auto___12727))
;


var g__8870__auto___12731 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__8870__auto___12731){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__8770__auto__ = [];
var len__8763__auto___12732 = arguments.length;
var i__8764__auto___12733 = (0);
while(true){
if((i__8764__auto___12733 < len__8763__auto___12732)){
args__8770__auto__.push((arguments[i__8764__auto___12733]));

var G__12734 = (i__8764__auto___12733 + (1));
i__8764__auto___12733 = G__12734;
continue;
} else {
}
break;
}

var argseq__8771__auto__ = ((((0) < args__8770__auto__.length))?(new cljs.core.IndexedSeq(args__8770__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8771__auto__);
});})(g__8870__auto___12731))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8870__auto___12731){
return (function (args){
return cljs.core.deref.call(null,g__8870__auto___12731);
});})(g__8870__auto___12731))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__8870__auto___12731){
return (function (seq12680){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12680));
});})(g__8870__auto___12731))
;


var g__8870__auto___12735 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__8870__auto___12735){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__8770__auto__ = [];
var len__8763__auto___12736 = arguments.length;
var i__8764__auto___12737 = (0);
while(true){
if((i__8764__auto___12737 < len__8763__auto___12736)){
args__8770__auto__.push((arguments[i__8764__auto___12737]));

var G__12738 = (i__8764__auto___12737 + (1));
i__8764__auto___12737 = G__12738;
continue;
} else {
}
break;
}

var argseq__8771__auto__ = ((((0) < args__8770__auto__.length))?(new cljs.core.IndexedSeq(args__8770__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__8771__auto__);
});})(g__8870__auto___12735))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8870__auto___12735){
return (function (args){
return cljs.core.deref.call(null,g__8870__auto___12735);
});})(g__8870__auto___12735))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__8870__auto___12735){
return (function (seq12681){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12681));
});})(g__8870__auto___12735))
;


var g__8870__auto___12739 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__8870__auto___12739){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__8770__auto__ = [];
var len__8763__auto___12740 = arguments.length;
var i__8764__auto___12741 = (0);
while(true){
if((i__8764__auto___12741 < len__8763__auto___12740)){
args__8770__auto__.push((arguments[i__8764__auto___12741]));

var G__12742 = (i__8764__auto___12741 + (1));
i__8764__auto___12741 = G__12742;
continue;
} else {
}
break;
}

var argseq__8771__auto__ = ((((0) < args__8770__auto__.length))?(new cljs.core.IndexedSeq(args__8770__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__8771__auto__);
});})(g__8870__auto___12739))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8870__auto___12739){
return (function (args){
return cljs.core.deref.call(null,g__8870__auto___12739);
});})(g__8870__auto___12739))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__8870__auto___12739){
return (function (seq12682){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12682));
});})(g__8870__auto___12739))
;


var g__8870__auto___12743 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__8870__auto___12743){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__8770__auto__ = [];
var len__8763__auto___12744 = arguments.length;
var i__8764__auto___12745 = (0);
while(true){
if((i__8764__auto___12745 < len__8763__auto___12744)){
args__8770__auto__.push((arguments[i__8764__auto___12745]));

var G__12746 = (i__8764__auto___12745 + (1));
i__8764__auto___12745 = G__12746;
continue;
} else {
}
break;
}

var argseq__8771__auto__ = ((((0) < args__8770__auto__.length))?(new cljs.core.IndexedSeq(args__8770__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__8771__auto__);
});})(g__8870__auto___12743))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8870__auto___12743){
return (function (args){
return cljs.core.deref.call(null,g__8870__auto___12743);
});})(g__8870__auto___12743))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__8870__auto___12743){
return (function (seq12683){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12683));
});})(g__8870__auto___12743))
;


var g__8870__auto___12747 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__8870__auto___12747){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__8770__auto__ = [];
var len__8763__auto___12748 = arguments.length;
var i__8764__auto___12749 = (0);
while(true){
if((i__8764__auto___12749 < len__8763__auto___12748)){
args__8770__auto__.push((arguments[i__8764__auto___12749]));

var G__12750 = (i__8764__auto___12749 + (1));
i__8764__auto___12749 = G__12750;
continue;
} else {
}
break;
}

var argseq__8771__auto__ = ((((0) < args__8770__auto__.length))?(new cljs.core.IndexedSeq(args__8770__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8771__auto__);
});})(g__8870__auto___12747))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8870__auto___12747){
return (function (args){
return cljs.core.deref.call(null,g__8870__auto___12747);
});})(g__8870__auto___12747))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__8870__auto___12747){
return (function (seq12684){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12684));
});})(g__8870__auto___12747))
;


var g__8870__auto___12751 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__8870__auto___12751){
return (function cljs$spec$gen$alpha$string(var_args){
var args__8770__auto__ = [];
var len__8763__auto___12752 = arguments.length;
var i__8764__auto___12753 = (0);
while(true){
if((i__8764__auto___12753 < len__8763__auto___12752)){
args__8770__auto__.push((arguments[i__8764__auto___12753]));

var G__12754 = (i__8764__auto___12753 + (1));
i__8764__auto___12753 = G__12754;
continue;
} else {
}
break;
}

var argseq__8771__auto__ = ((((0) < args__8770__auto__.length))?(new cljs.core.IndexedSeq(args__8770__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__8771__auto__);
});})(g__8870__auto___12751))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8870__auto___12751){
return (function (args){
return cljs.core.deref.call(null,g__8870__auto___12751);
});})(g__8870__auto___12751))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__8870__auto___12751){
return (function (seq12685){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12685));
});})(g__8870__auto___12751))
;


var g__8870__auto___12755 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__8870__auto___12755){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__8770__auto__ = [];
var len__8763__auto___12756 = arguments.length;
var i__8764__auto___12757 = (0);
while(true){
if((i__8764__auto___12757 < len__8763__auto___12756)){
args__8770__auto__.push((arguments[i__8764__auto___12757]));

var G__12758 = (i__8764__auto___12757 + (1));
i__8764__auto___12757 = G__12758;
continue;
} else {
}
break;
}

var argseq__8771__auto__ = ((((0) < args__8770__auto__.length))?(new cljs.core.IndexedSeq(args__8770__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8771__auto__);
});})(g__8870__auto___12755))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8870__auto___12755){
return (function (args){
return cljs.core.deref.call(null,g__8870__auto___12755);
});})(g__8870__auto___12755))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__8870__auto___12755){
return (function (seq12686){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12686));
});})(g__8870__auto___12755))
;


var g__8870__auto___12759 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__8870__auto___12759){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__8770__auto__ = [];
var len__8763__auto___12760 = arguments.length;
var i__8764__auto___12761 = (0);
while(true){
if((i__8764__auto___12761 < len__8763__auto___12760)){
args__8770__auto__.push((arguments[i__8764__auto___12761]));

var G__12762 = (i__8764__auto___12761 + (1));
i__8764__auto___12761 = G__12762;
continue;
} else {
}
break;
}

var argseq__8771__auto__ = ((((0) < args__8770__auto__.length))?(new cljs.core.IndexedSeq(args__8770__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8771__auto__);
});})(g__8870__auto___12759))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8870__auto___12759){
return (function (args){
return cljs.core.deref.call(null,g__8870__auto___12759);
});})(g__8870__auto___12759))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__8870__auto___12759){
return (function (seq12687){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12687));
});})(g__8870__auto___12759))
;


var g__8870__auto___12763 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__8870__auto___12763){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__8770__auto__ = [];
var len__8763__auto___12764 = arguments.length;
var i__8764__auto___12765 = (0);
while(true){
if((i__8764__auto___12765 < len__8763__auto___12764)){
args__8770__auto__.push((arguments[i__8764__auto___12765]));

var G__12766 = (i__8764__auto___12765 + (1));
i__8764__auto___12765 = G__12766;
continue;
} else {
}
break;
}

var argseq__8771__auto__ = ((((0) < args__8770__auto__.length))?(new cljs.core.IndexedSeq(args__8770__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__8771__auto__);
});})(g__8870__auto___12763))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8870__auto___12763){
return (function (args){
return cljs.core.deref.call(null,g__8870__auto___12763);
});})(g__8870__auto___12763))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__8870__auto___12763){
return (function (seq12688){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12688));
});})(g__8870__auto___12763))
;


var g__8870__auto___12767 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__8870__auto___12767){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__8770__auto__ = [];
var len__8763__auto___12768 = arguments.length;
var i__8764__auto___12769 = (0);
while(true){
if((i__8764__auto___12769 < len__8763__auto___12768)){
args__8770__auto__.push((arguments[i__8764__auto___12769]));

var G__12770 = (i__8764__auto___12769 + (1));
i__8764__auto___12769 = G__12770;
continue;
} else {
}
break;
}

var argseq__8771__auto__ = ((((0) < args__8770__auto__.length))?(new cljs.core.IndexedSeq(args__8770__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8771__auto__);
});})(g__8870__auto___12767))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8870__auto___12767){
return (function (args){
return cljs.core.deref.call(null,g__8870__auto___12767);
});})(g__8870__auto___12767))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__8870__auto___12767){
return (function (seq12689){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12689));
});})(g__8870__auto___12767))
;


var g__8870__auto___12771 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__8870__auto___12771){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__8770__auto__ = [];
var len__8763__auto___12772 = arguments.length;
var i__8764__auto___12773 = (0);
while(true){
if((i__8764__auto___12773 < len__8763__auto___12772)){
args__8770__auto__.push((arguments[i__8764__auto___12773]));

var G__12774 = (i__8764__auto___12773 + (1));
i__8764__auto___12773 = G__12774;
continue;
} else {
}
break;
}

var argseq__8771__auto__ = ((((0) < args__8770__auto__.length))?(new cljs.core.IndexedSeq(args__8770__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__8771__auto__);
});})(g__8870__auto___12771))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8870__auto___12771){
return (function (args){
return cljs.core.deref.call(null,g__8870__auto___12771);
});})(g__8870__auto___12771))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__8870__auto___12771){
return (function (seq12690){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12690));
});})(g__8870__auto___12771))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__8770__auto__ = [];
var len__8763__auto___12777 = arguments.length;
var i__8764__auto___12778 = (0);
while(true){
if((i__8764__auto___12778 < len__8763__auto___12777)){
args__8770__auto__.push((arguments[i__8764__auto___12778]));

var G__12779 = (i__8764__auto___12778 + (1));
i__8764__auto___12778 = G__12779;
continue;
} else {
}
break;
}

var argseq__8771__auto__ = ((((0) < args__8770__auto__.length))?(new cljs.core.IndexedSeq(args__8770__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__8771__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__12775_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__12775_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq12776){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12776));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__12780_SHARP_){
return (new Date(p1__12780_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});
