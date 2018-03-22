// static変数（クラス変数）、final修飾子について
// https://www.sejuku.net/blog/22426
// https://www.sejuku.net/blog/20977
// typescript入門
// https://qiita.com/ringtail003/items/7ccf992f18b768e0e633

// 疑問点
// - constructor は private になるときあるのか?
// - enum の使い方 Javaの Enumeration との比較

export class Movie {
    public static CHILDRENS: number = 2;
    public static REGULAR: number = 0;
    public static NEW_RELEASE: number = 1;

    private _title: string;
    private _priceCode: number;

    constructor (title: string, priceCode: number) {
        this._title = title;
        this._priceCode = priceCode;
    }

    get priceCode(): number {
        return this._priceCode;
    }

    set priceCode(arg: number) {
        this._priceCode = arg;
    }

    get title(): string {
        return this._title;
    }
}

export class Rental {
    private _movie: Movie;
    private _daysRented: number;

    constructor (movie: Movie, daysRented: number) {
        this._movie = movie;
        this._daysRented = daysRented;
    }

    get daysRented(): number {
        return this._daysRented;
    }

    get movie(): Movie {
        return this._movie;
    }
}

export class Customer {
    private _name: string;
    private _rentals: Rental[] = [];

    constructor (name: string) {
        this._name = name;
    }

    addRental(arg: Rental) :void {
        this._rentals.push(arg);
    }

    get name(): string {
        return this._name;
    }

    statement(): string {
        let totalAmount: number = 0;
        let frequentRenterPoints: number = 0;
        let result = "Rental Record for " + this.name + "\n";

        for (let rental of this._rentals) {
            let thisAmount = 0;
            const each: Rental = rental;

            switch (each.movie.priceCode) {
                case Movie.REGULAR:
                    thisAmount += 2;
                    if (each.daysRented > 2)
                        thisAmount += (each.daysRented - 2) * 1.5;
                    break;
                case Movie.NEW_RELEASE:
                    thisAmount += each.daysRented * 3;
                    break;
                case Movie.CHILDRENS:
                    thisAmount += 1.5;
                    if (each.daysRented > 3)
                        thisAmount += (each.daysRented - 3) * 1.5;
                    break;
            }

            // レンタルポイントを加算
            frequentRenterPoints ++;

            // 新作を二日以上借りた場合はボーナスポイント
            if((each.movie.priceCode === Movie.NEW_RELEASE) && each.daysRented > 1) frequentRenterPoints ++;

            // この貸し出しに関する数値の表示
            result += "\t" + each.movie.title + "\t" + thisAmount.toString() + "\n";
            totalAmount += thisAmount;
        }

        // フッタ部分の追加
        result += "Amount owed is " + totalAmount.toString() + "\n";
        result += "You earned " + frequentRenterPoints.toString() + " frequent renter points";
        return result;
    }
}