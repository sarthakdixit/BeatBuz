from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializer import *
from django.db.models import Q
from django.db.models import Sum
import socket


class NewSongsList(APIView):
    def get(self, request):
        model = Songs.objects.select_related(
            'artist').all().order_by('-release_date')[:5]
        serial = SongsSerializer(model, many=True)
        return Response(serial.data)


class PopularSongsList(APIView):
    def get(self, request):
        model = Songs.objects.select_related(
            'artist').all().order_by('-views')[:5]
        serial = SongsSerializer(model, many=True)
        return Response(serial.data)


class EnergyBoosterList(APIView):
    def get(self, request):
        model = Songs.objects.select_related(
            'artist').filter(
            mood="Energy Booster").order_by('-release_date')[:5]
        serial = SongsSerializer(model, many=True)
        return Response(serial.data)


class SearchArtists(APIView):
    def get(self, request, artist_name):
        artist_name = artist_name.title()
        model = Artist.objects.get(name=artist_name)
        serial = ArtistSerializer(model)
        return Response(serial.data)


class Recommended(APIView):
    def get(self, request, user):
        model = History.objects.filter(user=user).order_by('-date_time')[:1]
        mode = []
        if not model:
            for i in range(1, 6):
                mode.append(Songs.objects.get(id=i))
        else:
            itt = 0
            for m in model:
                itt = str(m.song_id)
            HOST = '127.0.0.1'
            PORT = 65432
            with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
                s.connect((HOST, PORT))
                s.sendall(itt.encode('utf-8'))
                data = s.recv(1024)
            ss = data.decode()
            lst = ss.split(',')
            for i in lst:
                mode.append(Songs.objects.get(id=i))

        serial = SongsSerializer(mode, many=True)
        return Response(serial.data)


class AllArtists(APIView):
    def get(self, request):
        model = Artist.objects.all()
        serial = ArtistSerializer(model, many=True)
        return Response(serial.data)


class HistoryList(APIView):
    def get(self, request, user_id):
        model = History.objects.filter(
            user=user_id).order_by('-date_time')[:5]
        serial = HistorySerializer(model, many=True)
        return Response(serial.data)


class AllHistoryList(APIView):
    def get(self, request, user_id):
        model = History.objects.filter(
            user=user_id).order_by('-date_time')
        serial = HistorySerializer(model, many=True)
        return Response(serial.data)


class ArtistSongs(APIView):
    def get(self, request, name):
        name = name.title()
        model = Songs.objects.filter(artist=Artist.objects.get(
            name=name).id).order_by('-release_date')
        serial = SongsSerializer(model, many=True)
        return Response(serial.data)


class SpecificSong(APIView):
    def get(self, request, id):
        model = Songs.objects.get(id=id)
        serial = SongsSerializer(model)
        return Response(serial.data)


class SpecificArtist(APIView):
    def get(self, request, id):
        id = id.title()
        model = Artist.objects.get(name=id)
        serial = ArtistSerializer(model)
        return Response(serial.data)


class SearchSimilarSong(APIView):
    def get(self, request, id):
        id = id.title()
        if Artist.objects.filter(name=id).exists():
            m = Artist.objects.get(name=id)
            artist_id = m.id
            model = Songs.objects.filter(Q(artist=artist_id) | Q(genere=id) | Q(
                mood=id) | Q(name=id) | Q(album=id) | Q(language=id)).order_by('-release_date')
        else:
            model = Songs.objects.filter(Q(genere=id) | Q(
                mood=id) | Q(name=id) | Q(album=id) | Q(language=id)).order_by('-release_date')
        serial = SongsSerializer(model, many=True)
        return Response(serial.data)


class AddNewHistory(APIView):
    def post(self, request):
        serializer = HistorySerializer(data=request.data)
        if serializer.is_valid():
            if not History.objects.filter(user=request.data["user"], song_id=request.data["song_id"]).exists():
                serializer.save()
                s = Songs.objects.get(id=request.data["song_id"])
                s.views = str(int(s.views)+1)
                s.save(update_fields=['views'])
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MoodGenre(APIView):
    def get(self, request, user_id):
        model = Songs.objects.filter(Q(genere=user_id) | Q(
            mood=user_id)).order_by('-release_date')
        serial = SongsSerializer(model, many=True)
        return Response(serial.data)


class SimilarSong(APIView):
    def get(self, request, id, artist, genre, mood, lang, album):
        model = Songs.objects.filter(~Q(id=id), Q(artist=artist) | Q(album=album) | Q(
            genere=genre) | Q(mood=mood) | Q(language=lang)).order_by('-release_date')[:5]
        serial = SongsSerializer(model, many=True)
        return Response(serial.data)
