create database db_b7;
use db_b7;
create table tb_user (
	cd_user int not null auto_increment,
    nm_user varchar(30) not null,
    cd_age int(3),
		constraint pk_user primary key(cd_user)
);

insert into tb_user VALUES (default, 'Allyson', 20);
insert into tb_user VALUES (default, 'Leonardo', 16);
insert into tb_user VALUES (default, 'Marcelo', 23);
insert into tb_user VALUES (default, 'Yzaque', 5);
insert into tb_user VALUES (default, 'Rafael', 8);