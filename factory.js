const UserFactory = "{\"data\":[{\"email\":\"bausanomichal@gmail.com\",\"name\":\"misel\",\"password\":\"12345\"},{\"email\":\"admin@admin.com\",\"name\":\"admin\",\"password\":\"12345\"}],\"pointer\":\"misel\"}"

const CommentsFactory = "{\"data\":[{\"id\":1,\"author\":\"admin\",\"tags\":[\"game\",\"solitaire\"],\"body\":\"This is truly amazing game I have to admit.\"},{\"id\":2,\"author\":\"misel\",\"tags\":[\"mark\",\"project\",\"web\"],\"body\":\"Indeed I agree. If I were to mark it I think it deserves 100/100. Brilliant\"}],\"pointer\":null}"

const GameFactory = "{\"data\":[{\"player\":\"misel\",\"score\":780},{\"player\":\"admin\",\"score\":803},{\"player\":\"misel\",\"score\":568},{\"player\":\"misel\",\"score\":489},{\"player\":\"admin\",\"score\":572},{\"player\":\"admin\",\"score\":552},{\"player\":\"admin\",\"score\":619},{\"player\":\"admin\",\"score\":473},{\"player\":\"admin\",\"score\":584},{\"player\":\"admin\",\"score\":641},{\"player\":\"admin\",\"score\":528},{\"player\":\"misel\",\"score\":505},{\"player\":\"misel\",\"score\":572},{\"player\":\"misel\",\"score\":512},{\"player\":\"misel\",\"score\":576},{\"player\":\"misel\",\"score\":535},{\"player\":\"misel\",\"score\":530}],\"pointer\": null}"

localStorage.setItem('users', UserFactory)

localStorage.setItem('comments', CommentsFactory)

localStorage.setItem('games', GameFactory)
