
create table member(

	id varchar2(15 char) primary key,
	pw varchar2(15 char) not null,
	name varchar2(5 char) not null,
	address varchar2(30 char) not null,
	innate number(6) not null,
	innate2 number(7) not null
	
);

select * from member;

insert into member values('rich','aaa','Ȳ','����','111111','1111111');

delete from MEMBER where id = 'betray1228';

select id from member where id like '%'||'b'||'%';

select * from member where id = 'rex123';

select id from member where name = 'ȫ�浿' and innate = '111111' and innate2 = '1111111';

select pw from member where pw = 'aaa123' and id = 'rex123';


select pw from member where id like 'rex123';



