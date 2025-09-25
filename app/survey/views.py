from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
import json
from survey import models as survey_models
# Funktiot datan käsitelyä varten

def members(request):
    return HttpResponse("Hello world!")

@csrf_exempt
def collect(request):
    if request.method == "POST":
         userResponse = json.loads(request.body)

         # Tallennetaan käyttäjän vastaus tietokantaan
         #Luodaan oliona jotta voidaan laittaa foreign key toiseen tauluun
         userResponse = survey_models.User.objects.create(
             fname = userResponse['fname'],
             lname =userResponse['lname'],
             address = userResponse['address'],
             phonenum = userResponse['puhelin']
         )
         survey_models.Responses.objects.create(
             user = userResponse,
             response = userResponse['palaute']
         )

         return HttpResponse("Data received")
    else:
        return HttpResponse("Send a POST request")