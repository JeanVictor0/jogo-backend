insert into rooms (game)
select id from games
    where games.nameGame in ('gartic');

insert into rooms (game)
select id from games
    where games.nameGame = 'forca';