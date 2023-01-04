use landingpage;

create table Products (
	ProductId int NOT NULL AUTO_INCREMENT,
	Name varchar(250),
    Link varchar(50),
    Title varchar(500),
	BannerImage mediumtext,
    ShortDescription varchar(1000),
    Content mediumtext,
    PRIMARY KEY (ProductId)
);


create table News (
	NewId int NOT NULL AUTO_INCREMENT,
	Name varchar(250),
    Link varchar(50),
    ShortDescription varchar(1000),
    BannerImage mediumtext,
    Title varchar(500),
    Author  varchar(250),
    TimeNew varchar(50),
    Content mediumtext,
    PRIMARY KEY (NewId)
);

create table Users (
	UserId int NOT NULL AUTO_INCREMENT,
	UserName varchar(250) UNIQUE,
    HashPassword varchar(250),
        PRIMARY KEY (UserId)
    )