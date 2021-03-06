GRANT ALL PRIVILEGES ON javatest.* TO javauser@localhost
IDENTIFIED BY 'javadude' WITH GRANT OPTION;

create database khcu;

use khcu;

create table khcu.board (
  id int not null auto_increment primary key,
  name varchar(50),
  email varchar(100),
  message text);

insert into khcu.board (name, email, message) 
values ('김승미', 'smsr83@khcu.ac.kr', '게시판 첫번째 내용입니다.');

insert into khcu.board (name, email, message) 
values ('박동귀', 'nioee91@khcu.ac.kr', '게시판 두번째 내용입니다.');
