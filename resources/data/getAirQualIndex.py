import urllib2

def saveFile(data):
	file = open('AroundLondon.json','a')
	file.write(data)
	file.close()


for i in range (1,27):
	fullURL = 'http://api.erg.kcl.ac.uk/AirQuality/Daily/MonitoringIndex/GroupName=AroundLondon/Date=2016-11-'+str(i)+'/Json'
	output = urllib2.urlopen(fullURL).read()
	saveFile(output)


