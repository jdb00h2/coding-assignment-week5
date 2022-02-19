class Book {
    constructor(title, author, pageCount) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    }
}

class Movie {
    constructor(title, director, runTime) {
        this.title = title;
        this.director = director;
        this.runTime = runTime;
    }
}

class VideoGame {
    constructor(title, rating, console) {
        this.title = title;
        this.rating = rating;
        this.console = console;
    }
}

class Menu {
    constructor() {
        this.books = [];
        this.movies = [];
        this.videoGames = [];
        this.selectedBook = null;
        this.selectedMovie = null;
        this.selectedVideoGame = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.showMenuBooks();
                    break;
                case '2':
                    this.showMenuMovies();
                    break;
                case '3':
                    this.showMenuVideoGames();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Thanks for visiting!');
    }

    showMainMenuOptions() {
        return prompt(`
        0) Exit
        1) View Book Menu
        2) View Movie Menu
        3) View Video Game Menu
        `);
    }
    showBookMenuOptions() {
        return prompt(`
        0) Back
        1) Add new book
        2) View book details
        3) Delete book
        4) View all books
        `);
    }
    showMovieMenuOptions() {
        return prompt(`
        0) Back
        1) Add new movie
        2) View movie details
        3) Delete movie
        4) View all movies
        `);
    }
    showVideoGameMenuOptions() {
        return prompt(`
        0) Back
        1) Add new video game
        2) View video game details
        3) Delete video game
        4) View all video games
        `);
    }

    showMenuBooks() {
        let selection = this.showBookMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.addBook();
                    break;
                case '2':
                    this.viewBookDetails();
                    break;
                case '3':
                    this.deleteBook();
                    break;
                case '4':
                    this.displayBooks();
                default:
                    selection = 0;
            }
            selection = this.showBookMenuOptions();
        }
    }

    addBook() {
        let title = prompt('Enter the title of the new book:');
        let author = prompt('Enter the name of the author:');
        let pageCount = prompt('How many pages are in this book?');
        this.books.push(new Book(title, author, pageCount));
    }

    viewBookDetails() { 
        let index = prompt('What is the index of the book you wish to view?');
        let description = ''
        if (index > -1 && index < this.books.length) {
            this.selectedBook = this.books[index];
            description = this.selectedBook.title + ' by ' + this.selectedBook.author + ' has ' + this.selectedBook.pageCount + ' pages.'
        }
        alert(description);
    }
    
    deleteBook() {
        let index = prompt('What is the index of the book you wish to delete?');
        if (index > -1 && index < this.books.length) {
            this.books.splice(index, 1);
        }   
    }

    displayBooks() {
        let bookString = '';
        for (let i = 0; i < this.books.length; i++) {
            bookString += i + ') ' + this.books[i].title + '\n';
        }
        alert(bookString);
    }

    showMenuMovies() {
        let selection = this.showMovieMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.addMovie();
                    break;
                case '2':
                    this.viewMovieDetails();
                    break;
                case '3':
                    this.deleteMovie();
                    break;
                case '4':
                    this.displayMovies();
                default:
                    selection = 0;
            }
            selection = this.showMovieMenuOptions();
        }
    }

    addMovie() {
        let title = prompt('Enter the title of the new movie:');
        let director = prompt('Enter the name of the director:');
        let runTime = prompt('What is the run time(in minutes)?');
        this.movies.push(new Movie(title, director, runTime));
    }
    
    viewMovieDetails() { 
        let index = prompt('What is the index of the movie you wish to view?');
        let description = '';
        if (index > -1 && index < this.movies.length) {
            this.selectedMovie = this.movies[index];
            description = this.selectedMovie.title + ', directed by ' + this.selectedMovie.director + ', has a run time of '
            + this.selectedMovie.runTime + ' minutes.'
        }
        alert(description);
    }

    deleteMovie() {
        let index = prompt('What is the index of the movie you wish to delete?');
        if (index > -1 && index < this.movies.length) {
            this.movies.splice(index, 1);
        }
    }

    displayMovies() {
        let movieString = '';
        for (let i = 0; i < this.movies.length; i++) {
            movieString += i + ') ' + this.movies[i].title + '\n';
        }
        alert(movieString);
    }

    showMenuVideoGames() {
        let selection = this.showVideoGameMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.addVideoGame();
                    break;
                case '2':
                    this.viewVideoGameDetails();
                    break;
                case '3':
                    this.deleteVideoGame();
                    break;
                case '4':
                    this.displayVideoGame();
                default:
                    selection = 0;
            }
            selection = this.showVideoGameMenuOptions();
        }
    }

    addVideoGame() {
        let title = prompt('Enter the title of the new video game:');
        let rating = prompt('Enter the rating for this video game:');
        let console = prompt('Enter the console this video game is formatted for:');
        this.videoGames.push(new VideoGame(title, rating, console));
    }

    viewVideoGameDetails() { 
        let index = prompt('What is the index of the video game you wish to view?');
        let description = '';
        if (index > -1 && index < this.videoGames.length) {
            this.selectedVideoGame = this.videoGames[index];
            description = this.selectedVideoGame.title + ' has a rating of ' + this.selectedVideoGame.rating + ' and will play on a '
            + this.selectedVideoGame.console + ' console.'
        }
        alert(description);
    }

    deleteVideoGame() {
        let index = prompt('What is the index of the video game you wish to delete?');
        if (index > -1 && index < this.videoGames.length) {
            this.videoGames.splice(index, 1);
        }
    }

    displayVideoGame() {
        let videoGameString = '';
        for (let i = 0; i < this.videoGames.length; i++) {
            videoGameString += i + ') ' + this.videoGames[i].title + '\n';
        }
        alert(videoGameString);
    }
}

let menu = new Menu();
menu.start();