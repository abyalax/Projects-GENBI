SELECT
    news.*,
    anggota.name AS author_name
FROM
    news
    INNER JOIN anggota ON news.author = anggota.id
WHERE
    news.id = ?;