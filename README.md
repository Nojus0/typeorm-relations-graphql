##### Simple typeorm relation examples
###### View BRANCHES to see All relation methods.
###### Made using typescript, graphql, type-graphql, typeorm.

#### ManyToMany Relations
##### In this example you have Author and Book Entity, we want so Books can have many authors on many books.

```
export class Book extends BaseEntity {

    ...

    @ManyToMany(type => Author)
    @JoinTable({ name: "book_authors" })
    authors: Author[]
}
```
##### The above creates a table book_authors which links books with authors like an Dictionary/Hashmap but in a sql table format.

```
 TABLE books_authors
 --------------------
 authorId   |  bookId
 1             2       Author1 -> Book2
 1             4       Author1 -> Book4
 2             4       Author2 -> Book4
 --------------------
```


###### Looking above you see that author of book 2 is author 1.
###### and one bellow author of book 4 is author 1
###### Now if this is all you need that one author can have many books
###### consider using OneToMany relation.
###### Okay, looking down again one more time you see that the author of book 4 is author 2
###### So book 4 has two authors author 1 and 2.
###### So author can have many books, and book and have many authors.

###### Only ManyToMany relations creates a new table.
