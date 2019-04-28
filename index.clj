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

; (range start? end? step?)
(range 2 10 2)

; (repeat times x)
(repeat 5 1)

; (iterate func x)
(take 10 (iterate inc 1))

; (cycle coll)
(take 10 (cycle (range 3)))

(def whole-numbers (iterate inc 1))
; (interleave & colls)
(interleave whole-numbers ["A" "B" "C" "D" "E"])
(apply str (interpose "," ["AA" "BB" "C"]))
(require '[clojure.string :refer [join]])
(join \, ["AA" "BB" "c"])

; (filter pred coll)
(take 10 (filter even? whole-numbers))

; (split-at index coll)
; (split-with pred coll)
(split-at 5 (range 10))
(split-with #(<= % 10) (range 0 20 2))

; (every? pred coll) 
(every? odd? [1 3 5])
; (some? pred coll)
(some even? [1 2 3])
; (not-every? pred coll)
; (not-any? pred coll)
(not-every? even? whole-numbers)
(not-any? even? whole-numbers)

; (map f coll)
(map #(format "<p>%s</p>" %) ["the" "quick" "brown" "fox"])
; (reduce f coll)
(reduce + (range 1 11))

; (sort comp? coll)
; (sort-by a-fn comp? coll)
(sort [42 1 7 11])
(sort-by #(.toString %) [42 1 7 11])
(sort > [42 1 7 11])
(sort-by :grade > [{:grade 83} {:grade 90} {:grade 77}])

; (for [binding-form coll-expr filter-expr? ...] expr)
(for [word ["the" "quick" "brown" "fox"]] (format "<p>%s</p>" word))

(def x (for [i (range 1 3)] (do (println i) i)))

; (doall coll) forces clojure run all elements as result
(doall x)
; (dorun coll) run coll not keep in memory
(dorun x)

(defmacro hello [x] '(+ 1 2))
(hello 0)
(defn unless [expr form](if expr nil form))
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

