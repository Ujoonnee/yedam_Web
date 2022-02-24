select * from member;
commit;

insert into member(id,password,name,authority)
values('park@abc.com','1234','박승리','USER');

SELECT COUNT(ID) AS ID FROM MEMBER WHERE ID = 'park@abc.com';

SELECT
CASE WHEN COUNT(ID) = 1 THEN 0 
                        ELSE 1 END AS ID
FROM MEMBER WHERE ID = 'park@abc.com';