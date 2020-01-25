# WebEng19_group3_WeatherApp
Αντωνιάδης Δημήτριος, Καματέρη Ελένη, Καρκάνης Πέτρος, Λόια Όλγα


# WeatherApp

## Περιγραφή Εφαρμογής

Το WeatherApp είναι μία υβριδική εφαρμογή καιρού, σχεδιασμένη ως Progressive Web Application, για να μπορεί να προσαρμόζεται αυτόματα ανάλογα με την πλατφόρμα προορισμού. 
Η εφαρμογή επιτελεί δύο βασικές λειτουργίες. Πρώτον, παρέχει στον χρήστη προσωποποιημένη πληροφόρηση για τον καιρό στις πόλεις που επιλέγει ως αγαπημένες. Πιο συγκεκριμένα, ο χρήστης αφού δημιουργήσει λογαριασμό στην εφαρμογή (δίνοντας username και password), μπορεί να αναζητά τις πόλεις για τις οποίες επιθυμεί να ενημερώνεται σχετικά με τον καιρό και να τις προσθέτει στις αγαπημένες. Με αυτόν τον τρόπο, κάθε φορά που ο χρήστης συνδέεται στην εφαρμογή βλέπει πρώτα τα μετεωρολογικά δεδομένα για τις συγκεκριμένες πόλεις. Η δεύτερη λειτουργία είναι η πρόταση πόλης για εκδρομή, ανάλογα με τις καιρικές συνθήκες που επιθυμεί ο χρήστης να συναντήσει. Για παράδειγμα, ο χρήστης μπορεί να επιλέξει να επισκεφτεί μια πόλη με λιακάδα την επόμενη εβδομάδα ή να επισκεφτεί μια πόλη με αέρα, η εφαρμογή θα προτείνει πόλεις προς επίσκεψη με βάση τα χαρακτηριστικά αυτά.

## Backend

Για το Backend χρησιμοποιήθηκε Node.js με Express Framework.

## Frontend

Για το Frontend χρησιμοποιήθηκε Angular 8 με Ionic 4.

## API

Το API που χρησιμοποιήθηκε είναι του weatherbit.io (https://www.weatherbit.io/api/weather-current), το οποίο δίνει πληροφορίες και προβλέψεις για μετεωρολογικά δεδομένα. Οι παράμετροι του API response είναι της παρακάτω JSON μορφής: 

{  
               "data":[  
                  {  
                     "wind_cdir":"NE",
                     "rh":59,
                     "pod":"d",
                     "lon":"-78.63861",
                     "pres":1006.6,
                     "timezone":"America\/New_York",
                     "ob_time":"2017-08-28 16:45",
                     "country_code":"US",
                     "clouds":75,
                     "vis":10,
                     "wind_spd":6.17,
                     "wind_cdir_full":"northeast",
                     "app_temp":24.25,
                     "state_code":"NC",
                     "ts":1503936000,
                     "h_angle":0,
                     "dewpt":15.65,
                     "weather":{  
                        "icon":"c03d",
                        "code":"803",
                        "description":"Broken clouds"
                     },
                     "uv":2,
                     "aqi":45,
                     "station":"CMVN7",
                     "wind_dir":50,
                     "elev_angle":63,
                     "datetime":"2017-08-28:17",
                     "precip":0,
                     "ghi":444.4,
                     "dni":500,
                     "dhi":120,
                     "solar_rad":350,
                     "city_name":"Raleigh",
                     "sunrise":"10:44",
                     "sunset":"23:47",
                     "temp":24.19,
                     "lat":"35.7721",
                     "slp":1022.2
                  }
               ],
               "count":1
            }

## Αρχιτεκτονική Συστήματος

System architecture v1:

https://docs.google.com/drawings/d/1o4-7YLt_OA10otQWkVgIKs0wsDAN9wao08LRl9gBacU/edit?usp=sharing

System architecture v2:

https://docs.google.com/drawings/d/1QVIhGgJWk2CqlVXyktP--MX5jLPVYpLAPx84jhavwsc/edit?usp=sharing

## Requirements

https://docs.google.com/spreadsheets/d/1abrpGfW6tTL3lHjfGPz3CeIxl1-pP-xX8mp8rrfW6Bs/edit?usp=sharing

## URL Εφαρμογής

Η εφαρμογή φιλοξενείτε στο "Amazon lightsail". Το URL της είναι: http://webeng19g3.s3-website-eu-west-1.amazonaws.com/#/auth.

## Παρουσίαση Εφαρμογής
https://drive.google.com/file/d/1LRmLb3QqZx-yATtmhKy1ReJF020D05_Q/view?usp=sharing
