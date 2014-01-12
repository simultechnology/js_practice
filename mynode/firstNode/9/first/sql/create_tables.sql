create table if not exists stories (
  sid int primary key auto_increment,
  title text,
  slug text not null,
  body text,
  cdate datetime not null
);

create table if not exists users (
  uid int primary key auto_increment,
  name text not null,
  password text
);
