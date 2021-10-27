/**
 * tb_users [ 
     cd_user, 
    nm_user, 
    dt_nasc ]
 */

 create database db_api_users;

 create table tb_users (
     cd_user int not null auto_increment,
     nm_user varchar(30) not null,
     dt_nasc date not null,
        constraint pk_users primary key(cd_user)
 );