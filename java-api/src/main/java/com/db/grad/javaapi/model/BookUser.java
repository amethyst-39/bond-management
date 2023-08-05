package com.db.grad.javaapi.model;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.JoinColumn;
import com.db.grad.javaapi.model.Book;
import com.db.grad.javaapi.model.User;


@Entity
@Table(name = "BookUser")
public class BookUser {

    @Id
    private int id; // Assuming this is the primary key for the join table

    @ManyToOne
    @JoinColumn(name = "BookId", referencedColumnName = "Id", nullable = false)
    private Book book;

    @ManyToOne
    @JoinColumn(name = "UserId", referencedColumnName = "Id", nullable = false)
    private User user;

    // Constructors, getters, and setters

    public BookUser() {
        // Default constructor required by JPA
    }

    public BookUser(Book book, User user) {
        this.book = book;
        this.user = user;
    }

    // Getters and setters for all fields

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
