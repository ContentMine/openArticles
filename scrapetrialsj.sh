#!bin/sh
for i in {75..100};
do /usr/local/bin/quickscrape -u http://www.trialsjournal.com/content/16/1/$i -s /Users/pm286/workspace/journal-scrapers/scrapers/trialsjournal.json;
done

