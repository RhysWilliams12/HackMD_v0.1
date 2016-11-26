import json

def saveFile(data):
	file = open('sites.json','a')
	file.write(str(data))
	file.close()


with open('./monitoring_sites.json') as data_file:    
    data = json.load(data_file)
global fileinput
fileinput = []

for site in data["Sites"]["Site"]:
	obj = {"code": str(site['@SiteCode']), "lon": str(site["@Longitude"]), "lat": str(site["@Latitude"])}
	fileinput.append(obj)
	
saveFile(fileinput)
