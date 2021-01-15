from djongo import models

# Create your models here.


class Artist(models.Model):
    id = models.CharField(primary_key=True, max_length=255)
    name = models.CharField(max_length=255, default='')
    image = models.CharField(max_length=255, default='')

    def __str__(self):
        return self.name


class Songs(models.Model):
    id = models.CharField(primary_key=True, max_length=255)
    name = models.CharField(max_length=255, default='')
    artist = models.ForeignKey(
        'Artist', related_name='art', on_delete=models.CASCADE)
    album = models.CharField(max_length=255, default='')
    views = models.CharField(max_length=20, default='0')
    language = models.CharField(max_length=255, default='')
    genere = models.CharField(max_length=255, default='')
    mood = models.CharField(max_length=255, default='')
    lyrics = models.TextField(default="hi\nbro")
    video = models.CharField(max_length=255, default='')
    audio = models.CharField(max_length=255, default='')
    poster = models.CharField(max_length=255, default='')
    release_date = models.CharField(max_length=255, default='')

    def __str__(self):
        return self.id


class History(models.Model):
    user = models.CharField(max_length=255, default='')
    song_id = models.ForeignKey(
        'Songs', default="1",  null=True, blank=True, related_name='song_id', on_delete=models.CASCADE)
    date_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "User:{} || SongID:{}".format(self.user, self.song_id)
