SELECT COUNT(*) FROM earthquake

SELECT magnitude, place, occurred_on
FROM earthquake
WHERE occurred_on >= '2000-01-01';

SELECT * FROM earthquake
WHERE occurred_on >= '2010-01-01' AND occurred_on <= '2010-12-31'
ORDER BY magnitude desc
LIMIT 1; --end of lesson 1

SELECT MIN(occurred_on), MAX(occurred_on)
FROM earthquake;

SELECT MIN(magnitude), MAX(magnitude)
FROM earthquake;

SELECT DISTINCT cause
FROM earthquake; --only returns unique values

SELECT COUNT(*)
FROM earthquake
WHERE cause = 'earthquake'

SELECT *
FROM earthquake
WHERE cause = 'explosion'

SELECT *
FROM earthquake
WHERE cause = 'nuclear explosion'
ORDER BY occurred_on desc
LIMIT 1 --most recent nuclear explosion

SELECT magnitude, occurred_on, place
FROM earthquake
ORDER BY magnitude DESC
LIMIT 10 -- 10 biggest earthquakes

SELECT *
FROM earthquake
WHERE place LIKE '%Honshu%Japan%'
AND occurred_on BETWEEN '2011-03-11' AND '2011-03-18'