```sql
-- 로그인 정보 관리
create table if not exists user_info (
	user_seq varchar(8) not null
		constraint user_info_pk unique,
	user_id varchar(64) not null,
	user_pwd varchar(256) not null,
	user_nick varchar(128) not null,
	user_level int default 1 not null,
	user_role bpchar(1) default '1' not null,
    user_email varchar(256) not null,
	user_crt_dtm timestamp default now() not null,
    user_stat_cd varchar(4) default '0000' not null,
	del_fl bpchar(1) default '1' not null
);

comment on table user_info is '유저 정보 테이블';
comment on column user_info.user_seq is '고유 번호';
comment on column user_info.user_id is '아이디';
comment on column user_info.user_pwd is '패스워드';
comment on column user_info.user_nick is '닉네임';
comment on column user_info.user_level is '유저 고유 번호';
comment on column user_info.user_role is '유저 등급';
comment on column user_info.user_crt_dtm is '생성 날자';
comment on column user_info.del_fl is '삭제 여부';
comment on column user_info.user_email is '유저 이메일 정보';
comment on column user_info.user_stat_cd is '유저 상태 코드 0000:미인증, 0001:인증';
```

```sql
-- 로그인 성공 실패 히스토리
```
