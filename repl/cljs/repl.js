// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__13360){
var map__13361 = p__13360;
var map__13361__$1 = ((((!((map__13361 == null)))?((((map__13361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13361.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13361):map__13361);
var m = map__13361__$1;
var n = cljs.core.get.call(null,map__13361__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__13361__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__13363_13385 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13364_13386 = null;
var count__13365_13387 = (0);
var i__13366_13388 = (0);
while(true){
if((i__13366_13388 < count__13365_13387)){
var f_13389 = cljs.core._nth.call(null,chunk__13364_13386,i__13366_13388);
cljs.core.println.call(null,"  ",f_13389);

var G__13390 = seq__13363_13385;
var G__13391 = chunk__13364_13386;
var G__13392 = count__13365_13387;
var G__13393 = (i__13366_13388 + (1));
seq__13363_13385 = G__13390;
chunk__13364_13386 = G__13391;
count__13365_13387 = G__13392;
i__13366_13388 = G__13393;
continue;
} else {
var temp__4657__auto___13394 = cljs.core.seq.call(null,seq__13363_13385);
if(temp__4657__auto___13394){
var seq__13363_13395__$1 = temp__4657__auto___13394;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13363_13395__$1)){
var c__8458__auto___13396 = cljs.core.chunk_first.call(null,seq__13363_13395__$1);
var G__13397 = cljs.core.chunk_rest.call(null,seq__13363_13395__$1);
var G__13398 = c__8458__auto___13396;
var G__13399 = cljs.core.count.call(null,c__8458__auto___13396);
var G__13400 = (0);
seq__13363_13385 = G__13397;
chunk__13364_13386 = G__13398;
count__13365_13387 = G__13399;
i__13366_13388 = G__13400;
continue;
} else {
var f_13401 = cljs.core.first.call(null,seq__13363_13395__$1);
cljs.core.println.call(null,"  ",f_13401);

var G__13402 = cljs.core.next.call(null,seq__13363_13395__$1);
var G__13403 = null;
var G__13404 = (0);
var G__13405 = (0);
seq__13363_13385 = G__13402;
chunk__13364_13386 = G__13403;
count__13365_13387 = G__13404;
i__13366_13388 = G__13405;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_13406 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7638__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7638__auto__)){
return or__7638__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_13406);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_13406)))?cljs.core.second.call(null,arglists_13406):arglists_13406));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__13367_13407 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13368_13408 = null;
var count__13369_13409 = (0);
var i__13370_13410 = (0);
while(true){
if((i__13370_13410 < count__13369_13409)){
var vec__13371_13411 = cljs.core._nth.call(null,chunk__13368_13408,i__13370_13410);
var name_13412 = cljs.core.nth.call(null,vec__13371_13411,(0),null);
var map__13374_13413 = cljs.core.nth.call(null,vec__13371_13411,(1),null);
var map__13374_13414__$1 = ((((!((map__13374_13413 == null)))?((((map__13374_13413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13374_13413.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13374_13413):map__13374_13413);
var doc_13415 = cljs.core.get.call(null,map__13374_13414__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13416 = cljs.core.get.call(null,map__13374_13414__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_13412);

cljs.core.println.call(null," ",arglists_13416);

if(cljs.core.truth_(doc_13415)){
cljs.core.println.call(null," ",doc_13415);
} else {
}

var G__13417 = seq__13367_13407;
var G__13418 = chunk__13368_13408;
var G__13419 = count__13369_13409;
var G__13420 = (i__13370_13410 + (1));
seq__13367_13407 = G__13417;
chunk__13368_13408 = G__13418;
count__13369_13409 = G__13419;
i__13370_13410 = G__13420;
continue;
} else {
var temp__4657__auto___13421 = cljs.core.seq.call(null,seq__13367_13407);
if(temp__4657__auto___13421){
var seq__13367_13422__$1 = temp__4657__auto___13421;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13367_13422__$1)){
var c__8458__auto___13423 = cljs.core.chunk_first.call(null,seq__13367_13422__$1);
var G__13424 = cljs.core.chunk_rest.call(null,seq__13367_13422__$1);
var G__13425 = c__8458__auto___13423;
var G__13426 = cljs.core.count.call(null,c__8458__auto___13423);
var G__13427 = (0);
seq__13367_13407 = G__13424;
chunk__13368_13408 = G__13425;
count__13369_13409 = G__13426;
i__13370_13410 = G__13427;
continue;
} else {
var vec__13376_13428 = cljs.core.first.call(null,seq__13367_13422__$1);
var name_13429 = cljs.core.nth.call(null,vec__13376_13428,(0),null);
var map__13379_13430 = cljs.core.nth.call(null,vec__13376_13428,(1),null);
var map__13379_13431__$1 = ((((!((map__13379_13430 == null)))?((((map__13379_13430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13379_13430.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13379_13430):map__13379_13430);
var doc_13432 = cljs.core.get.call(null,map__13379_13431__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13433 = cljs.core.get.call(null,map__13379_13431__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_13429);

cljs.core.println.call(null," ",arglists_13433);

if(cljs.core.truth_(doc_13432)){
cljs.core.println.call(null," ",doc_13432);
} else {
}

var G__13434 = cljs.core.next.call(null,seq__13367_13422__$1);
var G__13435 = null;
var G__13436 = (0);
var G__13437 = (0);
seq__13367_13407 = G__13434;
chunk__13368_13408 = G__13435;
count__13369_13409 = G__13436;
i__13370_13410 = G__13437;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__13381 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__13382 = null;
var count__13383 = (0);
var i__13384 = (0);
while(true){
if((i__13384 < count__13383)){
var role = cljs.core._nth.call(null,chunk__13382,i__13384);
var temp__4657__auto___13438__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___13438__$1)){
var spec_13439 = temp__4657__auto___13438__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_13439));
} else {
}

var G__13440 = seq__13381;
var G__13441 = chunk__13382;
var G__13442 = count__13383;
var G__13443 = (i__13384 + (1));
seq__13381 = G__13440;
chunk__13382 = G__13441;
count__13383 = G__13442;
i__13384 = G__13443;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__13381);
if(temp__4657__auto____$1){
var seq__13381__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13381__$1)){
var c__8458__auto__ = cljs.core.chunk_first.call(null,seq__13381__$1);
var G__13444 = cljs.core.chunk_rest.call(null,seq__13381__$1);
var G__13445 = c__8458__auto__;
var G__13446 = cljs.core.count.call(null,c__8458__auto__);
var G__13447 = (0);
seq__13381 = G__13444;
chunk__13382 = G__13445;
count__13383 = G__13446;
i__13384 = G__13447;
continue;
} else {
var role = cljs.core.first.call(null,seq__13381__$1);
var temp__4657__auto___13448__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___13448__$2)){
var spec_13449 = temp__4657__auto___13448__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_13449));
} else {
}

var G__13450 = cljs.core.next.call(null,seq__13381__$1);
var G__13451 = null;
var G__13452 = (0);
var G__13453 = (0);
seq__13381 = G__13450;
chunk__13382 = G__13451;
count__13383 = G__13452;
i__13384 = G__13453;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
