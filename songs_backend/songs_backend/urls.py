"""songs_backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from songs.api import *

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^api/songs_list/new_release/$',
        NewSongsList.as_view(), name="songs_list"),
    url(r'^api/songs_list/popular_songs/$',
        PopularSongsList.as_view(), name="popular_songs_list"),
    url(r'^api/songs_list/energy_booster/$',
        EnergyBoosterList.as_view(), name="energy_booster_list"),
    url(r'^api/songs_list/mood_genre/(?P<user_id>.+)/$',
        MoodGenre.as_view(), name="mood_genre_list"),
    url(r'^api/songs_list/recommended/(?P<user>.+)/$',
        Recommended.as_view(), name="recommended_list"),
    url(r'^api/artist/(?P<artist_name>.+)/$',
        SearchArtists.as_view(), name="artists_list"),
    url(r'^api/all_artist/$',
        AllArtists.as_view(), name="all_artists_list"),
    url(r'^api/history_list/(?P<user_id>.+)/$',
        HistoryList.as_view(), name="history_list"),
    url(r'^api/all_history_list/(?P<user_id>.+)/$',
        AllHistoryList.as_view(), name="all_history_list"),
    url(r'^api/history_list/$',
        AddNewHistory.as_view(), name="add_new_list"),
    url(r'^api/specific_song/(?P<id>.+)/$',
        SpecificSong.as_view(), name="specific_song"),
    url(r'^api/specific_artist/(?P<id>.+)/$',
        SpecificArtist.as_view(), name="specific_artist"),
    url(r'^api/search_similar_song/(?P<id>.+)/$',
        SearchSimilarSong.as_view(), name="search_similar_song"),
    url(r'^api/artist_songs/(?P<name>.+)/$',
        ArtistSongs.as_view(), name="artist_songs"),
    url(r'^api/similar_song/(?P<id>.+)/(?P<artist>.+)/(?P<genre>.+)/(?P<mood>.+)/(?P<lang>.+)/(?P<album>.+)/$',
        SimilarSong.as_view(), name="similar_song"),
]
