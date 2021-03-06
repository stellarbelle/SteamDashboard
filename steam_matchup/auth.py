from urllib import parse

from pyramid.config import Configurator
from pyramid.httpexceptions import HTTPTemporaryRedirect
from pyramid_openid import verify_openid


def includeme(config: Configurator):
    config.add_route('auth: openid', '/')
    config.add_view(route_name='auth: openid', view=on_begin_auth)


def on_begin_auth(context, request):
    redirect_url = request.GET.get('redirect_url')
    if redirect_url:
        request.session['redirect_url'] = redirect_url

    response = verify_openid(context, request)
    return response


def on_success(context, request, openid_data):
    identity_url = openid_data['identity_url']
    url_parts = parse.urlparse(identity_url)
    profile_id = url_parts.path.split('/')[-1]

    response = HTTPTemporaryRedirect('/')
    response.set_cookie(
        'profile_id', profile_id,
    )

    return response
