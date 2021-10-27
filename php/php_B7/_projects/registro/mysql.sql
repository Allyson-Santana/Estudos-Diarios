create table tb_user (
	cd_user int not null auto_increment,
    nm_email varchar(40) not null,
    nm_password varchar(255) not null,
		constraint pk_user primary key(cd_user)
);