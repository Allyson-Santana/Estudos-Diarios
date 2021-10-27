create table tb_message(
	cd_message int not null auto_increment,
    dt_message datetime not null,
    nm_message varchar(50) not null,
    ds_message text not null,
		constraint pk_message primary key(cd_message)
);