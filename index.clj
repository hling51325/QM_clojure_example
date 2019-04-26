; 连接 lein repl
; vscode 连接 repl port (ctrl+alt+v c)
; repl (ctrl+alt+v e)

; base
(+ 1 1)
(* 2 3)

; conj是conjoin的简称， 把一个元素加入 new set 里
(conj #{} "stu")

; 除法取整
(quot 22 7)

; 除法取余
(rem 22 7)

; true is true, false is false, nil is nil, 其他都是true
(true? "0")
(true? "")
(nil? false)
(nil? nil)
(false? false)
(false? 0)

; 多态函数
(defn messenger
  ([]     (messenger "Hello world!"))
  ([msg]  (str msg)))

(messenger)
(messenger "clojure")

; 可变函数 & 后可以跟任意数量参数
(defn hello [greeting & who]
  (str greeting who))

(hello "Hello" "world" "class")

; function greet(){}
(defn greet [name] (str "Hello, " name))

; 匿名函数
; let greet = () => {}
(def greet (fn [name] (str "Hello, " name)))

(defmacro hello [x] '(+ 1 2))
(hello 0)
(​defn​ unless [expr form]
        (​if​ expr nil form))
(unless false (println ​ "this should print" ​))

(string? "hello ")
(keyword? :hello)
(symbol? 'hello)
(defn myfunc
  "My func description"
  [name]
  (str "hello, " name))

(myfunc "aaa")
(defn trytry [p1 p2 & pall]
  (str p1 " and " p2 " ,count: " (count pall)))

(trytry "a" "b" "c" "d" "e")

(defn indexable? [word]
  (> (count word) 2))

(require '[clojure.string :as str])
(str/split "A fine day it is" #"\W")
(filter indexable? (str/split "A fine day it is" #"\W"))

(pst)

