from rest_framework import serializers
from songs.models import *


class SongsSerializer(serializers.ModelSerializer):
    artist_name = serializers.ReadOnlyField(source='artist.name')
    artist_image = serializers.ReadOnlyField(source='artist.image')

    class Meta:
        model = Songs
        fields = '__all__'


class ArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = '__all__'


class HistorySerializer(serializers.ModelSerializer):
    song_id_poster = serializers.ReadOnlyField(source='song_id.poster')
    song_id_name = serializers.ReadOnlyField(source='song_id.name')

    class Meta:
        model = History
        fields = '__all__'
