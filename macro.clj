; (defmacro name doc-string? attr-map? [params*] body)
(defmacro unless [expr form]
  (list 'if expr nil form))

(unless false (println "this should print"))
(unless true (println "this should not print"))