##### Simple typeorm relation examples
###### View BRANCHES to see All relation methods.
###### Made using typescript, graphql, type-graphql, typeorm.

#### OneToOne Relations
##### In this example you have Author and Book Entity, we want so that an author can have only one book, and a book can only one author

```
export class Book extends BaseEntity {
  
    ...

    @OneToOne(type => Author)
    @JoinColumn()
    author: Author
}
```
##### The above adds authorId collumn to the Book table, you can do this on Author entity it will add the collumn to that entity
##### But i prefer doing it on the book table becauses it will be easier later on when retrieving relations, you can try this on Author entity
##### And you will see the problem when integrating it with graphql

```
 TABLE books
 id | title | authorId
----+-------+----------
1    mytitle  2
----+-------+----------


TABLE authors
-----------
 id | name
----+------
1    Nojus
----+------
```

#### OR

```
 TABLE books
 id | title 
----+-------+-
1    mytitle
----+-------+-


TABLE authors
-----------------
 id | name | bookId
----+------+-----
1    Nojus | 1
----+------+-----
```

##### So as can see, a author can have one book, and a book can have one author.


