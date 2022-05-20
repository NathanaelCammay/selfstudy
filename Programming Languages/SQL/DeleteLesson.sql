CREATE TABLE public.song (
    song_id integer,
    title character varying,
    artist character varying,
    album character varying,
    year_released integer,
    duration numeric,
    tempo numeric,
    loudness numeric
);

Select * from song

SELECT COUNT(*)
FROM song

SELECT MIN(year_released), MAX(year_released)
FROM song

SELECT DISTINCT year_released
FROM song
ORDER BY year_released

DELETE FROM song
WHERE year_released = 0;

SELECT MIN(tempo), MAX(tempo)
FROM song -- check if the min and max value make sense

SELECT COUNT(*)
FROM song
WHERE tempo = 0;

DELETE FROM song
WHERE tempo = 0; -- delete songs with a tempo value of 0

-- checking duration values for any deletable info

SELECT MIN(duration), MAX(duration)
FROM song

-- check loudness data for same issues
SELECT MIN(loudness), MAX(loudness)
FROM song

--songs should not have a positive loudness value

SELECT COUNT(*)
FROM song
WHERE loudness > 0;

-- There is 1 song with this faulty value, lets view it to make sense of it

DELETE
FROM song
WHERE loudness > 0;

--Has tempo changed over time?

SELECT tempo, artist, year_released
FROM song
WHERE year_released > '1970'
ORDER BY tempo DESC

SELECT tempo, artist, year_released
FROM song
WHERE year_released < '1970'
ORDER BY tempo DESC

SELECT year_released, ROUND(AVG(tempo))
FROM song
GROUP BY year_released
ORDER BY year_released
