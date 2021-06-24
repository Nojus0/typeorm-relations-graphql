##### Simple typeorm relation examples
###### View BRANCHES to see All relation methods.
###### Made using typescript, graphql, type-graphql, typeorm.

#### OneToMany/ManyToOne Relations
##### In this example you have Author and Book Entity, we want so one author can have many books, and a book can have one author.

```
export class Book extends BaseEntity {

    ...

    @ManyToOne(type => Author, author => author.books)
    author: Author
}
```

```
export class Author extends BaseEntity {

    ...  
    
    @OneToMany(type => Book, book => book.author)
    books: Book[]
}
```


```
TABLE authors
------------
 id | name
----+-------
  1 | Nojus
----+-------

TABLE books
 id |    title     | authorId
----+--------------+----------
  1 | booktitle    |        1
  2 | anothertitle |        1
  3 | thirdtitle   |        1
----+--------------+----------
```

##### You can see above that Book entity with ManyToOne has an additional collumn authorId
##### Author 1 has 3 books.
