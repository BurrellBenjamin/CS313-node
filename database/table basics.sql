create table users (
	userID serial primary key,
	username varchar(80) unique NOT NULL,
	password chkpass NOT NULL
);

create table relationships (
	relationshipID serial,
	sourceUser integer not null references users(userID),
	friendUser integer not null references users(userID)
);

create table messages (
	messageID serial,
	sourceUser integer not null references users(userID),
	recievingUser integer not null references users(userID),
	dateSent timestamp not null,
	message text not null,
	isRead boolean default 'false',
	archived boolean default 'false'
);