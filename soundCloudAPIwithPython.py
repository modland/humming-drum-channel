import soundcloud
client = soundcloud.Client(client_id="34ca2329e4473ba408ce97d5a24f1ddf")
tracks = client.get('/tracks',order='hotness',limit=10)
for track in tracks:
    print track.title
    

# OUT: E.T. (Katy Perry Cover)
# OUT: LinkinPark - Numb (Bleznick Mashup) PREVIEW available 17-04-2013
# OUT: Set3
# OUT: Dj Yunior - No Mames Wey
# OUT: Live it up
# OUT: Lady Gaga Black Jesus † Amen Fashion Solo snippet
# OUT: I feel you (Depeche Mode Live Cover Version-Guitarra Pavel Cortes)
# OUT: Loud Love (Good Old War Cover)
# OUT: ORDERED BY CORRUPTION BY IRIEDRIFTER (APRIL 16 2013)
# OUT: Ñengo Flow - Yo Camino En La Noche.[Chicki Remix]Vrs.Rkt
app = client.get('/apps/124')
print app.permalink_url
# OUT: http://soundcloud.com/apps/iphone
# Authentication
# client is already defined
track_b = client.get('/tracks/30709985')
print track_b.title
# OUT: Four Tet - Moma
track_b = client.get('/tracks/30709986')
# OUT: Traceback (most recent call last):
# OUT:   File "<input>", line 1, in <module>
# OUT:   File "build/bdist.macosx-10.8-intel/egg/soundcloud/client.py", line 130, in _request
# OUT:     return wrapped_resource(make_request(method, url, kwargs))
# OUT:   File "build/bdist.macosx-10.8-intel/egg/soundcloud/request.py", line 190, in make_request
# OUT:     result.raise_for_status()
# OUT:   File "/Library/Python/2.7/site-packages/requests-1.2.0-py2.7.egg/requests/models.py", line 670, in raise_for_status
# OUT:     raise HTTPError(http_error_msg, response=self)
# OUT: HTTPError: 404 Client Error: Not Found
track_b = client.get('/tracks/30709984')
print track_b.title
# OUT: Dream of Reality
# the client id is all you need to read public resources
# to access private resources or to modify a resource more is needed
# The Authorization Code FLow
client = soundcloud.Client(
    client_id = "34ca2329e4473ba408ce97d5a24f1ddf",
    client_secret = "24e745dfb110dfa2e3e2a202e38a0192",
    redirect_uri = "http://sandbox.com/callback"
)
redirect(client.authorize_url())
# OUT: Traceback (most recent call last):
# OUT:   File "<input>", line 1, in <module>
# OUT: NameError: name 'redirect' is not defined
redirect(client.authorize_url())
# OUT: Traceback (most recent call last):
# OUT:   File "<input>", line 1, in <module>
# OUT: NameError: name 'redirect' is not defined
client = soundcloud.Client(
    client_id = "34ca2329e4473ba408ce97d5a24f1ddf",
    client_secret = "24e745dfb110dfa2e3e2a202e38a0192",
    redirect_uri = "http://sandbox.com/callback"
    )
redirect(client.authorize_url())
# OUT: Traceback (most recent call last):
# OUT:   File "<input>", line 1, in <module>
# OUT: NameError: name 'redirect' is not defined
redirect(client.authorize_uri())
# OUT: Traceback (most recent call last):
# OUT:   File "<input>", line 1, in <module>
# OUT: NameError: name 'redirect' is not defined
redirect client.authorize_uri()
# OUT:   File "<input>", line 1
# OUT:     redirect client.authorize_uri()
# OUT:                   ^
# OUT: SyntaxError: invalid syntax
redirect client.authorize_url()
# OUT:   File "<input>", line 1
# OUT:     redirect client.authorize_url()
# OUT:                   ^
# OUT: SyntaxError: invalid syntax
