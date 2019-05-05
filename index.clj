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

(first (.getBytes "hello"))
(rest (System/getProperties))

; clojure not auto convert seq to coll
(reverse "hello")
(apply str (reverse "hello"))

; (re-seq regexp string)
(re-seq #"\w+" "the quick brown fork")
(map clojure.string/upper-case (re-seq #"\w+" "the quick brown fork"))

(import 'java.io.File)
(.listFiles (File. "."))
(seq (.listFiles (File. ".")))
(map #(.getName %) (seq (.listFiles (File. "."))))

(require '[clojure.java.io :refer [reader]])
(take 2 (line-seq (eader "tokine/clojure-learning/index.clj")))
(with-open [rdr (reader "tokine/clojure-learning/index.clj")] (count (line-seq rdr)))

; (peek coll) same as first
(peek '(1 2 3))
; (pop coll) not same as rest. pop will throw e if seq is empty
(pop '(1 2 3))
(pop '())

; vector
(get [:a :b :c] 1)
([:a :b :c] 1)

(assoc [0 1 2 3 4] 2 :two)

; (subvec avec start end?)
(subvec [0 1 2 3 4] 3)

; function use in map
(def mapA {:a 1 :b 2 :c 3})
(keys mapA)
(vals mapA)

; (get map key value-if-not-found?)
(get mapA :d)
(mapA :a)
(:a mapA)

; (contains? map key) -- Object.hasOwnProperties()
(contains? mapA :d)

(assoc mapA :e 5)
(dissoc mapA :b 5)
; pick
(select-keys mapA [:a :b])
; Object.assign({}, _, _)
(merge mapA {:c 8 :e 5})

; function on sets
(def setA #{"A" "B" "C"})
(def setB #{"B" "C" "D"})
(clojure.set/union setA setB)
(clojure.set/intersection setA setB)
(clojure.set/difference setA setB)
(clojure.set/select #(= 1 (count %)) setA)

; (partition size step? coll)
(partition 2 [:h :t :t :h :h :h])
(partition 2 1 [:h :t :t :h :h :h])

; (comp f & fs)
(require '[clojure.spec.alpha :as s])
; (s/def name spec)
(s/def :my.app/company-name string?)
(s/valid? :my.app/company-name "AASD")
(s/def :marble/color #{:red :blue})
(s/valid? :marble/color :red)
(s/def ::bowling.ranged-roll (s/int-in 0 11))
(s/valid? ::bowling.ranged-roll 10)
(s/def ::nilable-boolean (s/nilable boolean?))
(s/valid? ::nilable-boolean nil)
(s/def ::odd-int (s/and int? odd?))
(s/valid? ::odd-int 5)
(s/valid? ::odd-int 5.2)
(s/def ::odd-or-42 (s/or :odd ::odd-int :42 #{42}))
(s/valid? ::odd-or-42 42)
(s/conform ::odd-or-42 42)
(s/explain ::odd-or-42 0)
(s/def ::names (s/coll-of string?))
(s/valid? ::names ["A" "B"])
(s/valid? ::names #{"A" "B"})
(s/valid? ::names '("A" "B"))
(s/def ::point (s/tuple float? float?))
(s/conform ::point [1.3 2.8])
(defn big? [x] (> x 100))
(s/def ::big-odd-int (s/and odd? int? big?))
(require '[clojure.spec.test.alpha :as stest])
(require '[clojure.spec.gen.alpha :as gen])
(s/exercise ::big-odd-int) ; ?


; (ref initial-state)
(def current-track (ref "TEST ABC DEF"))
; (deref reference)
(deref current-track)
@current-track
; (ref-set reference new-value)
; (dosync & exprs)
(dosync (ref-set current-track "MY REF IS MUTABLE"))
(deref current-track)

(defrecord Message [sender text])
(->Message "A" "a1")
(def messages (ref ()))
; (alter ref update-fn & args...)
(defn add-messages [msg]
  (dosync (alter messages conj msg)))
(add-messages (->Message "B" "b1"))
(add-messages (->Message "C" "c1"))

(defmacro hello [x] '(+ 1 2))
(hello 0)
(defn unless [expr form] (if expr nil form))
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

